
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function variable_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m70.9 39.7c3.1 0 9.1-2.5 9.1-10.6s-5.8-8.5-7.6-8.5c-3.6 0-7.1 2.6-10.2 7.9-3.1 5.5-6.6 11.5-6.6 11.5h-0.1c-0.8-3.8-1.4-7-1.7-8.4-0.6-3.3-4.5-10.6-12.5-10.6s-15.3 4.6-15.3 4.6c-1.4 0.9-2.3 2.4-2.3 4.1 0 2.7 2.2 4.9 4.9 4.9 0.8 0 1.5-0.2 2.1-0.5 0 0 6.1-3.4 7.4 0 0.4 1 0.7 2.2 1.1 3.4 1.6 5.2 3 11.4 4.2 17l-5.2 7.6s-5.9-2.1-9-2.1-9.2 2.5-9.2 10.6 5.8 8.5 7.6 8.5c3.6 0 7.1-2.6 10.2-7.9 3.1-5.5 6.6-11.5 6.6-11.5 1 5 1.9 9 2.4 10.6 2 5.7 6.6 9.1 12.7 9.1 0 0 6.3 0 13.7-4.2 1.8-0.7 3.1-2.5 3.1-4.5 0-2.7-2.2-4.9-4.9-4.9-0.8 0-1.5 0.2-2.1 0.5 0 0-5.3 3-7.1 0.6-1.3-2.5-2.4-5.7-3.2-9.7-0.8-3.6-1.7-7.8-2.5-11.9l5.3-7.7c0.1 0 6 2.1 9.1 2.1z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(variable_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  