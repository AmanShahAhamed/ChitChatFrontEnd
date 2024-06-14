import React from "react";
import { useMount } from "./useMount";

export const useAutoScroll = (items: unknown[] = []) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useMount(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, items as unknown[]);

  return [ref];
};
