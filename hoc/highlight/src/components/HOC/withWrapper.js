import React from "react";
import New from "../New";
import Popular from "../Popular";

const withWrapper = (WrappedComponent) => {
  const Wrapper = ({ ...props }) => {
    if (props.views > 1000)
      return (
        <Popular>
          <WrappedComponent {...props} />
        </Popular>
      );
    if (props.views < 100)
      return (
        <New>
          <WrappedComponent {...props} />
        </New>
      );

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withWrapper;
