import React from "react";
import { useMount } from "./useMount";

export const useAutoScroll = (items: unknown[] = []) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useMount(
    () => {
      if (ref.current) {
        const lastNode = ref.current.lastChild as HTMLDivElement;
        lastNode.scrollIntoView();
      }
    },
    [items] as unknown[]
  );
  return [ref];
};
