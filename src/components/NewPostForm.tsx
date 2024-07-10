// src/components/NewPostForm.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostType } from '../types';

interface NewPostFormProps {
  addPost: (newPost: PostType) => void;
}

const NewPostForm: React.FC<NewPostFormProps> = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [text, setText] = useState('');
  const { subreddit } = useParams();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: PostType = {
      id: Math.floor(Math.random() * 10000),
      title,
      image,
      text,
      upvotes: 0,
      downvotes: 0,
      comments: [],
      subreddit: subreddit || '',
    };
    addPost(newPost);
    setTitle('');
    setImage('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md mb-5 border-zinc-950 border-2">
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
        Add Post
      </button>
    </form>
  );
};

export default NewPostForm;
