import {
  Menu,
  Plugin,
  setIcon,
  ToggleComponent,
  MenuItem,
  ButtonComponent,
} from "obsidian";

import { addIcons } from "icons/customIcons";

interface MyPluginSettings {
  mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
  mySetting: "default",
};

export default class MyPlugin extends Plugin {
  settings: MyPluginSettings;
  statusBarIcon: HTMLElement;

  async onload() {
    console.log("MySnippets v" + this.manifest.version + " loaded");
    addIcons();
    await this.loadSettings();
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
    this.statusBarIcon.setAttribute("aria-label", "Configure MySnippets");
    this.statusBarIcon.setAttribute("aria-label-position", "top");
    setIcon(this.statusBarIcon, "art-brush");

    this.registerDomEvent(this.statusBarIcon, "click", () => {
      const statusBarRect =
        this.statusBarIcon.parentElement.getBoundingClientRect();
      const statusBarIconRect = this.statusBarIcon.getBoundingClientRect();

      const menu = new Menu(this.app).addItem((item) => {
        item.setTitle("Reload Snippets");

        const itemDom = (item as any).dom as HTMLElement;
        itemDom.setAttribute("class", "hide-menu-item");
      });

      const menuDom = (menu as any).dom as HTMLElement;
      menuDom.addClass("MySnippets-statusbar-menu");

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
        .onClick(() => {
          customCss.requestReloadCss(currentSnippets);
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
