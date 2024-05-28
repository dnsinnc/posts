import { FC } from "react";
import { IPost } from "../models/IPost";
import { addItem } from "../store/reducers/TrashSlice";
import { useAppDispatch } from "../hooks/redux";
import CustomButton from "./UI/CustomButton/CustomButton";

interface PostItemProps {
   post: IPost,
   edit: (post: IPost) => void;
   remove: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, remove, edit }) => {

   const dispatch = useAppDispatch()

   const removePost = () => {
      remove(post)
      dispatch(addItem(post))
   }

   const editPost = () => {
      edit(post)
   }

   return (
      <section className="post">
         <div className='post__content'>
            <h3><span>{post.number}.</span>{post.title}</h3>
            <p>{post.body}  </p>
         </div>
         <div className="btns">
            <CustomButton onClick={editPost}>EDIT</CustomButton>
            <CustomButton onClick={removePost}>DELETE</CustomButton>
         </div>
      </section>
   );
}

export default PostItem;

