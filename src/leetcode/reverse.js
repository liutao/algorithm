// 给定一个范围为 32 位 int 的整数，将其颠倒。

// 例 1:
// 输入: 123
// 输出:  321
 
// 例 2:
// 输入: -123
// 输出: -321
 

// 例 3:
// 输入: 120
// 输出: 21
 

// 注意:

// 假设我们的环境只能处理 32 位 int 范围内的整数。根据这个假设，如果颠倒后的结果超过这个范围，则返回 0。

/**
 * @param {number} x
 * @return {number}
 */


var reverse = function(x) {
  const MAX_SAFE_INTEGER = 2 ** 31 - 1;
  const MIN_SAFE_INTEGER = - (2 ** 31) + 1;
  let arr = x.toString().split('');
  let reverseNum;
  if (x < 0) {
    arr.shift();
  }
  reverseNum = arr.reverse().join('')
  if(x < 0){
    reverseNum *= -1
  }
    
  if (reverseNum < MIN_SAFE_INTEGER || reverseNum > MAX_SAFE_INTEGER) return 0;

  return Number(reverseNum);
};