#### Create raw html and javascript file

play aound the order of javascript file in the html file.

#### Install webpack

npm init -y
npm install webpack webpack-cli --save-dev

#### Make some adjustment

- In the html file keep only index.js file
- in the index.js import helloWorld function & export the function helloWorld function

#### Now run webpack

npx webpack

Note: untill now, webpack 5 uses the default configuration to process the files.

#### To see how webpack budle the files use this command

npx webpack --stats detailed

#### Now let's create custom configuration

default configuration : webpack.config.js

```
const path = require('path')

module.exports = {
    // minimal configuration
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'none'
}
```

Remove the dist directory created before

Run the webpack : npx webpack

Now check the dist folder again and see the changes

In the HTML file change the JavaScript src to the dist folder
`<script src="./dist/bundle.js"></script>`

#### Now let's create the script inside the package.json

`"scripts": {
    "build": "webpack"
},`

#### Asset Modules

Asset directory contians all files our project utilize is like images, fonts and so on.

4 types of assest modules and how to configure them

- asset/resources ; for image and other files
- asset/inline ; for small files like svg
- asset ; for general files
- asset/srouce ; import the source code like javascript files

To include assest in the bundle, you need to add a rule for it in the webpack config file

```
module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource",
      },
      {
        test: /\.(ttf)/,
        type: "asset/resource",
      },
    ],
  },
```

#### Add source map to dist

devtool is used to add source map to dist
devtool is used only for none production envs like dev/test

`devtool: "inline-source-map",`

#### Set up webpack DEV Server

Things to consider

- It runs in watch mode
- Provides HTTP server which is good only for Frontend
- It simulates the actualy production env but use only http instead of https
- It will be only in Memory and does not produce build asset on disk

To install webpack dev server install below:

```
npm install webpack-dev-server -D
```

Then add devServer key in the config file

```
devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    compress: true,
    open: true,
  },
```

Then change the mode

```
mode: "development",
```

Finnaly, add script for it in package.json
remove:

```
"dev": "webpack --watch"
```

add:

```
"dev": "webpack serve"
```

Note: add manually the index.html file into dist directory

#### Adding multiple files

```
  entry: ["./src/index.js", "./src/main.js", "./src/app.js"],

```

# Add Images and other assets

install below packages/plugin
`npm i -D copy-webpack-plugin`

Ues the plugin

```
new CopyPlugin({
  patterns: [{ from: "./src/images", to: "images" }],
}),
```

## To handle raw files just create the rules

For example: create a txt file and use it in js file
To add it to the bundle create a rule:

```
{
  test: /\.txt$/,
  type: "asset/source",
},
```

## To add assets files used in JS files

Without using copy plugin we can create a rule liks this :

```
{
  test: /\.(png|jpeg|jpg|svg|gif)$/i,
  type: "asset/resource",
  generator: {
    filename: "images/[name][ext]",
  },
},
```

## Parsing HTML in build

install html-loader

```
npm install html-loader -D
```

We use html-loader rule

```
{
  test: /\.html$/,
  use: "html-loader",
},
```

And add hash to image name like this

```

```

## Inlining images

By inlining images, wepack doesn't create image folder in build instead it will inline the image.
Below is the rule.

```
{
  test: /\.(png|jpeg|jpg|svg|gif)$/i,
  type: "asset/inline",
},
```

Depeding on the scenario/performance/project you can use any of the above.

## Handling image inisde CSS file

For example background images. It works as the above rule.

# webpack cli

To get help

```
npx webpack help
```

To get the detail of a specific flag. For example about watch flag

```
npx webpack help --watch
```

Webpack version

```
npx webpack version
```

or

```
npx webpack -v
```

Webpack configuration test

```
npx webpack configtest
```

To create webpack configuration file

```
npx webpack init
```

To lunch web developer server

```
npx webpack serve
```

To run webpack in watch mode

```
npx webpack --watch
```
