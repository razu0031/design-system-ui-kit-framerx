
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function turn_off_notifications_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m23.4 26.6c0.6 0.6 1.4 0.6 2 0l21.4-19.7c0.4-0.7 0.3-1.9-1.2-1.9h-42.2c-1.1 0-2 1.1-1.2 2l21.2 19.6z m6.7 11c0.5-5.6 5-10.2 10.7-10.8 0.5 0 1-0.1 1.4-0.1 1.8 0 3.4 0.4 4.9 1v-12.4c0-1-1.2-1.5-1.9-0.8l-16.6 15.4c-1.1 1-2.6 1.6-4.1 1.6s-3-0.6-4.1-1.6l-16.6-15.4c-0.8-0.7-1.9-0.2-1.9 0.8v19.6c0 2.5 2.1 4.6 4.6 4.6h23.7c-0.1-0.6-0.1-1.3-0.1-1.9z m12-6.6c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z m6 9.6c0 0.2-0.2 0.4-0.5 0.4h-11c-0.3 0-0.5-0.2-0.5-0.4v-3.2c0-0.2 0.2-0.4 0.5-0.4h11c0.3 0 0.5 0.2 0.5 0.4v3.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(turn_off_notifications_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  