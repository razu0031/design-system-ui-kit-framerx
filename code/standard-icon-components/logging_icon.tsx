
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function logging_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m77.2 56.2h-3.7c-1 0-1.8 1-1.8 1.8v12.3c0 1-0.9 1.8-1.8 1.8h-40.6c-1 0-1.8-0.9-1.8-1.8v-12.3c0-0.9-0.9-1.8-1.8-1.8h-3.7c-1 0-1.8 1-1.8 1.8v16.6c0 2.7 2.2 4.9 4.9 4.9h49.1c2.7 0 4.9-2.2 4.9-4.9v-16.6c-0.1-0.9-0.9-1.8-1.9-1.8z m-26.4-35.2c-0.7-0.7-1.8-0.7-2.6 0l-16.6 16.6c-0.7 0.7-0.7 1.8 0 2.6l2.6 2.6c0.7 0.7 1.8 0.7 2.6 0l6.9-6.9c0.7-0.7 2.2-0.2 2.2 0.9v26c0 1 0.7 1.8 1.7 1.8h3.7c1 0 2-1 2-1.8v-25.9c0-1.1 1.2-1.6 2.1-0.9l6.9 6.9c0.7 0.7 1.8 0.7 2.6 0l2.6-2.6c0.7-0.7 0.7-1.8 0-2.6-0.2 0-16.7-16.7-16.7-16.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(logging_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  