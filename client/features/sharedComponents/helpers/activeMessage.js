let interval = undefined;
let timeLimit = undefined;
let cb = undefined;

const clear = () => {
  clearTimeout(timeLimit);
  clearInterval(interval);
  console.log('Timer canceled');
  cb('');
};

const activeMessage = (message, callback, frameRate = 200, timeout = 8000) => {
  interval || timeLimit && clear();

  const dotMatrix = [
    '.',
    '..',
    '...',
    ' ...',
    '...',
    '..',
    '.',
    ''
  ];

  let frame = dotMatrix.length;

  cb = callback;

  interval && clear();

  timeLimit = setTimeout(clear, timeout);

  interval = setInterval(() => {
    if (--frame < 0) {
      frame = dotMatrix.length - 1;
    }

    // console.log(`${message}${dotMatrix[frame]}`, `frame: ${frame}`);
    callback(`${message}${dotMatrix[frame]}`);
  }, frameRate);

  return () => { clearInterval(interval) };
};

// activeMessage('Hello', console.log);

export default activeMessage;
