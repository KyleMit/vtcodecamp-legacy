This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Creation

```bash
npx create-react-app
npm install @material-ui/core
npm install @material-ui/icons
npm install @mdi/js
```

## Libraries

* Component Library
  * [Material-UI](https://github.com/mui-org/material-ui)
  * [React-Markdown](https://github.com/rexxars/react-markdown)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Resources

* [How do I load a markdown file into a react component?](https://stackoverflow.com/a/51003410/1366033)
* [Material Icons](https://material.io/tools/icons/?style=baseline)
* [Props are Read-Only](https://reactjs.org/docs/components-and-props.html#props-are-read-only)
* [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
* [Add state and lifecycle methods to Function Components with React Hooks](https://itnext.io/add-state-and-lifecycle-methods-to-function-components-with-react-hooks-8e2bdc44d43d)
* [Including external .md files](https://github.com/rexxars/react-markdown/issues/76#issuecomment-303042418)
* [Reference image in a markdown file](https://github.com/facebook/create-react-app/issues/595#issuecomment-322766448)
* [React - How to export a pure stateless component](https://stackoverflow.com/a/44710987/1366033)
* [Typography Markdown support?](https://github.com/mui-org/material-ui/issues/12290#issuecomment-453930042)
* [Markdown Blog example](https://github.com/mui-org/material-ui/blob/v3.9.2/docs/src/pages/getting-started/page-layout-examples/blog/Markdown.js)
* [React Markdown Renderers](https://github.com/rexxars/react-markdown/issues/82#issuecomment-316110533)
* [Pass props to a component rendered by React Router](https://tylermcginnis.com/react-router-pass-props-to-components/)
* [React tips — Validating Props with `PropTypes.oneOf`](https://medium.com/@leonardobrunolima/react-tips-validating-props-with-proptypes-24c64d58f4c0)
* [Adding Images, Fonts, and Files](https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files)
* [Can't import image from src](https://github.com/facebook/create-react-app/issues/585)
* [Add support for public/ folder](https://github.com/facebook/create-react-app/pull/703)
* [Using the public folder](https://facebook.github.io/create-react-app/docs/using-the-public-folder)
* [Icons - SVG instead of Fonts](https://github.blog/2016-02-22-delivering-octicons-with-svg/)
* [Removing Jank](http://jankfree.org/)
* [VS - React Extension Pack](https://marketplace.visualstudio.com/items?itemName=jawandarajbir.react-vscode-extension-pack)

### Mui Components

* [CSS Baseline](https://material-ui.com/style/css-baseline/)

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

## Todo

* [ ] Add yellow / blue custom theme colors
* [x] Separate out routes
* [x] Add fixed footer
  * [ ] Switcher footer to dark
* [x] Add full width navbar
* [x] Add all documents - render paths based on name
* [x] Style generated markdown with Material UI themes
* [ ] Animated route transitions
* [ ] Scroll to top after navigation
* [x] deploy to gh-pages
* [ ] add helmet tags
* [ ] add sessions / speakers from past years