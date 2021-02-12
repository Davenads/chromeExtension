/**
 * Listens for the app launching then creates the window
 *
 * @see /apps/app.window.html
 */
chrome.runtime.onStartup.addListener(function () {
<<<<<<< HEAD
  chrome.windows.create({
    url: "index.html",
    type: "popup",
    height: 600,
    width: 400,
  });

  chrome.alarms.create("test Alarm", {
    delayInMinutes: 0.1,
    periodInMinutes: 0.2,
  });

  chrome.alarms.onAlarm.addListener(function (alarm) {
    //   alert("Beep");
    // chrome.windows.create({ url: "index.html", type: "popup" });
  });

  //     "index.html", {
  //     id: "main",
  //     bounds: { width: 620, height: 500 },
  //   });
=======
  chrome.alarms.clearAll();
  // chrome.alarms.onAlarm.addListener(function (alarm) {
  //   console.log(alarm);
  //   if (alarm.name === "es") {
  //     chrome.windows.create({
  //       url: "eyes.html",
  //       type: "popup",
  //       height: 500,
  //       width: 400,
  //     });
  //   }
  //   if (alarm.name === "st") {
  //     chrome.windows.create({
  //       url: "stretch.html",
  //       type: "popup",
  //       height: 500,
  //       width: 400,
  //     });
  //   }
  //   if (alarm.name === "walk") {
  //     chrome.windows.create({
  //       url: "walk.html",
  //       type: "popup",
  //       height: 500,
  //       width: 400,
  //     });
  //   }
  //   if (alarm.name === "wat") {
  //     chrome.windows.create({
  //       url: "water.html",
  //       type: "popup",
  //       height: 500,
  //       width: 400,
  //     });
  //   }
  // });
>>>>>>> 6c0f6bebc86a8fd08fe546c5e10e4639e06165c2
});
