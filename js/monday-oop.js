function Category(name) {
  return {
    name: name,
    items: [],
    createItem: function(name, price, quantity) {
      var newItem = Item(name, price, quantity, this);
      this.items.push(newItem);
      return newItem;
    }
  }
}

function Customer(name, money) {
  return {
    name: name,
    money: money,
    boughtItems: [],
    buyItem: function(item, quantity) {
      if (item.quantity >= quantity) {
        this.money -= item.price * quantity;
        item.quantity--;
        for (var i = 0; i < quantity.length; i++) {
          this.boughtItems.push(item);
        }
      } else {
        console.log("Sorry, no items left!");
      }

    }
  }
}

function Item(name, price, quantity, category) {
  return {
    name: name,
    price: price,
    quantity: quantity,
    category: category,
    supplyNew: function(amount) {
      this.quantity += amount;
    },
    changePrice: function(newPrice) {
      this.price = newPrice;
    }
  }
}

var sport = Category("Sport");
var ball = sport.createItem("Basketball", 50, 20);
console.log(ball);
console.log(sport.items);
var socks = sport.createItem('Demix Socks', 1, 3);
var dave = Customer("Dave", 100);
console.log("before buying");
console.log(dave);
console.log(socks);
dave.buyItem(socks);
dave.buyItem(socks);
dave.buyItem(socks);
dave.buyItem(socks);
console.log("after buying");
console.log(dave);
console.log(socks);
