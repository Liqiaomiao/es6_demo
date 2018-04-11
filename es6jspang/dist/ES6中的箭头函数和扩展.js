'use strict';

/**
 * Created by Liqiaomiao on 2018/4/11.
 */
{
    //默认值的操作
    var _add = function _add(a) {
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        return a + b;
    };

    console.log('\u9ED8\u8BA4\u503Cadd(a,b=1) => ' + _add(1));
}
{
    //主动抛出错误
    var _add2 = function _add2(a) {
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        if (a === 0) {
            throw new Error('主动抛出错误 throw new Error:this is error');
        }
        return a + b;
    };

    console.log(_add2(1));
}
{
    //严格模式
    var _add3 = function _add3(a, b) {
        'use strict';

        if (a === 0) {
            throw new Error('this is an error');
        }
        return a + b;
    };

    console.log(_add3(1, 2));
}
{
    //箭头函数
    var add = function add(a) {
        var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        return a + b;
    };
    console.log('\u7BAD\u5934\u51FD\u6570\uFF1A' + add(1));
}
{//箭头函数 {}的使用


}