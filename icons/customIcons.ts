import { addIcon } from "obsidian";

export const icons: Record<string, string> = {
  "art-brush": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2H7c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2h11c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM7 7V4h11l.002 3H7z" fill="currentColor"/><path d="M13 15v-2c0-1.103-.897-2-2-2H4V5c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h7v2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z" fill="currentColor"/></svg>`,
  "reload-glyph": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="0" stroke-linecap="round" stroke-linejoin="round"><g fill="none"><path d="M13.937 4.211a1 1 0 0 1-1.126 1.653A5 5 0 1 0 15 10a1 1 0 1 1 2 0a7 7 0 1 1-3.063-5.789z" fill="white"/><path d="M13.539 12.506a1 1 0 1 1-1.078-1.685l3.482-2.227a1 1 0 0 1 1.077 1.685l-3.481 2.227z" fill="white"/><path d="M18.903 12.41a1 1 0 0 1-1.826.815l-1.508-3.38a1 1 0 1 1 1.826-.815l1.508 3.38z" fill="white"/></g></svg>`,
};

export function addIcons() {
  Object.keys(icons).forEach((key) => {
    addIcon(key, icons[key]);
  });
}
