
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function picklist_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m48 41c1.1 0 2-0.9 2-2v-26c0-1.1-0.9-2-2-2h-44c-1.1 0-2 0.9-2 2v26c0 1.1 0.9 2 2 2h44z m-42-4v-22h40v22h-40z m26.5-14h9.3c0.3 0 0.4 0.3 0.2 0.5l-4.6 5.3c-0.2 0.2-0.5 0.2-0.7 0l-4.6-5.3c-0.1-0.2 0.1-0.5 0.4-0.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(picklist_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  