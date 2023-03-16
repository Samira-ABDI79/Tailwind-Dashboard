import * as React from 'react';
const SvgSun = (props) => (
  <svg
    className="sun_svg__h-8 sun_svg__w-8 sun_svg__text-red-500"
    style={{width:"1.5rem"}}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx={12} cy={12} r={5} />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);
export default SvgSun;
