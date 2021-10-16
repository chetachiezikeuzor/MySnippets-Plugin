export const SNIPPET_VIEW_SIDE = ["right", "left"];

export interface MySnippetsSettings {
  aestheticStyle: boolean;
  snippetViewPosition: string;
}

export const DEFAULT_SETTINGS: MySnippetsSettings = {
  aestheticStyle: false,
  snippetViewPosition: "left",
};
