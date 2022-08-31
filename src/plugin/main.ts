import { Plugin, setIcon } from "obsidian";
import { setAttributes } from "src/util/setAttributes";
import snippetsMenu from "src/ui/snippetsMenu";
import { addIcons } from "src/icons/customIcons";
import { MySnippetsSettingTab } from "src/settings/settingsTab";
import {
  MySnippetsSettings,
  DEFAULT_SETTINGS,
} from "src/settings/settingsData";
import CreateSnippetModal from "src/modal/createSnippetModal";
import { EnhancedApp } from "src/settings/type";

export default class MySnippetsPlugin extends Plugin {
  settings: MySnippetsSettings;
  statusBarIcon: HTMLElement;
  app: EnhancedApp;

  async onload() {
    console.log(`MySnippets v${this.manifest.version} loaded`);
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
    this.addCommand({
      id: `open-snippets-create`,
      name: `Create new CSS snippet`,
      icon: `ms-css-file`,
      callback: async () => {
        new CreateSnippetModal(this.app, this).open();
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
