import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export const Tasks = () => {
  return (
    <>
      <Box mt="20px" display="flex" gap={10}>
        <Box w="25%" h="200px" bg="gray.200" borderRadius="5px">
          <Text textAlign='left' p={5}>To do ⌛</Text>
        </Box>
        <Box w="25%" h="200px" bg="gray.200" borderRadius="5px">
          <Text textAlign='left' p={5}>Doing 🤏</Text>
        </Box>
        <Box w="25%" h="200px" bg="gray.200" borderRadius="5px">
          <Text textAlign='left' p={5}>Done 😎</Text>
        </Box>
      </Box>
    </>
  );
};
