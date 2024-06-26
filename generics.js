//泛型
//  t为泛型，代表数据类型，argue传入的什么类型，就返回什么类型
function echo(arg) {
    return arg;
}
var result1 = echo('sun');
var resullt2 = echo(123);
var resullt3 = echo(true);
//多个参数
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var tesult4 = ['sunjinyao', 88888888];
function echoWithLength(arg) {
    console.log(arg.length);
    return arg;
}
var strstr = echoWithLength('str');
var objobj = echoWithLength({ length: 10 });
