const mathBox = document.getElementById('input1')
const cstBox = document.getElementById('input2')
const ibbeBox = document.getElementById('input3')
const dmBox = document.getElementById('input4')
const jurisprBox = document.getElementById('input5')
const philBox = document.getElementById('input6')
const flibcBox = document.getElementById('input7')
const falBox = document.getElementById('input8')
const designBox = document.getElementById('input9')
const calcButton = document.getElementById('button')
const discountInput = document.getElementById('discount')
const resultElement = document.getElementById('result')


function computeNumbers (price, discount) {
    return price - (price / 100) * discount;
}

function checkActiveCheckBox() {
    let summ = 0;
    if (input1.checked) {
        summ += Number(input1.value);
    }
    if (input2.checked) {
        summ += Number(input2.value);
    }
    if (input3.checked) {
        summ += Number(input3.value);
    }
    if (input4.checked) {
        summ += Number(input4.value);
    }
    if (input5.checked) {
        summ += Number(input5.value);
    }
    if (input6.checked) {
        summ += Number(input6.value);
    }
    if (input7.checked) {
        summ += Number(input7.value);
    }
    if (input8.checked) {
        summ += Number(input8.value);
    }
    if (input9.checked) {
        summ += Number(input9.value);
    }
    return summ;
}

button.addEventListener("click", function () {
    const price = checkActiveCheckBox();
    const discountSize = discount.value;
    let finalPrice = computeNumbers (price, discountSize);
    printResult(finalPrice);
});

function printResult(result) {
    resultElement.textContent = result
}