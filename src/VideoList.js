
import React from 'react'
import VideoItem from './VideoItem'

const VideoList =(props)=> {

   
        return (

            < div className='video_list'>
                {props.videos.map(video => {
                    return (
                        <VideoItem
                            key={video.id.videoId}
                            videoId={video.id.videoId}
                            image={video.snippet.thumbnails.default.url}
                            title={video.snippet.title}
                            onSelectVideo={props.onSelectVideo}
                        />
                    )
                })}

            </div >
        )

   
}
export default VideoList;