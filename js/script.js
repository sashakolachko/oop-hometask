function MailBox(name, city) {
  return{
    name: name,
    city: city,
    mails: [],
    sendMail: function(mail) {
      this.mails.push(mail);

    }
  }
}

function Mail(tittle, description, time, sender) {
  return{
    tittle: tittle,
    description:description,
    time:time,
    sender:sender
  }
}

function Person(name, age, city){
  return{
    name:name,
    age:age,
    city:city
  }
}
var den = Person("Den", 21, 'Kyiv');
var nova = MailBox('NovaPoshta', 'Kyiv');
var letter1 = Mail("hi", "Sone greetings", '18.09', den);
var letter2 = Mail("New Project", "Project description", '12.00', den);
var letter3 = Mail("Domasha", "Gde somashka", '08.01',den);
console.log(nova);
nova.sendMail(letter1);
nova.sendMail(letter2);
nova.sendMail(letter3);
console.log(nova);
