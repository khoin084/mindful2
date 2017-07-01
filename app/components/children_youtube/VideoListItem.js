import React from 'react';

const VideoListItem = (props) => {
    //saving the videos from the parent into a constant variable called video.
    const video = props.video
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item"> 
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading"> {video.snippet.title} </div>
                </div>
            </div> 
        </li>
    );
}

export default VideoListItem;