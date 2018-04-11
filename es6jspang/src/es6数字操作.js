/**
 * Created by Liqiaomiao on 2018/4/8.
 */
let binary=0B010101;
console.log(binary);
let b=0o666;
console.log(b);
//数字判断
let a=11/4;
console.log(Number.isFinite(a));
console.log(`'jspang':${Number.isFinite('jspang')}`);
console.log(`NaN:${Number.isFinite(NaN)}`);
console.log(`undefined:${Number.isFinite(undefined)}`);
//NaN验证;
console.log(`NaN:${Number.isNaN(NaN)}`);
console.log(`123:${Number.isNaN(123)}`);
//整数取值范围
console.log(`最大安全整数${Number.MAX_SAFE_INTEGER}`);
console.log(`最小安全整数${Number.MIN_SAFE_INTEGER}`);
let test=Math.pow(2,53)-1;
console.log(Number.isSafeInteger(test));