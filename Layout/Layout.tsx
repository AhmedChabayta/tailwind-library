import Head from "next/head";
import { Box, Button, Flex, Sidebar } from "@src/components";
import classnames from "classnames";

interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
  className?: string;
}

const Layout = (props: LayoutProps) => {
  const { children, title, className } = props;

  return (
    <>
      <Head>
        <title className="sm:w-full">{title || "Social Media"}</title>
      </Head>
      <Flex
        align="center"
        justify="center"
        className="h-screen w-screen overflow-hidden bg-black"
      >
        <Sidebar className="h-screen w-[20vw] overflow-y-scroll bg-cyan-700" />
        <Box
          className={classnames(
            className,
            "h-screen",
            "w-screen",
            "flex-1",
            "overflow-y-scroll"
          )}
        >
          {children}
        </Box>
      </Flex>
    </>
  );
};
export default Layout;
