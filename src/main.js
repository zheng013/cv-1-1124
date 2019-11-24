let html = document.querySelector('#demo')
let style = document.querySelector('#style')
let string = `/* 你好，我叫小郑
 * 接下来我演示一下我的前端功底
 * 首先我要准备一个id=taiji的div
 */
#taiji{
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 #taiji 变成一个圆
 **/
#taiji{
    border-radius:50%;
    box-shadow: 0px 0px 8px 4px rgba(0,0,0,0.75);
    border:none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#taiji{
    background: linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);  
}
/*先加上一个神秘的黑球*/
#taiji::before{
    width:100px;
    height:100px;
    border-radius:50%;
    top:0px;
    left:50%;
    transform:translate(-50%);
    background:black;
}
/*先加上一个神秘的白球*/
#taiji::after{
    width:100px;
    height:100px;
    border-radius:50%;
    bottom:0px;
    left:50%;
    transform:translate(-50%);
    background:white;
}
/*在黑球上衍生一个神秘的白球*/
#taiji::before{
    background: radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
/*在白球上衍生上一个神秘的黑球*/
#taiji::after{
    background: radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
/*这样八卦图就生成了*/
`
// string = string.replace(/\n/g, "<br>")  全部替换会有<，否定
console.log(string.length)
let n = 0
let string2 = ''

let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += '<br>'
        } else if (string[n] === ' ') {
            string2 += '&nbsp' //添加缩进空格
        }
        else { string2 += string[n] } //把前一下项加到后面就不需要用到string.substring
        n = n + 1;
        console.log(n)
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 99999)
        demo.scrollTo(0, 9999)
        if (n < string.length) { step() };
    }, 50)
}
step()







