// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
console.log(name.toUpperCase());


// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
var str,arr=[];
str = sentence.split(" ");
for(var i = 0 ; i < str.length ; i++){
arr.push(str[i][0].toUpperCase()+str[i].substring(1));
}
var new=arr.join(' ');
console.log(new};



// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
var a=[];
a[0]=money[1];
a[1]=money[2];
console.log(a[0]+a[1]);
