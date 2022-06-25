"use strict";
// import { longestCommonPrefix } from './exercises/longestComminPrefix';
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestCommonPrefix = void 0;
// const arrs: string[] = ['flower', 'flow', 'flight'];
// longestCommonPrefix(arrs);
const longestCommonPrefix = (arrs) => {
    let longestCommonPrefix = '';
    if (!arrs || arrs.length === 0) {
        return longestCommonPrefix;
    }
    // Find the shortest string
    let minimumLength = arrs[0].length;
    for (let i = 0; i < arrs.length; i++) {
        minimumLength = Math.min(minimumLength, arrs[i].length);
    }
    for (let i = 0; i < minimumLength; i++) {
        let current = arrs[0][i];
        for (let j = 0; j < arrs.length; j++) {
            if (arrs[j][i] !== current) {
                return longestCommonPrefix;
            }
        }
        longestCommonPrefix += current;
    }
    return longestCommonPrefix;
};
exports.longestCommonPrefix = longestCommonPrefix;
//# sourceMappingURL=longestComminPrefix.js.map