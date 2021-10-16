import { Plugin, setIcon } from "obsidian";
import { setAttributes } from "src/util/setAttributes";
import snippetsMenu from "src/ui/snippetsMenu";
import { addIcons } from "src/icons/customIcons";
import { MySnippetsSettingTab } from "src/settings/settingsTab";
import {
  MySnippetsSettings,
  DEFAULT_SETTINGS,
} from "src/settings/settingsData";

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
        this.setupSnippetsStatusBarIcon();
      });
    });
  }

  setupSnippetsStatusBarIcon() {
    this.statusBarIcon = this.addStatusBarItem();
    this.statusBarIcon.addClass("MiniSettings-statusbar-button");
    this.statusBarIcon.addClass("mod-clickable");

    setAttributes(this.statusBarIcon, {
      "aria-label": "Configure Snippets",
      "aria-label-position": "top",
    });
    setIcon(this.statusBarIcon, "pantone-line");

    this.statusBarIcon.addEventListener("click", () => {
      snippetsMenu(this.app, this, this.settings);
    });

    this.addCommand({
      id: `open-snippets-menu`,
      name: `Open snippets in status bar`,
      icon: `pantone-line`,
      callback: async () => {
        snippetsMenu(this.app, this, this.settings);
      },
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
