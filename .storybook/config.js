import { configure } from '@storybook/react';

// import all
// function loadStories() {
//   const req = require.context('../src/stories', true, /\.stories\.js$/);
//   req.keys().forEach(filename => req(filename));
// }

function loadStories() {
  require('../src/stories/welcome.stories.js')
  require('../src/stories/style/icons.stories.js')
  require('../src/stories/components/buttons.stories.js')
  
}

configure(loadStories, module);