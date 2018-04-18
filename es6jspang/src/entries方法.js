/**
 * Created by Liqiaomiao on 2018/4/18.
 */
'use strict';
{//.next();.next().value=>[key,value]
    var arr = ["a", "b", "c"];
    var iter = arr.entries();
    var a = [];
    console.log(iter);
    for(var i=0;i<arr.length+1;i++){
        var tem=iter.next();
        console.log('done',tem.done);
        if(tem.done!==true){
            console.log('.next().value=>',tem.value);
            a[i]=tem.value;
        }
    }
    console.log(a);
    console.log('\n')
}
{//二维数组按行排序
    function sortArr(arr) {
        var entries = arr.entries();
        var result = entries.next();
        var goNext = !result.done;
        while (goNext) {
            result.value[1].sort((a, b) => a - b); //注意加上{}需要加return ;
            result = entries.next();
            goNext = !result.done;
        }
        // for(var i =0;i<arr.length;i++){
        //    arr[i]=arr[i].sort((a,b)=>a-b);
        // }
        return arr;
    }

    var arr=[[34,1],[456,2,3,44,234],[4567,1,4,5,6],[34,78,23,1]];
    console.log('sort', sortArr(arr))
}
{//使用for…of 循环
    var arr = ["a", "b", "c"];
    var iterator=arr.entries();
    for(let e of iterator){
        console.log('for of 循环=>',e)
    }
}
