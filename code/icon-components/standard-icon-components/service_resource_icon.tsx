
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function service_resource_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title/>
	<path d="m71.8 20h-43.5a8.1 8.1 0 0 0-8.3 7.8v44.4a8.1 8.1 0 0 0 8.2 7.8h11c1.1-4.5 6.4-7.2 12.1-9.5 4.2-1.8 4.9-3.3 4.9-5.1s-1.3-3.5-2.7-4.8a11.3 11.3 0 0 1-3.9-9c0-6.7 4.4-12.6 12-12.6s12 5.8 12 12.6a12.1 12.1 0 0 1-3.8 9c-1.4 1.4-2.7 3-2.7 4.8s0.5 3.3 4.9 5.1a41.5 41.5 0 0 1 7.7 3.9 7.3 7.3 0 0 0 0.3-2.2v-44.4c0.1-4.2-3.6-7.8-8.2-7.8z m-24.2 13.4a2.9 2.9 0 0 1-2.7 2.7h-14.1a2.9 2.9 0 0 1-2.8-2.7v-2.8a2.9 2.9 0 0 1 2.8-2.7h14a2.9 2.9 0 0 1 2.8 2.7z" fill={props.fill} fillRule="evenodd"/>
</svg>
  );
};

addPropertyControls(service_resource_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  