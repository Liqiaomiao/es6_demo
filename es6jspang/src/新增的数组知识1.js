/**
 * Created by Liqiaomiao on 2018/4/8.
 */
{//Array.from(json);
const json={
    0:'jspang',
    1:'技术胖',
    length:2
}
const arr=Array.from(json);
console.log(arr);
}

{
    console.log('\n')
    //Array.of('字符串');
    console.log(Array.of('1','2','3'));
}

{//find（）；
    console.log('\n')
    let arr=[1,2,3,4,5,6,7,8,9];
    console.log(arr.find(function (value,index,arr) {
        return value>5
    }))

}

{//fill();
    console.log('\n')
    let arr=[0,1,2,3,4,5,6,7,8,9];
    arr.fill('jspang',2,5)
    console.log(`arr.fill():填充数组=> ${arr} `);
}

{//for...of循环;
    let arr=['jspang','技术胖','大胖逼逼叨']
    for(let item of arr){
        console.log(`for...of =>  ${item}`)
    }
}
{//for...of=》arr.keys();
    console.log('\n')
    let arr=['jspang','技术胖','大胖逼逼叨'];
    for(let index of arr.keys()){
        console.log(`arr.keys():数组的索引 =>  ${index}`)
    }

}
{//for..of =>entries;
    console.log('\n')
    let arr=['jspang','技术胖','大胖逼逼叨'];
    for(let  [index,item] of arr.entries()){
        console.log(`arr.entries()=>index:${index},item:${item}`)
    }
}
{//entries()实例方法; 需要时用next()手动跳转到下一个值
    let arr=['jspang','技术胖','大胖逼逼叨'];
    let list=arr.entries();
    console.log('\n')
    console.log(`arr.entries().next=> ${list.next()}`);
    console.log(`arr.entries().next=> ${list.next().value}`);
    console.log(`arr.entries().next=> ${list.next().value}`);
    console.log(`arr.entries().next=> ${list.next().value}`);
}

