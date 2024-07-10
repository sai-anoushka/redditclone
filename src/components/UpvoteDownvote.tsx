// src/components/UpvoteDownvote.tsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

interface UpvoteDownvoteProps {
  upvotes: number;
  downvotes: number;
}

const UpvoteDownvote: React.FC<UpvoteDownvoteProps> = ({ upvotes, downvotes }) => {
  const [upvoteCount, setUpvoteCount] = useState(upvotes);
  const [downvoteCount, setDownvoteCount] = useState(downvotes);

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => setUpvoteCount(upvoteCount + 1)}
        className="flex items-center space-x-2 text-green-500 hover:text-green-600 transition duration-300"
      >
        <FontAwesomeIcon icon={faThumbsUp} />
        <span>{upvoteCount}</span>
      </button>
      <button
        onClick={() => setDownvoteCount(downvoteCount + 1)}
        className="flex items-center space-x-2 text-red-500 hover:text-red-600 transition duration-300"
      >
        <FontAwesomeIcon icon={faThumbsDown} />
        <span>{downvoteCount}</span>
      </button>
    </div>
  );
};

export default UpvoteDownvote;
