import React from 'react';
import './StoryReel.css';
import Story from './Story';

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image={'https://picsum.photos/id/340/400/200'}
        profileSrc={'https://picsum.photos/id/1005/200'}
        title="Freddy Hendricks"
      />
      <Story
        image={'https://picsum.photos/id/343/400/200'}
        profileSrc={'https://picsum.photos/id/1027/200'}
        title="Samantha Green"
      />
      <Story
        image={'https://picsum.photos/id/35/400/200'}
        profileSrc={'https://picsum.photos/id/1074/200'}
        title="Lion King"
      />
      <Story
        image={'https://picsum.photos/id/354/400/200'}
        profileSrc={'https://picsum.photos/id/338/200'}
        title="Hank Blackson"
      />
      <Story
        image={'https://picsum.photos/id/351/400/200'}
        profileSrc={'https://picsum.photos/id/342/200'}
        title="Emily Lognes"
      />
    </div>
  );
};

export default StoryReel;
