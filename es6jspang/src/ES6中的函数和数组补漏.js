/**
 * Created by Liqiaomiao on 2018/4/11.
 */
{//对象的函数解构
    let json = {
        a:'jspang',
        b:'技术胖'
    }
    function fun({a,b='jspang'}) {
        console.log(a,b)
    }
    fun(json);
}
{//数组的函数解构
    let arr=['jspang','技术胖','免费教程'];
    function fun(a,b,c) {
        console.log(`数组的函数解构:${a},${b},${c}`)
    }
    fun(...arr)
}