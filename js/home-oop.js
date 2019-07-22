function Card(number, pin, bank, client) {
  return {
    number: number,
    pin: pin,
    bank: bank,
    client: client,
    amountMoney: 0,
    addMoney: function(money) {
      this.amountMoney += money;
    },
    withdraw: function(money) {
      this.amountMoney -= money;
    },
    transferMoney: function(card, amount) {
      this.withdraw(amount);
      card.addMoney(amount);
    }
  }
}

function Atm(bankName, amountMoney) {
  return {
    bankName: bankName,
    amountMoney: amountMoney,
    withdraw: function(card, amount) {
      if (this.amountMoney < amount) {
        alert("Not enough money in the ATM");
        return;
      }
      if (card.bank.name != bankName) {
        alert("This is the card of another bank! ")
        return;
      }
      card.withdraw(amount);
    },
    add: function(card, amount) {
      if (this.amountMoney < amount) {
        alert("Not enough money in the ATM");
        return;
      }
      if (card.bank.name != bankName) {
        alert("This is the card of another bank! ")
        return;
      }
      card.addMoney(amount);
    },
    changePIN: function(card, oldPIN, newPIN) {
      if (card.pin != oldPIN) {
        alert("Wrong PIN");
      } else {
        card.pin = newPIN;
      }
    }
  }

}

function Client(name, city) {
  return {
    name: name,
    city: city,
    cards: [],
    createCard: function(bank) {
      var card = Card(Math.floor(1000000000000000 + Math.random() * 9000000000000000), Math.floor(1000 + Math.random() * 9000), bank, this);
      this.cards.push(card);
      return card;
    },
    showTotalBalance: function() {
      var balance = 0;
      for (var i = 0; i < this.cards.length; i++) {
        balance += this.cards[i].amountMoney;
      }
      return balance;
    },
    getCardByBank: function(bank) {
      for (var i = 0; i < this.cards.length; i++) {
        if (this.cards[i].bank == bank) {
          return this.cards[i];
        }
      }
    }
  }

}

function Bank(name) {
  return {
    name: name,
    accounts: [],
    openAccount: function(client) {
      if (this.accounts.indexOf(client) == -1) {
        this.accounts.push(client);
        client.createCard(this);
      } else {
        alert("Account is already exist!");
      }
    },
    closeAccount: function(card) {
      var index = this.accounts.indexOf(card.client);
      this.accounts.splice(index, 1);
      index = card.client.cards.indexOf(card);
      card.client.cards.splice(index, 1);
    }
  }
}


var sasha = Client("Sasha", "Kyiv");
var universal = Bank("Universal");
universal.openAccount(sasha);

var universalAtm = Atm("Universal", 2000);
// console.log(sasha.showTotalBalance());
universalAtm.withdraw(sasha.getCardByBank(universal), 200);
// console.log(sasha.showTotalBalance());
universalAtm.add(sasha.getCardByBank(universal), 1000);
// console.log(sasha.showTotalBalance());
universalAtm.changePIN(sasha.getCardByBank(universal), sasha.getCardByBank(universal).pin, 1212);
// console.log(sasha.getCardByBank(universal).pin);
var privat = Bank("Privat");
privat.openAccount(sasha);
var privatAtm = Atm("Privat", 4000);
sasha.getCardByBank(privat).addMoney(8000);
// console.log(sasha.getCardByBank(privat).amountMoney + " privat");
// console.log(sasha.getCardByBank(universal).amountMoney + " universal");
sasha.getCardByBank(privat).transferMoney(sasha.getCardByBank(universal), 100);
// console.log(sasha.getCardByBank(privat));
// console.log(sasha.getCardByBank(privat).amountMoney + " privat");
// console.log(sasha.getCardByBank(universal).amountMoney + " universal");

universal.closeAccount(sasha.getCardByBank(universal));
