import logUpdate from "log-update";
let frames = ["loading", "loading.", "loading..", "loading..."];

let i = 0;

setInterval(() => {
  const frame = frames[i++ % frames.length];
  logUpdate(frame);
}, 200);
