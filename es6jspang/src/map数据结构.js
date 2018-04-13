/**
 * Created by Liqiaomiao on 2018/4/13.
 */
{//map key为对象
    let json={
        name:"jspang",
        skill:'web'
    }
    console.log(json)
    var map=new Map();
    map.set(json,'iam');//map的增加 .set();
    console.log('map key为对象=> ',map);
    console.log('\n')

}
{//map key为字符串
    let json={
        name:"jspang",
        skill:'web'
    }
    console.log(json)
    var map=new Map();
    map.set('jspang',json);
    console.log('map key为为字符串 => ',map);
    console.log('\n')
}
{//map的取值 => .get();
    let json={
        name:'jspang',
        skill:'web'
    }
    var map=new Map();
    map.set(json,"iam");
    console.log('.get()=>取值：',map.get(json))

}
{//map的删除 = 》.delete();
    let json={
        name:'jspang',
        skill:'web'
    }
    let map=new Map();
    map.set(json,'iam');
    map.delete(json);
    console.log('.delete()=> ',map)
}
{//map清除所有值 => .clear()
    let json={
        name:'jspang',
        skill:'web'
    }
    let map=new Map();
    map.set(json,'iam');
    map.clear();
    console.log('.clear()=> ',map)
}