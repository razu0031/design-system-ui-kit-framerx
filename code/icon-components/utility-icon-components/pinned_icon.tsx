
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function pinned_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m36.9 23.7h-0.5l-3.4-15.8h0.9c1.6 0 2.9-1.3 2.9-2.9s-1.3-2.9-2.9-2.9h-15.8c-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9h0.9l-3.3 15.8h-0.5c-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9h8.4v17.4c0 1.6 1.3 3 3 3s3-1.3 3-3v-17.3h7.4c1.6 0 2.9-1.3 2.9-2.9s-1.4-3-3-3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(pinned_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  