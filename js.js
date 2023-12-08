//Constructor function
function Person1(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
}

Person1.prototype.sleep = function(hours) {
    if (hours === 7) {
        this.sleepMood = 'happy';
    } else if (hours < 7) {
        this.sleepMood = 'tired';
    } else {
        this.sleepMood = 'lazy';
    }
};

Person1.prototype.eat = function(meals) {
    if (meals === 3) {
        this.healthRate = 100;
    } else if (meals === 2) {
        this.healthRate = 75;
    } else if (meals === 1) {
        this.healthRate = 50;
    }
};

Person1.prototype.buy = function(items) {
    this.money -= items * 10;
};

var person1 = new Person1("Mostafa", 100, "tired", 100);
person1.sleep(10)
person1.eat(2)
person1.buy(5)
console.log(person1)

//Classes
class Person2 {
    constructor(fullName, money, sleepMood, healthRate) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
    }

    sleep(hours) {
        if (hours === 7) {
            this.sleepMood = 'happy';
        } else if (hours < 7) {
            this.sleepMood = 'tired';
        } else {
            this.sleepMood = 'lazy';
        }
    }

    eat(meals) {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else if (meals === 1) {
            this.healthRate = 50;
        }
    }

    buy(items) {
        this.money -= items * 10;
    }
}

var person2 = new Person2("Mostafa", 200, "happy", 75)
person2.buy(7)
person2.eat(3)
person2.sleep(7)
console.log(person2)

//Using Objects Linking to Other Objects (OLOO)

var Person3 = {
    init(fullName, money, sleepMood, healthRate) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
        return this;
    },

    sleep(hours) {
        if (hours === 7) {
            this.sleepMood = 'happy';
        } else if (hours < 7) {
            this.sleepMood = 'tired';
        } else {
            this.sleepMood = 'lazy';
        }
    },

    eat(meals) {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else if (meals === 1) {
            this.healthRate = 50;
        }
    },

    buy(items) {
        this.money -= items * 10;
    }
};

function createPerson(fullName, money, sleepMood, healthRate) {
    return Object.create(Person3).init(fullName, money, sleepMood, healthRate);
}

var person3 = createPerson("Mostafa", 150, "happy", 50)
person3.buy(2)
person3.eat(2)
person3.sleep(6)

console.log(person3)


//Factory function

function Person4(fullName, money, sleepMood, healthRate) {
    return {
        fullName,
        money,
        sleepMood,
        healthRate,

        sleep(hours) {
            if (hours === 7) {
                this.sleepMood = 'happy';
            } else if (hours < 7) {
                this.sleepMood = 'tired';
            } else {
                this.sleepMood = 'lazy';
            }
        },

        eat(meals) {
            if (meals === 3) {
                this.healthRate = 100;
            } else if (meals === 2) {
                this.healthRate = 75;
            } else if (meals === 1) {
                this.healthRate = 50;
            }
        },

        buy(items) {
            this.money -= items * 10;
        }
    };
}

var person4 = Person4("Mostafa", 50, "happy", 100)
person4.buy(3)
person4.eat(3)
person4.sleep(8)

console.log(person4)