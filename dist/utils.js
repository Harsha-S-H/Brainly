"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
const random = (len) => {
    const hash = "asdfghj12345";
    const length = hash.length;
    let ans = "";
    for (let i = 0; i < len; i++) {
        ans += hash[Math.floor(Math.random() * length)];
    }
    return ans;
};
exports.random = random;
