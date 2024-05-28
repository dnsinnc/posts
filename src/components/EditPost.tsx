import React, { FC, useEffect, useState } from "react";
import { IPost } from "../models/IPost";
import CustomButton from "./UI/CustomButton/CustomButton";
import CustomInput from "./UI/CustomInput/CustomInput";

interface EditPostsProps {
   post: IPost;
   editPost: (post: IPost) => void;
   setOpenEditor: any;
   openEditor: any;
}

const EditPost: FC<EditPostsProps> = ({ post, editPost, openEditor, setOpenEditor }) => {
   const [editPostValue, setEditPostValue] = useState({ title: '', body: '' })


   useEffect(() => {
      setEditPostValue(post)
   }, [post])


   const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEditPostValue({ ...editPostValue, title: event.target.value })
   }
   const onChangeBody = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEditPostValue({ ...editPostValue, body: event.target.value })
   }

   const handleEditPost = (e: React.MouseEvent) => {
      e.preventDefault()

      const title = editPostValue.title;
      const body = editPostValue.body;

      editPost({ ...post, title: title, body: body })
      handeCloseEditor()
   }

   if (openEditor) {
      document.body.style.cssText = `overflow: hidden`;
   }

   const handeCloseEditor = () => {
      setOpenEditor(false)
      document.body.style.cssText = `overflow: visible`;

   }

   return (
      <section onClick={handeCloseEditor} className="edit-post__wrapp">
         <div onClick={(e) => e.stopPropagation()} className="edit-post__menu">
            <h2>Edit Post Menu #{post.number}</h2>
            <CustomInput
               placeholder="Edit title"
               value={editPostValue.title}
               onChange={event => onChangeTitle(event)}
            />
            <CustomInput
               placeholder="Edit body"
               value={editPostValue.body}
               onChange={event => onChangeBody(event)}
            />

            <div className="edit-post__buttons">
               <CustomButton onClick={handleEditPost}>
                  EDIT POST
               </CustomButton>
               <CustomButton onClick={handeCloseEditor}>
                  EXIT
               </CustomButton>
            </div>
         </div>
      </section>
   );
}

export default EditPost;