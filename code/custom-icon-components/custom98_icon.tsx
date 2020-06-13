
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom98_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m81.4 46.4l-7.8-7.8c-0.4-0.4-0.9-0.6-1.4-0.6h-8.2c-1.1 0-2 0.9-2 2v16c0 0.7 0.7 1.2 1.4 0.9 1.4-0.6 3-0.9 4.6-0.9 4.5 0 8.4 2.5 10.5 6.2 0.3 0.5 1 0.7 1.5 0.3 1.2-1.1 2-2.7 2-4.5v-10.2c0-0.5-0.2-1-0.6-1.4z"/>
		<path d="m54 29h-34c-1.1 0-2 0.9-2 2v27c0 1.8 0.8 3.4 2 4.5 0.5 0.4 1.2 0.3 1.5-0.3 2-3.7 6-6.2 10.5-6.2 5 0 9.2 3 11.1 7.4 0.2 0.4 0.5 0.6 0.9 0.6h6c3.3 0 6-2.7 6-6v-27c0-1.1-0.9-2-2-2z"/>
		<circle cx="68" cy="68" r="6"/>
		<circle cx="32" cy="68" r="6"/>
	</g>
</svg>
  );
};

addPropertyControls(custom98_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  