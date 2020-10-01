import React, { useRef, useState, useEffect } from 'react';
import './audioPlayer.css'

const AudioPlayer = ({ url, image }) => {
    const audioRef = useRef(null);
    const [playing, setplaying] = useState(false)
    const [mute, setMute] = useState(false)
    const TogglePlayBtn = () => setplaying((prev) => !prev);
    const Togglemute = () => setMute((prev) => !prev);
    useEffect(() => {
        if (audioRef && audioRef.current) {
            if (playing) {
                audioRef.current.play()
                console.log('audioRef.current.currentTime:', audioRef.current.duration)
            } else {
                audioRef.current.pause()
            }
        }
    }, [playing])
    useEffect(() => {
        if (audioRef && audioRef.current) {
            if (mute) {
                audioRef.current.muted=true
            } else {
                audioRef.current.muted=false
            }
        }
    }, [mute])

    const [progressData, setprogressData] = useState({
        CurrentPlayTime: 0,
        Duration:100
    })

    setInterval(() => {
        if (audioRef && audioRef.current) {
            setprogressData({
                ...progressData,
                CurrentPlayTime: audioRef.current.currentTime,
                Duration: audioRef.current.duration
            })
        } else {
            
        }
    },1000)
    return (
        <div className='audioplayerContainer'>
          <audio src={url} ref={audioRef} />
            <div>
                <img
                    height="256"
                    width="256"
                    src={image}
                    alt="episode art"
                />
            </div>
            <div className='audiocontrols'>
                <div className='audiobuttons'>
                    <div onClick={TogglePlayBtn}>
                        {playing ? (
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect x="6" y="4" width="4" height="16"></rect>
                                <rect x="14" y="4" width="4" height="16"></rect>
                            </svg>
                        ) : (
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                                )}
                    </div>
                    <div onClick={Togglemute}>
                        {!mute ? (
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                className="bi bi-volume-down"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fillRule="evenodd" d="M8.717 3.55A.5.5 0 0 1 9 4v8a.5.5 0 0 1-.812.39L5.825 10.5H3.5A.5.5 0 0 1 3 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM8 5.04L6.312 6.39A.5.5 0 0 1 6 6.5H4v3h2a.5.5 0 0 1 .312.11L8 10.96V5.04z" />
                                <path d="M10.707 11.182A4.486 4.486 0 0 0 12.025 8a4.486 4.486 0 0 0-1.318-3.182L10 5.525A3.489 3.489 0 0 1 11.025 8c0 .966-.392 1.841-1.025 2.475l.707.707z" />
                            </svg>
                        ) : (
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-volume-mute" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04L4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708 0z" />
                                    <path fillRule="evenodd" d="M9.146 5.646a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0z" />
                                </svg>
                            )}
                    </div>
                </div>
                <div className="CustomProgressbar">
                    <div className="CustomProgressbar1" style={{ width: progressData.CurrentPlayTime * 100 / progressData.Duration}}>&nbsp;</div>
                </div>
            </div>
        </div>
    )
}

export default AudioPlayer
