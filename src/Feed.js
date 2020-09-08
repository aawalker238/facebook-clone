import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import CreatePost from './CreatePost';

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <CreatePost />
    </div>
  );
};

export default Feed;
