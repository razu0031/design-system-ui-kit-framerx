
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function shipment_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m53 53.6v24.4c0 0.6 0.4 1 1 1 0.2 0 0.4 0 0.5-0.1 4.8-2.7 19.4-11 19.4-11 1.9-1.1 3.1-3.1 3.1-5.3v-21.9c0-0.6-0.4-1-1-1-0.2 0-0.4 0-0.5 0.1l-21.5 12.1c-0.6 0.3-1 1-1 1.7z m-2-6.8l21.6-12.1c0.5-0.3 0.6-0.9 0.3-1.4l-0.3-0.3c-4.8-2.7-19.5-11.1-19.5-11.1-1.9-1.1-4.3-1.1-6.2 0 0 0-14.7 8.3-19.5 11.1-0.5 0.3-0.6 0.9-0.3 1.4l0.3 0.3 21.6 12.1c0.6 0.3 1.4 0.3 2 0z m-5 5.1l-21.5-12.1c-0.5-0.3-1.1-0.1-1.4 0.4-0.1 0.1-0.1 0.3-0.1 0.5v21.8c0 2.2 1.2 4.2 3.1 5.3 0 0 14.6 8.3 19.4 11 0.5 0.3 1.1 0.1 1.4-0.4 0.1-0.2 0.1-0.4 0.1-0.5v-24.3c0-0.7-0.4-1.4-1-1.7z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(shipment_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  