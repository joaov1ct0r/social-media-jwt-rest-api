import express from "express";

import auth from "../middlewares/auth";

import {
  handleAllPosts,
  handleDeletePost,
  handleEditPost,
  handleNewPost,
  handleOnePost,
  handleAddPostComment,
  handleAddPostLike,
  handleDeletePostComment,
  handleDeletePostLike,
  handleEditPostComment,
} from "../controllers/postController";

const postRouter: express.Router = express.Router();

postRouter.post("/register", auth, handleNewPost);

postRouter.post("/like", auth, handleAddPostLike);

postRouter.delete("/like/delete", auth, handleDeletePostLike);

postRouter.post("/comment", auth, handleAddPostComment);

postRouter.put("/comment/edit", auth, handleEditPostComment);

postRouter.delete("/comment/delete", auth, handleDeletePostComment);

postRouter.put("/edit", auth, handleEditPost);

postRouter.delete("/delete", auth, handleDeletePost);

postRouter.get("/post", auth, handleOnePost);

postRouter.get("/posts", auth, handleAllPosts);

export default postRouter;
