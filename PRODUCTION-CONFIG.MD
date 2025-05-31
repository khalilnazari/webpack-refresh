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
