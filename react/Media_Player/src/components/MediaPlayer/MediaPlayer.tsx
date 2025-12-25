export type MediaPlayerProps = {
    src: string
}

export function MediaPlayer ({ src }: MediaPlayerProps) {
    return (
        <video src={src} controls width="250" height="250"></video>
    )
}

