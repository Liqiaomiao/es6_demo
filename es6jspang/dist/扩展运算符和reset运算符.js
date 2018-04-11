'use strict';

/**
 * Created by Liqiaomiao on 2018/4/8.
 */
{
    //对象扩展运算符（...）：允许它传入的参数是不确定的
    var jspang = function jspang() {
        console.log('不确定参数：', arguments.length <= 0 ? undefined : arguments[0]);
        console.log('不确定参数：', arguments.length <= 1 ? undefined : arguments[1]);
        console.log('不确定参数：', arguments.length <= 2 ? undefined : arguments[2]);
    };

    jspang(1, 2);
    console.log('\n');
}

{
    //扩展运算符的用处：解决数组赋值后属性变更对原数组的影响；

    var arr1 = ['www', 'jspang', 'com'];
    var arr2 = [].concat(arr1);
    arr2.push('shenghongyu');
    console.log('\u6570\u7EC4\u6269\u5C55\u5E94\u7528\uFF1A' + arr2);
    console.log('\u6570\u7EC4\u6269\u5C55\u5E94\u7528\uFF1A' + arr1);
    console.log('\n');
}
{
    //替代数组的 apply 方法 es5 add(1,2)
    var add = function add(x, y) {
        return x + y;
    };

    var numbers = [1, 2];
    console.log('替代数组的 apply 方法', add.apply(undefined, numbers));
    console.log('\n');
}
{
    //reset运算符
    var _jspang = function _jspang(first) {
        for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            arg[_key - 1] = arguments[_key];
        }

        console.log('reset运算符', arg.length);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var val = _step.value;
                //for...of的循环可以避免我们开拓内存空间，增加代码运行效率，所以建议大家在以后的工作中使用for...of循环
                console.log(val);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    };

    _jspang(1, 2, 3);
}