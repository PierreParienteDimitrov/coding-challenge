export const twoSums1 = (arr, target) => {
   //    const initialArr = [...arr];
   const sortedArray = [...arr].sort((a, b) => a - b);

   let newArr;
   if (target > 0) {
      newArr = [...sortedArray].filter((el) => el <= target);
   } else {
      newArr = [...sortedArray].filter((el) => el >= target);
   }
   console.log(newArr);
   const output = [];

   for (let i = 0; i < newArr.length; i++) {
      // if (newArr[newArr.length - 1 - i] < 0 && target < 0) {
      //    difference = target + newArr[newArr.length - 1 - i];
      //    console.log(difference);
      // } else {
      const difference = target - newArr[newArr.length - 1 - i];

      const isInArray = arr.indexOf(difference) >= 0 ? true : false;
      // // console.log(arr.lastIndexOf(newArr[newArr.length - 1 - i]));

      if (isInArray) {
         output.push(
            arr.indexOf(difference),
            arr.lastIndexOf(newArr[newArr.length - 1 - i])
         );
         console.log('output is');
         console.log(output);
         return output;
      }

      console.log(isInArray);
   }
   return output;
};

export const twoSums2 = (arr, target) => {
   for (let i = 0; i < arr.length; i++) {
      const numberToFind = target - arr[i];
      for (let j = i + 1; j < arr.length; j++) {
         if (arr[j] === numberToFind) {
            console.log([arr.indexOf(arr[i]), arr.indexOf(arr[j])]);
            return [arr.indexOf(arr[i]), arr.indexOf(arr[j])];
         }
      }
   }
   console.log(null);
   return;
};

export const twoSums3 = (arr, target) => {
   const numsMap = {};

   for (let p = 0; p < arr.length; p++) {
      const currentMapVal = numsMap[arr[p]];

      if (currentMapVal >= 0) {
         console.log(currentMapVal, p);
         return [currentMapVal, p];
      } else {
         const numberToFind = target - arr[p];
         numsMap[numberToFind] = p;
      }
   }
   return null;
};
