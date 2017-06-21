import React, { Component } from 'react'

class SearchBar extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     term: 'dolphin'
  //   }
  // }

  render() {
    return (
      <div className="ui sixteen wide column">
        <div className="ui segment secondary">
          <div className="ui huge fluid input">
            <input
              type='text'
              placeholder='Search Youtube...'
              value={this.props.term}
              onChange={(e) => this.props.handleChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar
