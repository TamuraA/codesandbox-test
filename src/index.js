/**
 * const, let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // let は上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // let は再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書きできない
// // val3 = "const変数上書き";

// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "hhh",
//   age: "33"
// };
// //console.log(val4);

// val4.name = "ggg";
// val4.address = "fa";

// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "hey";
// const age = "22";
// // 私の名前はnameです。年齢はageです。

// // 従来
// const message1 = "私の名前は " + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いる
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("aaa"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("222"));

// const func3 = (str1, str2) => {
//   return str1 + str2;
// };
// console.log(func3("ano","neee"));

/**
 * 分割代入
 */

const myProfile = {
  name: "nammme",
  age: 222
};
