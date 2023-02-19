import type { GetStaticProps, NextPage } from "next";

import Layout from "Layout/Layout";
import {
  Accordion,
  Autocomplete,
  Box,
  Center,
  Code,
  Flex,
  Grid,
  Switch,
  Typography,
} from "@src/components";
import ToggleTheme from "@src/components/ToggleTheme/ToggleTheme";
import React from "react";
import { Tooltip } from "@src/components/Tooltip/Tooltip";

export type Data = {
  data: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }[];
};

const Home = ({ data }: Data) => {
  const handleSelect = (selectedItem: string) => {
    console.log("Selected item:", selectedItem);
  };

  const names = data.map((item) => item.name);
  const emails = data.map((item) => item.email);
  const username = data.map((item) => item.username);

  return (
    <Layout
      className="h-screen w-screen items-center justify-center"
      title="New Title"
    >
      {" "}
      <ToggleTheme
        as="button"
        className="absolute top-0 right-0 rounded-none"
      />
      <Tooltip text="theme toggle">
        <Typography as="code">
          {`
<html>
  <head>
  
  </head>
  <body>

  </body>
</html>
          `}
        </Typography>
      </Tooltip>
      <Autocomplete
        label="names"
        atSelect={handleSelect}
        id="names"
        options={names}
      />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
