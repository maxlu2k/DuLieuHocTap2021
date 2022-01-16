var a  = null
var b = null
var o = null 
var bt = ""
//toán hạng
function th(x){
    if(a==null)
        a=x
    else
        b = x
    }

//toán tử
function tt(x){
    o = x;
}
//thực hiện phép tính
function thuchien(){
switch (o) {
    case '+':
        var kq = a + b;
        alert('tổng = ' + kq);
        break;
    case '-':
        var kq = a - b;
        alert('Hiệu = ' + kq);
        break;
    case '*':
        var kq = a * b;
        alert('tích = ' + kq);
        break;
    case '/':
        var kq = a / b;
        alert('thương = ' + kq);
        break;
    default:
        alert(o + 'không phải là toán tử');
       break;
    }
}
//làm lại
function lamlai(){
    a = null;
    b = null;
    o = null;  
}
