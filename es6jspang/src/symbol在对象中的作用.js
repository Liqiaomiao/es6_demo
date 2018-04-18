/**
 * Created by Liqiaomiao on 2018/4/18.
 */
'use strict';
{
    var jspang=Symbol();
    var obj={
        [jspang]:'技术胖'
    }
    console.log(obj[jspang]);
    obj[jspang]='web';
    console.log(obj[jspang]);
    console.log(obj,jspang)
}
{
    var obj={name:'jspang',skill:'web',age:18};
    for(let item in obj){
        console.log('对象的普通遍历',item)
    }

}
{   var obj={name:'jspang',skill:'web'};
    let age=Symbol();
    obj[age]=18;
    for(let item in obj){
        console.log('对象隐藏属性的遍历',item)
    }
    console.log(obj)
}