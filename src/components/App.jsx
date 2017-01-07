class App extends React.Component {

  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);
    this.state = {
      videos: [],
      video: undefined
    };
    var self = this;
    props.searchYouTube({}, function () {
      return self.state.videos;
    });
  } 
  componentWillMount() {
    console.log("component mount");
    searchYouTube();
  }
  render () {
    return (
    <div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video={this.state.video}/>
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
