// var person = {
//   name: "Kate",
//   car: null,
//   introduction: function () {
//     return "Hi, my name is " + this.name;
//
//   }
// };
//
// console.log(person.introduction());
//ES 5 OOP

function Person(name, car, country, age){
  return {
    name: name,
    car: car,
    country: country,
    age: age,
    isAlive: true,
    languageData: {
      "Ukraine": "ukranian",
      "USA": "English",
      "Russia": "Russian"
    },
    getSpokenLanguage: function() {
        return this.languageData[this.country];
    }

  }

};

var p3 = Person("Michael", null, "USA", 67);
var person = {
  name: 'test',
  age: 11
};
var person1 = Object.assign(person, {'skill': 'fire'});
console.log(person1);

p3.isAlive = false;
console.log(p3.getSpokenLanguage());
