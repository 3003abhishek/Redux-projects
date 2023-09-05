import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import PostList from "../features/posts/postList";
import AddPost from "../features/posts/addPost";
import {SinglePost} from "../features/posts/singlePost";


function Allroutes() {
    return (
        <Routes>
            <Route path="/"
                element={<Dashboard />} />
            <Route path="/postlist"
                element={<PostList />} />


            <Route path="/addpost"
                element={<AddPost />} />

             <Route path="/postlist/:id" element={<SinglePost/>}/>





        </Routes>
    )
}

export default Allroutes;