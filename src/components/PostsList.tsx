import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService"
import PostForm from "./PostForm";
import PostItem from "./PostItem";
import EditPost from './EditPost'
import { SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IoTrashBin } from "react-icons/io5";
import { useAppSelector } from "../hooks/redux";

import {
   CSSTransition,
   TransitionGroup,
} from 'react-transition-group';

const PostList = () => {
   const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(100)
   // eslint-disable-next-line no-empty-pattern
   const [deletePost] = postAPI.useDeletePostMutation()
   // eslint-disable-next-line no-empty-pattern
   const [editPostFunc] = postAPI.useEditPostFuncMutation()
   const [post, setPost] = useState({ title: '', body: '' })
   const [openEditor, setOpenEditor] = useState(false)
   const [editPost, setEditPost] = useState()
   const items = useAppSelector((state) => state.basketReducer.items)

   const handleRemovePost = (post: IPost) => {
      deletePost(post);
      setOpenEditor(false)
   }

   const handleEditPost = (editPost: SetStateAction<unknown>) => {
      setOpenEditor(true)
      setEditPost(editPost)
      document.body.style.cssText = `overflow: hidden`;
   }

   useEffect(() => {
      posts?.map((post, index) => (
         editPostFunc({ ...post, number: index + 1 })
      ))
      if (posts?.length == 0) {
         setOpenEditor(false)
      }
   }, [posts])

   return (
      <main className="myposts">
         <header className="mypost__header">
            <Link className="post-trash" to={'/trash'}><IoTrashBin /> <span>{items.length}</span></Link>
            <h1 className="main-title">My Posts</h1>
         </header>

         <section>
            <PostForm
               posts={posts}
               post={post}
               setPost={setPost}
            />
         </section>

         <section>
            {isLoading && <h1>LOADING...</h1>}
            {error && <h1 className="nopost">OOPS, ERROR, TRY AGAIN</h1>}

            <TransitionGroup>
               {posts?.length === 0 ? <p className="nopost">No posts yet :(</p> :
                  posts && posts.map(post => (
                     <CSSTransition
                        timeout={500}
                        classNames="item"
                     >
                        <PostItem
                           remove={handleRemovePost}
                           edit={handleEditPost}
                           key={post.id}
                           post={post} />
                  </CSSTransition>
                    
                  )
                     
                  )
               }
            </TransitionGroup>
         </section>
         {openEditor &&
            <EditPost
               setOpenEditor={setOpenEditor}
               post={editPost}   
               editPost={editPostFunc}
               setPost={setPost}
               openEditor={openEditor}
            />}
      </main>

   )
}


export default PostList;