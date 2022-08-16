import logUpdate from "log-update";

const char = "⏳";

const min = 0;

const max = 100;

const steps = 5;

let num = 1;

const mInterval = setInterval(() => {
  let progress = "";

  for (let i = 0; i < num; i++) {
    progress += char;
  }

  const progressString = `Loading: [${progress} ${num * steps}%]`;
  logUpdate(progressString);
  num++;

  if (num > max / steps) {
    logUpdate.done();
    clearInterval(mInterval);
  }
}, 300);
