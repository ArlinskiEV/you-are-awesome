// DO WHATEVER YOU WANT HERE
const createEnumerableProperty = (propertyName) => {
    return ''+propertyName;
};

const createNotEnumerableProperty = (propertyName) => {
    return Symbol.for(propertyName);
};
const createProtoMagicObject = () => {
    // typeOf magicObj !== 'object' && magicObj.__proto__ === magicObj.prototype
    function F() {};
    F.prototype = Function.prototype;
    return F;
};

const incrementor = (() => {
    let value = 0;
    function inc() {
        value += 1;
        return inc;
    }
    inc.valueOf = () => value;
    return inc;
})();

// ?? promise...
const asyncIncrementor = (() => {
    let value = 0;
    return () => Promise.resolve(++value);
})();

// generator
const createIncrementer = () => {
    let value = 0;
    return (function* gen() {
        yield ++value;
        yield *gen();
    }())
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    //promise 1s / result / 2s
    // all(1s, result)
    let intervalId;
    let prom = new Promise((res,rej) => {
        intervalId = setInterval(res,1000);
    });
    return prom.then(() => {
        clearInterval(intervalId);
        return param;
    });
};

const getDeepPropertiesCount = (obj) => {
    function counter(o) {
        let k = Object.getOwnPropertyNames(o);
        return k.reduce((prev, item) => {
            if (typeof o[item] !== 'object') return prev + 1;
            return prev + counter(o[item]);
        }, 1);
    };

    return counter(obj) - 1;
};

const createSerializedObject = () => {
    return null;
};

// ??
const toBuffer = () => {};
const sortByProto = (arr) => {
    return arr.sort((a, b) => Object.getPrototypeOf(a) - Object.getPrototypeOf(b));
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;