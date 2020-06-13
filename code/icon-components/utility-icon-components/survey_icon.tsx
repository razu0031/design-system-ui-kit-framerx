
import * as React from 'react';
import { addPropertyControls, ControlType } from 'framer';

export function survey_icon(props) {
  return (
    <svg height="52" width="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg" {...props}>
	<path d="m5.2 3h35.6c1.7 0 3.2 1.5 3.2 3.3v3.4c0 1.8-1.5 3.3-3.2 3.3h-35.6c-1.7 0-3.2-1.5-3.2-3.3v-3.4c0-1.8 1.5-3.3 3.2-3.3z m-4 9h19.6c3.8 3 5.2 4.5 5.2 6.3v3.4c0 1.8-1.4 3.3-3.2 3.3h-19.6c-1.8 0-3.2-1.5-3.2-3.3v-3.4c0-1.8 1.4-3.3 3.2-3.3z m35.8 13c6 0 11 4.9 11 11s-5 11-11 11-11-5-11-11 4.9-11 11-11z m7 7.9c0.3-0.2 0.3-0.8 0-1l-1.1-1.1c-0.3-0.3-0.8-0.3-1.1 0l-6 6.8-2.7-2.8c-0.3-0.3-0.8-0.3-1.1 0l-1.2 1.1c-0.3 0.2-0.3 0.7 0 1l3.9 3.8c0.3 0.3 0.7 0.5 1.1 0.5 0.5 0 0.8-0.2 1.1-0.5l7.1-7.8z m-40.8-2.9h18.6c-0.7 1.9-1 3.6-1 5-0.1 1.8 0.1 3.4 0.5 5h-18.1c-1.8 0-3.2-1.5-3.2-3.3v-3.4c0-1.8 1.4-3.3 3.2-3.3z" fill="#FFF"/>
</svg>
  );
};

addPropertyControls(survey_icon, {
  fill: {
    type: ControlType.Color,
    title: 'Fill',
    defaultValue: '#ffffff'
  }
});
  