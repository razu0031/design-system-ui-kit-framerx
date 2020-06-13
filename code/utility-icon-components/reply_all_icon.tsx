
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function reply_all_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m24.4 18.1s-1.1-1.1-0.5-1.7l5.6-5.6c0.6-0.6 0.6-1.5 0-2.1l-2.1-2.2c-0.6-0.6-1.5-0.6-2.1 0l-13.5 13.5c-0.6 0.6-0.6 1.5 0 2.1l13.5 13.5c0.6 0.6 1.5 0.6 2.1 0l2.1-2.1c0.6-0.6 0.6-1.5 0-2.1l-5.5-5.6c-0.6-0.6-0.2-1.5 0.5-1.7 11.1 0.4 20.1 9.3 20.8 20.6 0 0.8 0.7 1.4 1.5 1.4h3c0.9 0 1.4-0.7 1.3-1.6-0.7-14.5-11.7-25.9-26.7-26.4z m-19 2.3l11.6-11.6c0.6-0.6 0.6-1.5 0-2.1l-0.1-0.2c-0.6-0.6-1.5-0.6-2.1 0l-13.5 13.5c-0.6 0.6-0.6 1.5 0 2.1l13.5 13.5c0.6 0.6 1.5 0.6 2.1 0l0.1-0.1c0.6-0.6 0.6-1.5 0-2.1l-11.5-11.6s-0.7-0.6-0.1-1.4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(reply_all_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  