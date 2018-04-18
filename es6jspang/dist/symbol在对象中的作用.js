/**
 * Created by Liqiaomiao on 2018/4/18.
 */
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

{
    var jspang = Symbol();
    var obj = _defineProperty({}, jspang, '技术胖');
    console.log(obj[jspang]);
    obj[jspang] = 'web';
    console.log(obj[jspang]);
    console.log(obj, jspang);
}
{
    var obj = { name: 'jspang', skill: 'web', age: 18 };
    for (var item in obj) {
        console.log('对象的普通遍历', item);
    }
}
{
    var obj = { name: 'jspang', skill: 'web' };
    var age = Symbol();
    obj[age] = 18;
    for (var _item in obj) {
        console.log('对象隐藏属性的遍历', _item);
    }
    console.log(obj);
}