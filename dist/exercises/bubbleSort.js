"use strict";
// const arr = [3, 2, 1, 4, 6, 5, 7, 9, 8, 10];
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
const bubbleSort = (arr) => {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps)
            break;
    }
};
exports.bubbleSort = bubbleSort;
//# sourceMappingURL=bubbleSort.js.map