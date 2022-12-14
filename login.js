var array1 = [{ username: "chandru1", password: "1234", email: "chanchandru@gmail.com", phone: 9600593836, city: "Dharmapuri" }]
function validate() {

    var uname = document.getElementById("username").value;
    var pword = document.getElementById("password").value;
    if (array1.some(person => person.username === uname && person.password === pword)) {

        alert("Login successfully");
        document.getElementById('username').value = ''
        document.getElementById('password').value = ''
        window.open("D:/Java Script Projects/Ecommerce/index.html");
    }
    else if (array1.some(person => person.phone === uname)) {
        alert("Login successfully");
        document.getElementById('username').value = ''
        document.getElementById('password').value = ''
        window.open("D:/Java Script Projects/Ecommerce/index.html");
    }
    else if (array1.some(person => person.email === uname)) {
        alert("Login successfully");
        document.getElementById('username').value = ''
        document.getElementById('password').value = ''
        window.open("D:/Java Script Projects/Ecommerce/index.html");
    }
    else {
        alert("Enter correct user name and password");
        document.getElementById('username').value = ''
        document.getElementById('password').value = ''
    }
}
var nup = {}
function newuser() {

    var newusername = document.getElementById("newusername").value;
    var newpassword = document.getElementById("newpassword").value;
    var newemail = document.getElementById("email").value;
    var newphone = document.getElementById("phone").value;
    var newcity = document.getElementById("city").value;

    nup.username = newusername
    nup.password = newpassword
    nup.email = newemail
    nup.phone = newphone
    nup.city = newcity
    array1.push(nup)
    alert("create successful")
    console.log(array1)
    document.getElementById('newusername').value = ''
    document.getElementById('newpassword').value = ''
    document.getElementById('email').value = ''
    document.getElementById('phone').value = ''
    document.getElementById('city').value = ''
}

const usernameEl = document.getElementById('newusername')
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('newpassword');
const confirmPasswordEl = document.getElementById('confirm-password');
const phoneE1 = document.getElementById('phone');
const addressE1 = document.getElementById('city');
const form = document.querySelector('#signup');
const form1 = document.querySelector('#signup1');

const checkUsername = () => {
    let valid = false;
    const min = 3, max = 25;
    var regEx = /^[a-z][a-z\s]{3,30}$/;
    // const username = usernameEl.value;
    // console.log(usernameEl)
    const username1 = usernameEl.value
    if (username1.match(regEx)) {
        // console.log("True")
        showSuccess(usernameEl);
        valid = true;

    }
    else {
        console.log("False")
        showError(usernameEl, 'Username cannot be blank and Minimum 3 character must.');
    }
    console.log(valid)
    return valid;
};

const checkPassword = () => {

    let valid = false;

    const password = passwordEl.value.trim();
    const cpassword = confirmPasswordEl.value.trim()
    
    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (password.match(paswd)) {
        // console.log("True")
        showSuccess(passwordEl);
        valid = true;
    }
   
    else {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    }
    console.log(valid)
    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const password = passwordEl.value.trim();
    const cpassword = confirmPasswordEl.value.trim()
    
    if (password == cpassword) {
        showSuccess(confirmPasswordEl);
        valid = true;
    }
    else {
        showError(confirmPasswordEl, 'The password does not match');
        showError(S_pass1, 'The password does not match');
    }
    console.log(valid)
    return valid;
};

const updatePassword = () =>{
    var S_user = document.getElementById("newusername1")
    var user1 = document.getElementById("newusername1").value
    var password1 = document.getElementById("newpassword1").value
    var cpassword1 = document.getElementById("confirm-password1").value
    console.log(user1 , password1)
    console.log(array1)
    if (array1.some(person =>  person.username === user1)) {
        // showSuccess(S_user)
        array1 = array1.map(obj => {
            if (obj.username === user1) {
              return {...obj, password:password1};
              
            }
            
            return obj;
          });
        alert("Password Updated")
        console.log(array1)
        
        document.getElementById('newusername1').value = ''
        document.getElementById('newpassword1').value = ''
        document.getElementById('confirm-password1').value = ''
        
    }
    else {
        showError(S_user, 'Enter correct user name')
        alert("Enter correct user name");
        document.getElementById('newusername1').value = ''
        document.getElementById('newpassword1').value = ''
        document.getElementById('confirm-password1').value = ''
    }
     
}


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    console.log(valid)
    return valid;
};


const phone = () => {
    let valid = false
    var phone = /^[0-9]{10}$/;
    var num = phoneE1.value.trim();
    if (num.match(phone)) {
        // console.log("corret phone number")
        showSuccess(phoneE1);
        valid = true;
    }
    else {
        showError(phoneE1, 'enter valid number.')
        // console.log("wrong")
    }
    console.log(valid)
    return valid
}

const address = () => {
    let valid = false
    var add = /^[a-zA-Z0-9\s,.'-]{10,40}$/;
    var address = addressE1.value.trim();
    if (address.match(add)) {
        console.log("correct number")
        showSuccess(addressE1);
        valid = true;
    }
    else {
        showError(addressE1, 'address atleast 10 characters')
        console.log("wrong number")
    }
    console.log(valid)
    return valid
}

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    console.log(formField)
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};
const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;
    console.log(formField)

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

const debounce = (fn, delay = 1000) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};


form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'newusername':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'newpassword':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
        case 'phone':
            phone();
            break;
        case 'city':
            address();
            break;
    }
}));



form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();


    // validate forms
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();
        isEmailValid = checkEmail();
        isPhoneValid = phone();
        isAddressValid = address();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid &&
        isEmailValid &&
        isPhoneValid &&
        isAddressValid;

    // submit to the server if the form is valid
    if (isFormValid) {
        var newusername = document.getElementById("newusername").value;
        var newpassword = document.getElementById("newpassword").value;
        var newemail = document.getElementById("email").value;
        var newphone = document.getElementById("phone").value;
        var newcity = document.getElementById("city").value;

        nup.username = newusername
        nup.password = newpassword
        nup.email = newemail
        nup.phone = newphone
        nup.city = newcity
        array1.push(nup)
        alert(" User Created Successfully")
        console.log(array1)
        document.getElementById('newusername').value = ''
        document.getElementById('newpassword').value = ''
        document.getElementById('confirm-password').value = ''
        document.getElementById('email').value = ''
        document.getElementById('phone').value = ''
        document.getElementById('city').value = ''
        var array2 = [usernameEl,passwordEl,emailEl,phoneE1,confirmPasswordEl,addressE1] 
        for(var i = 0; i<=array2.length;i++)
        {   console.log(array2[i])
            const formField = array2[i].parentElement;
            formField.classList.remove('success');
        }
        
    }
});