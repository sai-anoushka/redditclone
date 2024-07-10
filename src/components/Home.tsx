// src/components/Home.tsx
import React from 'react';
import Post from './Posts';
import { PostType } from '../types';

interface HomeProps {
  posts: PostType[];
  subscriptions: string[];
}

const Home: React.FC<HomeProps> = ({ posts, subscriptions }) => {
  const filteredPosts = posts.filter((post) => subscriptions.includes(post.subreddit));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Home</h1>
      {filteredPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
