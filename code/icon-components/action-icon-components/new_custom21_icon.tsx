
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom21_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m32.1 42.9c-0.2-0.6-0.8-0.9-1.4-0.9h-9.3c-0.6 0-1.2 0.3-1.4 0.9l-2.2 5.9c-0.2 0.6 0.2 1.1 0.7 1.1h15c0.6 0 1-0.6 0.7-1.1l-2.1-5.9z m13.1-40.9h-38.4c-2.6 0-4.8 2.1-4.8 4.8v25.6c0 2.6 2.2 4.8 4.8 4.8h38.4c2.6 0 4.8-2.2 4.8-4.8v-25.6c0-2.7-2.2-4.8-4.8-4.8z m-19.2 33.6c-1.4 0-2.4-1-2.4-2.4s1-2.4 2.4-2.4 2.4 1 2.4 2.4-1 2.4-2.4 2.4z m19.2-8c0 0.9-0.7 1.6-1.6 1.6h-35.2c-0.9 0-1.6-0.7-1.6-1.6v-19.2c0-0.9 0.7-1.6 1.6-1.6h35.2c0.9 0 1.6 0.7 1.6 1.6v19.2z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom21_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  