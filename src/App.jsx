import React, { Suspense, useState } from "react";
import Stories, { WithSeeMore } from 'react-insta-stories';
import ReactPlayer from 'react-player'
import { FaVolumeMute,FaVolumeUp,FaShareAlt } from 'react-icons/fa';

function HomePage() {
  const [muted, setmuted] = useState(true); //For the mute state
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0); // Story Index

  //Calling this when the mute/unmute button is clicked
  function mute(){
    var v=muted?false:true;
    setmuted(v);
  }
  function btn1(){
    return(
      <a className="overbtn" onClick={() => setCurrentStoryIndex(1)}>Contact Us</a>
    );
  }
  const handleStoryChange = (currentIndex) => {
    setCurrentStoryIndex(currentIndex);
  };

  //Store all the story/video data over here
  const stories = [
    {
      content: ({ action, story, isPaused }) => {
        return (
          <div >
            <WithSeeMore story={story} action={action}>
              <ReactPlayer width="50vw" height="100%" muted={muted} playing={!isPaused} url='./1.mp4' />
            </WithSeeMore>
          </div>
        );
      },
      seeMoreCollapsed: ({ toggleMore, action }) => <div style={{width:"100%",paddingBottom:30}}><center><button className="overbtn" onClick={() => setCurrentStoryIndex(2)}>Story 3</button><br/><button className="overbtn" onClick={() => setCurrentStoryIndex(1)}>Story 2</button><br/><a className="contact-us" href="/contact">Contact Us</a></center></div>,
      seeMore: ({ close }) => <div></div>
    },
    {
      content: ({ action, story, isPaused }) => {
        return (
          <div >
            <WithSeeMore story={story} action={action}>
              <ReactPlayer width="50vw" height="100%" muted={muted} playing={!isPaused} url='./2.mp4' />
            </WithSeeMore>
          </div>
        );
      },
      seeMoreCollapsed: ({ toggleMore, action }) => <div style={{width:"100%",paddingBottom:30}}><center><button className="overbtn" onClick={() => setCurrentStoryIndex(2)}>Story 3</button><br/><button className="overbtn" onClick={() => setCurrentStoryIndex(1)}>Story 2</button><br/><a className="contact-us" href="/contact">Contact Us</a></center></div>,
      seeMore: ({ close }) => <div></div>
    },
    {
      content: ({ action, story, isPaused }) => {
        return (
          <div >
            <WithSeeMore story={story} action={action}>
              <ReactPlayer width="50vw" height="100%" muted={muted} playing={!isPaused} url='./3.mp4' />
            </WithSeeMore>
          </div>
        );
      },
      seeMoreCollapsed: ({ toggleMore, action }) => <div style={{width:"100%",paddingBottom:30}}><center><button className="overbtn" onClick={() => setCurrentStoryIndex(2)}>Story 3</button><br/><button className="overbtn" onClick={() => setCurrentStoryIndex(1)}>Story 2</button><br/><a className="contact-us" href="/contact">Contact Us</a></center></div>,
      seeMore: ({ close }) => <div></div>
    },
  ];


  return (
    <div>
      <div style={{position:"absolute",top:20,zIndex:2}}><button style={{backgroundColor:"#00000097"}} onClick={mute}>{muted?<FaVolumeMute/>:<FaVolumeUp/>}</button><br/><button style={{marginTop:5,backgroundColor:"#00000097"}}><FaShareAlt/></button></div>
      <div style={{position:"absolute",top:0,zIndex:1}}> <Stories
        stories={stories}
        defaultInterval={30000} // Adjust the interval as needed
        width="50vw"
        height="100%"
        currentIndex={currentStoryIndex}
        loop
        onStoryStart={handleStoryChange}
      />
      </div>
    </div>
    
  );

}

export default HomePage;