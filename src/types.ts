// src/types.ts
export interface Comment {
    id: number;
    text: string;
  }
  
  export interface PostType {
    id: number;
    title: string;
    image: string;
    text: string;
    upvotes: number;
    downvotes: number;
    comments: Comment[];
    subreddit: string;
  }
  
  export interface PostProps {
    post: PostType;
  }
  