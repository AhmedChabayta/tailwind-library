import type { NextPage } from "next";

import Layout from "Layout/Layout";
import {
  Accordion,
  Autocomplete,
  Button,
  Flex,
  Grid,
  Typography,
} from "@src/components";
import { HomeIcon } from "@heroicons/react/20/solid";

const Home: NextPage = () => {
  const options = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "kanana",
    "strawberry",
    "cranberry",
    "watermelon",
    "olives",
    "corn",
    "bababa",
    "banaya",
    "bahaja",
  ];

  const handleSelect = (selectedItem: string) => {
    console.log("Selected item:", selectedItem);
  };
  return (
    <Layout
      className="flex w-screen items-center justify-center bg-black"
      title="New Title"
    >
      <Flex col>
        <Grid>
          <Grid.Item>
            <Typography as="code" className="dark:text-white"></Typography>
          </Grid.Item>
        </Grid>
      </Flex>
    </Layout>
  );
};

export default Home;
