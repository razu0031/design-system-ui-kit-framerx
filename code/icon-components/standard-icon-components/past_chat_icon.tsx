
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function past_chat_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m49.5 21.9c-16.7 0-30 12.3-30 27.4 0 4.8 1.4 9.3 3.6 13.3 0.4 0.6 0.5 1.4 0.3 2.1l-3.9 10.7c-0.4 1 0.6 1.9 1.6 1.6l10.9-4.1c0.6-0.3 1.4-0.1 2.1 0.3 4.5 2.5 9.9 4 15.7 4 16.4-0.2 29.8-12.3 29.8-27.6-0.1-15.5-13.5-27.7-30.1-27.7z m11.7 40.5l-1.4 1.4c-0.6 0.6-1.3 0.9-2.1 0.9s-1.5-0.3-2.1-0.9l-9.6-9.6c-0.7-0.6-1.2-1.7-1.2-2.8v-14c0-1.7 1.3-3 3-3h2c1.7 0 3 1.3 3 3v12.4l8.4 8.4c0.6 0.6 0.9 1.3 0.9 2.1s-0.3 1.5-0.9 2.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(past_chat_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  