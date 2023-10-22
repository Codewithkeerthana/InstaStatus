import React, { useState } from 'react';
import { Stories, Video } from 'react-insta-stories';

const StoryViewer = ({ stories }) => {
  const [mutedVideos, setMutedVideos] = useState([]);

  const toggleVideoMute = (videoId) => {
    if (mutedVideos.includes(videoId)) {
      setMutedVideos(mutedVideos.filter(id => id !== videoId));
    } else {
      setMutedVideos([...mutedVideos, videoId]);
    }
  };

  return (
    <div>
      <Stories
        stories={stories.map(story => {
          if (story.type === 'video') {
            return {
              ...story,
              content: ({ id, isPaused }) => (
                <Video
                  src={story.url}
                  muted={!isPaused && mutedVideos.includes(id)}
                  autoPlay
                  loop
                />
              ),
            };
          } else {
            return story;
          }
        })}
        width={360}
        height={640}
        loop
      />
      {stories.map(story => (
        story.type === 'video' && (
          <div key={story.id}>
            <Video
              src={story.url}
              autoPlay
              loop
              width={100}
              height={150}
              style={{ cursor: 'pointer' }}
              onClick={() => toggleVideoMute(story.id)}
            />
            <button onClick={() => toggleVideoMute(story.id)}>
              {mutedVideos.includes(story.id) ? 'Unmute' : 'Mute'}
            </button>
          </div>
        )
      ))}
    </div>
  );
};

export default StoryViewer;
