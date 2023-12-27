import puppeteer from 'puppeteer';

const loginWebsite = async () => {
    const browser = await puppeteer.launch({
        headless: false, // headless 모드를 비활성화하여 브라우저 창을 표시
        devtools: false,  // 개발자 도구 활성화
        // slowMo: 200,      // 브라우저 작업 시간을 늘려 줌
    });

    const page = await browser.newPage();

    // Viewport 크기 설정
    await page.setViewport({
        width: 1920,
        height: 1080,
    });

    const url = 'https://'; // 로그인할 웹사이트 주소
    const username = ''; // 여기에 사용자명 입력
    const password = ''; // 여기에 비밀번호 입력

    await page.goto(url);

    // ID 입력란 찾기 및 입력
    await page.type('#TextUserID', username); // 해당 웹사이트의 실제 ID 입력란의 셀렉터를 사용

    // 비밀번호 입력란 찾기 및 입력
    await page.type('#TextPassword', password); // 해당 웹사이트의 실제 비밀번호 입력란의 셀렉터를 사용

    // 로그인 버튼 찾기 및 클릭
    await page.click('#LoginButton'); // 해당 웹사이트의 실제 로그인 버튼의 셀렉터를 사용

    // await page.click('#top > nav > ul > li:nth-child(4)');

    // 대기: 팝업 창이 나타날 때까지
    const popupTarget = await browser.waitForTarget(
        target => target.opener() === page.target(),
    );

    // 팝업 창 핸들 얻기
    const popupPage = await popupTarget.page();

    // 팝업 창 닫기
    await popupPage.close();


    // iframe 선택자
    const iframeSelector = '#topFrame';

    // iframe에 포커스 맞추기
    const iframeElementHandle = await page.$(iframeSelector);
    const iframe = await iframeElementHandle.contentFrame();
    // iframe 내부에서 버튼 선택자
    const buttonSelector = "#\\33 \\(2\\)";

    // 버튼이 나타날 때까지 대기
    await iframe.waitForSelector(buttonSelector);
    // 버튼 클릭
    await iframe.click(buttonSelector);






    const iframeMainSelector = '#mainFrame';

    // iframe에 포커스 맞추기
    const iframeMainElementHandle = await page.$(iframeMainSelector);
    const iframeMain = await iframeMainElementHandle.contentFrame();


    const iframeMainSelector2 = 'html > frameset > frameset > frame:nth-child(1)';

    // iframe에 포커스 맞추기
    const iframeMainElementHandle2 = await iframeMain.$(iframeMainSelector2);
    const iframeMain2 = await iframeMainElementHandle2.contentFrame();

    // document.querySelector("html > frameset > frameset > frame:nth-child(1)")

    // XPath 식
    const peopleBtn = '#spn_TreeViewTreeCtrl0_5';
    // 버튼이 나타날 때까지 대기
    await iframeMain2.waitForSelector(peopleBtn);
    // 버튼 클릭
    await iframeMain2.click(peopleBtn);



    // 브라우저 닫기
    // await browser.close();
};

loginWebsite();
