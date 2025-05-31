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
`
"scripts": {
    "build": "webpack"
},
`
