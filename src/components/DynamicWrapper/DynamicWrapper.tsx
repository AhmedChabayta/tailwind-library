import dynamic from "next/dynamic";
import { DynamicWrapper } from "./DynamicWrapper.Types";

const NoSsr = (props: DynamicWrapper) => {
  const { children, ssr } = props;
  const Dynamic = dynamic(() => import("./Wrapper"), {
    ssr: ssr,
  });

  return <Dynamic>{children}</Dynamic>;
};

export default NoSsr;
