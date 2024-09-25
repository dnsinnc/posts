import { createBrowserRouter } from "react-router-dom";
import Posts from "../pages/Posts";
import PostsTrash from "../pages/PostsTrash";




export const routes = createBrowserRouter([
   {
      path: '/',
      element: <Posts />,
   },

   {
      path: '/trash',
      element: <PostsTrash />,
   }
])