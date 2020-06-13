
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function sort_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50.9 37.7c0.7-0.7 0.7-1.9 0-2.6l-14.3-14.4c-0.7-0.7-1.9-0.7-2.6 0l-14.3 14.4c-0.7 0.7-0.7 1.9 0 2.6l2.6 2.6c0.7 0.7 1.9 0.7 2.6 0l4.5-4.5c0.7-0.7 2.1-0.2 2.1 0.9v26.4c0 1 0.9 1.9 1.9 1.9h3.7c1 0 1.9-1 1.9-1.9v-26.4c0-1.1 1.4-1.6 2.1-0.9l4.5 4.5c0.7 0.7 1.9 0.7 2.6 0l2.7-2.6z m27.4 24.9l-2.6-2.5c-0.7-0.7-1.9-0.7-2.6 0l-4.5 4.5c-0.7 0.7-2.1 0.2-2.1-0.9v-26.6c0-1-0.9-1.9-1.9-1.9h-3.7c-1 0-1.9 1-1.9 1.9v26.4c0 1.1-1.4 1.6-2.1 0.9l-4.5-4.5c-0.7-0.7-1.9-0.7-2.6 0l-2.6 2.7c-0.7 0.7-0.7 1.9 0 2.6l14.3 14.3c0.7 0.7 1.9 0.7 2.6 0l14.3-14.3c0.7-0.7 0.7-2-0.1-2.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(sort_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  