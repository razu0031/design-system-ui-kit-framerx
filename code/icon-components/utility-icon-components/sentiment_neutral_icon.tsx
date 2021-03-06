
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function sentiment_neutral_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m26 2c-13.2 0-24 10.8-24 24.1s10.8 24.1 24 24.1 24-10.8 24-24.1-10.8-24.1-24-24.1z m-9 13c1.7 0 3 1.8 3 4s-1.3 4-3 4-3-1.8-3-4 1.3-4 3-4z m21 19.1c0 1.1-0.9 1.9-1.9 1.9h-20.2c-1.1 0-1.9-0.9-1.9-1.9v-0.1c0-1.1 0.9-1.9 1.9-1.9h20.1c1.1 0 2 0.9 2 2z m-3-11.1c-1.7 0-3-1.8-3-4s1.3-4 3-4 3 1.8 3 4-1.3 4-3 4z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(sentiment_neutral_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  
