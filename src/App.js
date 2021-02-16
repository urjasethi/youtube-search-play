import React from 'react'
import Search from './Search'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {
  state = {
    videos: [],
    currentVideo: null,
    API_KEY: 'AIzaSyA3a2Bux0KhPgD00-OwOeeCH7WVikRG5wY',
    baseUrl: 'https://www.googleapis.com/youtube/v3'
  }
  onSearch = async (query) => {
    const res = await fetch(this.state.baseUrl + '/search?&key=' + this.state.API_KEY + '&q=' + query + '&part=snippet', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((videos) => {
        console.log(videos.items)
        this.setState({
          videos: videos.items,
          //currentVideo: videos.items[0].id.videoId
        })
      });
  }
  onSelectVideo = (videoId) => {
    this.setState({ currentVideo: videoId });
  };

  render() {
    return (
      <div>
        <Search onSearchClick={this.onSearch} />
        {!this.state.currentVideo && (
          <div className='please_select_video' style={{ textAlign: 'center' }}>
            Please Select Video after search
          </div>
        )}
        {this.state.currentVideo && <VideoDetail videoId={this.state.currentVideo} />}
        <VideoList videos={this.state.videos} onSelectVideo={this.onSelectVideo} />
      </div>

    );
  }

}

export default App;
