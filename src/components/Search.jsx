class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({query: event.target.value});
  }
  render() {
    return (
    <div className="search-bar form-inline">
      <input className="form-control" value={this.state.query} type="text" />
      <button className="btn hidden-sm-down" onClick={searchYouTube(this.state.query)}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
    );
  } 
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
