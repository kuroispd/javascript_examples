// JavaScript

// 関数の定義方法（3種類）
// 1. 関数宣言
/**
 * 「こんにちは、{name}さん」と表示する
 * @param {String} name 
 */
function hello(name) {
    console.log(`こんにちは、${name}さん`);
}

// 2. 関数式
const hello2 = function(name) {
    console.log(`こんにちは、${name}さん`);
}

// 3. アロー関数
const hello3 = (name) => {
    console.log(`こんにちは、${name}さん`);
}

// 関数の呼び出し
hello('太郎'); // 「こんにちは、太郎さん」と表示
hello2('次郎'); // 「こんにちは、次郎さん」と表示
hello3('三郎'); // 「こんにちは、三郎さん」と表示


// 戻り値のある関数
/**
 * 2つの数値を受け取り、その和を返す
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number} a + b
 */
function add(a, b) {
    return a + b;
}

const sum = add(3, 5); // sumには8が代入される
console.log(sum); // 8と表示