
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function hide_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m51.8 25.1c-1.6-3.2-3.7-6.1-6.3-8.4l-8.5 8.4v0.9c0 6.1-4.9 11-11 11h-0.9l-5.4 5.4c2 0.4 4.1 0.7 6.2 0.7 11.3 0 21.1-6.6 25.8-16.1 0.4-0.7 0.4-1.3 0.1-1.9z m-3.3-19.5l-2.1-2.1c-0.6-0.6-1.7-0.5-2.4 0.3l-7.3 7.3c-3.3-1.4-6.9-2.1-10.7-2.1-11.3 0-21.1 6.6-25.8 16.1-0.3 0.6-0.3 1.3 0 1.8 2.2 4.5 5.5 8.2 9.6 11l-6 6.1c-0.7 0.7-0.8 1.8-0.3 2.4l2.1 2.1c0.6 0.6 1.7 0.5 2.4-0.3l40.2-40.2c0.8-0.7 0.9-1.8 0.3-2.4z m-33.5 20.4c0-6.1 4.9-11 11-11 2 0 3.8 0.5 5.4 1.4l-3 3c-0.8-0.2-1.6-0.4-2.4-0.4-3.9 0-7 3.1-7 7 0 0.8 0.2 1.6 0.4 2.4l-3 3c-0.9-1.6-1.4-3.4-1.4-5.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(hide_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  