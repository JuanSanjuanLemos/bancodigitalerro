// instalar pacote inquirer npm install inquirer
// a fazer: colocar nome na tela, imprimir valor ao sair(precisa perguntar se o usuário deseja, posso usar a biblioteca), exigir senha para sair
import { input,select  } from '@inquirer/prompts';
let password = 1;

const User = 
{
  fullName: "",
  name: "",
  password:"",
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
      console.log("O usuário precisa estar logado para realizar essa ação!");
  },
  Deposit(value){
    if(this.isLogged){
      this.balance += value;
      this.transactions.push({type:"Depósito", value:value});
      console.log(`Depósito efetuado no valor de R$ ${value}.\nSaldo da conta R$ ${firstUser.balance}`);
    }
    else
      console.log("O usuário precisa estar logado para realizar essa ação!");
  },
  WithDraw(value){
    if(this.isLogged){
      if(this.balance>=value)
      {
        if(value<=1)
          console.log("O valor mínimo para saque é R$ 1,00");
        else{
          this.balance -= value;
          this.transactions.push({type:"Saque", value:value});
          console.log(`Saque efetuado no valor de R$ ${value}.\nSaldo da conta R$ ${this.balance}`);
        }
      }
      else
        console.log("Saldo insuficiente!");
    }
    else
      console.log("O usuário precisa estar logado para realizar essa ação!");
  },
  Transfer(nameReceiver,value){
    if(this.isLogged){
      if(value<=this.balance){
        if(value<=1)
          console.log("O valor mínimo para transferência é R$ 1,00");
        else{
          this.balance -= value;
          this.transactions.push({type:"Envio de transferência", 
          nameShipping:this.fullName, 
          nameReceiver:nameReceiver, 
          value:value
          });
          console.log(`Transferência efetuada no valor de R$ ${value}.
          \nNome depositante: ${firstUser.fullName}
          \nNome recebedor: ${nameReceiver}
          \nSaldo da conta R$ ${firstUser.balance}`);
        }
      }
      else
      console.log("Saldo insuficiente!");
    }
    else
    console.log("O usuário precisa estar logado para realizar essa ação!");
  }
}
const firstUser = User;
while(!firstUser.isLogged){
 firstUser.fullName = await input({message:"Nome:"});
 firstUser.password = await input({message:"Senha:"});
  if(firstUser.password == password){
    firstUser.isLogged = 1;
  }
  else 
    console.log("Senha incorreta!");
}
while(firstUser.isLogged){
  const answer = await select({
    message: 'Selecione uma ação',
    choices: [
      {
        name: 'Saque',
        value: 'Saque'
      },
      {
        name: 'Depósito',
        value: 'Depósito'
      },
      {
        name: 'Transferência',
        value: 'Transferência'
      },
      {
        name: 'Saldo',
        value: 'Saldo'
      },
      {
        name: 'Sair',
        value: 'Sair'
      }
    ],
  });
  let value;
  switch(answer){
    case 'Depósito':
      value = parseFloat(await input({message:"Valor:"}));
      firstUser.Deposit(value);
      break;
    case 'Saque':
      value = parseFloat(await input({message:"Valor:"}));
      firstUser.WithDraw(value);
      break;
    case 'Transferência':
      value = parseFloat(await input({message:"Valor:"}));
      let nameReceiver = await input({message:"Nome do recebedor:"});
      firstUser.Transfer(nameReceiver,value);
      break;
    case 'Saldo':
        console.log(`Saldo: R$ ${firstUser.balance}`);
        break;
    case 'Sair':
        firstUser.isLogged = 0;
  }
}