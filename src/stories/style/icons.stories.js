import React from 'react';

import { storiesOf } from '@storybook/react';
import Icon from '@material-ui/core/Icon'
import AddCircleIcon from '@material-ui/icons/AddCircle';

storiesOf('Style|Icons', module)
  .add('Material SVG Icon', () =>
     <AddCircleIcon /> 
   )
  .add('Material Font Icon', () => <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
    <Icon >add_circle</Icon>
  </> );
