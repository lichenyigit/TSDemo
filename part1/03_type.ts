let a: number | string;
//a = true;
a = 1;


//任何类型都可以
let b: any;


//类型安全, 表示位置类型的值
let c: unknown;

if(typeof b === "string"){
    c = b;
}

c = 2;

//类型断言，可以用来告诉解析器变量的实际类型
let s: string;
 s = c as string;
 s = <string>c;

 function fun(): string | boolean {
     return;
 }
