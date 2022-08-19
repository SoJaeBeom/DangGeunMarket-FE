import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../login/SignIn";
import SignUp from "../login/SignUp";
import Main from "../pages/Main";
import PostsContainer from "../pages/PostsContainer";
import AddPosts from "../pages/AddPosts";
import EditPosts from "../pages/EditPosts";
import Detail from "../pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/" element={<Main />} />
        <Route path="posts" element={<PostsContainer />} />
        <Route path="add" element={<AddPosts />} />
        <Route path="edit/:id" element={<EditPosts />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="*" element={<div>404 Error</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
