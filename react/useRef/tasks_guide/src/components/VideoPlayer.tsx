import { useState, useRef } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleClick() {
    if (!videoRef.current) {
        return
    }
    if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
    } else {
        videoRef.current.play()
        setIsPlaying(true)
    }
  }

  return (
    <>
    <h1>VideoPlayer</h1>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video width="250" ref={videoRef}>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}