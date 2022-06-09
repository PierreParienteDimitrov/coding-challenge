const x = 2442;

var isPalindrome = function (x) {
   const str = x.toString();
   const lastIndex = str.length - 1;

   for (let i = 0; i < str.length; i++) {
      let first = str[i];
      let last = str[lastIndex - i];

      if (first !== last) {
         const result = false;
         console.log(result);
         return false;
      }
   }

   const result = true;
   console.log(result);

   return true;
};

isPalindrome(x);
