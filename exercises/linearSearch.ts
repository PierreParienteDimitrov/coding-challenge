export const linearSearch = (arr, search) => {
   arr.map((el) => {
      if (el === search) {
         console.log(arr.indexOf(el));
         return arr.indexOf(el);
      }
   });
};
