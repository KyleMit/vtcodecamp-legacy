# VT Code Camp

[![Netlify Status](https://api.netlify.com/api/v1/badges/cc0bd8d8-26c8-47d7-bb64-ad0f218c0c99/deploy-status)](https://app.netlify.com/sites/vtcode-react/deploys)


#### https://vtcodecamp.netlify.com/



## Framworks, Libraries & Tools

* [**Create React App**](https://facebook.github.io/create-react-app/docs/getting-started) - bootstrapped project with community defaults & setup dev environment
* [**React**](https://reactjs.org/) - web component library
* [Material-UI](https://github.com/mui-org/material-ui) component library
* [Material UI Icons](https://material.io/tools/icons/?style=baseline) default icons
* [@mdi Icons](https://materialdesignicons.com/) for community expansions
* [React-Markdown](https://github.com/rexxars/react-markdown) - converts markdown to react to html
* [React-helmet](https://github.com/nfl/react-helmet) - emebeds `<title>` and `<meta>` tags into `<head>` element

## Getting Started

You need to have [**node** and **npm**](https://nodejs.org/en/) installed

```bash
# initialize first time
npm init
# run app locally
npm start
```

## Available Scripts

Available scripts can be found in the `scripts` section in `package.json`.  The following scripts are execute [react-scripts](https://www.npmjs.com/package/react-scripts) and run a local development server with features such as hot re-load or build deployments minified deployments optimized for production.

```bash
# Runs the app in the development mode on local app server
npm run start

# launches the test runner
npm run test


# Builds the app for production to the `build` folder
npm run build
```

## Todo

* [ ] Add yellow / blue custom theme colors
* [x] Separate out routes
* [x] Add fixed footer
  * [ ] Switcher footer to dark
* [x] Add full width navbar
* [x] Add all documents - render paths based on name
* [x] Style generated markdown with Material UI themes
* [x] Scroll to top after navigation
  * [ ] Animated route transitions
* [x] deploy to gh-pages
* [x] add helmet tags
* [ ] add sessions / speakers from past years
* [ ] render markdown on build w/o fetch (might have to eject)

## Resources

Here are some of the helpful resources used, at some point, in the development and deployment of this project, broken up by topic.

### React

#### Docs

* [Props are Read-Only](https://reactjs.org/docs/components-and-props.html#props-are-read-only)
* [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

#### Articles and Help

* [How do I load a markdown file into a react component?](https://stackoverflow.com/a/51003410/1366033)
* [Add state and lifecycle methods to Function Components with React Hooks](https://itnext.io/add-state-and-lifecycle-methods-to-function-components-with-react-hooks-8e2bdc44d43d)
* [Including external .md files](https://github.com/rexxars/react-markdown/issues/76#issuecomment-303042418)
* [Reference image in a markdown file](https://github.com/facebook/create-react-app/issues/595#issuecomment-322766448)
* [React - How to export a pure stateless component](https://stackoverflow.com/a/44710987/1366033)
* [Pass props to a component rendered by React Router](https://tylermcginnis.com/react-router-pass-props-to-components/)
* [React tips — Validating Props with `PropTypes.oneOf`](https://medium.com/@leonardobrunolima/react-tips-validating-props-with-proptypes-24c64d58f4c0)
* [Adding Images, Fonts, and Files](https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files)
* [Can't import image from src](https://github.com/facebook/create-react-app/issues/585)
* [Add support for public/ folder](https://github.com/facebook/create-react-app/pull/703)
* [Using the public folder](https://facebook.github.io/create-react-app/docs/using-the-public-folder)
* [Icons - SVG instead of Fonts](https://github.blog/2016-02-22-delivering-octicons-with-svg/)

### React Router

* [Scroll Restoration](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md)
* [react-router scroll to top on every transition](https://stackoverflow.com/q/36904185/1366033)

### React MUI

#### Docs

* [Material Icons](https://material.io/tools/icons/?style=baseline)
* [CSS Baseline](https://material-ui.com/style/css-baseline/)

#### Articles and Help

* [Typography Markdown support?](https://github.com/mui-org/material-ui/issues/12290#issuecomment-453930042)
* [Markdown Blog example](https://github.com/mui-org/material-ui/blob/v3.9.2/docs/src/pages/getting-started/page-layout-examples/blog/Markdown.js)
* [React Markdown Renderers](https://github.com/rexxars/react-markdown/issues/82#issuecomment-316110533)


### Visual Studio 

* [VS - React Extension Pack](https://marketplace.visualstudio.com/items?itemName=jawandarajbir.react-vscode-extension-pack)


### Material Design Icons Extensions

* [Github - mdi](https://github.com/Templarian/MaterialDesign)
* [Github - mdi react](https://github.com/Templarian/MaterialDesign-React)

### Pre-Rendering

[Pre-Rendering into Static HTML Files](https://facebook.github.io/create-react-app/docs/pre-rendering-into-static-html-files)
[An almost static site](https://medium.com/superhighfives/an-almost-static-stack-6df0a2791319)
[Pre-rendering with React-snap](https://itnext.io/pre-rendering-your-react-application-with-react-snap-234e2408ed39)

### Deploying

* [Deploy to gh-pages](https://facebook.github.io/create-react-app/docs/deployment#github-pages-https-pagesgithubcom)
* [Pre- Post- script hooks](https://medium.com/yld-engineering-blog/using-npm-pre-and-post-hooks-d89dcf2d86cf)
* [fatal: A branch named 'gh-pages' already exists](https://github.com/transitive-bullshit/react-modern-library-boilerplate/issues/15#issuecomment-372165120)
* [Homepage of "." fails in latest version](https://github.com/geelen/react-snapshot/issues/31)

### Meta Tags

* [https://metatags.io/]
