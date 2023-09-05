import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <Box sx={{ height:"50px", width:"100%",  display: "flex", justifyContent: "space-around",alignItems:"center", border:"1px solid red",boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px" }}>
            <Box>
                <Link to="/">Dashboard</Link>

            </Box>

            <Box>

                <Link to="/postlist">PostList</Link>

            </Box>

            <Box>

                <Link to="/addpost">Add Post</Link>

            </Box>

        </Box>
    )
}
export default Navbar;