
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function thanks_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m74 35h-8.7c2.5-3.9 2.3-9.1-0.8-12.3-1.7-1.7-4-2.7-6.4-2.7-2.6 0-5.2 1.2-7.1 3.2-0.4 0.4-0.7 0.8-1 1.3-0.3-0.5-0.6-0.9-1-1.3-1.9-2.1-4.5-3.2-7.1-3.2-2.4 0-4.6 1-6.3 2.7-3.1 3.2-3.3 8.4-0.8 12.3h-8.8c-3.3 0-6 2.7-6 6v4c0 1.1 0.9 2 2 2h56c1.1 0 2-0.9 2-2v-4c0-3.3-2.7-6-6-6z m-27 0c-2.1 0-5.1-0.8-6.8-2.6-1.5-1.6-1.7-4.2-0.3-5.5 0.7-0.7 1.4-0.8 2-0.8 1 0 2 0.5 2.7 1.3 1.7 1.9 2.4 5.1 2.4 7.1v0.5z m12.8-2.6c-1.7 1.8-4.7 2.6-6.8 2.6v-0.6c0-2 0.7-5.2 2.4-7.1 0.8-0.8 1.8-1.3 2.7-1.3 0.5 0 1.3 0.1 2 0.8 1.3 1.4 1.2 3.9-0.3 5.6z m14.2 20.6h-21v27h17.2c3.2 0 5.8-2.6 5.8-5.8v-19.2c0-1.1-0.9-2-2-2z m-50 2v19c0 3.3 2.7 6 6 6h17v-27h-21c-1.1 0-2 0.9-2 2z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(thanks_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  