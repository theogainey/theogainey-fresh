---
{
  "title": "Deno xbar",
  "preview": "How I made it easy to write xbar plugins in TypeScript",
  "uri": "deno-xbar",
  "date": "May 20, 2022",
  "dateTime": "2022-05-20"
}
---

# Deno Xbar

If you have not heard of [xbar](https://xbarapp.com/) yet, it is a great tool for creating menu bar plugins for macOS. One of the great things about xbar is that even though it was written in Go, it is possible to write plugins in other languages. Until recently if you wanted to write a plugin in JavaScript or TypeScript you would have to use Node.js. However, because of the way xbar works, Node.js can be a bit difficult to use. Now that [Deno](https://deno.land/) is available as an alternative, you can now avoid many of the pain points that come with using Node.js.

## Problems With Node.js and xbar 

The first problem with using Node.js with xbar is that xbar wants to treat all files it's plugin directory as plugins. If an app that uses Node.js requires the use of any dependency it will end up needing a {%codeInline%}{%codeCommentInline%}node_modules{%/codeCommentInline%}{%/codeInline%} directory. Although this is not an impossible issue to solve it can be difficult to work around. Additionally, if you are writing an app using TypeScript you will need to compile your code to JavaScript before running it. Again this is not an impossible issue to solve, but it requires additional steps to get your code running.


## Using Deno with xbar

When using Deno instead of Node with xbar you can avoid the previously mentioned issues. The first reason for this is that Deno ships as a single executable. This means that often you will not need any external dependencies. If you do need to use any external dependencies instead of using a package manager like npm, in Deno you can use a URL to import the dependency. This means that you can avoid the need for a {%codeInline%}{%codeCommentInline%}node_modules{%/codeCommentInline%}{%/codeInline%} directory. Finally, Deno treats TypeScript as a first class language. This means that you can write your code in TypeScript and Deno will compile it for you. This eliminates the need for extra build steps to get your code running.


## Taking It Further

To future simplify the process of writing xbar plugins in Deno, I created a simple framework for writing xbar plugins with JavaScript or TypeScript. The framework can be found on Deno's official module registry [here](https://deno.land/x/xbar@v2.1.0). The goal of this framework was to allow for declarative creation of layouts in xbar plugins. This means that instead of worrying about the implementation details of how to create a menu bar plugin, you can focus on the content of your plugin. Additionally, the framework adds some additional functionality designed to make plugins more accessible.

## Using The Framework

This framework can be used with both JavaScript and TypeScript. To get started with this framework you need to do two things. First you need to add a shebang to the top line of your plugin. What the shebang does, is it tells xbar how to run the plugin.   Next you need to import the framework into your plugin. This can be done by adding the following line to the top of your plugin:

```ts
{% codeWrapper %}{%codeComment%}#!/usr/bin/env -S -P/${HOME}/.deno/bin:/opt/homebrew/bin deno run {%/codeComment%}
{%codeKeyword%}import{%/codeKeyword%}{%codePunctuationYellow%} {{%/codePunctuationYellow%} xbar{%codePunctuation%},{%/codePunctuation%} separator {%codePunctuationYellow%}}{%/codePunctuationYellow%} {%codeKeyword%}from{%/codeKeyword%} {%codeString%}"https://deno.land/x/xbar@LATEST_VERSION/mod.ts"{%/codeString%}{%codePunctuation%};{%/codePunctuation%}{% /codeWrapper %}
```

Remember Deno is secure by default, so you will need to add the [permissions](https://deno.land/manual@v1.27.1/getting_started/permissions) you need to the shebang. For example, if you need to use the {%codeInline%}{%codeCommentInline%}--allow-net{%/codeCommentInline%}{%/codeInline%} flag you would add it to the shebang like this:

```
{%codeWrapper%}{%codeComment%}#!/usr/bin/env -S -P/${HOME}/.deno/bin:/opt/homebrew/bin deno run --allow-net{%/codeComment%}{%/codeWrapper%}
```

Once you have added the shebang and imported the framework you can start writing your plugin. First you need to write whatever code you need to get the data you want to display in your plugin. Next you can make use of the framework to create your plugin.The framework exports a function ({%codeInline%}xbar{%/codeInline%}) and a constant ({%codeInline%}separator{%/codeInline%}). The {%codeInline%}xbar{%/codeInline%} function is used to create the menu bar plugin. The {%codeInline%}separator{%/codeInline%} constant is used to create a separator in the menu bar. The {%codeInline%}xbar{%/codeInline%} function takes a single argument, which is an array of menu items. A menu item can be either a string or an object. If the menu item is a string, it will be displayed as a menu item in the menu bar. If the menu item is an object, you can add additional functionality to the menu item. 

The following is an example of a plugin that uses the framework:

```ts
{% codeWrapper %}{%codeComment%}#!/usr/bin/env -S -P/${HOME}/.deno/bin:/opt/homebrew/bin deno run --allow-net{%/codeComment%}
{%codeKeyword%}import{%/codeKeyword%}{%codePunctuationYellow%} {{%/codePunctuationYellow%} xbar{%codePunctuation%},{%/codePunctuation%} separator {%codePunctuationYellow%}}{%/codePunctuationYellow%} {%codeKeyword%}from{%/codeKeyword%} {%codeString%}"https://deno.land/x/xbar@LATEST_VERSION/mod.ts"{%/codeString%}{%codePunctuation%};{%/codePunctuation%}
{%codeKeywordBlue%}const{%/codeKeywordBlue%} {%codePunctuationBlue%}jsonResponse{%/codePunctuationBlue%} {%codePunctuation%}={%/codePunctuation%} {%codeKeyword%}await{%/codeKeyword%} {%codeFunction%}fetch{%/codeFunction%}{%codePunctuationYellow%}({%/codePunctuationYellow%}
  {%codeString%}'https://programming-quotes-api.herokuapp.com/quotes/random'{%/codeString%}{%codePunctuation%},{%/codePunctuation%}
{%codePunctuationYellow%}){%/codePunctuationYellow%}{%codePunctuation%};{%/codePunctuation%}
{%codeKeywordBlue%}const{%/codeKeywordBlue%} {%codePunctuationBlue%}jsonData{%/codePunctuationBlue%} {%codePunctuation%}={%/codePunctuation%} {%codeKeyword%}await{%/codeKeyword%} jsonResponse.{%codeFunction%}json{%/codeFunction%}{%codePunctuationYellow%}(){%/codePunctuationYellow%}{%codePunctuation%};{%/codePunctuation%}

{%codeFunction%}xbar{%/codeFunction%}{%codePunctuationYellow%}({%/codePunctuationYellow%}{%codePunctuationPurple%}[{%/codePunctuationPurple%}
  {%codePunctuationBlue%}{{%/codePunctuationBlue%}
    text{%codePunctuation%}:{%/codePunctuation%} {%codeString%}'Programming Quotes'{%/codeString%}{%codePunctuation%},{%/codePunctuation%}
  {%codePunctuationBlue%}}{%/codePunctuationBlue%}{%codePunctuation%},{%/codePunctuation%}
  separator{%codePunctuation%},{%/codePunctuation%}
  {%codePunctuationBlue%}{{%/codePunctuationBlue%}
    text{%codePunctuation%}:{%/codePunctuation%} jsonData{%codePunctuation%}.{%/codePunctuation%}author{%codePunctuation%};{%/codePunctuation%}
    submenu{%codePunctuation%}:{%/codePunctuation%} {%codePunctuationYellow%}[{%/codePunctuationYellow%}
      {%codePunctuationPurple%}{{%/codePunctuationPurple%}
        text{%codePunctuation%}:{%/codePunctuation%} jsonData{%codePunctuation%}.{%/codePunctuation%}en{%codePunctuation%},{%/codePunctuation%}
        size{%codePunctuation%}:{%/codePunctuation%} {%codeNumber%}16{%/codeNumber%}{%codePunctuation%},{%/codePunctuation%}
        color{%codePunctuation%}:{%/codePunctuation%} {%codeString%}'navy'{%/codeString%}{%codePunctuation%},{%/codePunctuation%}
      {%codePunctuationPurple%}}{%/codePunctuationPurple%}{%codePunctuation%},{%/codePunctuation%}
    {%codePunctuationYellow%}]{%/codePunctuationYellow%}{%codePunctuation%},{%/codePunctuation%}
  {%codePunctuationBlue%}}{%/codePunctuationBlue%}{%codePunctuation%},{%/codePunctuation%}
{%codePunctuationPurple%}]{%/codePunctuationPurple%}{%codePunctuationYellow%}){%/codePunctuationYellow%}{%codePunctuation%};{%/codePunctuation%}
{%/codeWrapper%}
```

Finally, to add your plugin to xbar you need to add it to the xbar plugin directory. The default location for this directory is {%codeInline%}{%codeCommentInline%}~/Library/Application Support/xbar/plugins{%/codeCommentInline%}{%/codeInline%}. Once you have added your plugin to the directory, you need to make sure that the plugin is executable. You can do this by running the following command in the terminal:

```
{%codeWrapper%}{%codeComment%}chmod +x ~/Library/Application\ Support/xbar/plugins/your-plugin-name.1m.ts{%/codeComment%}{%/codeWrapper%}
```

Now you can open xbar and it will automatically detect your plugin.

## Accessibility

In addition to supporting the creation of declarative layouts, this framework also adds some additional functionality to make plugins more accessible. Specifically, this framework add support for wrapping text to a specific line length. This is important for accessibility because studies have shown that once a line of text reaches a certain length, it becomes more difficult to read. Additionally, this framework adds support for detecting if a user has enabled dark mode. This is important for accessibility because it allows you to create plugins that have color schemes that have sufficient contrast for both light and dark mode.

The following is an example of a plugin that uses the framework accessibility features:

```ts
{%codeWrapper%}{%codeComment%}#!/usr/bin/env -S -P/${HOME}/.deno/bin:/opt/homebrew/bin deno run --allow-net --allow-env{%/codeComment%}
{%codeKeyword%}import{%/codeKeyword%} {%codePunctuationYellow%}{{%/codePunctuationYellow%}
  isDarkMode{%codePunctuation%},{%/codePunctuation%}
  separator{%codePunctuation%},{%/codePunctuation%}
  xbar{%codePunctuation%},{%/codePunctuation%}
{%codePunctuationYellow%}}{%/codePunctuationYellow%} {%codeKeyword%}from{%/codeKeyword%} {%codeString%}'https://deno.land/x/xbar@v2.0.0/mod.ts'{%/codeString%}{%codePunctuation%};{%/codePunctuation%}

{%codeKeywordBlue%}const{%/codeKeywordBlue%} {%codePunctuationBlue%}jsonResponse{%/codePunctuationBlue%} {%codePunctuation%}={%/codePunctuation%} {%codeKeyword%}await{%/codeKeyword%} {%codeFunction%}fetch{%/codeFunction%}{%codePunctuationYellow%}({%/codePunctuationYellow%}
  {%codeString%}'https://programming-quotes-api.herokuapp.com/quotes/random'{%/codeString%}{%codePunctuation%},{%/codePunctuation%}
{%codePunctuationYellow%}){%/codePunctuationYellow%}{%codePunctuation%};{%/codePunctuation%}
{%codeKeywordBlue%}const{%/codeKeywordBlue%} {%codePunctuationBlue%}jsonData{%/codePunctuationBlue%}{%codePunctuation%} = {%/codePunctuation%}{%codeKeyword%}await{%/codeKeyword%} jsonResponse{%codePunctuation%}.{%/codePunctuation%}{%codeFunction%}json{%/codeFunction%}{%codePunctuationYellow%}(){%/codePunctuationYellow%}{%codePunctuation%};{%/codePunctuation%}
{%codeKeywordBlue%}const{%/codeKeywordBlue%} {%codePunctuationBlue%}darkMode{%/codePunctuationBlue%} {%codePunctuation%}={%/codePunctuation%} {%codeKeyword%}await{%/codeKeyword%} {%codeFunction%}isDarkMode{%/codeFunction%}{%codePunctuationYellow%}(){%/codePunctuationYellow%}{%codePunctuation%};{%/codePunctuation%}

{%codeFunction%}xbar{%/codeFunction%}{%codePunctuationYellow%}({%/codePunctuationYellow%}{%codePunctuationPurple%}[{%/codePunctuationPurple%}
  {%codePunctuationBlue%}{{%/codePunctuationBlue%}
    text{%codePunctuation%}:{%/codePunctuation%} {%codeString%}'Programming Quotes'{%/codeString%}{%codePunctuation%},{%/codePunctuation%}
  {%codePunctuationBlue%}}{%/codePunctuationBlue%}{%codePunctuation%},{%/codePunctuation%}
  separator{%codePunctuation%},{%/codePunctuation%}
  {%codePunctuationBlue%}{{%/codePunctuationBlue%}
    text{%codePunctuation%}:{%/codePunctuation%} jsonData{%codePunctuation%}.{%/codePunctuation%}author{%codePunctuation%},{%/codePunctuation%}
    submenu{%codePunctuation%}:{%/codePunctuation%} {%codePunctuationYellow%}[{%/codePunctuationYellow%}
      {%codePunctuationPurple%}{{%/codePunctuationPurple%}
        text{%codePunctuation%}:{%/codePunctuation%} jsonData{%codePunctuation%}.{%/codePunctuation%}en{%codePunctuation%},{%/codePunctuation%}
        wordWrap{%codePunctuation%}:{%/codePunctuation%} {%codeNumber%}40{%/codeNumber%}{%codePunctuation%},{%/codePunctuation%}
        size{%codePunctuation%}:{%/codePunctuation%} {%codeNumber%}16{%/codeNumber%}{%codePunctuation%},{%/codePunctuation%}
        color{%codePunctuation%}:{%/codePunctuation%} darkMode {%codePunctuation%}?{%/codePunctuation%} {%codeString%}'#818cf8'{%/codeString%} {%codePunctuation%}:{%/codePunctuation%} {%codeString%}'navy'{%/codeString%}{%codePunctuation%},{%/codePunctuation%}
      {%codePunctuationPurple%}}{%/codePunctuationPurple%}{%codePunctuation%},{%/codePunctuation%}
    {%codePunctuationYellow%}]{%/codePunctuationYellow%}{%codePunctuation%},{%/codePunctuation%}
  {%codePunctuationBlue%}}{%/codePunctuationBlue%}{%codePunctuation%},{%/codePunctuation%}
{%codePunctuationPurple%}]{%/codePunctuationPurple%}{%codePunctuationYellow%}){%/codePunctuationYellow%}{%codePunctuation%};{%/codePunctuation%}
{%/codeWrapper%}
```

## Takeaways

Creating this framework was a very enjoyable experience. I am a huge fan of TypeScript and I was initially very disappointed when I saw how difficult it was to get a TypeScript project running in xbar. Seeing a problem and then being able to solve it in a way that makes it easier for others to solve the same problem is very rewarding. I am also very happy that I was able to add some additional functionality to make plugins more accessible. I hope that this framework will make it easier for others to create plugins for xbar. If you have any questions or comments about this framework, or discover a bug feel free to open an issue on [GitHub](https://github.com/theogainey/deno-xbar). Also, if you have any suggestions for how to improve this framework, PRs are always welcome.
