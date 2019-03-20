import React from 'react';

import { storiesOf } from '@storybook/react';
import Button from '@material-ui/core/Button'




storiesOf('Components|Button', module)
  .add('contained', () => 
    <Button variant="contained" color="primary">
      Sign Up On Meetup
    </Button>,
    { notes: 'A very simple component' }
  )
  .add('outlined', () => (
    <Button variant="outlined" color="primary">
     Sign Up On Meetup
    </Button>
  ))
  .add('text', () => (
    <Button variant="text" color="primary">
     Sign Up On Meetup
    </Button>
  ));
