
const btnSubmit = document.querySelector('#submitBtn');
const inp= document.querySelector('#inp');


const passwordForm = document.getElementById('passwordForm');
const hid= document.getElementById('hid');

passwordForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const inp = document.getElementById('inp');
    const inpLength = inp.value;
const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:'\",.<>?/~";
let password = "";

const passwordGenerator=(inpLength)=>{


console.log(inp.value);
for (let index = 0; index < inpLength; index++) {

const RandVals= Math.floor(Math.random()*charset.length);

password+= charset[RandVals]


}

return password
}

const Generatedpass=passwordGenerator(inpLength)
hid.style.visibility="visible"
hid.textContent=Generatedpass

});







