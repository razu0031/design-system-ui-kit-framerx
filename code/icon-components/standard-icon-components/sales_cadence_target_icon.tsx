
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function sales_cadence_target_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m55 25c-5.3 0-10.3 1.7-14.3 4.6l3.6 3.6c3.1-2 6.8-3.1 10.7-3.1 11 0 20 9 20 20s-9 20-20 20c-3.9 0-7.6-1.1-10.7-3.1l-3.8 3.5c4.2 2.8 9.1 4.5 14.5 4.5 13.8 0 25-11.2 25-25s-11.2-25-25-25z m0 30c2.8 0 5-2.2 5-5s-2.2-5-5-5c-1.6 0-3 0.8-3.9 2l-10.9-10.8c-0.6-0.7-1.6-0.7-2.2-0.2l-0.2 0.2-2.3 2.3c-0.7 0.6-0.7 1.6-0.2 2.2l0.2 0.2 4 4c0.4 0.4 0.4 1.2 0 1.6-0.2 0.2-0.5 0.3-0.8 0.3h-16.9c-0.9 0-1.8 0.8-1.8 1.7v3.3c0.1 0.9 0.8 1.6 1.8 1.7h17.2c0.6 0 1.1 0.5 1.1 1.1 0 0.2-0.1 0.6-0.3 0.8l-4 4c-0.7 0.6-0.7 1.6-0.2 2.2l0.2 0.2 2.3 2.3c0.6 0.6 1.6 0.6 2.2 0l10.9-10.8c0.8 1 2.2 1.7 3.8 1.7z m0 5c-1.1 0-2.2-0.2-3.2-0.5l-3.8 3.8c2.1 1.1 4.5 1.7 7 1.7 8.2 0 15-6.8 15-15s-6.8-15-15-15c-2.5 0-4.9 0.6-7 1.8l3.7 3.8c1-0.4 2.1-0.6 3.3-0.6 5.5 0 10 4.5 10 10s-4.5 10-10 10z"/>
	</g>
</svg>
  );
};

addPropertyControls(sales_cadence_target_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  