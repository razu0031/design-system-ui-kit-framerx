
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function missed_call_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m34.7 40.3c0.7 0 1.2 0.5 1.4 1.1l0.8 5.4c0.2 1.5 1.4 2.6 2.9 2.8l6.5 0.7c2 0.2 3.7-1.3 3.7-3.3v-6.2c0-1-0.4-1.8-1.1-2.5-6.4-5.8-14.9-8.8-23-8.8s-16.6 3-23 8.8c-0.6 0.6-0.9 1.6-0.9 2.5v6.2c-0.2 2 1.5 3.6 3.5 3.3l6.5-0.7c1.5-0.2 2.7-1.3 2.9-2.8l0.8-5.4c0.1-0.7 0.7-1.1 1.4-1.1 0 0 8.4-0.7 17.6 0z m5-27.7c0.5-0.5 1.4-0.1 1.4 0.6v6.7c0 0.7 0.5 1.2 1.2 1.2h2.5c0.7 0 1.2-0.5 1.2-1.2l0.1-16.1c0-0.7-0.5-1.2-1.2-1.2h-16c-0.7 0-1.2 0.5-1.2 1.2v2.5c0 0.7 0.5 1.2 1.2 1.2h6.7c0.7 0 1.1 0.9 0.6 1.4l-9.4 9.4c-0.3 0.3-0.9 0.3-1.3 0l-15.4-15.3c-0.5-0.5-1.3-0.5-1.8 0l-1.9 1.8c-0.5 0.5-0.5 1.3 0 1.9l18.8 18.9c0.5 0.6 1.3 0.6 1.9 0l12.6-13z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(missed_call_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  