
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function custom99_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m74 36h-16.8c-0.5-1.2-1.2-2.2-2.1-3.1l6.3-8.1c1-1.3 0.8-3.2-0.5-4.2s-3.2-0.8-4.2 0.5l-7 9c-0.6 0-1.1-0.1-1.7-0.1s-1.1 0.1-1.6 0.1l-7-9c-1-1.3-2.9-1.5-4.2-0.5-1.3 1-1.5 2.9-0.5 4.2l6.3 8.1c-0.9 0.9-1.6 1.9-2.1 3.1h-12.9c-3.3 0-6 2.7-6 6v28c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6v-28c0-3.3-2.7-6-6-6z m-8 32c0 1.1-0.9 2-2 2h-36c-1.1 0-2-0.9-2-2v-24c0-1.1 0.9-2 2-2h36c1.1 0 2 0.9 2 2v24z m7-10c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z m0-10c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(custom99_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  