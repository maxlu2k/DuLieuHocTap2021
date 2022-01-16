function them(button){
    var row = button.parentElement.parentElement.cloneNode(true);
    var btnxoa = row.getElementsByTagName('button')[0];
    btnxoa.innerText = "xóa";
    btnxoa.setAttribute('onclick','xoa(this)');
    //thêm nút con vào node cart
    document.getElementById('cart').appendChild(row);
    document.getElementById('empty').style.display = 'none';
    document.getElementById('not-empty').style.display = '';

}
function xoa(button){
    //xác định dòng cần xóa 
    var row = button.parentElement.parentElement;
    document.getElementById('cart').removeChild(row);
}