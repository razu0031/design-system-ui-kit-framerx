
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function password_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m44.8 49.5h-37.6c-2.6 0-4.7-2.1-4.7-4.7v-37.6c0-2.6 2.1-4.7 4.7-4.7h37.6c2.6 0 4.7 2.1 4.7 4.7v37.6c0 2.5-2.1 4.7-4.7 4.7z m-35.9-39.2v31.3c0 0.9 0.7 1.6 1.6 1.6h31.2c0.9 0 1.6-0.7 1.6-1.6v-31.3c0-0.9-0.7-1.6-1.6-1.6h-31.3c-0.8 0.1-1.5 0.8-1.5 1.6z m29.9 13.5l-0.9-3c-0.3-0.8-1.1-1.3-2-1l-6.8 2.2v-6.7c0-0.9-0.7-1.6-1.6-1.6h-3.1c-0.9 0-1.6 0.7-1.6 1.6v6.7l-6.6-2.2c-0.8-0.3-1.7 0.2-2 1l-0.9 3c-0.3 0.8 0.2 1.7 1 2l6.2 2-4.5 6.1c-0.5 0.7-0.3 1.7 0.4 2.2l2.6 1.8c0.7 0.5 1.7 0.3 2.2-0.4l4.9-6.8 4.9 6.8c0.5 0.7 1.5 0.9 2.2 0.4l2.6-1.8c0.7-0.5 0.9-1.5 0.4-2.2l-4.5-6.2 6.1-2c0.8-0.2 1.2-1 1-1.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(password_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
