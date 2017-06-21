import React, { Component } from 'react'

const VideoListItem = ({video, handleClick}) => {
  const url = video.snippet.thumbnails.default.url
  return (
    <div
      className="item"
      onClick={() => handleClick(video)}
      >
      <div className="ui small image">
        <img src={url} />
      </div>
      <div className="content">
        {video.snippet.title}
      </div>
    </div>
  )
}

export default VideoListItem
