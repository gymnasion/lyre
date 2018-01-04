const loadTrack = (trackName, clock, soundBank, URL) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', URL, true);
    request.responseType = 'arraybuffer';
    request.onload = () => {
      const context = clock.context;
      context.decodeAudioData(request.response, buffer => {
        const duration = buffer.duration;
        const createNode = () => {
          const node = context.createBufferSource();
          node.buffer = buffer;
          node.connect(context.destination);
          return node;
        };
        soundBank[trackName] = { createNode, duration };
        resolve();
      });
    };
    request.send();
  });
};

const startTrack = (trackName, clock, soundBank) => {
  const context = clock.context;
  const track = soundBank[trackName];
  const event = clock
    .callbackAtTime(event => {
      const bufferNode = track.createNode();
      bufferNode.start();
      event.bufferNode = bufferNode;
    }, context.currentTime)
    .repeat(track.duration);
  return event;
};

const restartTracks = clock => {
  const events = clock._events;
  const context = clock.context;
  events.forEach(event => {
    event.bufferNode.stop();
    event.schedule(context.currentTime);
  });
};

const stopTrack = event => {
  event.clear();
  event.bufferNode.stop();
};

export const getNextTrack = (
  track,
  clickedButton,
  selectedButton,
  soundBank,
  audioFiles,
  clock,
  audioType,
  dispatch
) => {
  if (track) {
    track.then(stopTrack);
  }
  if (clickedButton === selectedButton) {
    return null;
  }
  const trackName = audioType + clickedButton;
  if (soundBank[trackName]) {
    restartTracks(clock);
    return Promise.resolve(
      startTrack(trackName, clock, soundBank)
    );
  } else {
    const audioFileIndex = clickedButton - 1;
    const url = audioFiles[audioType][audioFileIndex];
    dispatch({ type: 'TOGGLE_LOADING_STATE', isLoading: true });
    return loadTrack(trackName, clock, soundBank, url).then(
      () => {
        restartTracks(clock);
        dispatch({ type: 'TOGGLE_LOADING_STATE', isLoading: false });
        return Promise.resolve(
          startTrack(trackName, clock, soundBank)
        );
      }
    );
  }
};
