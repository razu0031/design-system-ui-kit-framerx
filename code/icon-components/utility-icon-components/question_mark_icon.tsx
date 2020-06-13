
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function question_mark_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m26.7 42.8c0.8 0 1.5 0.7 1.5 1.5v3.2c0 0.8-0.7 1.5-1.5 1.5h-3.2c-0.8 0-1.5-0.7-1.5-1.5v-3.2c0-0.8 0.7-1.5 1.5-1.5h3.2z m1.5-7.7c0-2.1 1.3-4 3.1-4.8h0.1c5.2-2.1 8.8-7.2 8.8-13.2 0-7.8-6.4-14.2-14.2-14.2-7.2 0-13.2 5.3-14.2 12.2v0.1c-0.1 0.9 0.6 1.6 1.5 1.6h3.2c0.8 0 1.4-0.5 1.5-1.1v-0.2c0.7-3.7 4-6.5 7.9-6.5 4.5 0 8.1 3.6 8.1 8.1 0 2.1-0.8 4-2.1 5.5l-0.1 0.1c-0.9 1-2.1 1.6-3.3 2-4 1.4-6.7 5.2-6.7 9.4v1.5c0 0.8 0.6 1.4 1.4 1.4h3.2c0.8 0 1.6-0.6 1.6-1.5l0.2-0.4z"/>
	</g>
</svg>
  );
};

addPropertyControls(question_mark_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  