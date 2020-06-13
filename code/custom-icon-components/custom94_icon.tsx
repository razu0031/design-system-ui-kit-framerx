
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom94_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m56 38v-15c0-1.7-1.3-3-3-3h-4c-1.7 0-3 1.3-3 3s1.3 3 3 3h1v12c0 6.6-5.4 12-12 12s-12-5.4-12-12v-12h1c1.7 0 3-1.3 3-3s-1.3-3-3-3h-4c-1.7 0-3 1.3-3 3v15c0 9.9 8.1 18 18 18s18-8.1 18-18z m24 12c0-5-4-9-9-9s-9 4-9 9c0 3.9 2.5 7.2 6 8.5v2.2c0 7.3-6 13.3-13.3 13.3h-0.3c-6.3 0-11.6-4.5-13-10.4-0.2-0.9-1-1.6-2-1.6h-2c-1.3 0-2.2 1.2-2 2.4 1.7 8.9 9.6 15.6 18.9 15.6h0.3c10.7 0 19.4-8.7 19.4-19.3v-2.2c3.5-1.3 6-4.6 6-8.5z m-9 3c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
	</g>
</svg>
  );
};

addPropertyControls(custom94_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  