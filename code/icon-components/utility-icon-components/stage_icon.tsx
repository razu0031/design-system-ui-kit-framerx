
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function stage_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<circle cx="46.7" cy="26" fill={props.fill} r="3.4"/>
	<circle cx="25.9" cy="26" fill={props.fill} r="3.4"/>
	<circle cx="5.4" cy="26" fill={props.fill} r="3.4"/>
	<path d="m11.6 26c0 7.9 6.5 14.4 14.4 14.4s14.3-6.5 14.3-14.4-6.4-14.4-14.3-14.4-14.4 6.5-14.4 14.4z m23.9 0c0 5.3-4.3 9.6-9.6 9.6s-9.6-4.3-9.6-9.6 4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(stage_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
