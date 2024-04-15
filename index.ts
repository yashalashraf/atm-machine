import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 123456789;

console.log("wellcome to shifa's code - ATM Machine");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin code",
    }
])

if (pinAnswer.pin === myPin){
    console.log("pin code is correct, you login successfully.")
    console.log(`current accunt balance is ${myBalance}`)

    let operationAns = await inquirer.prompt([
    {
        name:"operation",
        type: "list",
        message: "select a operation",
        choices: ["withdraw Amount","checkBalnce"]
    }
])

if(operationAns.operation === "withdraw Amount"){
    let amountAns = await  inquirer.prompt([
    {
        name:"amount",
        type: "number",
        message: "enter the aount to withdraw:",
    }
    ])
    if(amountAns.amount > myBalance){
        console.log("insufficient balance.");
    }
    else{myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} withdraw successfully`);
        console.log(`your remaining balane is: ${myBalance}`);
    }
  }
  else if (operationAns.operation ==="check balance"){
    console.log{`your account balance is:${myBalance}`};
  }
}
else{
    console.log("pin is incorrect, try again!");
}  