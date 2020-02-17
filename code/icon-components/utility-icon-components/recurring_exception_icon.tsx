
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function recurring_exception_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m39 35l-11.2-11.1-0.8-0.8-9.9-9.9-4.4-4.4-4.8-4.8c-0.7-0.8-1.8-0.9-2.4-0.3l-2.1 2.1c-0.5 0.5-0.5 1.3-0.1 2l40.5 40.6 0.1 0.1c0.7 0.7 1.8 0.8 2.4 0.3l2.1-2.1c0.6-0.6 0.5-1.7-0.3-2.4l-4.7-4.7-4.4-4.6z m-14.1-24c4 0 7.8 1.6 10.6 4.4 0.5 0.4 0.9 0.9 1.2 1.4 0.3 0.8-0.4 1.2-1.3 1.2h-7.3l6 6h12.6c0.7 0 1.3-0.6 1.3-1.3v-18.2c-0.2-0.8-0.9-1.5-1.7-1.5h-3c-0.8 0-1.5 0.7-1.5 1.5v7c0 0.9-0.5 1.3-1.2 0.7-0.3-0.4-0.6-0.7-1-1-5-5-12-7.1-19.2-5.7-1.3 0.3-2.5 0.6-3.7 1.2l4.8 4.8c1-0.4 2.2-0.5 3.4-0.5z m2 30.4c-4 0-7.8-1.6-10.6-4.4-0.5-0.4-0.9-0.9-1.2-1.4-0.3-0.8 0.4-1.2 1.3-1.2h7c0.1 0 0.2 0 0.4-0.1l-5.9-5.9h-12.7c-0.7 0-1.3 0.6-1.3 1.3v18.2c0.1 0.8 0.8 1.5 1.6 1.5h3c0.8 0 1.5-0.7 1.5-1.5v-7c0-0.9 0.5-1.3 1.2-0.7 0.3 0.4 0.6 0.7 1 1 5 5 12 7.1 19.2 5.7 1.3-0.3 2.5-0.6 3.7-1.2l-4.8-4.8c-1.1 0.3-2.2 0.5-3.4 0.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(recurring_exception_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  