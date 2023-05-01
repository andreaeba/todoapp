import {
  Box,
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import plus from "../../assets/icons/plus.png";
import edit from "../../assets/icons/edit.png";
import check from "../../assets/icons/check.png";
import delete2 from "../../assets/icons/delete.png";

export const Todo = () => {
  const [inputText, setInputText] = useState("");

  const [toDo, setToDo] = useState(
    JSON.parse(localStorage.getItem(["tasks"])) || []
  );

  let task = {
    id: Math.floor(Math.random() * 10000),
    text: inputText,
    isComplete: false,
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
  };

  const handleSaveTask = (e) => {
    e.preventDefault();

    setToDo([...toDo, task]);

    localStorage.setItem("tasks", JSON.stringify([...toDo, task]));

    setInputText("");
  };

  // Eliminar Task

  const deleteTask = (id) => {
    const isDelete = window.confirm(
      `¿Está seguro que desea eliminar la tarea?`
    );

    if (isDelete) {
      const newListTaks = toDo.filter((task) => task.id !== id);
      setToDo(newListTaks);

      localStorage.setItem("tasks", JSON.stringify([toDo]));
    }
  };

  // Editar un task

  const editTask = (task) => {};

  // Hacer check a task

  const checkedTask = (id) => {
    let newArray = JSON.parse(localStorage.getItem("tasks")).map((task) => {
      if (task.id == id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });

    setToDo(newArray);

    localStorage.setItem("tasks", JSON.stringify(newArray));
  };

  // Función para filtrar

  const filterTasks = (e) => {
    console.log(e.target.value)

    let tasksArray = JSON.parse(localStorage.getItem("tasks"))

    if(e.target.value === "completed") {

      const tasksCompleted = tasksArray.filter((task) => task.isComplete === true)
      console.log(tasksCompleted)

      setToDo(tasksCompleted)
      return toDo

    } 
    
    if (e.target.value === "pending") {

      const tasksPending = tasksArray.filter((task) => task.isComplete === false)

      setToDo(tasksPending)

      return toDo

    } 
    
    if (e.target.value === "all") {
      setToDo(tasksArray)
      return toDo

    }
   
  }


  return (
    <>
    <Box>
      <Box borderRadius="5px" gap={2}>
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

      <Box marginTop="20px">
        <FormControl onChange={filterTasks}>
          <FormLabel>Filter tasks</FormLabel>
          <Select placeholder="Select a filter">
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="all">All</option>
          </Select>
        </FormControl>
      </Box>

      <Box w="100vw" mt="20px" display="flex" gap={10} justifyContent="center">
        <Box w="35%" bg="gray.200" borderRadius="5px">
          <Text textAlign="left" p={5}>
            To do ⌛
          </Text>
          <Box>
            {toDo.map((task, id) => (
               <Card
                key={id}
                m="8px"
                display="flex"
                flexDirection="row"
                alignItems="center"
                
              >
                <CardBody>
                  <Text
                    className={
                      toDo.filter((task) => task.id == id) &&
                      `${task.isComplete ? "checked" : ""}`
                    }
                  >
                    {task.text}
                  </Text>
                </CardBody>
                <Box
                  display="flex"
                  flexDirection="row"
                  gap={1}
                  marginEnd="10px"
                >
                  <Button bgColor="white" onClick={() => checkedTask(task.id)}>
                    <Image src={check} width="14px" />
                  </Button>
                  <Button bgColor="white" onClick={() => editTask(task)}>
                    <Image src={edit} width="14px" />
                  </Button>
                  <Button bgColor="white" onClick={() => deleteTask(task.id)}>
                    <Image src={delete2} width="14px" />
                  </Button>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
      </Box>
    </>
  );
};