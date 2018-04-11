'use strict';

/**
 * Created by Liqiaomiao on 2018/4/11.
 */
{
    var fun = function fun(_ref) {
        var a = _ref.a,
            _ref$b = _ref.b,
            b = _ref$b === undefined ? 'jspang' : _ref$b;

        console.log(a, b);
    };

    //对象的函数解构
    var json = {
        a: 'jspang',
        b: '技术胖'
    };

    fun(json);
}
{
    var _fun = function _fun(a, b, c) {
        console.log('\u6570\u7EC4\u7684\u51FD\u6570\u89E3\u6784:' + a + ',' + b + ',' + c);
    };

    //数组的函数解构
    var arr = ['jspang', '技术胖', '免费教程'];

    _fun.apply(undefined, arr);
}