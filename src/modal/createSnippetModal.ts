import {
  Modal,
  Setting,
  TextComponent,
  ButtonComponent,
  TextAreaComponent,
  Notice,
} from "obsidian";
import type MySnippetsPlugin from "../plugin/main";
import { setAttributes } from "src/util/setAttributes";
import { EnhancedApp } from "src/settings/type";

export default class CreateSnippetModal extends Modal {
  path: string;
  plugin: MySnippetsPlugin;
  mySnippetsEl: HTMLDivElement;
  app: EnhancedApp;

  constructor(app: EnhancedApp, plugin: MySnippetsPlugin) {
    super(app);
    this.app = app;
    this.plugin = plugin;
    this.onOpen = () => this.display(true);
  }

  private async display(focus?: boolean) {
    const { contentEl } = this;
    const customCss = this.app.customCss;

    contentEl.empty();
    contentEl.setAttribute("style", "margin-top: 0px");

    const title = document.createElement("h1");
    title.setText("Create a CSS Snippet");
    contentEl.appendChild(title);

    const fileTitleSetting = new Setting(contentEl);
    const fileTitleValue = new TextComponent(fileTitleSetting.controlEl);
    fileTitleSetting
      .setName("CSS Snippet Title")
      .setDesc("Write the title for this CSS snippet file.");

    const cssStylesSetting = new Setting(contentEl);

    // avoiding having to reference this specific modal - add style in code
    cssStylesSetting.settingEl.setAttribute(
      "style",
      "display: grid; grid-template-columns: 1fr;"
    );
    const cssStylesValue = new TextAreaComponent(cssStylesSetting.controlEl);
    setAttributes(cssStylesValue.inputEl, {
      style: "margin-top: 12px; width: 100%;  height: 32vh;",
      class: "ms-css-editor",
    });
    cssStylesSetting
      .setName("CSS Snippet Styles")
      .setDesc("Add in styling for this CSS snippet file.");
    cssStylesValue.setValue(this.plugin.settings.stylingTemplate);

    const doAdd = async () => {
      let fileName = fileTitleValue.getValue();
      let fileContents = cssStylesValue.getValue();
      let snippetPath = customCss.getSnippetPath(fileName);
      if (fileName) {
        if (!customCss.snippets.includes(fileName)) {
          await app.vault.create(
            `${customCss.getSnippetsFolder()}/${fileName}.css`,
            fileContents
          );
          console.log(`%c"${fileName}.css" has been created!`, "color: Violet");
          if (this.plugin.settings.snippetEnabledStatus)
            customCss.setCssEnabledStatus(fileName, true);

          if (this.plugin.settings.openSnippetFile)
            this.app.openWithDefaultApp(snippetPath);

          customCss.requestLoadSnippets();
          this.close();
        } else new Notice(`"${fileName}.css" already exists.`);
      } else new Notice("Missing name for file");
    };
    const saveButton = new ButtonComponent(contentEl)
      .setButtonText("Create Snippet")
      .onClick(doAdd);
    saveButton.buttonEl.addClass("wg-button");
    fileTitleValue.inputEl.focus();
  }

  onClose(): void {
    const { contentEl } = this;
    contentEl.empty();
  }
}
