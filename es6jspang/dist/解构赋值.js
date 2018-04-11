'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by Liqiaomiao on 2018/4/8.
 */
{
    //数组的结构赋值
    var a = 1,
        _ref = [2, 3],
        b = _ref[0],
        c = 4;

    console.log('\u6570\u7EC4\u7684\u89E3\u6784\u8D4B\u503C=> ' + a + ',' + b + ',' + c);
}
{
    //undefind;
    var _a = '技术胖',
        _undefined = undefined,
        _b = _undefined === undefined ? 'jspang' : _undefined;

    console.log('undefind=>  ' + (_a + _b));
}
{
    //null;
    var _a2 = '技术胖',
        _ref2 = null,
        _b2 = _ref2 === undefined ? 'jspang' : _ref2;

    console.log('null=> ' + (_a2 + _b2));
}
{
    //对象的结构赋值
    var _foo$bar = { foo: 'jspang', bar: '技术胖' },
        foo = _foo$bar.foo,
        bar = _foo$bar.bar;

    console.log('\u5BF9\u8C61\u7684\u89E3\u6784\u8D4B\u503C=>  ' + (foo + bar));
}
{
    //圆括号的使用:如果在解构之前就定义了变量，这时候你再解构会出现问题。下面是错误的代码，编译会报错。
    var _foo = void 0;
    var _foo2 = { foo: 'jspang' };
    _foo = _foo2.foo;

    console.log('\u5706\u62EC\u53F7\u7684\u4F7F\u7528=> ' + _foo);
}

{
    //字符串解构
    var _jspang = 'jspang',
        _jspang2 = _slicedToArray(_jspang, 4),
        _a3 = _jspang2[0],
        _b3 = _jspang2[1],
        _c = _jspang2[2],
        e = _jspang2[3];

    console.log('\u5B57\u7B26\u4E32\u89E3\u6784' + _a3);
    console.log('\u5B57\u7B26\u4E32\u89E3\u6784' + _b3);
    console.log('\u5B57\u7B26\u4E32\u89E3\u6784' + _c);
    console.log('\u5B57\u7B26\u4E32\u89E3\u6784' + e);
}