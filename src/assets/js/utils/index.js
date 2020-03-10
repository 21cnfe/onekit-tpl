/**
 * 节流
 * 连续触发的事件在指定时间间隔内只触发一次（函数执行频率被定为 n 毫秒一次）
 * @param { Function } callback - 指定事件句柄
 * @param { number } delay - 指定间隔时间
 * @return { Function } 返回一个加了节流操作的函数
 */
export function throttle(callback, delay = 500) {
    var prevTime = 0;
    return function() {
        var now = Date.now();
        if(now - prevTime > delay) {
            callback.apply(this, arguments);
            prevTime = now;
        }
    };
}