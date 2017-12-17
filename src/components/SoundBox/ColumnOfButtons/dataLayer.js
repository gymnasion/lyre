export const loadTrack = (audioType, trackNumber, clock, soundBank, URL) => {
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
        soundBank[audioType + trackNumber] = { createNode, duration };
        resolve();
      });
    };
    request.send();
  });
};

export const startTrack = (audioType, trackNumber, clock, soundBank) => {
  restartTracks(clock);
  const context = clock.context;
  const event = clock
    .callbackAtTime(event => {
      const bufferNode = soundBank[audioType + trackNumber].createNode();
      bufferNode.start();
      event.bufferNode = bufferNode;
    }, context.currentTime)
    .repeat(soundBank[audioType + trackNumber].duration);
  return event;
};

export const restartTracks = clock => {
  const events = clock._events;
  const context = clock.context;
  events.forEach(event => {
    event.bufferNode.stop();
    event.schedule(context.currentTime);
  });
};

export const changeTrack = (
  selectedButton,
  soundBank,
  audioFiles,
  clock,
  audioType
) => {
  if (soundBank[audioType + selectedButton]) {
    return Promise.resolve(
      startTrack(audioType, selectedButton, clock, soundBank)
    );
  } else {
    const audioFileIndex = selectedButton - 1;
    const url = audioFiles[audioType][audioFileIndex];
    return loadTrack(audioType, selectedButton, clock, soundBank, url).then(
      () =>
        Promise.resolve(startTrack(audioType, selectedButton, clock, soundBank))
    );
  }
};

export const stopTrack = event => {
  event.clear();
  event.bufferNode.stop();
};

export const newTrack = (
  track,
  clickedButton,
  selectedButton,
  soundBank,
  audioFiles,
  clock,
  audioType
) => {
  if (track) {
    track.then(stopTrack);
  }
  if (clickedButton === selectedButton) {
    return null;
  }
  return changeTrack(clickedButton, soundBank, audioFiles, clock, audioType);
};
