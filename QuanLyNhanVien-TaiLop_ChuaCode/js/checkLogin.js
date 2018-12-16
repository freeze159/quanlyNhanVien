//Kiểm tra đăng nhập

var currentUser = localStorage.getItem('user');
if(!currentUser){
    window.location.assign('dangnhap.html');
}