import { createBrowserRouter } from "react-router-dom";
import Posts from "../pages/Posts";
import PostsTrash from "../pages/PostsTrash";




export const routes = createBrowserRouter([
   {
      path: '/posts',
      element: <Posts />,
   },

   {
      path: '/posts/trash',
      element: <PostsTrash />,
   }
])