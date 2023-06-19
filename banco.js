// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
let password = 12345;

const User = {
  fullName: "",
  name: "",
  balance: "",
  isLogged:0,
  firstAccess: 1,
  transactions: [{type:"", value:""}],
  GetBalance(){
    return "R$ ".this.balance;
  },
  GetTransactions(){
    return this.transactions.forEach(n=>n);
  },
  GetFirstName(){
    if(this.isLogged)
      return this.fullName.split[0];
    else
      return "O usuário precisa estar logado para realizar essa ação!";
  },
  Deposit(value){
    if(this.isLogged){
      this.balance += value;
      this.transactions.push({type:"Depósito", value:value});
    }
    else
      return "O usuário precisa estar logado para realizar essa ação!";
  },
  WithDraw(value){
    if(this.isLogged){
      if(this.balance > 1 && value<this.balance){
        this.balance -= value;
        this.transactions.push({type:"Saque", value:value});
      }
      else
        return "Saldo insuficiente!";
    }
    else
      return "O usuário precisa estar logado para realizar essa ação!";
  },
  ShippingTransfer(nameReceiver,value){
    if(this.isLogged){
      if(this.balance > 1 && value<this.balance){
        this.balance -= value;
        this.transactions.push({type:"Envio de transferência", 
        nameShipping:this.fullName, 
        nameReceiver:nameReceiver, 
        value:value
      });
      }
      else
        return "Saldo insuficiente!";
    }
    else
      return "O usuário precisa estar logado para realizar essa ação!";
  },
  ReceiptTransfer(nameShipping,value){
    if(this.isLogged){
      this.balance += value;
      this.transactions.push(
        {type:"Recebimento de transferência", 
        nameShipping:nameShipping, 
        nameReceiver: this.fullName,
        value:value
      });
    }
    else
      return "O usuário precisa estar logado para realizar essa ação!";
  }
}
const firstUser = User;
while(!firstUser.isLogged){
  firstUser.fullName = "Juan Lemos";
  let passwordUser = 123;
  if(password === passwordUser){
    firstUser.isLogged = 1;
  }
  else 
    console.log("Senha incorreta!");
}
while(firstUser.isLogged){
  return "Logou!";
}