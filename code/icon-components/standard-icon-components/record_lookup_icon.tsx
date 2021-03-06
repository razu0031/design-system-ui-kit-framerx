
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function record_lookup_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m39 32h22c1.1 0 2-0.9 2-2v-4c0-3.3-2.7-6-6-6h-14c-3.3 0-6 2.7-6 6v4c0 1.1 0.9 2 2 2z m33-7h-2c-0.6 0-1 0.4-1 1v4c0 4.4-3.6 8-8 8h-22c-4.4 0-8-3.6-8-8v-4c0-0.6-0.4-1-1-1h-2c-3.3 0-6 2.7-6 6v43c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6v-43c0-3.3-2.7-6-6-6z m-7.7 47.6l-1.3 1.3c-0.3 0.3-0.9 0.3-1.3 0l-8.1-8.1c-2.3 1.6-5.2 2.5-8.4 2.1-5.2-0.7-9.4-5.1-9.9-10.3-0.7-7.2 5.4-13.4 12.6-12.6 5.3 0.5 9.6 4.6 10.3 9.9 0.4 3.1-0.4 6.1-2.1 8.4l8.1 8.1c0.5 0.2 0.5 0.8 0.1 1.2z m-17.4-24.1c-4.4 0-7.9 3.6-7.9 7.9 0 4.4 3.5 7.9 7.9 7.9s7.9-3.5 7.9-7.9-3.5-7.9-7.9-7.9z"/>
	</g>
</svg>
  );
};

addPropertyControls(record_lookup_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
