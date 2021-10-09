interface Applications {
  name: string;
  code: string;
  arguments: string;
}

export interface MySnippetsSettings {
  aestheticStyle: boolean;
  applications: Applications[];
}

export const DEFAULT_SETTINGS: MySnippetsSettings = {
  aestheticStyle: false,
  applications: [
    {
      name: "Sublime",
      code: "Sublime Text",
      arguments: "",
    },
  ],
};
