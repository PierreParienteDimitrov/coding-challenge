export const mergeTwoLists = (arr1, arr2) => {
   const newArr = arr1.concat(arr2);

   newArr.sort((a, b) => a - b);

   console.log(newArr);
   return newArr;

   //    // bubble sort
   //    let noSwaps;

   //    for (let i = newArr.length; i > 0; i--) {
   //       noSwaps = true;

   //       for (let j = 0; j < i - 1; j++) {
   //          if (newArr[j] > newArr[j + 1]) {
   //             let temp = newArr[j];
   //             newArr[j] = newArr[j + 1];
   //             newArr[j + 1] = temp;
   //             noSwaps = false;
   //          }
   //       }
   //       if (noSwaps) {
   //          console.log(newArr);
   //          return newArr;
   //       }
   //    }
};
