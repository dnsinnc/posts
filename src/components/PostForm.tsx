import { FC, SetStateAction, useState } from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";
import CustomButton from "./UI/CustomButton/CustomButton";
import CustomInput from "./UI/CustomInput/CustomInput";


interface PostFormProps {
   post: IPost,
   posts: IPost[],
   setPost: React.Dispatch<SetStateAction<{
      title: string;
      body: string;
   }>>;
}

const PostForm: FC<PostFormProps> = ({ posts, post, setPost }) => {

   const [createPost, { }] = postAPI.useCreatePostMutation()
   const [inputValueTrue, setInputValueTrue] = useState(true)

   const сreatePost = async () => {
      const title = post.title
      const body = post.body

      if (title && body) {
         setInputValueTrue(true)
         await createPost({ number: posts.length + 1, title: title, body: body } as IPost)
         setPost({ title: '', body: '' })
      
      } else {
         setInputValueTrue(false)

         setTimeout(() => {
            setInputValueTrue(true)

         }, 600);
      }
   }


   return (
         <section className="post-form">
            <CustomInput
               value={post.title}
               onChange={event => setPost({ ...post, title: event.target.value })}
               placeholder='Title'
             />
            <CustomInput
               value={post.body}
               onChange={event => setPost({ ...post, body: event.target.value })}
               placeholder="Body"
            />
            {!inputValueTrue && <div className="input-warning"> Fill in all fields!</div>}

            <CustomButton onClick={сreatePost}>
               CREATE POST
           </CustomButton>
         </section>
   );
}

export default PostForm;