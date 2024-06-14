import React from "react";

export const useMount = (fn: () => void, deps: unknown[] = []) => {
  React.useEffect(() => {
    return fn();
  }, deps);
};
