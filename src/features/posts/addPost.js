import { Box, Button, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useDispatch } from "react-redux";
import { postAdder } from "./postSlice";
import { nanoid } from "@reduxjs/toolkit";


function AddPost(){

    let [title,setTitle]=useState("");
    let [content,setContent]=useState("");

    let dispatch=useDispatch();

    let handleAddPost=()=>{
        dispatch(postAdder({
            id:nanoid(),
            title,
            content
        }))
    };





    console.log(title,content);
    return (
      <Box>
        <Box marginBottom={"70px"}>
            <Navbar/>
        </Box >
        <Box>
        <Typography>Add Post</Typography>
        <label>Add Title</label>
        <Input onChange={(e)=>setTitle(e.target.value)}/>
        <br></br>
        <label>Add Content</label>
        <Input onChange={(e)=>setContent(e.target.value)}/>
        <br></br>
        <Button onClick={handleAddPost}>Add Post</Button>
        </Box>
       
      </Box>
    )
}

export default AddPost;