
//set 0 intercept
let i = Math.floor(Math.random() * 10 ** 18);

//set final point
let z = Math.floor(Math.random() * 10 ** 18);

//Define 2 other points

let x = Math.floor(Math.random() * (i-z) + z);

let y = Math.floor(Math.random() * (i-z) + z);


//Decrypt i given x and y

let answer1 = 2 * x - y;

//Decrypt i given x and z

let answer2 = x + (x-z)/2

//Decrypt i given x and z
let number = "1h3elloJOG";
let numberC = convert(number);
let numberBack = convertBack(numberC);
console.log(number, numberC, numberBack);


function convert(input) {
    let output = "";
    for (var i = 0; i < input.length; i++) {
        otp = input[i].charCodeAt(0).toString();
        if (otp.length == 2) {
            otp = "0" + otp
        } else if (otp.length == 1) {
            otp = "00" + otp;
        }
        output += otp;
    }
    return output;
  }


function convertBack(input) {
    let output = "";
    for (var i = 0; i < input.length; i+=3) {
        ipt = input[i] + input[i+1] + input[i+2];
        if (ipt[0] == "0" && ipt[1] != "0") {
            ipt = ipt.substr(1,2);
        }else if (ipt[0] == "0" && ipt[1] == "0") {
            ipt = ipt[2]
        } 
        output += String.fromCharCode(ipt);
    }
    return output;
}