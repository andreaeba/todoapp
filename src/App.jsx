import { Box, Button, Card, CardBody, CardHeader, Flex, Heading, HStack, Stack, StackDivider, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import { Input2 } from "./components/Input/Input";
import { Navbar } from "./components/Navbar/Navbar";
import { Tasks } from "./components/Tasks/Tasks";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <div className="App">  
      <Navbar/>
      
      <Tasks/>
          <HStack >
            {[ ...Array(6)].map((item) => (
                          <Card m="5px">
                          <CardBody> 
                            <Text>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, perferendis?
                            </Text>
                          </CardBody>
                        </Card>
            ))}

          </HStack>
        </div>
    </>
  );
}

export default App;
