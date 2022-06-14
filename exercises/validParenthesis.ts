// const str = '({[({})]})';

export const validParenthesis = (str) => {
   const brackets = '(){}[]';
   const stack = [];

   for (let bracket of str) {
      let bracketIndex = brackets.indexOf(bracket);

      if (bracketIndex % 2 === 0) {
         stack.push(bracketIndex + 1);
      } else {
         if (stack.pop() !== bracketIndex) {
            return false;
         }
      }
   }

   console.log(stack.length === 0);
   return stack.length === 0;
};
