// import {puppeteer} from 'puppeteer';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var puppeteer = require('puppeteer');
var doPuppeteer = function () { return __awaiter(_this, void 0, void 0, function () {
    var browser, page;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, puppeteer.launch({
                    headless: false
                })];
            case 1:
                browser = _a.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _a.sent();
                return [4 /*yield*/, page.waitFor(1000)];
            case 3:
                _a.sent();
                return [4 /*yield*/, page.goto("https://www.naver.com")];
            case 4:
                _a.sent();
                return [4 /*yield*/, page.waitFor(1000)];
            case 5:
                _a.sent();
                return [4 /*yield*/, page.goto("https://www.google.com")];
            case 6:
                _a.sent();
                return [4 /*yield*/, page.close()];
            case 7:
                _a.sent();
                return [4 /*yield*/, browser.close()];
            case 8:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
// doPuppeteer();
// puppeteer.executablePath()는 설치한 puppeteer 노드모듈의 번들로 제공되는 chromium 브라우저의 경로의 주소값을 가진다.
// 해당 예제는 puppeteer.launch를 통해 퍼펫티어를 실행할때 해당 경로의 값을 지정한다.
console.log(puppeteer.executablePath());
// 딜레이를 주기 위한 함수
function delay(timeout) {
    return new Promise(function (resolve) {
        setTimeout(resolve, timeout);
    });
}
puppeteer.launch({
    headless: false // 헤드리스모드의 사용여부를 묻는다
    ,
    devtools: false // 브라우저의 개발자 모드의 오픈 여부를 묻는다
    ,
    executablePath: puppeteer.executablePath() // 실행할 chromium 기반의 브라우저의 실행 경로를 지정한다.
    ,
    ignoreDefaultArgs: false // 배열이 주어진 경우 지정된 기본 인수를 필터링한다.(중요 : true사용금지)
    ,
    timeout: 30000 // 브라우저 인스턴스가 시작될 때까지 대기하는 시간(밀리 초)
    ,
    defaultViewport: { width: 800, height: 600 } // 실행될 브라우저의 화면 크기를 지정한다.
    ,
    args: ["about:blank"]
}).then(function (browser) { return __awaiter(_this, void 0, void 0, function () {
    var page;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, browser.newPage()];
            case 1:
                page = _a.sent();
                // 새탭을 열고 작업을 수행할 페이지를 지정한다.
                return [4 /*yield*/, page.goto("http://cdm.exem-oss.org/", { waitUntil: "networkidle2" })];
            case 2:
                // 새탭을 열고 작업을 수행할 페이지를 지정한다.
                _a.sent();
                // 5초간딜레이를 준다.
                return [4 /*yield*/, delay(5000)];
            case 3:
                // 5초간딜레이를 준다.
                _a.sent();
                // 스크린샷을 찍는다.
                return [4 /*yield*/, page.screenshot({ path: "src/puppeteer/img/sample.png" })];
            case 4:
                // 스크린샷을 찍는다.
                _a.sent();
                // 모든 작업을 수행하면 브라우저를 닫고 퍼펫티어를 종료한다.
                return [4 /*yield*/, browser.close()];
            case 5:
                // 모든 작업을 수행하면 브라우저를 닫고 퍼펫티어를 종료한다.
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
