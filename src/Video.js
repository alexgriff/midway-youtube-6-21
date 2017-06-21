import React, { Component } from 'react'

const Video = ({video}) => {
  const url = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div className="ui twelve wide column">
      <div className="ui raised segments">
        <div className="ui segment">
          <div className="ui embed">
            <iframe src={url} frameBorder="0"></iframe>
          </div>
          <div className="ui segment">
            <h4>{video.snippet.title}</h4>
          </div>
          <div className="ui secondary segment">
            <p>{video.snippet.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
