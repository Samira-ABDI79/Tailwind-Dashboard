import * as React from "react";
const SvgComments = (props) => (
  <svg
    className="comments_svg__h-8 comments_svg__w-8 comments_svg__text-red-500"
    width={24}
    height={24}
    strokeWidth={2}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="m12 20-3-3H7a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-2l-3 3M8 9h8M8 13h6" />
  </svg>
);
export default SvgComments;
