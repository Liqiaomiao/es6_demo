'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by Liqiaomiao on 2018/4/13.
 */
{
    //new Proxy（{},{}）;get:function(target,key,property){}
    var prop = new Proxy({
        add: function add(val) {
            return val + 10;
        },
        name: 'i am jspang'
    }, {
        get: function get(target, key, property) {
            //target = > 代理对象 ；
            console.log('come in Get');
            return target[key];
        }

    });
    console.log(prop.name);
    console.log(prop.add(10));
    console.log('\n');
}
{
    //set:function(){}
    var pro = new Proxy({
        add: function add(val) {
            return val + 10;
        },
        name: 'i am jspang'
    }, {
        get: function get(target, key, property) {
            console.log('come in Get');
            return target[key];
        },
        set: function set(target, key, value, receiver) {
            console.log('setting ' + key + ' = ' + value);
            return target[key] = value;
        }

    });
    pro.name = '技术胖';
    console.log(pro.name);
    console.log('\n');
}
{
    //apply的使用 apply的作用是调用内部的方法，它使用在方法体是一个匿名函数时
    var target = function target() {
        return 'i am jspang';
    };
    var handler = {
        apply: function apply(target, ctx, args) {
            var _console;

            (_console = console).log.apply(_console, ['arguments=> '].concat(Array.prototype.slice.call(arguments)));
            return Reflect.apply.apply(Reflect, arguments);
        }
    };
    var pro = new Proxy(target, handler);
    console.log('apply的使用=> ', pro('a', 'b', 'c'));
    console.log('\n');
}
{
    //proxy =》.has();
    var obj = new Proxy({}, {
        has: function has() {
            return true;
        }
    });
    console.log('has()=>', 'x' in obj);
    console.log('\n');
}
{
    //场景应用=》 用proxy来实现多继承
    var Foo = {
        foo: function foo() {
            console.log('foo');
            return 'fooFun';
        }
    };
    var Bar = {
        bar: function bar() {
            console.log('bar');
            return 'barFun';
        }
    };
    var sonofFoo = Object.create(Foo);
    var sonfoBar = Object.create(Bar);
    console.log('Object.create(Foo) => ', sonofFoo, 'Object.create(Bar) = ', sonfoBar);

    var sonfoFooBar = new Proxy({
        a: 1
    }, {
        get: function get(target, key) {
            return target[key] || Foo[key] || Bar[key];
        }
    });
    console.log(sonfoFooBar, sonfoFooBar.foo(), sonfoFooBar.bar());
    console.log('\n');
}
{
    //应用场景 ：抽离校验模块，验证输入是否为在数字类型
    var _obj = {
        count: 0,
        amount: 1234,
        total: 14
    };
    var numbertest = new Proxy(_obj, {
        set: function set(target, key, value, proxy) {
            if (typeof value !== 'number') {
                throw Error('请输入数字');
            }
            return Reflect.set(target, key, value, proxy);
        }
    });

    numbertest.count = 123;
    console.log(numbertest.count);
    //  numbertest.count='foo';
    console.log('\n');
}
{
    //  'has 拦截 in 操作'
    console.log('has 拦截 in 操作');
    var api = {
        _apiKey: '123abc456def',
        getUsers: function getUsers() {},
        getUser: function getUser(userId) {},
        setUser: function setUser(userId, config) {}
    };
    var RESTRICTED = ['_apiKey'];
    api = new Proxy(api, {
        has: function has(target, key) {
            return RESTRICTED.indexOf(key) > -1 ? false : Reflect.has(target, key);
        }
    });
    // these log false, and `for in` iterators will ignore _apiKey console.log("_apiKey" in api);
    for (var key in api) {
        if (api.hasOwnProperty(key) && key === "_apiKey") {

            console.log('\'_apiKey\' in api  will never be logged because the proxy obscures _apiKey...');
        }
    }
}
{
    //   set / get 拦截读写请求并返回 undefined
    var _api = {
        _apiKey: '123456a',
        getUsers: function getUsers() {},
        getUser: function getUser() {},
        setUser: function setUser() {}
    };
    var _RESTRICTED = ['_apiKey'];

    _api = new Proxy(_api, {
        get: function get(target, key, proxy) {
            if (_RESTRICTED.indexOf(key) > -1) {
                throw Error(key + ' is restricted');
            }
            return Reflect.get(target, key, proxy);
        },
        set: function set(target, key, value, proxy) {
            if (_RESTRICTED.indexOf(key) > -1) {
                throw Error(key + ' is restriced');
            }
            return Reflect.get(target, key, value, proxy);
        }
    });
    //api._apiKey;
}
{
    //中断代理:Proxy.revocable() 该方法的返回值是一个对象，其结构为： {"proxy": proxy, "revoke": revoke}
    console.log('中断代理');
    var revocable = Proxy.revocable({}, {
        get: function get(target, name) {
            return "[[" + name + "]]";
        }
    });
    var proxy = revocable.proxy;
    proxy.foo; // "[[foo]]"

    revocable.revoke(); // 执行撤销方法

    proxy.foo; // TypeError
    proxy.foo = 1; // 同样 TypeError
    delete proxy.foo; // 还是 TypeError
    typeof proxy === 'undefined' ? 'undefined' : _typeof(proxy); // "object"，因为 typeof 不属于可代理操作
}