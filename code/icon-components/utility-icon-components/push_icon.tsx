
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function push_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m44 2h-24c-2.2 0-4 1.8-4 4v0.1c0 0.7 0.4 1.4 1 1.8 0.3 0.2 4.1 4 4.1 4 0.3 0.3 0.8 0 0.8-0.4 0-0.8 0.7-1.6 1.5-1.6h17c0.8 0 1.6 0.8 1.6 1.6v27c0 0.8-0.8 1.4-1.6 1.4h-17c-0.8 0-1.4-0.6-1.4-1.4v-0.1c0-0.4-0.5-0.6-0.8-0.3 0 0-3.8 3.8-4.2 4-0.6 0.4-1 1-1 1.8v2c0 2.2 1.7 4 3.9 4h24c2.2 0 4.1-1.8 4.1-4v-39.9c0-2.2-1.8-4-4-4z m-12 46c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z m-4.4-24.1l-12.5-12.5c-0.6-0.6-1.5-0.6-2.1 0l-2.1 2.1c-0.6 0.6-0.6 1.5 0 2.1l4.6 4.6c0.6 0.6 0.2 1.7-0.7 1.7h-13.3c-0.8 0.1-1.5 0.8-1.5 1.6v3c0 0.8 0.7 1.5 1.5 1.5h13.2c0.9 0 1.3 1.1 0.7 1.7l-4.6 4.6c-0.6 0.6-0.6 1.5 0 2.1l2.1 2.1c0.6 0.6 1.5 0.6 2.1 0l12.6-12.5c0.5-0.5 0.5-1.5 0-2.1z"/>
	</g>
</svg>
  );
};

addPropertyControls(push_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  