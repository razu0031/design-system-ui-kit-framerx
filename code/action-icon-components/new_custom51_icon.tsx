
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function new_custom51_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m18.5 6.5c2 1.4 3.9 4.6 4.7 7.1 0.2 0.6 0.6 1 1.2 1 0.6 0.2 1 0.2 1.6 0.2 0.9 0 1.6 0 2.3-0.3 2-0.7 3.8-1.6 5.3-3.1 2.4-2.5 3.3-6 2.4-8.9-2.9-0.9-6.4-0.1-8.8 2.4-0.7 0.7-1.3 1.5-1.7 2.4-1.3-2-2.8-3.8-4.5-4.9-1.2-0.7-2.7-0.3-3.4 0.9-0.6 1.1-0.1 2.5 0.9 3.2z m24.2 11.7c-8.1-4.6-9.8 1.6-16.7 1.6s-8.6-6.2-16.7-1.6c-7.8 4.5-5.5 19.2-2.4 24.8 2.8 4.9 7.9 9.9 18.4 5.1 0.4-0.2 0.9-0.2 1.3 0 10.5 4.8 15.7-0.3 18.4-5.1 3.2-5.6 5.5-20.3-2.3-24.8z"/>
	</g>
</svg>
  );
};

addPropertyControls(new_custom51_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  