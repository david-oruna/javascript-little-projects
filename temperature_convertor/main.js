const  btn1 = document.getElementById("btnCF")
const  btn2 = document.getElementById("btnFC")
const btnConv = document.getElementById("btnConvert")
const tmp = document.getElementById("convertedTemp")
const btnCont = document.getElementById("inputF")

function toggleButtons(activeButton, inactiveButton) {
    activeButton.classList.toggle('active');
    inactiveButton.classList.remove('active');
}

btn1.addEventListener('click', function() {
    toggleButtons(btn1, btn2);
});

btn2.addEventListener('click', function() {
    toggleButtons(btn2, btn1);
});

function checkIfActive(btn) {
    if (btn.classList.contains('active')) {
        return true

    } else {
        return false
    }
}


btnConv.addEventListener('click', function () {
    if (Number(btnCont.value).isNaN) {
        tmp.textContent = "Enter numbers please"
    }
    if (checkIfActive(btn1)) {
        tmp.textContent = (Number(btnCont.value) * 9/5 +32).toFixed(1) + "°F"

    } else if (checkIfActive(btn2)) {

        tmp.textContent = ((Number(btnCont.value) - 32)*5/9).toFixed(1) + "°C"

    } else {
        tmp.textContent = "Please select an option"
    }

})