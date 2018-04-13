/**
 * Created by Liqiaomiao on 2018/4/13.
 */
{//类的声明和使用
 class Coder{
     name(val){
         console.log(val)
     }
 }
 let jspang=new Coder;
 jspang.name('jspang');
 console.log('\n');
}
{//类的多方法声明:1.两个方法中间不要写逗号了;2.this指类本身
    class Coder{
        name(val){
            console.log(this,val);
            return val;
        }
        skill(val){
            console.log(this.name('1458'),':',val)
        }
    }
    let jspang=new Coder();
    jspang.name('jspang');
    jspang.skill('web');
    console.log('\n');
}
{//类的传参:在类的参数传递中我们用constructor( )进行传参
    class Coder{
        name(val){
            console.log(this,val);
            return val;
        }
        skill(val){
            console.log(this.name('1458'),':',val)
        }
        constructor(a,b){
            this.a=a;
            this.b=b;
        }
        add(){
            return this.a+this.b
        }
    }
    let jspang=new Coder(1,2);
    console.log('类的传参',jspang.add());
    console.log('\n');

}
{//类的继承
    class Coder{
        name(val){
            console.log(this,val);
            return val;
        }
        skill(val){
            console.log(this.name('1458'),':',val)
        }
        constructor(a,b){
            this.a=a;
            this.b=b;
        }
        add(){
            return this.a+this.b
        }
    }
    class htmler extends  Coder{

    }
    let pang=new htmler(1,2);
    console.log(pang.add());

    pang.name('继承');

}