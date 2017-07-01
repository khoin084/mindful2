import React from 'react';

const VideoDetails = (props) => {
    
    const videos = props.video;
    //add check to make sure the video has been provided by parent as a prop before child renders
    if(!videos) {
        return <div> loading </div>;
    }
    
    //accessing youtuve video ids, useful youtube trick.
    const videoId = videos[0].id.videoId;
    //useful link to have yotuube play embedded videos.
    const url = `https://www.youtube.com/embed/${videoId}`;
    console.log("inside of videodetials: ", videoId,url);
    return (
        
        <div className="video-detail col-md-8">
            {console.log("embed")}
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}> </iframe>
            </div>

            <div className="details">
                <div> {videos[0].snippet.title} </div>
                <div> {videos[0].snippet.description} </div>            
            </div>
        </div>
    );
};

export default VideoDetails;