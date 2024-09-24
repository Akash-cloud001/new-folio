import React, { forwardRef } from "react";

const MenuBarIcon = forwardRef((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref} // Forward the ref
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path id="first-line" className="origin-center "
        d="M27.2002 12.7996H4.8002C3.9166 12.7996 3.2002 12.0832 3.2002 11.1996C3.2002 10.316 3.9166 9.59961 4.8002 9.59961H27.2002C28.0846 9.59961 28.8002 10.316 28.8002 11.1996C28.8002 12.0832 28.0846 12.7996 27.2002 12.7996Z"
      />
      <path id="second-line" className="origin-center "
        d="M27.2002 22.3992H4.8002C3.9166 22.3992 3.2002 21.6828 3.2002 20.7992C3.2002 19.9156 3.9166 19.1992 4.8002 19.1992H27.2002C28.0846 19.1992 28.8002 19.9156 28.8002 20.7992C28.8002 21.6828 28.0846 22.3992 27.2002 22.3992Z"
      />
    </svg>
  );
});

export default MenuBarIcon;
