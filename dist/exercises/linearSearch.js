"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linearSearch = void 0;
const linearSearch = (arr, search) => {
    arr.map((el) => {
        if (el === search) {
            console.log(arr.indexOf(el));
            return arr.indexOf(el);
        }
    });
};
exports.linearSearch = linearSearch;
//# sourceMappingURL=linearSearch.js.map