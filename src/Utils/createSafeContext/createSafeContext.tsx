import React from "react";

// eslint-disable-next-line no-unused-vars
const createSafeContext = <T,>(defaultValue: T) => {
  const ctx = React.createContext<T | null>(null);
  const useCtx = () => {
    const c = React.useContext(ctx);
    if (!c)
      throw new Error(`useContext must be inside a Provider with a value`);
    return c;
  };
  return [useCtx, ctx.Provider] as const;
};

export default createSafeContext;

// taken from mantine github
