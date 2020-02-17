
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function collection_variable_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m73.8 20h-47.6c-3.4 0-6.2 2.8-6.2 6.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2v-47.6c0-3.4-2.8-6.2-6.2-6.2z m-3 49.3h-0.1c0 0.8-0.8 1.4-1.6 1.4h-38.7c-0.8 0-1.4-0.8-1.4-1.6v-38.4c0-0.8 0.8-1.4 1.6-1.4h38.8c0.8 0 1.4 0.8 1.4 1.6v38.4z m-12-23.7c1.3 0 3.9-1.1 3.9-4.5s-2.5-3.6-3.2-3.6c-1.5 0-3 1.1-4.3 3.4-1.3 2.3-2.8 4.9-2.8 4.9h-0.1c-0.3-1.6-0.6-3-0.7-3.6-0.3-1.4-1.9-4.5-5.3-4.5s-6.5 2-6.5 2c-0.6 0.4-1 1-1 1.8 0 1.1 0.9 2.1 2.1 2.1 0.3 0 0.6-0.1 0.9-0.2 0 0 2.6-1.4 3.1 0 0.2 0.4 0.3 0.9 0.5 1.4 0.7 2.2 1.3 4.9 1.8 7.3l-2.2 3.2s-2.5-0.9-3.8-0.9-3.9 1.1-3.9 4.5 2.5 3.6 3.2 3.6c1.5 0 3-1.1 4.3-3.4 1.3-2.3 2.8-4.9 2.8-4.9 0.4 2.1 0.8 3.8 1 4.5 0.9 2.4 2.8 3.9 5.4 3.9 0 0 2.7 0 5.8-1.8 0.8-0.3 1.3-1.1 1.3-1.9 0-1.1-0.9-2.1-2.1-2.1-0.3 0-0.6 0.1-0.9 0.2 0 0-2.3 1.3-3 0.3-0.6-1-1-2.4-1.4-4.2-0.3-1.5-0.7-3.3-1.1-5.1l2.3-3.3c0.1 0 2.6 0.9 3.9 0.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(collection_variable_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  