// クラスの定義
/**
 * 人を表すクラス
 */
class Person {
    /**
     * コンストラクタ
     * @param {String} name
     * @param {Number} age
     */
    constructor(name, age) {
        this._name = name; // 名前
        this.age = age;   // 年齢
    }

    // インスタンスメソッド
    // 自己紹介をする
    introduce() {
        console.log(`私は${this.name}、${this.age}歳です。`);
    }

    // ゲッターとセッター
    // 「_」について： JavaScriptにはプライベート変数の概念がないため、慣習的に「_」を付けてプライベート変数であることを示す。
    //
    // プライベート変数とは： クラスの外部から直接アクセスできない変数のこと。
    // TypeScriptや他の言語では、private name;という風に書かれていると person.name のように外部からアクセスできない。
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    /**
     * 問われている年齢があっているかを確認するメソッド
     * @param {Number} expectedAge 
     * @returns boolean
     */
    isAgeCorrect(expectedAge) {
        return this.age === expectedAge;
    }


    // プライベートなメソッド
    _privateMethod() {
        console.log('これはプライベートなメソッドです。クラスの外部からは呼び出さないように！');
    }

    // プライベートメソッドを呼び出すパブリックメソッド
    callPrivateMethod() {
        this._privateMethod();
    }
}

// 山田太郎さん（30歳）のインスタンスを作成
const taro = new Person('山田太郎', 30);
// 名前を取得する
console.log(taro.name); // 「山田太郎」と表示。taro._nameでも取得は可能だが、慣習的に直接アクセスは避ける。
// 年齢を取得する
console.log(taro.age);  // 30と表示
// 自己紹介をする
taro.introduce(); // 「私は山田太郎、30歳です。」と表示
// 年齢があっているか確認する
console.log(taro.isAgeCorrect(30)); // trueと表示
console.log(taro.isAgeCorrect(25)); // falseと表示
// 名前を変更する
taro.name = '山田次郎';
console.log(taro.name); // 「山田次郎」と表示
taro.introduce(); // 「私は山田次郎、30歳です。」と表示