#! usr/bin/env/node
import inquirer from "inquirer";

let mybalance = 50000
let mypin = 8989;

let pinAnswer = await inquirer.prompt([{
    name: "pin",
    type: "number",
    message: "enter your pin",
}]
);

if (pinAnswer.Pin === mypin){
    console.log("Correct Pin Code!!!")

 let operationAns = await  inquirer.prompt([{
        name: "operation",
        type: "list",
        message: "Please Select a option",
        choices: ["Widthdraw", "Check balance", "fast cash"]
     }]);


    if (operationAns.operation === "widthdraw"){
        let amountAns = await inquirer.prompt([{
            name: "amount",
            type: "number",
            message: "Enter your amount",
        }]);

if(amountAns.amount > mybalance){
    console.log("Insuffcient balance")
} else if(mybalance -= amountAns.amount){
    console.log(`Your Remaining balance is:  ${mybalance}`)
}
  };

    if (operationAns === "check balance" ){
        console.log(`Your balance is: ${mybalance}`)
    }

   if(operationAns.operation === "fast Cash"){
    let Cash = await inquirer.prompt([{
       
        name : "options",
        type: "list",
        message: "Select any amount",
        choices: ["1000", "2000", "3000", "6000", "8000"],
       
    }
]
    );
    if(mybalance -= Cash.options){
  console.log(`Your remaining balance is: ${mybalance}`);
    }
}
} else {
    console.log("Incorrect pin Code!!!");
}