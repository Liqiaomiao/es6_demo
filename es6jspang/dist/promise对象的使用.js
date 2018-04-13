'use strict';

/**
 * Created by Liqiaomiao on 2018/4/13.
 */
{
    var step1 = function step1(resolve, reject) {
        console.log('step1Fun:', '1.开始-洗菜做饭');
        if (state == 1) {
            resolve('洗菜做饭--完成');
        } else {
            reject('洗菜做饭--出错');
        }
    };

    var step2 = function step2(resolve, reject) {
        console.log('step2Fun:', '2.开始-坐下来吃饭');
        if (state == 1) {
            resolve('坐下来吃饭--完成');
        } else {
            reject('坐下来吃饭--出错');
        }
    };

    var step3 = function step3(resolve, reject) {
        console.log('step3Fun:', '3.开始-收拾桌子洗完');
        if (state == 1) {
            resolve('收拾桌子洗完--完成');
        } else {
            reject('收拾桌子洗完--出错');
        }
    };

    var state = 1;

    new Promise(step1).then(function (val) {
        console.log('step1Value:', val);
        return new Promise(step2);
    }).then(function (val) {
        console.log('step2Value:', val);
        return new Promise(step3);
    }).then(function (val) {
        console.log('step3Value::', val);
        return val;
    });
}