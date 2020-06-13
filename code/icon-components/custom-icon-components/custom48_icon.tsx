
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom48_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m78 24h-10v-2c0-1.1-0.9-2-2-2h-32c-1.1 0-2 0.9-2 2v2h-10c-1.1 0-2 0.9-2 2v13c0 5 4 9 9 9h4.6c2.8 6.4 8.9 10.9 16.3 11 7.6 0.1 14-4.5 16.7-11h4.4c5 0 9-4 9-9v-13c0-1.1-0.9-2-2-2z m-49 18c-1.7 0-3-1.3-3-3v-9h6v10.6c0 0.5 0 0.9 0.1 1.4h-3.1z m45-3c0 1.7-1.3 3-3 3h-3.1c0-0.4 0.1-0.9 0.1-1.3v-10.7h6v9z m-14 35h-1c-3.3 0-6-2.7-6-6v-2c0-0.6-0.4-1-1-1h-4c-0.6 0-1 0.4-1 1v2c0 3.3-2.7 6-6 6h-1c-1.1 0-2 0.9-2 2v2c0 1.1 0.9 2 2 2h20c1.1 0 2-0.9 2-2v-2c0-1.1-0.9-2-2-2z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom48_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  