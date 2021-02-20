"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var urlProcess = function () {
    var addURLParam = function (url, name, value) {
        url += (-1 === (url.indexOf('?')) ? '?' : '&');
        url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
        return url;
    };
    return {
        addURLParam: addURLParam,
    };
};
exports.default = urlProcess;
