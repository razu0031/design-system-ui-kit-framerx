
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function share_thanks_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m45.2 14h-7c2-3.1 1.8-7.3-0.6-9.8-1.4-1.4-3.2-2.2-5.1-2.2-2.1 0-4.2 1-5.7 2.6-0.3 0.3-0.6 0.6-0.8 1-0.2-0.4-0.5-0.7-0.8-1-1.5-1.7-3.6-2.6-5.7-2.6-1.9 0-3.7 0.8-5 2.2-2.5 2.6-2.6 6.7-0.6 9.8h-7c-2.7 0-4.9 2.2-4.9 4.8v3.2c0 0.9 0.7 1.6 1.6 1.6h44.8c0.9 0 1.6-0.7 1.6-1.6v-3.2c0-2.6-2.2-4.8-4.8-4.8z m-21.6 0c-1.7 0-4.1-0.6-5.4-2.1-1.2-1.3-1.4-3.4-0.2-4.4 0.5-0.5 1-0.6 1.5-0.6 0.8 0 1.6 0.4 2.2 1 1.4 1.5 1.9 4.1 1.9 5.7v0.4z m10.2-2.1c-1.4 1.4-3.8 2.1-5.4 2.1v-0.5c0-1.6 0.6-4.2 1.9-5.7 0.6-0.6 1.4-1 2.2-1 0.4 0 1 0.1 1.6 0.6 1 1.2 0.9 3.2-0.3 4.5z m11.4 16.5h-16.8v21.6h13.8c2.6 0 4.6-2.1 4.6-4.6v-15.4c0-0.9-0.7-1.6-1.6-1.6z m-40 1.6v15.2c0 2.6 2.2 4.8 4.8 4.8h13.6v-21.6h-16.8c-0.9 0-1.6 0.7-1.6 1.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(share_thanks_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  