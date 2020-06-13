
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom94_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m30.8 16.4v-12c0-1.4-1-2.4-2.4-2.4h-3.2c-1.4 0-2.4 1-2.4 2.4s1 2.4 2.4 2.4h0.8v9.6c0 5.3-4.3 9.6-9.6 9.6s-9.6-4.3-9.6-9.6v-9.6h0.8c1.4 0 2.4-1 2.4-2.4s-1-2.4-2.4-2.4h-3.2c-1.4 0-2.4 1-2.4 2.4v12c0 7.9 6.5 14.4 14.4 14.4s14.4-6.5 14.4-14.4z m19.2 9.6c0-4-3.2-7.2-7.2-7.2s-7.2 3.2-7.2 7.2c0 3.1 2 5.8 4.8 6.8v1.8c0 5.8-4.8 10.6-10.6 10.6h-0.2c-5 0-9.3-3.6-10.4-8.3-0.2-0.7-0.8-1.3-1.6-1.3h-1.6c-1 0-1.8 1-1.6 1.9 1.3 7.1 7.6 12.5 15 12.5h0.2c8.6 0 15.5-7 15.5-15.4v-1.8c2.9-1 4.9-3.7 4.9-6.8z m-7.2 2.4c-1.4 0-2.4-1-2.4-2.4s1-2.4 2.4-2.4 2.4 1 2.4 2.4-1 2.4-2.4 2.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom94_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  