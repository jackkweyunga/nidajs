"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.api = void 0;
exports.api = "http://127.0.0.1:5000/nin/";
exports.config = {
    url: (id, proxy) => `${proxy}${id}`
};
