import React, { Component } from 'react'
import VideoListItem from './VideoListItem'

const VideoList = ({videos, handleVideoSelect}) => {
  const videoListItems = videos.map(video => (
    <VideoListItem
      video={video}
      handleClick={handleVideoSelect}
    />
  ))

  return (
    <div className="ui four wide column">
      <div className="ui relaxed items">
        {videoListItems}
      </div>
    </div>
  )
}

export default VideoList
