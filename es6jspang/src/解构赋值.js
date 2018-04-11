/**
 * Created by Liqiaomiao on 2018/4/8.
 */
{//数组的结构赋值
    let[a,[b],c]=[1,[2,3],4];
    console.log(`数组的解构赋值=> ${a },${b },${c}`)

}
{//undefind;
    let [a,b='jspang']=['技术胖',undefined];
    console.log(`undefind=>  ${a+b}`)
}
{//null;
    let [a,b='jspang']=['技术胖',null];
    console.log(`null=> ${a+b}`);
}
{//对象的结构赋值
    let {foo,bar}={foo:'jspang',bar:'技术胖'};
    console.log(`对象的解构赋值=>  ${foo+bar}`);

}
{//圆括号的使用:如果在解构之前就定义了变量，这时候你再解构会出现问题。下面是错误的代码，编译会报错。
    let foo;
    ({foo}={foo:'jspang'});
        console.log(`圆括号的使用=> ${foo}`)
}

{//字符串解构
    const [a,b,c,e]='jspang';
    console.log(`字符串解构${a}`)
    console.log(`字符串解构${b}`)
    console.log(`字符串解构${c}`)
    console.log(`字符串解构${e}`)

}
