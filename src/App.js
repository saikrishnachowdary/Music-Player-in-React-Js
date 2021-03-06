import React from 'react';
import './App.css';
import AudioPlayer from './components/audioPlayer'; 

function App() {
  let url = "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
  let image = "https://www.thisdayinmusic.com/wp-content/uploads/1977/03/coldplay.jpg"
  return (
    <>
      <div className='Mcontainer'>
        <AudioPlayer url={url} image={image} />
      </div>
    </>
  );
}

export default App;
