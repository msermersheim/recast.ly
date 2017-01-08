class App extends React.Component {

  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
    this.state = {
      videos: [],
      video: undefined
    };
    // props.searchYouTube({}, function () {
    //   return self.state.videos;
    // });
  } 
  componentWillMount(props) {
    var options = {
      query: 'react',
      max: 5,
      key: YOUTUBE_API_KEY
    };
    var self = this;
    searchYouTube(options, function(data) {
      self.setState({
        videos: data,
        video: data[0]
      });
    });
  }
  render () {
    console.log(this.state.videos);
    return (
    <div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video={this.state.videos[0]}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.videos}/>
      </div>
    </div>
  );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
