
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom103_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m76.1 54.9c-1.6-0.8-4-2.7-7.5-3.4 0.9-1 1.6-2.6 2.3-4.5 0.3-1.1 0.4-2.2 0.3-3.3 0-1 0.2-2.6 0-3.5-0.8-2.9-2.8-3.7-5.1-3.7-2.3 0-4.3 0.8-5.1 3.7-0.2 0.9 0 2.5 0 3.5-0.1 1.1 0 2.3 0.3 3.3 0.7 2 1.4 3.6 2.3 4.6-1.7 0.3-3.3 1-4.8 1.9 1.7 0.7 3.4 1.6 5 2.6 0.8 0.4 1.5 0.8 2.1 1.1 2.7 1.3 4.2 2.7 5.1 3.9h8.5v-2.9s0-1.7-3.4-3.3v0z m-42 2.3c0.6-0.3 1.3-0.7 2.1-1.2 1.6-1 3.3-1.8 5.1-2.6-1.6-0.9-3.2-1.5-5-1.9 0.9-1 1.6-2.6 2.3-4.5 0.4-1.1 0.5-2.2 0.4-3.3 0-1 0.1-2.6-0.1-3.5-0.8-2.9-2.8-3.7-5.1-3.7-2.3 0-4.3 0.8-5 3.7-0.3 0.9-0.1 2.5-0.1 3.4-0.1 1.2 0 2.3 0.3 3.4 0.7 1.9 1.4 3.5 2.3 4.5-3.5 0.7-5.8 2.6-7.5 3.4-3.3 1.6-3.3 3.3-3.3 3.3v2.9h8.6c1.3-1.7 3-3.1 5-3.9z m30.9 1.9c-2.4-1.1-6-4-11.3-5 1.3-1.5 2.4-3.9 3.4-6.8 0.7-1.6 0.5-3 0.5-5 0-1.5 0.3-3.8-0.1-5.1-1.1-4.4-4.1-5.6-7.6-5.6-3.4 0-6.4 1.2-7.6 5.6-0.3 1.3 0 3.7 0 5.1 0 2-0.1 3.5 0.5 5.1 1 2.8 2 5.2 3.4 6.8-5.3 1-8.8 3.9-11.2 5-5 2.3-5 4.9-5 4.9v4.3h40v-4.3s0-2.6-5-4.9v-0.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom103_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  