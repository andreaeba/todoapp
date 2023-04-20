import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  FormControl,
  FormHelperText,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

export const InputNewTask = () => {
  const [inputText, setInputText] = useState("");

  const [categoryToDo, setCategoryToDo] = useState(
    JSON.parse(localStorage.getItem("task-todo")) || []
  );

  const handleInputChange = (e) => {
    const text = e.target.value;
    // localStorage.setItem('task-todo', valueInputTask)
    setInputText(text);
    // console.log(inputText);
  };

  const handleSaveTask = (e) => {
    e.preventDefault();
    setCategoryToDo([...categoryToDo, inputText]);

    localStorage.setItem(
      "task-todo",
      JSON.stringify([...categoryToDo, inputText])
    );

    // console.log(categoryToDo);
    setInputText("");
  };

  console.log(JSON.parse(localStorage.getItem("task-todo")));

  return (
    <>
      <Box
        // w='100vw'
        // bg="red"
        borderRadius="5px"
        gap={2}
      >
        <FormControl
          display="flex"
          flexDirection="column"
          // justifyContent="flex-start"
          alignItems="flex-start"
          marginTop="30px"
        >
          <Text mb="8px">What's the new task?</Text>
          <Input
            value={inputText}
            onChange={handleInputChange}
            placeholder="Add here your task!"
            size="lg"
          />

          <Button colorScheme="blue" marginTop="10px" onClick={handleSaveTask}>
            Add New Task
          </Button>
        </FormControl>
      </Box>

      <Box w="100vw" mt="20px" display="flex" gap={10}>
        <Box w="30%" bg="gray.200" borderRadius="5px">
          <Text textAlign="left" p={5}>
            To do ⌛
          </Text>
          <Box>
            {categoryToDo.map((task) => (
              <Card key={task}
              m="8px">
                <CardBody>
                  <Text>{task}</Text>
                </CardBody>
              </Card>
            ))}
          </Box>
        </Box>

        <Box w="25%" bg="gray.200" borderRadius="5px">
          <Text textAlign="left" p={5}>
            Doing 🤏
          </Text>
        </Box>
        <Box w="25%" bg="gray.200" borderRadius="5px">
          <Text textAlign="left" p={5}>
            Done 😎
          </Text>
        </Box>
      </Box>
    </>
  );
};
