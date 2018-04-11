'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by Liqiaomiao on 2018/4/8.
 */
{
    //Array.from(json);
    var json = {
        0: 'jspang',
        1: '技术胖',
        length: 2
    };
    var arr = Array.from(json);
    console.log(arr);
}

{
    console.log('\n');
    //Array.of('字符串');
    console.log(Array.of('1', '2', '3'));
}

{
    //find（）；
    console.log('\n');
    var _arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(_arr.find(function (value, index, arr) {
        return value > 5;
    }));
}

{
    //fill();
    console.log('\n');
    var _arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    _arr2.fill('jspang', 2, 5);
    console.log('arr.fill():\u586B\u5145\u6570\u7EC4=> ' + _arr2 + ' ');
}

{
    //for...of循环;
    var _arr3 = ['jspang', '技术胖', '大胖逼逼叨'];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = _arr3[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            console.log('for...of =>  ' + item);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
{
    //for...of=》arr.keys();
    console.log('\n');
    var _arr4 = ['jspang', '技术胖', '大胖逼逼叨'];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = _arr4.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var index = _step2.value;

            console.log('arr.keys():\u6570\u7EC4\u7684\u7D22\u5F15 =>  ' + index);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
}
{
    //for..of =>entries;
    console.log('\n');
    var _arr5 = ['jspang', '技术胖', '大胖逼逼叨'];
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = _arr5.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _step3$value = _slicedToArray(_step3.value, 2),
                _index = _step3$value[0],
                _item = _step3$value[1];

            console.log('arr.entries()=>index:' + _index + ',item:' + _item);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
}
{
    //entries()实例方法; 需要时用next()手动跳转到下一个值
    var _arr6 = ['jspang', '技术胖', '大胖逼逼叨'];
    var list = _arr6.entries();
    console.log('\n');
    console.log('arr.entries().next=> ' + list.next());
    console.log('arr.entries().next=> ' + list.next().value);
    console.log('arr.entries().next=> ' + list.next().value);
    console.log('arr.entries().next=> ' + list.next().value);
}