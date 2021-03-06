
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function file_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m29 63v-32c-3.3 0-6 2.7-6 6v38c0 3.3 2.7 6 6 6h30c3.3 0 6-2.7 6-6h-24c-6.6 0-12 0-12-12z m46-26h-10c-3.3 0-6-2.7-6-6v-10c0-1.1-0.9-2-2-2h-16c-3.3 0-6 2.7-6 6v38c0 3.3 2.7 6 6 6h30c3.3 0 6-2.7 6-6v-24c0-1.1-0.9-2-2-2z m1.6-8.4l-9.2-9.2c-0.3-0.3-0.6-0.4-1-0.4-0.8 0-1.4 0.6-1.4 1.4v6.6c0 2.2 1.8 4 4 4h6.6c0.8 0 1.4-0.6 1.4-1.4 0-0.4-0.1-0.7-0.4-1z"/>
	</g>
</svg>
  );
};

addPropertyControls(file_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
