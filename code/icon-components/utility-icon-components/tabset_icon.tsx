
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function tabset_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m31.6 2h-11.2c-0.7 0-1.2 0.6-1.2 1.3v2.5c0 0.7 0.6 1.3 1.2 1.3h11.2c0.7 0 1.2-0.6 1.2-1.3v-2.5c0.1-0.7-0.5-1.3-1.2-1.3z m17.1 0h-11.2c-0.7 0-1.3 0.6-1.3 1.3v2.5c0 0.7 0.6 1.3 1.3 1.3h11.2c0.7-0.1 1.3-0.6 1.3-1.3v-2.5c0-0.7-0.6-1.3-1.3-1.3z m0 8.4h-31.7c-0.7 0-1.3-0.6-1.3-1.3v-5.8c0-0.7-0.6-1.3-1.3-1.3h-11.1c-0.7 0-1.3 0.6-1.3 1.3v45.5c0 0.6 0.6 1.2 1.3 1.2h45.4c0.7 0 1.3-0.6 1.3-1.3v-37c0-0.7-0.6-1.3-1.3-1.3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(tabset_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  