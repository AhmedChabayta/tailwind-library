import Head from "next/head";
import { Box, Button, Flex, Sidebar } from "@src/components";
import classnames from "classnames";
import { useSchemeStore } from "@src/Store/schemeStore";

interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
  className?: string;
}

const Layout = (props: LayoutProps) => {
  const { children, title, className } = props;

  return (
    <div>
      <Head>
        <title className="sm:w-full">{title || "Social Media"}</title>
      </Head>
      <Flex
        align="center"
        justify="center"
        className="h-screen w-screen overflow-hidden"
      >
        <Sidebar className="h-screen w-[20vw] overflow-y-scroll bg-gray-50 dark:bg-gray-800" />
        <Box
          className={classnames(
            className,
            "h-screen",
            "w-screen",
            "flex-1",
            "overflow-y-scroll",
            "bg-gray-50",
            "dark:bg-gray-800"
          )}
        >
          {children}
        </Box>
      </Flex>
    </div>
  );
};
export default Layout;
