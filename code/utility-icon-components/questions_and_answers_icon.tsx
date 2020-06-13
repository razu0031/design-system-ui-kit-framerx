
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function questions_and_answers_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m50 28c0-3.9-2.5-7.3-6-8.5-0.3-9.7-8.2-17.5-18-17.5s-17.7 7.8-18 17.5c-3.5 1.2-6 4.6-6 8.5 0 4.2 2.9 7.7 6.7 8.7 2.2 7.7 9.1 13.3 17.3 13.3s15.1-5.6 17.3-13.3c3.8-1 6.7-4.5 6.7-8.7z m-10-9l-0.1-0.1 0.4 0.1h-0.3z m-14 27c-7.7 0-14-6.5-14-14.4 0-2 0.4-5 1.2-6.8 0.1-0.3 0.3-0.6 0.4-0.9 3-1.2 5.6-3.3 7.3-6 3.5 4.4 9 7.4 15.1 7.4 2.1 0 2.7 0.1 2.9 0 0.4 1.3 0.8 2.9 0.9 4.5-0.6 2.5-4.5 4.9-10 5.2-0.2-0.5-0.8-1-1.4-1h-5c-0.8 0-1.4 0.8-1.4 1.6v3c0 0.8 0.6 1.4 1.4 1.4h5c0.7 0 1.2-0.3 1.4-0.9 3.6-0.1 6.8-1.1 9.3-2.6-1.9 5.5-7 9.5-13.1 9.5z" fill={props.fill}/>
</svg>
  );
};

addPropertyControls(questions_and_answers_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  