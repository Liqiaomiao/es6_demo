/**
 * Created by Liqiaomiao on 2018/4/8.
 */
{//对象扩展运算符（...）：允许它传入的参数是不确定的
    function jspang(...arg) {
        console.log('不确定参数：',arg[0])
        console.log('不确定参数：',arg[1])
        console.log('不确定参数：',arg[2])

    }
    jspang(1,2);
    console.log('\n')
}

{//扩展运算符的用处：解决数组赋值后属性变更对原数组的影响；

    let arr1=['www','jspang','com'];
    let arr2=[...arr1];
    arr2.push('shenghongyu');
    console.log(`数组扩展应用：${arr2}`);
    console.log(`数组扩展应用：${arr1}`);
    console.log('\n')
}
{//替代数组的 apply 方法 es5 add(1,2)
    function add(x,y) {
        return x+y;
    }

    let numbers=[1,2];
    console.log('替代数组的 apply 方法',add(...numbers))
    console.log('\n')
}
{
    //reset运算符
    function jspang(first,...arg) {
        console.log('reset运算符',arg.length);
        for(let val of arg){//for...of的循环可以避免我们开拓内存空间，增加代码运行效率，所以建议大家在以后的工作中使用for...of循环
            console.log(val)
        }
    }
    jspang(1,2,3)

}


