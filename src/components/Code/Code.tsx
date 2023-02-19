import { CodeBracketIcon } from "@heroicons/react/24/solid";
import Button from "@src/components/Button/Button";
import { motion } from "framer-motion";
import React from "react";
import { Code } from "./Code.Types";
import classnames from "classnames";

const Code = React.forwardRef<HTMLElement, Code>((props, ref) => {
  const { className, children, ...rest } = props;
  const [codeText, setCodeText] = React.useState<string | null>("");
  const [toast, setToast] = React.useState<string | null>();

  React.useEffect(() => {
    if (typeof children === "string") {
      setCodeText(children);
    }
  }, [children]);
  const copyToClipboard = () => {
    try {
      setToast(null);
      navigator?.clipboard?.writeText(codeText!);

      codeText !== "" ? setToast("Copied") : setToast("No content detected");

      setTimeout(() => {
        setToast(null);
      }, 5000);
    } catch (error: any) {
      setToast(error.message);
      setTimeout(() => {
        setToast(null);
      }, 8000);
    }
  };
  React.useEffect(() => {}, []);
  return (
    <pre className="relative flex max-h-[600px] max-w-4xl overflow-x-hidden overflow-y-scroll whitespace-pre-wrap border bg-white py-4 px-8 text-black dark:bg-black dark:text-gray-300">
      {/* {React.createElement(as, { ref, className, ...rest }, codeText)} */}
      <code ref={ref} className={classnames(className)} {...rest}>
        {`${codeText}`}
      </code>
      <Button
        className="absolute top-0 right-0 rounded-none bg-transparent"
        onClick={copyToClipboard}
      >
        <CodeBracketIcon className="w-7" />
      </Button>

      <motion.div
        onClick={() => setToast(null)}
        animate={{
          y: typeof toast === "string" ? 0 : -300,
          x: 0,
          opacity: typeof toast === "string" ? 1 : 0,
          color: typeof toast === "string" ? "" : "transparent",
        }}
        transition={{ duration: 0.3 }}
        className="fixed left-1/2 top-0 flex h-9 w-52 translate-x-[-50%] cursor-pointer items-center justify-center bg-gray-400 text-gray-900 dark:bg-gray-900 dark:text-gray-300"
      >
        {toast}
      </motion.div>
    </pre>
  );
});
Code.displayName = "Code";
export default Code;
