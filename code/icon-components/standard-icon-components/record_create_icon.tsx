
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function record_create_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m68.4 27.1c0.1 0 0.1 0 0 0" fill={props.fill}/>
	<g fill={props.fill}>
		<path d="m39 32h22c1.1 0 2-0.9 2-2v-4c0-3.3-2.7-6-6-6h-14c-3.3 0-6 2.7-6 6v4c0 1.1 0.9 2 2 2z m33-7h-2c-0.6 0-1 0.4-1 1v4c0 4.4-3.6 8-8 8h-22c-4.4 0-8-3.6-8-8v-4c0-0.6-0.4-1-1-1h-2c-3.3 0-6 2.7-6 6v43c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6v-43c0-3.3-2.7-6-6-6z m-7.3 35.2c0 0.5-0.5 1-1 1h-11c-0.4 0-0.7 0.3-0.7 0.7v11c0 0.5-0.5 1-1 1h-2c-0.5 0-1-0.5-1-1v-11c0-0.4-0.3-0.7-0.7-0.7h-11c-0.5 0-1-0.5-1-1v-2c0-0.5 0.5-1 1-1h11c0.4 0 0.7-0.3 0.7-0.7v-11c0-0.5 0.5-1 1-1h2c0.5 0 1 0.5 1 1v11c0 0.4 0.3 0.7 0.7 0.7h11c0.5 0 1 0.5 1 1v2z"/>
	</g>
</svg>
  );
};

addPropertyControls(record_create_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  