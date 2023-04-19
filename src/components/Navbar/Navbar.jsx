import {
  Box,
  Button,
  Center,
  Heading,
  List,
  ListIcon,
  ListItem,
  Spacer,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

export const Navbar = () => {
  return (
    <>
      <header>
        <Heading as="h1" fontFamily="Roboto">
          To do List
        </Heading>
      </header>

      <nav>
        <Box
          bg="gray.200"
          borderRadius="5px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="30px"
        >
          <List
          w="100%"
            display="flex"
            gap={10}
            p={3}
            alignItems="left"
            marginLeft="50px"
          >
            <ListItem>To do</ListItem>
            <ListItem>Doing</ListItem>
            <ListItem>Done</ListItem>
            <ListItem>See All</ListItem>
          </List>
        </Box>
      </nav>
    </>
  );
};
