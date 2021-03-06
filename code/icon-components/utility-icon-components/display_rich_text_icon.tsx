
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function display_rich_text_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m4.1 43.1h43.9c0.9 0 1.6 0.7 1.6 1.6v3.1c0 0.9-0.7 1.6-1.6 1.6h-43.9c-0.9 0-1.6-0.7-1.6-1.6v-3.1c0-0.9 0.7-1.6 1.6-1.6z m0-14.1h43.9c0.9 0 1.6 0.7 1.6 1.6v3.1c0 0.9-0.7 1.6-1.6 1.6h-43.9c-0.9 0-1.6-0.7-1.6-1.6v-3.1c0-0.9 0.7-1.6 1.6-1.6z m27.9-14.1h16c0.9 0 1.6 0.7 1.6 1.6v3.1c0 0.9-0.7 1.6-1.6 1.6h-16c-0.9 0-1.6-0.7-1.6-1.6v-3.1c0-0.9 0.7-1.6 1.6-1.6z m-7.9 6.7l-7.4-18.3c-0.2-0.3-0.5-0.6-0.9-0.6h-5.7c-0.3 0-0.7 0.2-0.8 0.6l-6.8 18.3c-0.1 0.3 0.1 0.8 0.5 0.8h3.6c0.3 0 0.7-0.3 0.8-0.6l1.4-3.9h8.7l1.5 3.9c0.1 0.3 0.5 0.6 0.8 0.6h3.6c0.5 0 0.8-0.4 0.7-0.8z m-13.6-8.5l2.3-5.8h0.5l2.5 5.8h-5.3z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(display_rich_text_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
