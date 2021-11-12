let rand= Math.random() 
let random = rand * 1000000;
let truncatedRandom = Math.trunc(random, 0);
console.log("Random: "+rand);
console.log("Trunc random: "+truncatedRandom);

// to pad you need string, you can use toString() on truncatedRandom
let otpString = truncatedRandom.toString();
let otp = otpString.padStart(6, "0");
console.log("OTP: "+otp);

// using padEnd()
let phoneNumber = "9988776655";
let phone = phoneNumber.substring(0, 6);
let phoneWithPad = phone.padEnd(10, "x"); 
console.log("Phone no: "+phoneWithPad);

