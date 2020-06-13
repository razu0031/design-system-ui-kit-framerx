
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom33_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m37.2 19.3h-21.7c-0.8 0-1.5 0.7-1.5 1.5v5.9c0 0.8 0.7 1.5 1.5 1.5h21.8c0.8 0 1.5-0.7 1.5-1.5v-5.9c0-0.8-0.7-1.5-1.6-1.5z m-10.4 6.7c-1.3 0-2.2-1-2.2-2.2 0-1.3 1-2.2 2.2-2.2s2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2z m21.7-17h-45c-0.8 0-1.5 0.7-1.5 1.5v1.5c0 1.6 1.3 3 3 3v26.6c0 0.7 0.7 1.4 1.5 1.4h1.5c0.8 0 1.5-0.7 1.5-1.5v-26.6h33.8v26.6c0 0.8 0.7 1.5 1.5 1.5h1.5c0.8 0 1.5-0.7 1.5-1.5v-26.6h-0.8c1.6 0 3-1.3 3-3v-1.5c0-0.7-0.7-1.4-1.5-1.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom33_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  