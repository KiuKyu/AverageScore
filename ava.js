// Tính điểm trung bình
function averageScore(){
    let phys = parseInt(prompt('Nhập điểm Lý: '));
    let chem = parseInt(prompt('Nhập điểm Hóa: '));
    let bio = parseInt(prompt('Nhập điểm Sinh: '));

    document.getElementById('averageScore').innerHTML = ((phys + chem + bio) / 3);
}

// Chuyển đổi nhiệt độ C -> F
function converter(){
    let Cel = parseInt(prompt('Nhập độ C: '));
    document.getElementById('converter').innerHTML = (9/5 * Cel + 32);
}

// Diện tích hình tròn
function area(){
    let radius = parseInt(prompt('Nhập bán kính: '));
    const pi = 3.14;

    document.getElementById('area').innerHTML = (Math.pow(radius, 2) * pi);

}

// Chu vi hình tròn
function circuit(){
    let radius = parseInt(prompt('Nhập bán kính: '));
    const pi = 3.14;
    document.getElementById('circuit').innerHTML = (radius * 2 * pi);
}