
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function tracker_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m15.2 28.4v-4.4c5.1-0.9 9-5.4 9-10.8 0-6.1-4.9-11-11-11s-11 4.9-11 11c0 5.4 3.9 9.9 9 10.8v4.4c-5.1 0.9-9 5.4-9 10.8 0 6.1 4.9 11 11 11s11-4.9 11-11c0-5.4-3.9-9.8-9-10.8z m-9-15.2c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3-7-7z m24.1-4h17.9c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2h-17.9c-1.1 0-2-0.9-2-2v-4c0-1.1 0.9-2 2-2z m0 26h17.9c1.1 0 2 0.9 2 2v4c0 1.1-0.9 2-2 2h-17.9c-1.1 0-2-0.9-2-2v-4c0-1 0.9-2 2-2z"/>
	</g>
</svg>
  );
};

addPropertyControls(tracker_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
