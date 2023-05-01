let a: object;//object 表示js对象
a = {};
a = function () {
};

//{}用来指定对象中可以包含哪些属性
//?表示可选属性
let b: { name: string, age?: number };
//b = {};
b = {name: "cc0"}
b = {name: "cc", age: 123}


let c: { name: string, [propName: string]: any };
let d: { name: string, [xx: string]: any };
c = {name: "cc", age: 123, c: 2}

let e: (a, b) => string;
let f: (a: number, b: number) => number;
f = (a, b) => {
    return 0;
};

/**
 * 数组
 */
let g: string[];
g = ['a', 'b'];

let h: Array<string>;
h = ['a', 'b'];

//元组，固定长度的数组
let i: [string, number];
i = ['a', 2];

//枚举
enum Gender {Male, Female };
let j: { name: string, gender: Gender };
j = {name: 'cc', gender: Gender.Female};

console.log(j.gender)

