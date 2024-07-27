"use client"

// Post.tsx
import  { useState } from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';

interface PostProps {
    caption: string;
    description: string;
    imageURL: string;
  }

const Post: React.FC<PostProps>  = ({ caption, description, imageURL }) => {
  const [likes, setLikes] = useState(102);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState<string[]>([]);
  const [commentInput, setCommentInput] = useState('');

  const handleLike = () => {
    setLikes((prevLikes) => (liked ? prevLikes - 1 : prevLikes + 1));
    setLiked(!liked);
  };

  const handleCommentSubmit = () => {
    if (commentInput.trim() !== '') {
      setComments((prevComments) => [...prevComments, commentInput]);
      setCommentInput('');
    }
  };


  return (
    <section className=" lg:w-[840px]  bg-white border-gray-800 rounded-xl shadow mt-4 w-full sm:w-[340px]  md:w-90 md:ml-auto lg:ml-auto-">
        <div className="p-4 font-serif text-gray-700">
            <h2 className="text-xl font-bold mb-2">{caption}</h2>
            <p className="text-sm text-justify">{description}</p>
        </div>   
      
        <div className="flex items-center justify-center mb-2">
            <img src={imageURL} alt="Post" className="w-[440px] h-auto " />
        </div>

         

        <div className="flex items-center justify-evenly  border-t border-gray-300 p-4">
            <button onClick={handleLike} className="flex items-center space-x-1 text-gray-700">
                <FaHeart className={`text-red-500 ${liked ? 'fill-current' : 'stroke-current'}`} />
                <span className='font-serif text-sm'>{likes} likes</span>
            </button>

            <div className="flex flex-col items-end  p-2 md:p-4">
              <div className="flex items-center space-x-2">
                <FaComment className="text-gray-700" />
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  className="border-none outline-none text-sm font-serif text-gray-700"
                />
                <button onClick={handleCommentSubmit} className="text-blue-500 font-semibold ">Post</button>
              </div>

              {comments.length > 0 && (
                <div className="p-4">
                  {comments.map((comment, index) => (
                    <p key={index} className="text-sm">
                      <strong className="font-semibold">{/* You can add the commenter's name here */}</strong> {comment}
                    </p>
                  ))}
                </div>
              )}
            </div>

          <hr className='mt-4'/>
        </div>
    </section>
  );
};

export default Post;
