
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function record_create_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m40.8 7.7" fill={props.fill}/>
	<g fill={props.fill}>
		<path d="m17.2 11.6h17.6c0.9 0 1.6-0.7 1.6-1.6v-3.2c0-2.6-2.2-4.8-4.8-4.8h-11.2c-2.6 0-4.8 2.2-4.8 4.8v3.2c0 0.9 0.7 1.6 1.6 1.6z m26.4-5.6h-1.6c-0.5 0-0.8 0.3-0.8 0.8v3.2c0 3.5-2.9 6.4-6.4 6.4h-17.6c-3.5 0-6.4-2.9-6.4-6.4v-3.2c0-0.5-0.3-0.8-0.8-0.8h-1.6c-2.6 0-4.8 2.2-4.8 4.8v34.4c0 2.6 2.2 4.8 4.8 4.8h35.2c2.6 0 4.8-2.2 4.8-4.8v-34.4c0-2.6-2.2-4.8-4.8-4.8z m-5.9 28.2c0 0.4-0.4 0.8-0.8 0.8h-8.8c-0.3 0-0.5 0.2-0.5 0.5v8.8c0 0.4-0.4 0.8-0.8 0.8h-1.6c-0.4 0-0.8-0.4-0.8-0.8v-8.8c0-0.3-0.2-0.5-0.5-0.5h-8.8c-0.4 0-0.8-0.4-0.8-0.8v-1.6c0-0.4 0.4-0.8 0.8-0.8h8.8c0.3 0 0.5-0.2 0.5-0.5v-8.8c0-0.4 0.4-0.8 0.8-0.8h1.6c0.4 0 0.8 0.4 0.8 0.8v8.8c0 0.3 0.2 0.5 0.5 0.5h8.8c0.4 0 0.8 0.4 0.8 0.8v1.6z"/>
	</g>
</svg>
  );
};

addPropertyControls(record_create_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
