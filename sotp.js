
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyD3Lnmj1-ybhz6HP08V3VD-X-cOs8Z7iWU",
          authDomain: "nextpulse-89c47.firebaseapp.com",
          projectId: "nextpulse-89c47",
          storageBucket: "nextpulse-89c47.appspot.com",
          messagingSenderId: "371642835132",
          appId: "1:371642835132:web:3695fe651f21011acff0b9",
          measurementId: "G-CJ1E0G64XR"
        };
// initializing firebase SDK
firebase.initializeApp(firebaseConfig);

// render recaptcha verifier
render();
function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}

// function for send OTP
function sendOTP() {
    var number = document.getElementById('number').value;
    firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;
        coderesult = confirmationResult;
        document.querySelector('.number-input').style.display = 'none';
        document.querySelector('.verification').style.display = '';
    }).catch(function (error) {
        // error in sending OTP
        alert(error.message);
    });
}

// function for OTP verify
function verifyCode() {
    var code = document.getElementById('verificationCode').value;
    coderesult.confirm(code).then(function () {
        document.querySelector('.verification').style.display = 'none';
        document.querySelector('.result').style.display = '';
        document.querySelector('.correct').style.display = '';
        console.log('OTP Verified');
    }).catch(function () {
        document.querySelector('.verification').style.display = 'none';
        document.querySelector('.result').style.display = '';
        document.querySelector('.incorrect').style.display = '';
        console.log('OTP Not correct');
    })
}
