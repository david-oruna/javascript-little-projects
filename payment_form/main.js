
const visa =document.getElementById("visa");
const master=document.getElementById("master");
const paypal=document.getElementById("paypal");
const form =  document.getElementById("form");

form.style.display ="none";
document.getElementById("cardForm").style.display="none";
document.getElementById("paypalForm").style.display="none";


function handleSelection () {

if (visa.checked || master.checked) {
    document.getElementById("cardText").textContent = "Insert card information";
    document.getElementById("paypalForm").style.display="none";

    form.style.display="block"
    document.getElementById("cardForm").style.display ="block";

} else if (paypal.checked) {
    document.getElementById("cardText").textContent = "Insert paypal address";
    document.getElementById("cardForm").style.display="none";
    form.style.display = "block";
    document.getElementById("paypalForm").style.display ="block";

}}

visa.addEventListener('change', handleSelection )
master.addEventListener('change', handleSelection)
paypal.addEventListener('change', handleSelection)

function isNumber(value) {
    return !isNaN(value) && Number(value) == value;
  }

 
const warn = document.getElementById("warn")


document.getElementById("continue").onclick = function () {
    let minlength = 0;
    if (visa.checked || master.checked) {
        const num = document.getElementById("inputNumber");
        const date = document.getElementById("inputDate");
        const cvc = document.getElementById("inputCVC");

        minlength = 16;

        if (isNumber(num.value) && num.value.length >= minlength && cvc.value.length == 3 && isNumber(cvc.value)) {
            warn.textContent= "success";
            window.location.href="m.html"

        }  else {
            warn.textContent="invalid";
        }

    } else if (paypal.checked) {
        const num = document.getElementById("inputEmail");

        const pass = document.getElementById("inputPassword")

        minlength = 6;

        if (num.value.length >= minlength && num.value.includes("@")) {
            warn.textContent= "Success";
            window.location.href="m.html"
        } else {
            warn.textContent="Invalid, please try again";
        }
    }
}