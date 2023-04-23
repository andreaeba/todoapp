import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  FormControl,
  FormHelperText,
  HStack,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import plus from "../../assets/icons/plus.png";
import edit from "../../assets/icons/edit.png";
import check from "../../assets/icons/check.png";
import delete2 from "../../assets/icons/delete.png"

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

          <Button
            colorScheme="blue"
            marginTop="10px"
            onClick={handleSaveTask}
            gap={2}
          >
            Add New Task <Image src={plus} width="14px" />
          </Button>
        </FormControl>
      </Box>

      <Box w="100vw" mt="20px" display="flex" gap={10} justifyContent="center" >
        <Box w="35%" bg="gray.200" borderRadius="5px">
          <Text textAlign="left" p={5}>
            To do ⌛
          </Text>
          <Box>
            {categoryToDo.map((task) => (
              <Card key={task} m="8px" display="flex" flexDirection="row" alignItems="center" > 
                <CardBody>
                  <Text>{task}</Text>
                </CardBody>
                <Box display="flex" flexDirection="row" gap={1} marginEnd="10px">
                  <Button bgColor="white"><Image src={check} width="14px"  /></Button>
                  <Button bgColor="white"><Image src={edit} width="14px" /></Button>
                  <Button bgColor="white"><Image src={delete2} width="14px" /></Button>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
