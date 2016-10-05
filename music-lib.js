var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  // FUNCTIONS TO IMPLEMENT:

  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks

  printPlaylists: function () {
    // create var that's the object's(this) playlists
    var playlists = this.playlists;

    // a for...in loop that's after the keys in playlists
    // key is given a var name - keyName - and printed w template literals
    for (var key in playlists) {
      var keyName = playlists[key];
      console.log(`${keyName.id}: ${keyName.name} - ${keyName.tracks.length} tracks`);
    }
  },

  // prints a list of all tracks, in the form:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)

  printTracks: function () {
    var tracks = this.tracks;

    for (var key in tracks) {
      var keyName = tracks[key];
      console.log(`${keyName.id}: ${keyName.name} by ${keyName.artist} (${keyName.album})`);
    }
  },


  // prints a list of tracks for a given playlist, in the form:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)

  printPlaylist: function (playlistId) {
    var currentPlaylist = this.playlists[playlistId];
    var tracks = this.tracks;
    // needs to the argument when the function is called at the end
    console.log(`${currentPlaylist.id}: ${currentPlaylist.name} - ${currentPlaylist.tracks.length} tracks`);

  },

  // adds an existing track to an existing playlist

  addTrackToPlaylist: function (trackId, playlistId) {

  },


  // generates a unique id
  // (use this for addTrack and addPlaylist)

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },


  // adds a track to the library

  addTrack: function (name, artist, album) {

  },


  // adds a playlist to the library

  addPlaylist: function (name) {

  },

  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri") 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

  printSearchResults: function(query) {

  }
}
library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");