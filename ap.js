function checkNumber(number1, number2) {
    let result = '';
    if (number1 > number2) {
        result = alert('So thu nhat LON hon so thu hai');
    } else {
        let sum = number2 + number1;
        result = alert('So thu hai LON hon so thu nhat. Tong hai so la :' + sum);
    }
    return result;
}


let input_number1 = parseInt(prompt('Nhap vao gia tri so thu nhat'));
let input_number2 = parseInt(prompt('Nhap vao gia tri so thu hai'));

checkNumber(input_number1,input_number2);
