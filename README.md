# MySnippets Plugin

![MySnippets-Plugin Downloads](https://img.shields.io/github/downloads/chetachiezikeuzor/MySnippets-Plugin/total.svg)
![MySnippets-Plugin Releases](https://img.shields.io/github/v/release/chetachiezikeuzor/MySnippets-Plugin)

<img alt="mysnippets-header" src="https://user-images.githubusercontent.com/79069364/144681107-0ff0aada-b8a7-4e0e-8e2d-945b0386ee2d.png">

### Status: This plugin is currently available in the Obsidian plugin store

Remember that one time, where you were trying to test out a few cool and new snippets? Oh, but you had to constantly, go back and forth between workspace and settings tab just to toggle them on and off. Been there, done that… but wait! What if you could… I dunno… have your snippets right there in front of you? What if you could toggle your snippets on and off from the comfort of your workspace? That'd be super cool, right? I know! Well, you've come to the right place!

MySnippets is a plugin that adds a status bar menu allowing the user to quickly manage their snippets within the comfort of their workspace 🖌. This plugin makes managing snippets a breeze with a beautiful mini menu that shows up with a click of a button!

## Demo

<img src="https://user-images.githubusercontent.com/79069364/144683712-42da2acf-97f5-4987-9e9d-65b49560b9ec.gif" alt="pick-a-snippet" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

<img src="https://user-images.githubusercontent.com/79069364/144683686-b8cfd625-e864-489d-8d0b-2fc36b7bd260.gif" alt="open-menu-in-statusbar" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

## Ease of Use

We all love hacking away at Obsidian with a bunch of different snippets, but I'm willing to bet that most of us don't like having to trigger and re-trigger the settings tab just to get to our snippets. With MySnippets, we can finally access our snippets and toggle them on and off easily! Think of it as a condensed and tucked away version of the "CSS Snippets" section in the settings tab. I don't know about you, but when I want to edit my snippets, I don't want to have to rummage through the settings tab just to get to them! It can be distracting, a time waster, and just overall annoying! So let's end the era of `Settings > Appearance > CSS Snippets` and welcome the new era of <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="0" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"><path d="M5.764 8l-.295-.73a1 1 0 0 1 .553-1.302l9.272-3.746a1 1 0 0 1 1.301.552l5.62 13.908a1 1 0 0 1-.553 1.302L12.39 21.73a1 1 0 0 1-1.302-.553L11 20.96V21H7a1 1 0 0 1-1-1v-.27l-3.35-1.353a1 1 0 0 1-.552-1.302L5.764 8zM8 19h2.209L8 13.533V19zm-2-6.244l-1.673 4.141L6 17.608v-4.852zm1.698-5.309l4.87 12.054l7.418-2.997l-4.87-12.053l-7.418 2.996zm2.978 2.033a1 1 0 1 1-.749-1.855a1 1 0 0 1 .75 1.855z" fill="currentColor"/></svg> ← _Click_!

<img src="https://raw.githubusercontent.com/chetachiezikeuzor/MySnippets-Plugin/master/assets/configureSnippets.png" width="280px">

## How it Works

MySnippets appends a cute little status bar icon in your workspace. All you need to do is click and see all of your lovely snippets in a menu! Here, you will see two buttons to the bottom of the menu. The first is your "Reload" button and the second is your "Folder" button. Triggering "Reload" button will allow the plugin to reread your snippets folder, in case you have decided to create a new snippet or delete a snippet. Triggering the "Folder" button will open the folder that houses your snippets. These buttons mimic the functions in the settings tab.

<img src="https://user-images.githubusercontent.com/79069364/144683689-e125c321-8757-4afd-956a-4227b55363bf.gif" alt="open-snippet-folder" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

Each snippet item has a toggle and a button. You can use the toggle to turn your snippet off/on.

<img src="https://user-images.githubusercontent.com/79069364/144683712-42da2acf-97f5-4987-9e9d-65b49560b9ec.gif" alt="pick-a-snippet" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

You can also use the button to open your snippet with your default application for CSS files.

<img src="https://user-images.githubusercontent.com/79069364/144683696-b8c29740-94e4-48b0-b865-b2f9f6fffd61.gif" alt="open-snippet" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

On Mac, you can change your default application by right-clicking on any CSS file, then click "Get info." Then, Go to the "Open with" section and choose the application you'd like to use. Use the "Change All..." button to set this application as your default application to open CSS files.

<img src="https://raw.githubusercontent.com/chetachiezikeuzor/MySnippets-Plugin/master/assets/defaultApp.png" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

With MySnippets, you can change the design aesthetic. You can choose to have a "glass" style for MySnippets within the settings tab, which gives it a unique and futuristic look!

<img src="https://user-images.githubusercontent.com/79069364/144682628-d38979c2-c0d1-4709-8ecb-d9ab72c2cb77.png" alt="glass-menu" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

<img src="https://user-images.githubusercontent.com/79069364/144682602-d31beed0-ed0e-4194-a71f-faa6a05dc945.png" alt="default-menu" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

### Create New CSS Snippets

Version [1.1.0](https://github.com/chetachiezikeuzor/MySnippets-Plugin/releases/tag/1.1.0) now adds the functionality to create new CSS snippets using a modal. All you have to do is provide the name of the file and the file contents. You can also set a template for your new snippets within the settings tab. There are settings added that allow you to decide whether or not you want your new snippets to open automatically after creating them, and whether you want your snippets to be automatically toggled on after creating them.

<img alt="create-css-snippet" src="https://user-images.githubusercontent.com/79069364/144666473-1d1b40d1-9336-48b8-9de6-d2ddca651f1b.gif" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

## Installation

This plugin is now available in the community plugin store. You can install it from there and enable it. For a manual installation, you can download the necessary files and place them within your plugins folder.

---

## Changelog

### [1.1.0](https://github.com/chetachiezikeuzor/MySnippets-Plugin/releases/tag/1.1.0) - Dec 4, 2021

##### Added

- Create new CSS snippets function
  <img alt="create-css-snippet" src="https://user-images.githubusercontent.com/79069364/144666473-1d1b40d1-9336-48b8-9de6-d2ddca651f1b.gif" style="box-shadow: 0 2px 8px 0 var(--background-modifier-border); border-radius: 8px;">

##### Fixed

- MySnippets menu positioning is now dependent on window coordinates (solves issue with hidden status bar).

---

## Checklist

- [x] Command to open snippets menu
- [x] Create new CSS snippets function

---

## Support

If you like this plugin and are considering donating to support continued development, use the button below!

Created with ❤️ by Chetachi

<a href="https://www.buymeacoffee.com/chetachi"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&amp;emoji=&amp;slug=chetachi&amp;button_colour=e3e7ef&amp;font_colour=262626&amp;font_family=Poppins&amp;outline_colour=262626&amp;coffee_colour=ff0000"></a>

<a href="https://paypal.me/chelseaezikeuzor">
<img src="https://raw.githubusercontent.com/chetachiezikeuzor/MySnippets-Plugin/master/assets/paypal.svg" height="70"></a>
<br/>
<a href="https://ko-fi.com/chetachi">
<img src="https://raw.githubusercontent.com/chetachiezikeuzor/MySnippets-Plugin/master/assets/kofi_color.svg" height="50"></a>
