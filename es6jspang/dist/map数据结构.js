'use strict';

/**
 * Created by Liqiaomiao on 2018/4/13.
 */
{
    //map key为对象
    var json = {
        name: "jspang",
        skill: 'web'
    };
    console.log(json);
    var map = new Map();
    map.set(json, 'iam'); //map的增加 .set();
    console.log('map key为对象=> ', map);
    console.log('\n');
}
{
    //map key为字符串
    var _json = {
        name: "jspang",
        skill: 'web'
    };
    console.log(_json);
    var map = new Map();
    map.set('jspang', _json);
    console.log('map key为为字符串 => ', map);
    console.log('\n');
}
{
    //map的取值 => .get();
    var _json2 = {
        name: 'jspang',
        skill: 'web'
    };
    var map = new Map();
    map.set(_json2, "iam");
    console.log('.get()=>取值：', map.get(_json2));
}
{
    //map的删除 = 》.delete();
    var _json3 = {
        name: 'jspang',
        skill: 'web'
    };
    var _map = new Map();
    _map.set(_json3, 'iam');
    _map.delete(_json3);
    console.log('.delete()=> ', _map);
}
{
    //map清除所有值 => .clear()
    var _json4 = {
        name: 'jspang',
        skill: 'web'
    };
    var _map2 = new Map();
    _map2.set(_json4, 'iam');
    _map2.clear();
    console.log('.clear()=> ', _map2);
}