import puppeteer from "puppeteer";

// const doPuppeteer = async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     devtools: true,
//   });
//   // Create a new tab
//   const page = await browser.newPage();
//
//   // Connect to Chrome DevTools
//   const client = await page.target().createCDPSession();
//
//   // Set throttling property
//   await client.send("Network.emulateNetworkConditions", {
//     offline: false,
//     downloadThroughput: (200 * 1024) / 8,
//     uploadThroughput: (200 * 1024) / 8,
//     latency: 20,
//   });
//
//   // Navigate and take a screenshot
//   await page.goto("https://fdalvi.github.io");
//   await page.screenshot({ path: "screenshot.png" });
//   await browser.close();
//   // const browser = await puppeteer.launch({
//   //   headless: false,
//   // });
//   // const page = await browser.newPage();
//   // await page.goto("http://localhost:3000/");
//   // await page.setViewport({ width: 1920, height: 1300 });
//   // await page.waitFor(5000);
//   // // await page.screenshot({ path: "./screenshot.png" });
//   // // await page.waitFor(10000);
//   //
//   // const inputIDSelector =
//   //   "body > div > div.pcm-login-main-container-center > div.pcm-login-wrapper > div.pcm-login-wrapper-trapezoid > div > div.login-box > form > div.username-box > div > input";
//   // const inputPWSelecotr =
//   //   "body > div > div.pcm-login-main-container-center > div.pcm-login-wrapper > div.pcm-login-wrapper-trapezoid > div > div.login-box > form > div.password-box > div.password-input-wrapper > input";
//   //
//   // // console.log(process.env.PW);
//   // // await page.type(inputIDSelector, process.env.ID as string);
//   // await page.type(inputPWSelecotr, process.env.PW as string);
//   //
//   // // await page.screenshot({ path: "./screenshot.png" });
//   //
//   // const loginBtn =
//   //   "body > div > div.pcm-login-main-container-center > div.pcm-login-wrapper > div.pcm-login-wrapper-trapezoid > div > div.login-box > form > div.login-btn-box";
//   // await page.click(loginBtn);
//   // // await page.screenshot({ path: "./screenshot.png" });
//   //
//   // await page.waitFor(3000);
//   // // await page.waitForNavigation();
//   // // await page.screenshot({ path: "./screenshot.png" });
//   // await page.close();
//   // await browser.close();
// };

// doPuppeteer();

// puppeteer.executablePath()는 설치한 puppeteer 노드모듈의 번들로 제공되는 chromium 브라우저의 경로의 주소값을 가진다.

// 해당 예제는 puppeteer.launch를 통해 퍼펫티어를 실행할때 해당 경로의 값을 지정한다.

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setRequestInterception(true);

  page.on("request", (request) => {
    if (request.resourceType() === "script") {
      request.abort();
    } else {
      request.continue();
    }
  });

  await page.goto("http://localhost:3000/");
  const client = await page.target().createCDPSession();
  await client.send("Network.emulateNetworkConditions", {
    offline: false,
    downloadThroughput: (50 * 1024) / 8,
    uploadThroughput: (20 * 1024) / 8,
    latency: 500,
  });
  // await page.screenshot({ path: "pptr-nojs.png" });

  await browser.close();
})();
// 딜레이를 주기 위한 함수

// function delay( timeout ) {
//
//     return new Promise(( resolve ) => {
//
//         setTimeout( resolve, timeout );
//
//     });
//
// }

//
//
// puppeteer.launch({
//
//     headless : false	// 헤드리스모드의 사용여부를 묻는다
//
//     , devtools : false	// 브라우저의 개발자 모드의 오픈 여부를 묻는다
//
//     , executablePath : puppeteer.executablePath()	// 실행할 chromium 기반의 브라우저의 실행 경로를 지정한다.
//
//     , ignoreDefaultArgs : false	// 배열이 주어진 경우 지정된 기본 인수를 필터링한다.(중요 : true사용금지)
//
//     , timeout : 30000	// 브라우저 인스턴스가 시작될 때까지 대기하는 시간(밀리 초)
//
//     , defaultViewport : { width : 800, height : 600 }	// 실행될 브라우저의 화면 크기를 지정한다.
//
//     , args : [ "about:blank" ]
//
// }).then(async browser => {
//
//     const page = await browser.newPage();
//     // 새탭을 열고 작업을 수행할 페이지를 지정한다.
//     await page.goto( "http://cdm.exem-oss.org/", { waitUntil : "networkidle2" } );
//     // 5초간딜레이를 준다.
//     await delay(5000);
//     // 스크린샷을 찍는다.
//     await page.screenshot( { path : "src/puppeteer/img/sample.png" } );
//     // 모든 작업을 수행하면 브라우저를 닫고 퍼펫티어를 종료한다.
//     await browser.close();
// });
