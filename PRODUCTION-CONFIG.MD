#### Change the mode in the config

`mode: "production"`

#### Script for production in package.json

`"start": "webpack"`

#### Loaders

A command loader is bubble.js

install the following:

```
npm install -D babel-loader @babel/core @babel/preset-env
```

#### Config loader

```module: {
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

#### Use TypeScript
