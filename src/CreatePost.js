import React from 'react';
import './CreatePost.css';
import { Avatar } from '@material-ui/core';
import { Videocam } from '@material-ui/icons';

const CreatePost = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="createPost">
      <div className="createPost__top">
        <Avatar />
        <form>
          <input
            type="search"
            className="createPost__input"
            placeholder="What's on your mind?"
          />
          <input type="search" placeholder="image url (optional)" />
          <button type="submit" onclick={handleSubmit}>
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="createPost__bottom">
        <div className="createPost__option">
          <Videocam style={{ color: 'red' }} />
        </div>
        <div className="createPost__option"></div>
        <div className="createPost__option"></div>
      </div>
    </div>
  );
};

export default CreatePost;
