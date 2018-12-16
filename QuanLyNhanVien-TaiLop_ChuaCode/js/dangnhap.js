function getEl(id) {
    return document.getElementById(id);
}
function dangNhap() {
    var taiKhoan = getEl('txtTaiKhoan').value;
    var matKhau = getEl('txtPass').value;
    var nguoiDung = new NguoiDungService;
    nguoiDung.DangNhap(taiKhoan,matKhau)
        .then(function (res) {
            if (res.data.MaLoaiNguoiDung === 'QuanTri') {
                localStorage.setItem("user", JSON.stringify(res.data));
                window.location.assign('index.html');
            }
        })
        .catch(function (ex) {
            console.log(ex.message);
        })
}
getEl('btnDangNhap').addEventListener('click', dangNhap);