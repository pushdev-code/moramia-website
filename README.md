# Moramia - website

1. Clone the repository.
2. You will find the `package.json`. You can run `npm i` to install the dependencies.

We have the following dependencies:

### Dependencies

* ncp: Used to copy and paste folders in our project.
* express & ejs. Serve dynamic website.


### DevDependencies
* webpack, webpack-cli: Use webpack.
* @babel/core, @babel/preset-env, babel-loader: The old browsers can understand ourcode.
* css-loader, sass-loader, style-loader, mini-css-extract-plugin: Bundle the css files.
* file-loader: Bundle external files (imgs...).
* html-loader, html-webpack-plugin: Bundle the html files.
* node-sass: Export from scss to css.
* browser-refresh: Watching fiiles for changes.

## Scripts

* Running `npm run serve` will build our project. 

## PR

If you have tasks to complete, please follow these steps:

1. Create your own branch `git checkout -b feature/ticket-title`.
2. Complete your task.
3. Run `npm start` open `http://localhost:8080` and test your component's task. Test it with multiple browsers.
4. Create the PR.

## Verify ticket

Once your PR is approved and merged, make sure your changes are available at https://moramia-website.web.app/

### Sources

* [App Engine deploy with GitHub actions](https://baskus.wordpress.com/2019/09/29/how-to-deploy-to-app-engine-using-github-actions/).
