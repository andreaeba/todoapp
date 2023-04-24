import {
  Box,
  Button,
  Card,
  CardBody,
  FormControl,
  Image,
  Input,
  Text,
  background,
} from "@chakra-ui/react";
import React, { useState } from "react";
import plus from "../../assets/icons/plus.png";
import edit from "../../assets/icons/edit.png";
import check from "../../assets/icons/check.png";
import delete2 from "../../assets/icons/delete.png"
import { Todo } from "../Todo/Todo";

export const InputNewTask = () => {
  const [inputText, setInputText] = useState("");

  const [ToDo, setToDo] = useState(
    JSON.parse(localStorage.getItem(["tasks"])) || []
  );

  // const [edit, setEdit] = useState(null)

  let task = {
    id: Math.floor(Math.random() * 10000),
    text: inputText,
    isComplete: false
  }

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    console.log(text);
  };

  const handleSaveTask = (e) => {
    e.preventDefault();

    setToDo([...ToDo, task ]);

    localStorage.setItem(
      "tasks",
      JSON.stringify([ ...ToDo , task ])
    );

    console.log(ToDo);

    setInputText("");
  };

  console.log(JSON.parse(localStorage.getItem("tasks")));

  // Eliminar Task

  const deleteTask = (id) => {
    console.log(id)

    const isDelete = window.confirm(`¿Está seguro que desea eliminar la tarea?`)

    if(isDelete) {

      const newListTaks = ToDo.filter(task => task.id !== id)
      setToDo(newListTaks)

      localStorage.setItem(
        "tasks",
        JSON.stringify([ToDo])
      );

    }
  }

  // Editar un task

  const editTask = (task) => {
    console.log(task)

    


  }
  // Hacer check a task

  const checkedTask = (e) => {

    console.log(e.target.isComplete)

    // let newTask = {
    //   id: '',
    //   text: '',
    //   isComplete: ''
    // }

    // // console.log(task.isComplete)

    // if(isComplete) {
    //    newTask = {...task, isComplete: !isComplete}
    // } else {
    //   newTask = {...task, isComplete: !isComplete}
    // }

    // // console.log(newTask)
    
    // task = newTask

    // console.log(task)
  }


  return (
    <>
      <Box
        borderRadius="5px"
        gap={2}
      >
        <FormControl
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          marginTop="30px"
        >
          <Text mb="8px">What's the new task?</Text>
          <Input
            value={inputText}
            onChange={handleInputChange}
            placeholder="Add here your task!"
            size="lg"
            id="inputText"
          />

          <Button
            colorScheme="blue"
            marginTop="10px"
            onClick={handleSaveTask}
            gap={2}
          >
            <Image src={plus} width="14px" />
            Add New Task 
          </Button>
        </FormControl>
      </Box>

      <Box w="100vw" mt="20px" display="flex" gap={10} justifyContent="center" >
        <Box w="35%" bg="gray.200" borderRadius="5px">
          <Text textAlign="left" p={5}>
            To do ⌛
          </Text>
          <Box>
            {ToDo.map((task) => (
              <Card key={task} m="8px" display="flex" flexDirection="row" alignItems="center" > 
                <CardBody>
                  <Text>{task.text} </Text>
                </CardBody>
                <Box display="flex" flexDirection="row" gap={1} marginEnd="10px">              
                  <Button bgColor="white"><Image src={check} width="14px"/></Button>
                  <Button bgColor="white" onClick={() => editTask(task)} ><Image src={edit} width="14px" /></Button>
                  <Button bgColor="white" onClick={() => deleteTask(task.id)}><Image src={delete2} width="14px" /></Button>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

