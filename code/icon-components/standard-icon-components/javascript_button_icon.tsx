
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function javascript_button_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m63 36h10.6c0.8 0 1.4-0.6 1.4-1.4 0-0.4-0.1-0.7-0.4-1l-13.2-13.2c-0.3-0.3-0.6-0.4-1-0.4-0.8 0-1.4 0.6-1.4 1.4v10.6c0 2.2 1.8 4 4 4z m10 6h-14c-3.3 0-6-2.7-6-6v-14c0-1.1-0.9-2-2-2h-20c-3.3 0-6 2.7-6 6v48c0 3.3 2.7 6 6 6h38c3.3 0 6-2.7 6-6v-30c0-1.1-0.9-2-2-2z m-35.2 24.3c0 2.9-1.4 3.9-3.6 3.9l-1.7-0.2 0.3-1.8 1.2 0.2c1 0 1.6-0.4 1.6-2v-6.5h2.2v6.4z m4.3 3.7c-1 0-2-0.2-2.9-0.6l0.6-1.8c0.8 0.4 1.6 0.6 2.5 0.6 1 0 1.6-0.4 1.6-1.1s-0.5-1-1.7-1.4c-1.2-0.4-2.8-1.5-2.8-3s1.4-3 3.8-3c0.9 0 1.8 0.1 2.6 0.5l-0.5 1.8c-0.7-0.3-1.4-0.5-2.1-0.5-1 0-1.5 0.5-1.5 1s0.6 0.9 1.9 1.4 2.6 1.6 2.6 3-1.3 3.1-4.1 3.1z"/>
	</g>
</svg>
  );
};

addPropertyControls(javascript_button_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
