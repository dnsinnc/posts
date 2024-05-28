import { Link } from "react-router-dom";
import { deleteItem } from "../store/reducers/TrashSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { postAPI } from "../services/PostService";

import { IoReturnDownBackSharp } from "react-icons/io5";
import { IPost } from "../models/IPost";
import CustomButton from "../components/UI/CustomButton/CustomButton";
import { TransitionGroup, CSSTransition } from "react-transition-group";




function PostsTrash() {

   const items = useAppSelector((state) => state.basketReducer.items)
   const dispatch = useAppDispatch()
   const [createPost, { }] = postAPI.useCreatePostMutation()

   const resetPost = (post: IPost) => {
      createPost({ title: post.title, body: post.body })
      dispatch(deleteItem(post))
   }
   

   return (
      <section>
         <div className="trash__header">
            <Link className='back' to={'/'}><IoReturnDownBackSharp /></Link>
            <h1 className="main-title">Deleted Posts</h1>
         </div>

         <div className='myposts'>
            <TransitionGroup>
               {items.length === 0 ? <p className="nopost">NO DELETED POSTS :(</p> :
                  items.map((post) =>
                     <CSSTransition
                        timeout={500}
                        classNames="item"
                     >
                        <div className="post delpost" key={post.id}>
                           <div className="post__content">
                              <h2>{post.title}</h2>
                              <p>{post.body}</p>
                           </div>
                           <div className="btns">
                              <CustomButton onClick={() => resetPost(post)}>
                                 RESET
                              </CustomButton>
                              <CustomButton onClick={() => dispatch(deleteItem(post))}>
                                 DELETE
                              </CustomButton>
                           </div>
                        </div>
                     </CSSTransition>

                  )}
            </TransitionGroup>
         </div>
      </section>
   );
}

export default PostsTrash;



