interface Applications {
  name: string;
  code: string;
  arguments: string;
}

export const SNIPPET_VIEW_SIDE = ["right", "left"];

export interface MySnippetsSettings {
  aestheticStyle: boolean;
  applications: Applications[];
  snippetViewPosition: string;
}

export const DEFAULT_SETTINGS: MySnippetsSettings = {
  aestheticStyle: false,
  applications: [],
  snippetViewPosition: "left",
};
