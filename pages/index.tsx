import type { GetStaticProps, NextPage } from "next";

import Layout from "Layout/Layout";
import {
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

  return (
    <Layout className="h-screen" title="New Title">
      <ToggleTheme as="button" className="absolute right-0 rounded-none" />
      <Flex col className="h-full items-center justify-center space-y-12">
        <Autocomplete
          id="name"
          label="name"
          atSelect={handleSelect}
          options={names}
        />
        <Autocomplete
          id="email"
          label="email"
          atSelect={handleSelect}
          options={emails}
        />
      </Flex>
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
