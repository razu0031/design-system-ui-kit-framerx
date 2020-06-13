
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom86_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m16.4 10h3.2c0.5 0 0.8-0.3 0.8-0.8v-2.4h11.2v2.4c0 0.5 0.3 0.8 0.8 0.8h3.2c0.5 0 0.8-0.3 0.8-0.8v-2.4c0-2.6-2.2-4.8-4.8-4.8h-11.2c-2.6 0-4.8 2.2-4.8 4.8v2.4c0 0.5 0.3 0.8 0.8 0.8z m28.8 4.8h-38.4c-2.6 0-4.8 2.2-4.8 4.8v25.6c0 2.6 2.2 4.8 4.8 4.8h38.4c2.6 0 4.8-2.2 4.8-4.8v-25.6c0-2.6-2.2-4.8-4.8-4.8z m-19.2 28.8c-6.2 0-11.2-5-11.2-11.2s5-11.2 11.2-11.2 11.2 5 11.2 11.2-5 11.2-11.2 11.2z m4.8-13.6h-2.4v-2.4c0-0.9-0.7-1.6-1.6-1.6h-1.6c-0.9 0-1.6 0.7-1.6 1.6v2.4h-2.4c-0.9 0-1.6 0.7-1.6 1.6v1.6c0 0.9 0.7 1.6 1.6 1.6h2.4v2.4c0 0.9 0.7 1.6 1.6 1.6h1.6c0.9 0 1.6-0.7 1.6-1.6v-2.4h2.4c0.9 0 1.6-0.7 1.6-1.6v-1.6c0-0.9-0.7-1.6-1.6-1.6z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom86_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  