// src/components/Subreddit.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Post from './Posts';
import NewPostForm from './NewPostForm';
import { PostType } from '../types';

interface SubredditProps {
  posts: PostType[];
  addPost: (newPost: PostType) => void;
  subscribe: (subreddit: string) => void;
  unsubscribe: (subreddit: string) => void;
  subscriptions: string[];
}

const Subreddit: React.FC<SubredditProps> = ({ posts, addPost, subscribe, unsubscribe, subscriptions }) => {
  const { subreddit } = useParams();
  const isSubscribed = subscriptions.includes(subreddit || '');

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">{`r/${subreddit}`}</h1>
      <button
        onClick={() => (isSubscribed ? unsubscribe(subreddit || '') : subscribe(subreddit || ''))}
        className={`mb-5 py-2 px-4 rounded ${isSubscribed ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
      >
        {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
      </button>
      <NewPostForm addPost={addPost} />
      {posts
        .filter((post) => post.subreddit === subreddit)
        .map((post) => (
          <Post key={post.id} post={post} />
        ))}
    </div>
  );
};

export default Subreddit;
