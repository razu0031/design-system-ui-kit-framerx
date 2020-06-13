
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function emoji_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50.1 26c0 13.3-10.8 24.1-24.1 24.1s-24.1-10.8-24.1-24.1 10.8-24.1 24.1-24.1 24.1 10.8 24.1 24.1z m-31.8-10.2c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3z m15.5 0c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3z m-0.2 16.7c-2 1.8-4.7 2.8-7.6 2.8-2.8 0-5.4-1-7.5-2.7l-0.9-0.8c-0.3-0.2-0.5-0.3-1.1-0.3-1.1 0-1.9 0.9-1.9 1.9 0 0.5 0.2 1 0.6 1.4l0.7 0.6c2.7 2.4 6.3 3.8 10.1 3.8 3.9 0 7.5-1.5 10.2-3.9l0.5-0.5c0.4-0.4 0.6-0.9 0.6-1.4 0-1.1-0.9-1.9-1.9-1.9-0.5 0-0.9 0.2-1.2 0.4l-0.6 0.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(emoji_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  