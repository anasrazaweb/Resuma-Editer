import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Typography = ({ variant = "h3", children, className, ...props }) => {
  const Component = variant;

  const baseClasses = "text-gray-900";

  const variantClasses = {
    h1: " text-xl md:text-5xl font-semibold ",
    h2: " text-lg md:text-4xl font-semibold ",
    h3: " text-base md:text-base font-medium ",
    h4: " text-15fs md:text-base font-normal  tracking-none",
    h5: "text-sm font-normal	 ",
    h6: "text-defaultPrimary text-lg font-normal	",
    p: "!text-mds leading-2 font-normal ",
  };

  return (
    <Component
      className={classNames(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"])
    .isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Typography.defaultProps = {
  className: "",
};

export default Typography;
