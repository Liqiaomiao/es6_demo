/**
 * Created by Liqiaomiao on 2018/4/18.
 */
'use strict';

{
    //.next();.next().value=>[key,value]
    var arr = ["a", "b", "c"];
    var iter = arr.entries();
    var a = [];
    console.log(iter);
    for (var i = 0; i < arr.length + 1; i++) {
        var tem = iter.next();
        console.log('done', tem.done);
        if (tem.done !== true) {
            console.log('.next().value=>', tem.value);
            a[i] = tem.value;
        }
    }
    console.log(a);
}
{
    //二维数组按行排序
    var sortArr = function sortArr(arr) {
        var goNext = true;
        var entries = arr.entries();
        while (goNext) {
            var result = entries.next();
            if (result.done !== true) {
                result.value[1].sort(function (a, b) {
                    a - b;
                });
                console.log('sortinner', result.value[1]);
                goNext = true;
            }{
                goNext = false;
            }
        }
        return arr;
    };

    var arr = [[34, 1], [456, 2, 3, 44, 234], [4567, 1, 4, 5, 6], [34, 78, 23, 1]];
    console.log('sort', sortArr(arr));
}