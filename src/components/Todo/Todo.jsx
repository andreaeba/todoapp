import React, { useState } from 'react'

export const Todo = () => {

    const [check, setCheck] = useState('')

    const [ToDo, setToDo] = useState(
        JSON.parse(localStorage.getItem(["tasks"])))


    const handleCheck = (e) => {

       let tasks = JSON.parse(localStorage.getItem("tasks"))
        
       console.log(tasks)
    }

    return (
    <>
    <Button bgColor="white"><Image src={check} width="14px" /></Button>
    
    </>
  )
}
