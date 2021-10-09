import {
  Menu,
  Plugin,
  setIcon,
  ToggleComponent,
  MenuItem,
  ButtonComponent,
} from "obsidian";

import { addIcons } from "icons/customIcons";
import { MySnippetsSettingTab } from "settings/settingsTab";
import { MySnippetsSettings, DEFAULT_SETTINGS } from "settings/settingsData";

export default class MySnippets extends Plugin {
  settings: MySnippetsSettings;
  statusBarIcon: HTMLElement;

  async onload() {
    console.log("MySnippets v" + this.manifest.version + " loaded");
    addIcons();
    await this.loadSettings();
    this.addSettingTab(new MySnippetsSettingTab(this.app, this));
    this.app.workspace.onLayoutReady(() => {
      setTimeout(() => {
        this.setupStatusBar();
      });
    });
  }

  setupStatusBar() {
    this.statusBarIcon = this.addStatusBarItem();
    this.statusBarIcon.addClass("cMenu-statusbar-button");
    this.statusBarIcon.addClass("mod-clickable");
    this.statusBarIcon.setAttribute("aria-label", "Configure Snippets");
    this.statusBarIcon.setAttribute("aria-label-position", "top");
    setIcon(this.statusBarIcon, "pantone-line");

    this.registerDomEvent(this.statusBarIcon, "click", () => {
      const statusBarRect =
        this.statusBarIcon.parentElement.getBoundingClientRect();
      const statusBarIconRect = this.statusBarIcon.getBoundingClientRect();

      const menu = new Menu(this.app).addItem((item) => {
        item.setTitle("Reload Snippets");

        const itemDom = (item as any).dom as HTMLElement;
        itemDom.setAttribute("style", "display: none;");
      });

      const menuDom = (menu as any).dom as HTMLElement;
      menuDom.addClass("MySnippets-statusbar-menu");

      this.settings.aestheticStyle == true
        ? menuDom.setAttribute(
            "style",
            "background-color: transparent; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);"
          )
        : false;

      const customCss = (this.app as any).customCss;
      const currentSnippets = customCss.snippets;
      currentSnippets.forEach((snippet: string) => {
        const snippetElement = new MenuItem(menu);
        snippetElement.setTitle(snippet);

        const snippetElementDom = (snippetElement as any).dom as HTMLElement;
        const toggleComponent = new ToggleComponent(snippetElementDom);

        function changeSnippet() {
          customCss.enabledSnippets.has(snippet) == true
            ? customCss.setCssEnabledStatus(snippet, false)
            : customCss.setCssEnabledStatus(snippet, true);
        }

        toggleComponent
          .setValue(customCss.enabledSnippets.has(snippet))
          .onChange(changeSnippet);

        const toggle = async () => {};

        snippetElement.onClick((e: any) => {
          e.preventDefault();
          e.stopImmediatePropagation();
          toggle();
        });
      });

      const buttonItem = menuDom.createDiv({ cls: "menu-item buttonitem" });
      const addButton = new ButtonComponent(buttonItem);
      addButton
        .setIcon("reload-glyph")
        .setClass("MySnippetsReloadButton")
        .setTooltip("Reload Snippets")
        .onClick((e: any) => {
          customCss.readCssFolders();
        });

      menu.showAtPosition({
        x: statusBarIconRect.right + 5,
        y: statusBarRect.top - 5,
      });
    });
  }

  onunload() {
    console.log("MySnippets unloaded");
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
