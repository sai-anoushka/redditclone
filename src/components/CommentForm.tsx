// src/components/CommentForm.tsx
import React, { useState } from 'react';

interface CommentFormProps {
  addComment: (text: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addComment(comment);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full p-2 border rounded mb-2"
        placeholder="Add a comment"
      />
      <button type="submit" className="bg-blue-500 text-white py-1 px-2 rounded">
        Comment
      </button>
    </form>
  );
};

export default CommentForm;
