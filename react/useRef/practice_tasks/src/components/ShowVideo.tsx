import { useRef, useState } from 'react'

export default function ShowVideo() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlay = async () => {
        const el = videoRef.current
        if (!el) return 
        try {
            await el.play()
            setIsPlaying(true)
        } catch (error) {
            console.error('Error playing video:', error)
        }
    }

    const handlePause = async () => {
        const el = videoRef.current
        if (!el) return
        try {
            await el.pause()
            setIsPlaying(false)
        } catch (error) {
            console.error('Error pausing video:', error)
        }
    }
    return (
        <>
            <h1>ShowVideo</h1>

            <div>
                <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" width="250" ref={videoRef}/>
            </div>
            <div>
                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
            </div>
        </>
    )
}