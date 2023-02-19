import Flex from "../Flex/Flex";
import Typography from "../Typography/Typography";
import Box from "../Box/Box";
import { AnimatePresence, motion } from "framer-motion";

type SwitchProps = {
  id: string;
  checked: boolean;
  onChange: (e: any) => void;
  OffIcon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  OnIcon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
};

const Switch = ({ id, checked, onChange, OffIcon, OnIcon }: SwitchProps) => {
  return (
    <Flex className="relative min-h-[35px] w-[80px] min-w-[80px] items-center rounded-full bg-gray-300 p-1 dark:bg-gray-900">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e)}
        className="sr-only"
      />
      <label htmlFor={id} className="w-full">
        <Typography as="span" className="flex items-center rounded-full">
          <AnimatePresence>
            {checked ? (
              <motion.div
                className="flex cursor-pointer items-center justify-center rounded-full bg-gray-800 p-1"
                transition={{ duration: 0.2 }}
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 37, opacity: 1 }}
                exit={{ x: 0, opacity: 0 }}
              >
                {OnIcon ? (
                  <OnIcon className="w-7 text-amber-500" />
                ) : (
                  <Box className="h-7 w-7" />
                )}
              </motion.div>
            ) : (
              <motion.div
                transition={{ duration: 0.2, once: true }}
                initial={{ x: 37, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -37, opacity: 0 }}
                className="flex cursor-pointer items-center justify-center rounded-full bg-gray-200 p-1"
              >
                {OffIcon ? (
                  <OffIcon className="w-7 text-amber-500" />
                ) : (
                  <Box className="h-7 w-7 text-amber-500" />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </Typography>
      </label>
    </Flex>
  );
};

export default Switch;
