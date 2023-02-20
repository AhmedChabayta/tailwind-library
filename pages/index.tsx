import type { GetStaticProps, NextPage } from "next";

import Layout from "Layout/Layout";
import { Autocomplete, Box } from "@src/components";
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
  const username = data.map((item) => item.username);

  return (
    <Layout
      className="h-screen w-screen flex-col items-center justify-center space-y-12"
      title="New Title"
    >
      <ToggleTheme as="button" className="fixed right-0 top-0" />

      <Box className="relative">
        <Autocomplete
          placeholder="Names"
          className="flex-row-reverse bg-gray-300 dark:bg-gray-500"
          atSelect={handleSelect}
          id="names"
          label="names"
          options={names}
          chevronClassName="rotate-0"
          labelClassName="text-gray-900 hover:bg-lime-500 dark:text-gray-300"
          inputClassName="px-4 placeholder:text-fuchsia-500"
          actionsContainerClassName=""
          iconClassName="w-5"
          optionsContainerClassName=""
          optionsClassName="text-gray-900 hover:bg-lime-500 dark:text-gray-300"
        />
      </Box>
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
