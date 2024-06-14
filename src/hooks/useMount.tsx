import React from "react";

export const useMount = (fn: () => void, deps = []) => {
  React.useEffect(() => {
    return fn();
  }, deps);
};
