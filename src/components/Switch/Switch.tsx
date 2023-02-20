import Flex from "../Flex/Flex";
import Typography from "../Typography/Typography";
import Box from "../Box/Box";
import { motion } from "framer-motion";
import classname from "classnames";

type SwitchProps = {
  id: string;
  checked: boolean;
  onChange: (e: any) => void;
  OffIcon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  OnIcon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  className?: string;
};

const Switch = ({
  id,
  checked,
  onChange,
  OffIcon,
  OnIcon,
  className,
}: SwitchProps) => {
  return (
    <Flex
      className={classname(
        className,
        "relative",
        "w-[80px]",
        "h-[40px]",
        "min-w-[80px]",
        "items-center",
        "rounded-full",
        "bg-gray-300",
        "p-1",
        "dark:bg-gray-900"
      )}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e)}
        className="sr-only"
      />
      <label htmlFor={id} className="w-full">
        <Flex className="items-center rounded-full">
          <>
            {checked ? (
              <motion.div
                className="flex cursor-pointer items-center justify-center rounded-full bg-gray-800 p-1 "
                transition={{ duration: 0.1 }}
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 37, opacity: 1 }}
              >
                {OnIcon ? (
                  <OnIcon className="h-7 w-7 text-amber-500" />
                ) : (
                  <Box className="h-7 w-7" />
                )}
              </motion.div>
            ) : (
              <motion.div
                transition={{ duration: 0.1 }}
                initial={{ x: 37, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="flex cursor-pointer items-center justify-center rounded-full bg-gray-200 p-1"
              >
                {OffIcon ? (
                  <OffIcon className="h-7 w-7 text-amber-500" />
                ) : (
                  <Box className="h-7 w-7 text-amber-500" />
                )}
              </motion.div>
            )}
          </>
        </Flex>
      </label>
    </Flex>
  );
};

export default Switch;
