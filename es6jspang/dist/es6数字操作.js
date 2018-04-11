'use strict';

/**
 * Created by Liqiaomiao on 2018/4/8.
 */
var binary = 21;
console.log(binary);
var b = 438;
console.log(b);
//数字判断
var a = 11 / 4;
console.log(Number.isFinite(a));
console.log('\'jspang\':' + Number.isFinite('jspang'));
console.log('NaN:' + Number.isFinite(NaN));
console.log('undefined:' + Number.isFinite(undefined));
//NaN验证;
console.log('NaN:' + Number.isNaN(NaN));
console.log('123:' + Number.isNaN(123));
//整数取值范围
console.log('\u6700\u5927\u5B89\u5168\u6574\u6570' + Number.MAX_SAFE_INTEGER);
console.log('\u6700\u5C0F\u5B89\u5168\u6574\u6570' + Number.MIN_SAFE_INTEGER);
var test = Math.pow(2, 53) - 1;
console.log(Number.isSafeInteger(test));