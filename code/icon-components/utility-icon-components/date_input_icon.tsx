
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function date_input_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m46.3 19.7h-40.6c-0.9 0-1.6 0.7-1.6 1.6v23.5c0 2.6 2.1 4.7 4.7 4.7h34.4c2.6 0 4.7-2.1 4.7-4.7v-23.5c0-0.9-0.7-1.6-1.6-1.6z m-28.1 21.9c0 0.9-0.7 1.6-1.6 1.6h-3.1c-0.9 0-1.6-0.7-1.6-1.6v-3.1c0-0.9 0.7-1.6 1.6-1.6h3.1c0.9 0 1.6 0.7 1.6 1.6v3.1z m10.9 0c0 0.9-0.7 1.6-1.6 1.6h-3.1c-0.9 0-1.6-0.7-1.6-1.6v-3.1c0-0.9 0.7-1.6 1.6-1.6h3.1c0.9 0 1.6 0.7 1.6 1.6v3.1z m0-10.9c0 0.9-0.7 1.6-1.6 1.6h-3.1c-0.9 0-1.6-0.7-1.6-1.6v-3.1c0-0.9 0.7-1.6 1.6-1.6h3.1c0.9 0 1.6 0.7 1.6 1.6v3.1z m11 0c0 0.9-0.7 1.6-1.6 1.6h-3.1c-0.9 0-1.6-0.7-1.6-1.6v-3.1c0-0.9 0.7-1.6 1.6-1.6h3.1c0.9 0 1.6 0.7 1.6 1.6v3.1z m3.1-23.5h-3.9v-1.6c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1.6h-14.1v-1.6c0-1.7-1.4-3.1-3.1-3.1s-3.1 1.4-3.1 3.1v1.6h-4c-2.6 0-4.7 2.1-4.7 4.7v1.6c0 0.9 0.7 1.6 1.6 1.6h40.7c0.9 0 1.6-0.7 1.6-1.6v-1.6c-0.1-2.6-2.2-4.7-4.8-4.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(date_input_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  