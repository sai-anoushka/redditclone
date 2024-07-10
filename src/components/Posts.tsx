// src/components/Post.tsx
import React, { useState } from 'react';
import { PostProps } from '../types';
import UpvoteDownvote from './UpvoteDownvote';
import CommentForm from './CommentForm';

const Post: React.FC<PostProps> = ({ post }) => {
  const [comments, setComments] = useState(post.comments);

  const addComment = (text: string) => {
    setComments([...comments, { id: comments.length + 1, text }]);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5 mb-5">
      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
      <p className="text-sm text-gray-500 mb-2">{`r/${post.subreddit}`}</p>
      <img src={post.image} alt={post.title} className="mb-2" />
      <p className="mb-2">{post.text}</p>
      <UpvoteDownvote upvotes={post.upvotes} downvotes={post.downvotes} />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Comments</h3>
        {comments.map((comment) => (
          <div key={comment.id} className="mt-2 p-2 bg-gray-200 rounded">
            {comment.text}
          </div>
        ))}
        <CommentForm addComment={addComment} />
      </div>
    </div>
  );
};

export default Post;
