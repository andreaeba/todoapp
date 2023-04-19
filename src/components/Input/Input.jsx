import { Container, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export const Input2 = () => {
  const [valueInputTask, setValueInputTaks] = useState("");
  const handleChange = (e) => setValueInputTaks(e.target.value);

  return (
    <Container>
      <Text mb="8px">Value: {value}</Text>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Here is a sample placeholder"
        size="sm"
      />
    </Container>
  );
};

// function Example() {
//     const [value, setValue] = React.useState('')
//     const handleChange = (event) => setValue(event.target.value)

//     return (
//       <>
//         <Text mb='8px'>Value: {value}</Text>
//         <Input
//           value={value}
//           onChange={handleChange}
//           placeholder='Here is a sample placeholder'
//           size='sm'
//         />
//       </>
//     )
//   }
