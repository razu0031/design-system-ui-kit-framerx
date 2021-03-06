
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function portal_roles_and_subordinates_icon(props) {
  return (
    <svg height="100" width="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m68 49.1c0 1.1-0.9 2-2 2h-18.6c-1.1 0-2-0.9-2-2v-3c0-1.1 0.9-2 2-2h18.6c1.1 0 2 0.9 2 2v3z m-28.6 0c0 1.1-0.9 2-2 2h-3.4c-1.1 0-2-0.9-2-2v-3c0-1.1 0.9-2 2-2h3.4c1.1 0 2 0.9 2 2v3z m34.4-29.1h-47.6c-3.4 0-6.2 2.8-6.2 6.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2v-47.6c0-3.4-2.8-6.2-6.2-6.2z m-26.4 7.4c0-0.8 0.8-1.4 1.6-1.4h23.4c0.8 0 1.4 0.8 1.4 1.6v3c0 0.8-0.8 1.4-1.6 1.4h-23.4c-0.8 0-1.4-0.8-1.4-1.6v-3z m-8-1.4c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z m-10.4 0c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z m45 46.6c0 0.8-0.8 1.4-1.6 1.4h-4.4v-14.9c0-1.1-0.9-2-2-2h-32c-1.1 0-2 0.9-2 2v14.9h-4.6c-0.8 0-1.4-0.8-1.4-1.6v-33c0-0.8 0.8-1.4 1.6-1.4h45c0.8 0 1.4 0.8 1.4 1.6v33z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(portal_roles_and_subordinates_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
