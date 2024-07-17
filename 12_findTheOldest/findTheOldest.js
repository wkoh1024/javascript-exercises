const findTheOldest = function(people) {
    let oldestPerson = people.reduce((acc, person) => {
        if (calculateAge(person) > calculateAge(acc)) {
            acc = person;
        }
        return acc;
    });
    return oldestPerson;
};

const calculateAge = (person) => {
    if (person.yearOfDeath) {
        let age = person.yearOfDeath - person.yearOfBirth;
        return age;
    }
    else {
        let currentYear = new Date().getFullYear();
        let age = currentYear - person.yearOfBirth;
        return age;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
