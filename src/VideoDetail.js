import React from 'react';

class VideoDetail extends React.Component {
    render() {
        return (
            <div className='videodetail'>
                <iframe
                    className='video_play'
                    title='test'
                    width='560'
                    height='315'
                    src={`https://www.youtube.com/embed/${this.props.videoId}`}
                    frameBorder='0'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                />
            </div>
        );
    }
};

export default VideoDetail;