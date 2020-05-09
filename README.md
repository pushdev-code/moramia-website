# Moramia - website

1. Clone the repository.
2. You will find the `package.json`. You can run `npm i` to install the dependencies.

We have the following dependencies:

### Dependencies
* ncp: Used to copy and paste folders in our project.

### DevDependencies
* webpack, webpack-cli: Use webpack.
* @babel/core, @babel/preset-env, babel-loader: The old browsers can understand ourcode.
* css-loader, sass-loader, style-loader, mini-css-extract-plugin: Bundle the css files.
* file-loader: Bundle external files (imgs...).
* html-loader, html-webpack-plugin: Bundle the js files.
* node-sass: Export from scss to css.

## Scripts

* Running `npm run build` we will build our project. It will bundle html, js and css files from `src` folder to the `dist` folder. Finally it will prepare the public folder for the deploy.

## PR

If you have tasks to complete, please follow these steps:

1. Create your own branch `git checkout -b feature/ticket-title`.
2. Complete your task.
3. Run `npm start` open `http://127.0.0.1:8080` and test your component's task.
4. Create the PR.
