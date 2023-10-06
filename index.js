console.log("\tBài 1. Tạo slideshow");

// khai báo mảng
let danhSachAnh = [ 
    "img/anh1.png", 
    "img/anh2.png",
    "img/anh3.png",
    "img/anh4.png",
    "img/anh5.png" ];

let indexAnhHienTai = 0;
let nodeSildeShow = document.getElementById("slideShow");

nodeSildeShow.src = danhSachAnh[indexAnhHienTai];

// lùi 
function luiAnh() {
    indexAnhHienTai --;
    nodeSildeShow.src = danhSachAnh[indexAnhHienTai];
}

// tiến ảnh
function tienAnh() {
    indexAnhHienTai ++;
    nodeSildeShow.src = danhSachAnh[indexAnhHienTai];
}

// bắt đầu
let intervalVoHan;
function batDau() {
    clearInterval(intervalVoHan);

    indexAnhHienTai = 0;
    nodeSildeShow.src = danhSachAnh[indexAnhHienTai];

    let boDem = 1;
    
    intervalVoHan = setInterval( ()=>{
        
        indexAnhHienTai = boDem % danhSachAnh.length;

        nodeSildeShow.src = danhSachAnh[indexAnhHienTai];
        boDem++;
    }, 2000)
}

// dừng
function dung1() {
    clearInterval(intervalVoHan);
}

// lùi nâng cao
function luiAnhNangCao() {
    if (indexAnhHienTai==0) {
        indexAnhHienTai=5;
    }
    indexAnhHienTai--;

    nodeSildeShow.src = danhSachAnh[indexAnhHienTai];
}

// tiến ảnh nâng cao
function tienAnhNangCao() {
    indexAnhHienTai++;
    if (indexAnhHienTai >= danhSachAnh.length) {
        indexAnhHienTai = 0;
    }
    nodeSildeShow.src = danhSachAnh[indexAnhHienTai];
}