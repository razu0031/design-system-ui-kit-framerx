
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function database_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m45.4 9c0-3.8-8.7-6.9-19.4-6.9s-19.4 3.1-19.4 6.9v2.4c0 3.8 8.7 6.9 19.4 6.9s19.4-3.1 19.4-6.9v-2.4z m-38.8 8c0 3 8.7 5.4 19.4 5.4s19.4-2.4 19.4-5.4v4.9c0 3.8-8.7 6.9-19.4 6.9s-19.4-3.1-19.4-6.9v-4.9z m0 0c0 3 8.7 5.4 19.4 5.4s19.4-2.4 19.4-5.4v4.9c0 3.8-8.7 6.9-19.4 6.9s-19.4-3.1-19.4-6.9v-4.9z m0 10.5c0 3 8.7 5.4 19.4 5.4s19.4-2.4 19.4-5.4v4.9c0 3.8-8.7 6.9-19.4 6.9s-19.4-3-19.4-6.8v-5z m0 10.6c0 3 8.7 5.4 19.4 5.4s19.4-2.4 19.4-5.4v4.9c0 3.8-8.7 6.9-19.4 6.9s-19.4-3.1-19.4-6.9v-4.9z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(database_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  