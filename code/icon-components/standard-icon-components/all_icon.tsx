
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function all_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m57 44.5c-1.5 0-2.7-1.2-2.7-2.7v-17.3c0-1.5 1.2-2.7 2.7-2.7h17.6c1.5 0 2.7 1.2 2.7 2.7v17.3c0 1.5-1.2 2.7-2.7 2.7h-17.6z m7.6 10.2l-10.3 11.1c-0.6 0.6-0.6 1.7 0 2.3l10.3 11.1c0.7 0.7 1.8 0.7 2.5 0l10.3-11.1c0.6-0.6 0.6-1.7 0-2.3l-10.3-11.1c-0.7-0.7-1.9-0.7-2.5 0z" fill={props.fill}/>
	<path d="m23.6 25.7l8.9-5.1c0.8-0.5 1.8-0.5 2.7 0l8.9 5.1c0.8 0.5 1.3 1.4 1.3 2.3v10.2c0 0.9-0.5 1.8-1.3 2.3l-8.9 5.1c-0.8 0.5-1.8 0.5-2.7 0l-8.9-5.1c-0.8-0.5-1.4-1.4-1.4-2.3v-10.2c0-1 0.6-1.9 1.4-2.3z" fill={props.fill}/>
	<circle cx="33.8" cy="66.6" fill={props.fill} r="11.6"/>
</svg>
  );
};

addPropertyControls(all_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
