import React from 'react'

const VideoItem = (props)=>{
    const onVideoItemClicked = () =>{
        props.onSelectVideo(props.videoId);
    }
    
    
        return(
            <div className='videoitem' style={{ width: '18rem'}} onClick={onVideoItemClicked}>
                <img className='image' src={props.image} alt={props.title} />
                <div className='tilte'>
                    <p className='title_text'>{props.title}</p>
                </div>

            </div>

        )
    
}
export default VideoItem