var searchYouTube = (options, callback) => {
  // TODO
  options = options || {};
  callback = callback || function (data) {
    return data;
  };
  var searchQuery = {
    q: options.query === undefined ? '' : options.query,
    maxResults: options.max === undefined ? 5 : options.max,
    part: 'snippet',
    type: 'video',
    key: options.key === undefined ? YOUTUBE_API_KEY : options.key
  };
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: searchQuery,
    success: function(data) {
      callback(data.items);
    },
    error: function (data) {
      console.log(error);
    }
  });
};

window.searchYouTube = searchYouTube;
