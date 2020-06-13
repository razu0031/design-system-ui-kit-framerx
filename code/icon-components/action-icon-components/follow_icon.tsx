
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function follow_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m50.5 38h-4.5v-4.5c0-0.8-0.7-1.5-1.5-1.5h-3c-0.8 0-1.5 0.7-1.5 1.5v4.5h-4.5c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h4.5v4.5c0 0.8 0.7 1.5 1.5 1.5h3c0.8 0 1.5-0.7 1.5-1.5v-4.5h4.5c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5z m-16.5-4h1c0.6 0 1-0.4 1-1v-1c0-2.2 1.8-4 4-4h4.5c0.8 0 1.5-0.7 1.5-1.5v-20.5c0-2.2-1.8-4-4-4h-36c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h22.5c0.9 0 1.6-0.7 1.5-1.6v-6.4c0-2.2 1.8-4 4-4z m-8-23c0-0.6 0.4-1 1-1h10c0.6 0 1 0.4 1 1v2c0 0.6-0.4 1-1 1h-10c-0.6 0-1-0.4-1-1v-2z m0 8c0-0.6 0.4-1 1-1h10c0.6 0 1 0.4 1 1v2c0 0.6-0.4 1-1 1h-10c-0.6 0-1-0.4-1-1v-2z m-16-8c0-0.6 0.4-1 1-1h10c0.6 0 1 0.4 1 1v10c0 0.6-0.4 1-1 1h-10c-0.6 0-1-0.4-1-1v-10z m16 26c0 0.6-0.4 1-1 1h-14c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h14c0.6 0 1 0.4 1 1v2z m-15-7c-0.6 0-1-0.4-1-1v-2c0-0.6 0.4-1 1-1h20c0.6 0 1 0.4 1 1v2c0 0.6-0.4 1-1 1h-20z"/>
	</g>
</svg>
  );
};

addPropertyControls(follow_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  