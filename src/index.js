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
    function asuncInc() {
        value += 1;
        return asuncInc;
    }
    asuncInc.valueOf = () => value;
    return asuncInc;
})();

// generator
const createIncrementer = () => {

};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {
    //promise 1s / result / 2s
    // all(1s, result)
};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
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