import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export function SinglePost(){
    console.log("gandhi");
    
    const {id}=useParams();

    let post=useSelector((state)=>state.posts.find((el)=>el.id===id));
    

  console.log(post);
    if(!post){
        return (
            <Box>This post does not exist</Box>
        )
    }

    return (
        <Box>
            <Typography>{post.title}</Typography>
            <Typography>{post.content}</Typography>
        </Box>
    )
}

