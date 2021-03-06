
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function travel_and_places_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m47 21l-4.5-12.2c-0.7-2.3-2.9-3.8-5.3-3.8h-22.4c-2.4 0-4.6 1.5-5.4 3.8l-4.4 12.2c-2.1 0.6-3 2.6-3 4.8v11.6c0 2.1 2.2 3.9 4 4.6v4c0 1.3 0.7 2 2 2h5.1c1.3 0 1.9-0.7 1.9-2v-4h22v4c0 1.3 0.7 2 2 2h5c1.3 0 2-0.7 2-2v-4c1.8-0.7 4-2.4 4-4.6v-11.6c0-2.2-0.9-4.2-3-4.8z m-36 13c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z m16.6-13h-15.8c-0.6 0-1-0.5-0.8-1l3-9c0.1-0.3 0.3-1 1-1h22c0.8 0 0.9 0.8 1 1l3 9c0.2 0.6-0.1 1-0.9 1h-12.5z m13.4 13c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(travel_and_places_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
