// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Subreddit from './components/Subreddit';
import Home from './components/Home';
import { PostType } from './types';

const App: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([
    {
      id: 1,
      title: 'Beautiful Sunset',
      image: 'https://via.placeholder.com/150',
      text: 'This is an amazing sunset view!',
      upvotes: 10,
      downvotes: 2,
      comments: [{ id: 1, text: 'Wow, stunning view!' }],
      subreddit: 'reactjs',
    },
    // Add more initial posts here
  ]);

  const [subscriptions, setSubscriptions] = useState<string[]>([]);

  const addPost = (newPost: PostType) => {
    setPosts([...posts, newPost]);
  };

  const subscribe = (subreddit: string) => {
    setSubscriptions([...subscriptions, subreddit]);
  };

  const unsubscribe = (subreddit: string) => {
    setSubscriptions(subscriptions.filter((sub) => sub !== subreddit));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="min-h-screen bg-gray-100 p-5 flex-grow">
            <div className="container mx-auto">
              <Routes>
                <Route path="/" element={<Home posts={posts} subscriptions={subscriptions} />} />
                <Route
                  path="/r/:subreddit"
                  element={
                    <Subreddit
                      posts={posts}
                      addPost={addPost}
                      subscribe={subscribe}
                      unsubscribe={unsubscribe}
                      subscriptions={subscriptions}
                    />
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
