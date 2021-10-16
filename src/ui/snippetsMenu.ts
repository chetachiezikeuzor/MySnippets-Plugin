import type MySnippets from "src/plugin/main";
import {
  App,
  Menu,
  MenuItem,
  ToggleComponent,
  ButtonComponent,
  Notice,
} from "obsidian";
import { MySnippetsSettings } from "src/settings/settingsData";

export default function snippetsMenu(
  app: App,
  plugin: MySnippets,
  settings: MySnippetsSettings
) {
  const statusBarRect =
    plugin.statusBarIcon.parentElement.getBoundingClientRect();
  const statusBarIconRect = plugin.statusBarIcon.getBoundingClientRect();

  const menuExists = document.querySelector(".menu.MySnippets-statusbar-menu");

  if (!menuExists) {
    const thisApp = app as any;
    const menu = new Menu(app).addItem((item) => {
      item.setTitle("Snippets");

      const itemDom = (item as any).dom as HTMLElement;
      itemDom.setAttribute("style", "display: none;");
    });

    const menuDom = (menu as any).dom as HTMLElement;
    menuDom.addClass("MySnippets-statusbar-menu");

    if (settings.aestheticStyle) {
      menuDom.setAttribute(
        "style",
        "background-color: transparent; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);"
      );
    }
    const vaultPath = thisApp.vault.adapter.getBasePath();
    const customCss = thisApp.customCss;
    const currentSnippets = customCss.snippets;
    const snippetsFolder = customCss.getSnippetsFolder();
    currentSnippets.forEach((snippet: string) => {
      const snippetPath = customCss.getSnippetPath(snippet);
      const snippetElement = new MenuItem(menu);
      snippetElement.setTitle(snippet);

      const snippetElementDom = (snippetElement as any).dom as HTMLElement;
      const toggleComponent = new ToggleComponent(snippetElementDom);
      const buttonComponent = new ButtonComponent(snippetElementDom);

      function changeSnippetStatus() {
        const isEnabled = customCss.enabledSnippets.has(snippet);
        customCss.setCssEnabledStatus(snippet, !isEnabled);
      }

      toggleComponent
        .setValue(customCss.enabledSnippets.has(snippet))
        .onChange(changeSnippetStatus);

      buttonComponent
        .setIcon("ms-snippet")
        .setClass("MS-OpenSnippet")
        .setTooltip(`Open snippet`)

        .onClick((e: any) => {
          thisApp.openWithDefaultApp(snippetPath);
        });

      snippetElement.onClick((e: any) => {
        e.preventDefault();
        e.stopImmediatePropagation();
      });
    });

    const buttonItem = menuDom.createDiv({ cls: "menu-item buttonitem" });
    const reloadButton = new ButtonComponent(buttonItem);
    const folderButton = new ButtonComponent(buttonItem);
    reloadButton
      .setIcon("ms-reload")
      .setClass("MySnippetsButton")
      .setClass("MS-Reload")
      .setTooltip("Reload snippets")
      .onClick((e: any) => {
        customCss.readCssFolders();
        new Notice("Snippets reloaded");
      });
    folderButton
      .setIcon("ms-folder")
      .setClass("MySnippetsButton")
      .setClass("MS-Folder")
      .setTooltip("Open snippets folder")
      .onClick((e: any) => {
        window.open(`file://${vaultPath}/${snippetsFolder}`);
      });

    menu.showAtPosition({
      x: statusBarIconRect.right + 5,
      y: statusBarRect.top - 5,
    });
  }
}
