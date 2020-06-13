
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom60_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m50 22.2c-1.9-11.4-11.9-20.2-24-20.2s-22.1 8.8-24 20.2c-0.1 0.8 0.7 1.3 1.3 0.8 1.2-1 2.7-1.6 4.5-1.6 2.2 0 4.2 1 5.4 2.6 0.3 0.4 1 0.4 1.3 0 1.3-1.6 3.2-2.6 5.4-2.6s4.2 1 5.4 2.6c0.3 0.4 1 0.4 1.3 0 1.3-1.6 3.2-2.6 5.4-2.6s4.2 1 5.4 2.6c0.3 0.4 1 0.4 1.3 0 1.3-1.6 3.2-2.6 5.4-2.6 1.7 0 3.3 0.6 4.5 1.6 0.7 0.5 1.5 0 1.4-0.8z m-14.4 18.2c-1.4 0-2.4 1-2.4 2.4s-1 2.4-2.4 2.4-2.4-1-2.4-2.4v-11.2c0-1.4-1-2.4-2.4-2.4s-2.4 1-2.4 2.4v11.2c0 4 3.2 7.2 7.2 7.2s7.2-3.2 7.2-7.2c0-1.4-1-2.4-2.4-2.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom60_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  