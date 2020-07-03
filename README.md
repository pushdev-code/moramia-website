# Moramia - website

1. Clone the repository.
2. You will find the `package.json`. You can run `npm i` to install the dependencies.

We have the following dependencies:

### Dependencies

* ncp: Used to copy and paste folders in our project. (Available with static website)
* express & ejs. Serve dynamic website.
* envdot: enviroment variables.
* mongoose: database.


### DevDependencies

* webpack, webpack-cli: Use webpack.
* @babel/core, @babel/preset-env, babel-loader: The old browsers can understand ourcode.
* css-loader, sass-loader, style-loader, mini-css-extract-plugin: Bundle the css files.
* file-loader: Bundle external files (imgs...).
* html-loader, html-webpack-plugin: Bundle the html files. (Available with static website)
* node-sass: Export from scss to css.
* browser-refresh: Watching fiiles for changes.

## Authentication

1. Download the JSON file with the credentials.
2. Provide authentication setting the `GOOGLE_APPLICATION_CREDENTIALS` with the JSON file:

* **Windows**: `set GOOGLE_APPLICATION_CREDENTIALS=[PATH]`
* **MacOS and Linux**: `export GOOGLE_APPLICATION_CREDENTIALS="[PATH]"`.

*Replace [PATH] with the file path of the JSON file that contains your service account key.*
* [Setting Up Authentication GAP](https://cloud.google.com/docs/authentication/production#linux-or-macos)

## Scripts

* Running `npm run serve` will build our project. 

## PR

If you have tasks to complete, please follow these steps:

1. Create your own branch `git checkout -b feature/ticket-title`.
2. Complete your task.
3. Run `npm start` open `http://localhost:8080` and test your component's task. Test it with multiple browsers.
4. Create the PR.

## Verify ticket

Once your PR is approved and merged, make sure your changes are available at https://moramia-pushdev.uc.r.appspot.com/

### Sources

* [App Engine deploy with GitHub actions](https://baskus.wordpress.com/2019/09/29/how-to-deploy-to-app-engine-using-github-actions/).
* [GCloud GitHub Actions](https://moramia-pushdev.uc.r.appspot.com/).
