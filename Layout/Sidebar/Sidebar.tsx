import React, { useEffect } from "react";
import classnames from "classnames";
import { Button, Flex, Typography, Tooltip } from "@src/components";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import image from "@src/image.webp";
import Image from "next/image";
import Accordion from "../../src/components/Accordion";
import { SidebarProps } from "./Sidebar.Types";

const lists = [
  HomeModernIcon,
  HomeModernIcon,
  HomeModernIcon,
  HomeModernIcon,
  HomeModernIcon,
  HomeModernIcon,
  HomeModernIcon,
];
const BASIC_INFO_LIST = [
  {
    title: "Name",
    value: "Ahmed Chabayta",
  },
  {
    title: "DOB",
    value: "12/23/1991",
  },
  {
    title: "Address",
    value: "5th Avenue Street",
  },
];

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>((props, ref) => {
  const { className, show = true, ...rest } = props;
  const [showSidebar, setShowSidebar] = React.useState<boolean>(true);

  useEffect(() => {
    setShowSidebar(show ? true : false);
  }, [show]);

  return showSidebar ? (
    <Flex
      col
      ref={ref}
      className={classnames(className, "text-gray-900 dark:text-gray-300")}
      {...rest}
    >
      <Button
        role="create new post"
        type="button"
        className="w-full rounded-none py-4"
      >
        Create New Post
      </Button>
      <Tooltip text="image">
        <Image src={image} alt="" />
      </Tooltip>
      <Flex col className="my-4 space-y-2 px-3 font-semibold">
        <Typography className="flex w-full justify-between ">
          <span>username:</span>
          John Smith
        </Typography>
        <Typography className="flex w-full justify-between ">
          <span>username:</span>
          John Smith
        </Typography>
        <Typography className="flex w-full justify-between ">
          <span>username:</span>
          John Smith
        </Typography>
        <Typography className="flex w-full justify-between ">
          <span>username:</span>
          John Smith
        </Typography>
      </Flex>

      <Accordion className="flex-1">
        {BASIC_INFO_LIST.map((item, i) => (
          <Accordion.Item
            chevronClassName=""
            labelContainerClassName="bg-transparent"
            index={i}
            key={i}
            label={item.title}
          >
            <Typography className="flex w-full justify-between py-1">
              <Typography className=" font-black" as="span">
                {item.title}
              </Typography>
              {item.value}
            </Typography>
          </Accordion.Item>
        ))}
      </Accordion>

      <Typography as="small" className="mx-auto text-xs font-[600] uppercase">
        social media. all rights reserved 2023
      </Typography>
    </Flex>
  ) : (
    <></>
  );
});
Sidebar.displayName = "Sidebar";

export default Sidebar;
