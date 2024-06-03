onmessage = function (event) {
  if (event.data.way === "findIndex") {
    console.log("findStart");
    console.time("find");
    let count = 0;
    finder: for (let i = 0; i < event.data.count; i++) {
      count++;
      if (i === event.data.find) {
        postMessage("findDown" + count);
        break finder;
      }
    }
    console.timeEnd("find");
  }
  if (event.data.way === "findLastIndex") {
    console.time("lastFind");
    console.log("findLastStart");
    let count = 0;
    lastFinder: for (let i = event.data.count; i > 0; i--) {
      count++;
      if (i === event.data.find) {
        postMessage("findLastDown" + count);
        break lastFinder;
      }
    }
    console.timeEnd("lastFind");
  }
};
