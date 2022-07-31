# Deno Xbar

One of the things I love most about being a developer is that I have the ability to build the tools I wished existed. Recently, I was building an app for xbar using TypeScript. While doing so I ran into a few problems that I knew I could prevent in the future if I had the right tools. After discovering that the tools I wanted did not exist, I decided to build the tools myself.

## Problems I Wanted To Solve 

While writing my xbar app in TypeScript I came across a few problems that I wanted to solve. First, Node is not the best runtime for xbar. The reason for this is that xbar wants to treat all files in your plugin folder as plugins. This ends up making your app difficult to organize if it requires a lot of dependencies like Node does. Additionally when using TypeScript, you must first transpile your code to JavaScript. This extra step adds more complexity to how you need to organize your code. In a perfect world a runtime where TypeScript "just works" would be a much better option. Second, formatting output for an xbar app requires the use of long and often complex strings. Finally, out of the box there is not a good way to handle long text output that guarantees readability.

After considering these problems I settled on these goals for this project
- Find an alternative to Node
- Simplify how output is formatted
- Provide a better option for handling long text output

## An Alternative to Node 

Until recently, the only reliable way to run JavaScript outside the browser has been to use Node. Now, other options exist including a promising new JavaScript runtime called Deno. Although Deno is still in it early days, it has a several features that make it a much better runtime for xbar apps. First Deno ships as a single executable and supports many Web APIs, such as fetch. This means your app will need fewer dependencies. Second, the external dependencies that you do use are imported via URLs. This is great for xbar apps because now you can distribute your app as a single file. Finally, with Deno TypeScript "just works", meaning you can run TypeScript having to transpile your code to JavaScript. For these reasons I decided that Deno is a much better choice of runtime when writing xbar apps in TypeScript.

## Let's Simplify Output Formatting   

Next I wanted to simplify how output is formatted in xbar. In xbar, formatting output requires that the text and all the desired output options to be combined into a single. Additionally, submenus and separators are declared through an arbitrary pattern of hyphens. To fix these problems I decided to build a module that will abstract away these complex implementation details. 

## Long text

Another problem I wanted to solve was that I wanted to improve how xbar  handles long text output. Out of the box xbar only gives you two options on how to handle long text. With both options long text output is truncated and a "…" is added to show that there is text that is not shown.  This is a problem because it limits the readability of the text. To fix this I added an option to the module I built that, when enabled, will word wrap text. With this option enabled you can now limit the length of each line of text and guarantee that no words will be left out or broken up. 

## End Result 


[![](https://opengraph.githubassets.com/01c7c19e987b269368ae5177000fefcfc96a94b160d41ba2f687dc984b7c7034/theogainey/deno-xbar)](https://github.com/theogainey/deno-xbar)