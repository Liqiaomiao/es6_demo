'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Liqiaomiao on 2018/4/13.
 */
{
    //类的声明和使用
    var Coder = function () {
        function Coder() {
            _classCallCheck(this, Coder);
        }

        _createClass(Coder, [{
            key: 'name',
            value: function name(val) {
                console.log(val);
            }
        }]);

        return Coder;
    }();

    var jspang = new Coder();
    jspang.name('jspang');
    console.log('\n');
}
{
    //类的多方法声明:1.两个方法中间不要写逗号了;2.this指类本身
    var _Coder = function () {
        function _Coder() {
            _classCallCheck(this, _Coder);
        }

        _createClass(_Coder, [{
            key: 'name',
            value: function name(val) {
                console.log(this, val);
                return val;
            }
        }, {
            key: 'skill',
            value: function skill(val) {
                console.log(this.name('1458'), ':', val);
            }
        }]);

        return _Coder;
    }();

    var _jspang = new _Coder();
    _jspang.name('jspang');
    _jspang.skill('web');
    console.log('\n');
}
{
    //类的传参:在类的参数传递中我们用constructor( )进行传参
    var _Coder2 = function () {
        _createClass(_Coder2, [{
            key: 'name',
            value: function name(val) {
                console.log(this, val);
                return val;
            }
        }, {
            key: 'skill',
            value: function skill(val) {
                console.log(this.name('1458'), ':', val);
            }
        }]);

        function _Coder2(a, b) {
            _classCallCheck(this, _Coder2);

            this.a = a;
            this.b = b;
        }

        _createClass(_Coder2, [{
            key: 'add',
            value: function add() {
                return this.a + this.b;
            }
        }]);

        return _Coder2;
    }();

    var _jspang2 = new _Coder2(1, 2);
    console.log('类的传参', _jspang2.add());
    console.log('\n');
}
{
    //类的继承
    var _Coder3 = function () {
        _createClass(_Coder3, [{
            key: 'name',
            value: function name(val) {
                console.log(this, val);
                return val;
            }
        }, {
            key: 'skill',
            value: function skill(val) {
                console.log(this.name('1458'), ':', val);
            }
        }]);

        function _Coder3(a, b) {
            _classCallCheck(this, _Coder3);

            this.a = a;
            this.b = b;
        }

        _createClass(_Coder3, [{
            key: 'add',
            value: function add() {
                return this.a + this.b;
            }
        }]);

        return _Coder3;
    }();

    var htmler = function (_Coder4) {
        _inherits(htmler, _Coder4);

        function htmler() {
            _classCallCheck(this, htmler);

            return _possibleConstructorReturn(this, (htmler.__proto__ || Object.getPrototypeOf(htmler)).apply(this, arguments));
        }

        return htmler;
    }(_Coder3);

    var pang = new htmler(1, 2);
    console.log(pang.add());

    pang.name('继承');
}