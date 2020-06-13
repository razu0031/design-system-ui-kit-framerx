
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function favorite_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m27.4 3.1l4.6 15c0.2 0.6 0.8 0.9 1.4 0.9h15c1.5 0 2.1 2 0.9 2.9l-12.2 9c-0.5 0.4-0.7 1.1-0.5 1.7l5.8 15.4c0.4 1.4-1.1 2.6-2.3 1.7l-13.1-9.8c-0.5-0.4-1.2-0.4-1.8 0l-13.2 9.8c-1.2 0.9-2.8-0.3-2.3-1.7l5.6-15.4c0.2-0.6 0-1.3-0.5-1.7l-12.2-9c-1.2-0.9-0.5-2.9 0.9-2.9h15c0.7 0 1.2-0.2 1.4-0.9l4.7-15.1c0.4-1.4 2.4-1.3 2.8 0.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(favorite_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  