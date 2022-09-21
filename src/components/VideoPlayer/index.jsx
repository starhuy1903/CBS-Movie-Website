import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = props => {
    return (
        <ReactPlayer
            {...props}
            url={props.videosrc}
            playing={props.playing}
            controls
            width="100%"
            height="100%"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
            }}
        />
    )
}

export default VideoPlayer;