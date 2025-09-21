exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve, reject) => {
      resolve(value)
    })
  },

  manipulateRemoteData: function(url) {
    return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response not ok')
      }
      return response.json()
    })
    .then(data => {
      if (Array.isArray(data)) {
        return data
        .map(item => item.name || item.title || item)
        .filter(name => typeof name === 'string')
        .sort()
      }

      if (data && typeof data === 'object' && (data.people || data.users || data.names)) {
        const names = data.people || data.users || data.names
        return names
        .map(item => item.name || item.title || item)
        .filter(name => typeof name === 'string')
        .sort()
      }
    })
    .catch(error => {
      throw new Error(`Failed to fetch and process data: ${error.message}`);
    })
  }
};
