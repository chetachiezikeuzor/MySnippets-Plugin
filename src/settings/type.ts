import { App, Menu, MenuItem } from "obsidian";

export type EnhancedMenu = Menu & {
  dom: HTMLElement;
  items: EnhancedMenuItem[];
  setUseNativeMenu: Function;
};

export type EnhancedMenuItem = MenuItem & {
  dom: HTMLElement;
  titleEl: HTMLDivElement;
  handleEvent(event: Event): void;
  disabled: boolean;
};

export type EnhancedApp = App & {
  customCss: {
    snippets: string[];
    getSnippetsFolder: Function;
    getSnippetPath: Function;
    enabledSnippets: Function & { has: Function };
    setCssEnabledStatus: Function;
    requestLoadSnippets: Function;
    readCssFolders: Function;
  };
  openWithDefaultApp: Function;
};
