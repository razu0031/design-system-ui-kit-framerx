
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function resource_territory_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m26.7 29c2-2.9 4.1-4.3 5.5-6.5 2.5-3.7 3-9 1.4-13-1.6-4.1-5.4-6.5-9.8-6.4s-8 2.8-9.4 6.9c-1.6 4.5-0.9 9.9 2.7 13.3 1.5 1.4 2.9 3.6 2.1 5.7-0.7 2-3.1 2.9-4.8 3.7-3.9 1.7-8.6 4.1-9.4 8.7-0.8 3.8 1.8 7.7 5.9 7.7h18c0.8 0 1.5-0.9 1-1.5-2.5-2.9-5.1-6.7-5.1-10.5-0.2-2.7 0.6-5.7 1.9-8.1z m11 10.4c-2.1 0-3.9-1.7-3.9-3.8s1.7-3.8 3.9-3.8c2.1 0 3.9 1.7 3.9 3.8 0 2.1-1.8 3.8-3.9 3.8z m0-13c-5.1 0-9.2 4.1-9.2 9.2 0 6.3 6.6 12.2 8.6 13.7 0.3 0.3 0.8 0.3 1.2 0 2-1.6 8.6-7.4 8.6-13.7 0-5.1-4.1-9.2-9.2-9.2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(resource_territory_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  