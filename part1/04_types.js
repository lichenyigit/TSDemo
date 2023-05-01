var a; //object 表示js对象
a = {};
a = function () {
};
//{}用来指定对象中可以包含哪些属性
//?表示可选属性
var b;
//b = {};
b = { name: "cc0" };
b = { name: "cc", age: 123 };
var c;
var d;
c = { name: "cc", age: 123, c: 2 };
var e;
var f;
f = function (a, b) {
    return 0;
};
/**
 * 数组
 */
var g;
g = ['a', 'b'];
var h;
h = ['a', 'b'];
//元组，固定长度的数组
var i;
i = ['a', 2];
//枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
;
var j;
j = { name: 'cc', gender: Gender.Female };
console.log(j.gender);
