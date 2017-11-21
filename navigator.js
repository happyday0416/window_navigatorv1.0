(function () {
    var Browser = {
        init: function () {

            this.appVersion = this.searchAppVersion(navigator.userAgent) || "not find appVersion";
            this.brower = this.searchBrower(navigator.userAgent) || "not find brower";
            this.getMobileSystem = this.getMobileOperatingSystem(navigator.userAgent || navigator.vendor || window.opera) || "undefined";
            this.detecting = this.getDetectingOS(navigator.appVersion) || "Unknown OS";
            //this.iDevices = this.getiDevices(product) || "Unknown iOS";
        },
        searchAppVersion: function (data) {
            var ua = data,
                tem,
                M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                return 'IE ' + (tem[1] || '');
            }
            if (M[1] === 'Chrome') {
                tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
                if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
            }
            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
            if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
            return M.join(' ');

        },
        searchBrower: function (data) {

            var isIE = data.search("MSIE") > -1; //IE
            var isIE7 = data.search("MSIE 7") > -1; //IE
            var isFirefox = data.search("Firefox") > -1;
            var isOpera = data.search("Opera") > -1;
            var isSafari = data.search("Safari") > -1;
            var isChrome = data.search("Chrome") > -1;

            if (isIE7) {
                browser = 'IE7';
            }

            if (isIE) {
                browser = 'IE';
            }

            if (isFirefox) {
                browser = 'Firefox';
            }

            if (isOpera) {
                browser = 'Opera';
            }

            if (isSafari) {
                browser = 'Safari';
            }


            if (isChrome) {
                browser = 'Chrome';
            }

            return browser;
        },
        getMobileOperatingSystem: function (data) {
            if (/windows phone/i.test(data)) {
                return "Windows Phone";
            }
            if (/android/i.test(data)) {
                return "Android";
            }
            if (/iPad/.test(data) && !window.MSStream) {
                return "iPad";
            }
            if (/iPhone/.test(data) && !window.MSStream) {
                return "iPhone";
            }
            if (/iPod/.test(data) && !window.MSStream) {
                return "iPod";
            }

            return "Web";
        },
        getDetectingOS: function (data) {
            var initOsName = "Unknown OS";
            if (data.indexOf("Win") != -1) initOsName = "Windows";
            if (data.indexOf("Mac") != -1) initOsName = "MacOS";
            if (data.indexOf("X11") != -1) initOsName = "UNIX";
            if (data.indexOf("Linux") != -1) initOsName = "Linux";
            return initOsName;
        }
    }

    Browser.init();

    window.browser = {
        version: Browser.appVersion,
        brower: Browser.brower,
        checkMobileSystem: Browser.getMobileSystem,
        getDetectingOS: Browser.detecting,
        //getiDevices: Browser.iDevices
    };

    var version = browser.version;
    var brower = browser.brower;
    console.log("裝置&版本 : " +version);
    console.log("裝置 : " +brower);
    console.log(browser.checkMobileSystem);
    console.log(browser.getDetectingOS);

})();


