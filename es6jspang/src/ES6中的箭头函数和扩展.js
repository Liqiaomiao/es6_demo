/**
 * Created by Liqiaomiao on 2018/4/11.
 */
{//默认值的操作
    function add(a,b=1) {
        return  a+b;
    }
    console.log(`默认值add(a,b=1) => ${add(1)}`)
}
{//主动抛出错误
    function add(a,b=1) {
        if(a===0){
            throw new Error('主动抛出错误 throw new Error:this is error')
        }
        return a+b
    }
    console.log(add(1))
}
{//严格模式
    function add(a,b) {
        'use strict'
        if(a===0){
            throw new Error('this is an error')
        }
        return a+b;
    }
    console.log(add(1,2))
}
{//箭头函数
    var add = (a, b = 1) => a + b;
    console.log(`箭头函数：${add(1)}`);
}
{//箭头函数 {}的使用


}

