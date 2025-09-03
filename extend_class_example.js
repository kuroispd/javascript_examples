// クラスの継承

/**
 * 商品の基底クラス
 * クラスプロパティとして name と price と taxRate を持つ
 * 税率はデフォルトで0.08（8%）とする
 */
class Product {
    constructor(name, price, taxRate = 0.08) {
        this.name = name;
        this.price = price;
        this.taxRate = taxRate;
    }

    displayInfo() {
        // 基底クラスの情報を表示するメソッド
        // サブクラスでオーバーライドされることを想定している
    }
}


/**
 * コーヒークラス
 * Productクラスを継承し、サイズ（size）プロパティを追加する
 */
class Coffee extends Product {
    constructor(name, price, size, taxRate) {
        // 親クラスのコンストラクタを呼び出す
        super(name, price, taxRate);

        this.size = size; // サイズ（S、M、Lなど）
    }

    /**
     * コーヒーの情報を表示するメソッド
     * @override
     */
    displayInfo() {
        console.log(`商品名: ${this.name}, 価格: ${this.price}円, サイズ: ${this.size}, 税率: ${this.taxRate * 100}%`);
    }
}

// Coffeeクラスのインスタンスを作成
const CofeeLatte = new Coffee('カフェラテ', 400, 'M');
const Espresso = new Coffee('エスプレッソ', 300, 'S', 0.10); // 税率を10%に変更

// コーヒーの情報を表示
CofeeLatte.displayInfo(); // 商品名: カフェラテ, 価格: 400円, サイズ: M, 税率: 8%
Espresso.displayInfo();    // 商品名: エスプレッソ, 価格: 300円, サイズ: S, 税率: 10%

/**
 * お菓子クラス
 * Productクラスを継承し、カロリー（calories）プロパティを追加する
 */
class Snack extends Product {
    constructor(name, price, calories, taxRate) {
        // 親クラスのコンストラクタを呼び出す
        super(name, price, taxRate);

        this.calories = calories; // カロリー（kcal）
    }

    /**
     * お菓子の情報を表示するメソッド
     * @override
     */
    displayInfo() {
        console.log(`商品名: ${this.name}, 価格: ${this.price}円, カロリー: ${this.calories}kcal, 税率: ${this.taxRate * 100}%`);
    }
}

// Snackクラスのインスタンスを作成
const Chocolate = new Snack('チョコレート', 200, 250);
const Cookie = new Snack('クッキー', 150, 300, 0.10); // 税率を10%に変更
// お菓子の情報を表示
Chocolate.displayInfo(); // 商品名: チョコレート, 価格: 200円, カロリー: 250kcal, 税率: 8%
Cookie.displayInfo();    // 商品名: クッキー, 価格: 150円, カロリー: 300kcal, 税率: 10%



// エクスポート
// 他のファイルで `import { Product, Coffee, Snack } from './extend_class_example.js'` とかくと
// これらのクラスをインポートできる
export { Product, Coffee, Snack };

// デフォルトエクスポート
// 他のファイルで `import Product from './extend_class_example.js'` とかくと
// デフォルトエクスポートされた Product クラスをインポートできる
// デフォルトエクスポートはファイルにつき1つだけにするのが一般的
export default Product;



/*
実用的なクラスファイルの分割例
// Product.js
class Product { ... }
export default Product;

// Coffee.js
import Product from './Product.js';
class Coffee extends Product { ... }
export default Coffee;

// Snack.js
import Product from './Product.js';
export default class Snack extends Product { ... }

// main.js
import Coffee from './Coffee.js';
import Snack from './Snack.js';

const coffee = new Coffee(...);
const snack = new Snack(...);
*/