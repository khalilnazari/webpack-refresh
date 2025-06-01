### Change the mode in the config

`mode: "production"`

### Script for production in package.json

`"start": "webpack"`

### Loaders

A command loader is bubble.js

install the following:

```
npm install -D babel-loader @babel/core @babel/preset-env
```

### Config loader

```
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    },
  ]
}
```

### Use TypeScript

- Install the following packages

```
npm install -D typescript ts-loader
```

- Update the config
  Add rules to use ts-loader

```
module: {
  rules: [
    {
      test: /\.ts$/,
      exclude: /node_modules/,
      use: 'ts-loader',
    },
  ]
}
```

Enable webpack to automatically pick .ts files.

```
resolve: {
  extentions: [".ts", ".js"]
},
```

- Rename .js files to .ts ext

### Creating multiple bundles

- Update entry in config

```
entry: {
  index: "./src/index",
  main: "./src/main",
  app: "./src/app",
},
output: {
  filename: "[name].js",
}

```

- Update script files in index.html file
  `
  <script src="./app.js"></script>
  <script src="./main.js"></script>
  <script src="./index.js"></script>
  `

### What is plugins

Plugins help to create mutliple output

- it has side effect on the out put
- it can change the output further
- it kind of powerful loaders with some rules and restrictions

### How to use a plugin

- Load HTML files
  we need to intall html plug in:

```
npm install -D html-webpack-plugin
```

- Use the plugin in the config file
  first import

```
const HtmlWebpackPlugins = require('html-webpack-plugin')
```

then use the instance of it inside the plugins array

```
plugins: [new HtmlWebpackPlugin()],
```

- Remove the script file from the index.html file in root directory
  webpack automatically add the script in the header.

### Clean dist file

Everytime you build or make changes remove files from dist file and create new builds. Add the following in the output object in config.

```
output: {
  filename: "[name].js",
  path: path.resolve(__dirname, "dist"),
  // publicPath: "dist/",
  clean: true,
},
```

### Enable life reload

By default livereload is ON in webpack.
To refresh browswer when a file is change we add the watchFiles config

```
devServer: {
  static: {
    directory: path.join(__dirname, "dist"),
  },
  watchFiles: ["src/**/*", "index.html"],
  port: 3000,
  compress: true,
  open: false, // I don't want to open new table everytime I run ;)
},
```

Test if by changing the content of js or html file

### Loading CSS file

Install the loaders

```
npm install -D css-loader style-loader
```

Use loaders inside the config inside the rule

```
{
  test: /\.css$/,
  exclude: /node_modules/,
  use: ["style-loader", "css-loader"], // order is important
},
```

Create your CSS file and import is in the main javascript file.

### Loading SCSS

Install the necessary packages

```
npm -D sass-loader sass
```

Update rules in config

```
rules: [
  {
    test: /\.ts$/,
    exclude: /node_modules/,
    use: "ts-loader",
  },
  {
    test: /\.(css|scss)$/,
    exclude: /node_modules/,
    use: ["style-loader", "css-loader", "sass-loader"], // order is important
  },
  {
    test: /\.(png|jpg)$/,
    // type: "asset/resource",
    use: "ts-loader",
  },
  {
    test: /\.(ttf)/,
    // type: "asset/resource",
    use: "ts-loader",
  },
],
```

### Loading CSS in it's own file

The above method, webpack add CSS in the bundle.js file.
We may need to create the .css file instead.

Install the plugin:

```
npm install -D mini-css-extract-plugin
```

Include the plugin

```
plugins: [
  new HtmlWebpackPlugin({ template: "./index.html" }),
  new MiniCssExtractPlugin(),
],
```

Change the rule for css loader

```
{
  test: /\.(css|scss)$/,
  exclude: /node_modules/,
  use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // order is important
},
```

After you run the webpack, this will create a new file with same name in the dist folder.
Additionallty, it will add the css file in dist automatically in the html file.

If you want to give a different name for css file in dist folder use below:

```
plugins: [
  new MiniCssExtractPlugin({filename:"mini.css"}),
],
```

### Handle PostCSS and AutoPrefixer

AutoPrefixer: is a tool to add browser-specific prefixes when some edge/new CSS rules not compatible with that browser.
PostCSS: this is used by AutoPrefixer to handle CSS edge cases.

Install postcss packages

```
npm install -D postcss postcss-loader postcss-preset-env
```

Update css rule inside the config

```
{
  test: /\.css$/i,
  use: [
    "style-loader",
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            [
              "postcss-preset-env",
              {
                // Options
              },
            ],
          ],
        },
      },
    },
  ],
}
```

This doesn't work with SCSS files and it should be CSS files.

- Note: Another way to add postCSS plugin and rule is to create a new file `postcss.config.js` and add the following:

```
module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        // Options
      },
    ],
  ],
};
```

For more visit : https://webpack.js.org/loaders/postcss-loader/
