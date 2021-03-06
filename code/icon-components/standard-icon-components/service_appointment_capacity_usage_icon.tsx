
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function service_appointment_capacity_usage_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<g fill={props.fill}>
		<path d="m72 26h-5v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2h-18v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2h-5c-3.3 0-6 2.7-6 6v2c0 1.1 0.9 2 2 2h52c1.1 0 2-0.9 2-2v-2c0-3.3-2.7-6-6-6z m4 16h-52c-1.1 0-2 0.9-2 2v30c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6v-30c0-1.1-0.9-2-2-2z m-11.1 19.1c-0.1 8.2-6.8 14.9-15 14.8-8.2-0.1-14.9-6.8-14.8-15 0.1-8.2 6.8-14.9 15-14.8 8.2 0 14.8 6.9 14.8 15z m-15.1-10.9v11.4h10.7s0.6-4-3.1-7.8-7.6-3.6-7.6-3.6z"/>
	</g>
</svg>
  );
};

addPropertyControls(service_appointment_capacity_usage_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
