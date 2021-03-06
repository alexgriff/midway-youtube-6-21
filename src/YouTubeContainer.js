import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Video from './Video'
import VideoList from './VideoList'

class YouTubeContainer extends Component {
  constructor() {
    super()

    this.state = {
      videos: response,
      selectedVideo: response[0],
      term: ''
    }
  }

  handleChange(term) {
    this.setState({ term })
  }

  handleVideoSelect(selectedVideo) {
    this.setState({selectedVideo})
  }

  render() {
    let { term, selectedVideo, videos } = this.state

    return (
      <div className="ui grid container">
        <SearchBar
          term={term}
          handleChange={this.handleChange.bind(this)}
        />

        <Video video={selectedVideo}/>

        <VideoList
          videos={videos}
          handleVideoSelect={this.handleVideoSelect.bind(this)}
        />
      </div>
    )
  }
}


const response = [
  {
    "etag":"\"m2yskBQFythfE4irbTIeOgYYfBU/XoCknp0EO0YWZcuTVD_GhkJp_-M\"",
    "id": {"kind":"youtube#video","videoId":"KMZ7oOCXfP8"},
    "snippet": {
      "title":"Super Smart Dolphin Answers Questions - Extraordinary Animals - Earth",
      "description":"The Echo Location Visualization and Interface System (ELVIS) allows Dolphins to make choices and answer questions. Luna the young Dolphin grasped the ...",
      "thumbnails": {
        "default": {
          "url":"https://i.ytimg.com/vi/KMZ7oOCXfP8/default.jpg"
        },
      },
    },
  },
  {
    "etag":"\"m2yskBQFythfE4irbTIeOgYYfBU/z_l0ThWRPFnv9um1eRM_O1LVUqU\"",
    "id":{"kind":"youtube#video","videoId":"3Bk6VPWGi1o"},
    "snippet":{
      "title":"The Complete 2016 SeaWorld \"Blue Horizons\" Dolphin Show",
      "description":"Please SUBSCRIBE by clicking here: http://www.youtube.com/subscription_center?add_user=MoneySavingVideos To see my entire SeaWorld playlist click ...",
      "thumbnails": {
        "default": {
          "url":"https://i.ytimg.com/vi/3Bk6VPWGi1o/default.jpg"
        },
      },
    },
  }
]

export default YouTubeContainer
