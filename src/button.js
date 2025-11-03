import React from "react";
import { Link } from "react-router-dom"; // use react-router Link for internal navigation

export function Button({ to, children, className = "", variant, ...props }) {
  const base = `inline-flex items-center justify-center ${className}`;

  if (to) {
    return (
      <Link to={to} className={base} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}

export default Button;