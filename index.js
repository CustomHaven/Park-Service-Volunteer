"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://www.codecademy.com/courses/learn-typescript/projects/park-service-volunteer-apprciation-program
const raccoon_meadows_log_1 = require("./raccoon-meadows-log");
const wolf_point_log_1 = require("./wolf-point-log");
// Q4 - Q9
function combineVolunteers(volunteers) {
    return volunteers.map((volunteer) => {
        let id = volunteer.id;
        if (typeof id === "string") {
            id = parseInt(id, 10);
        }
        return Object.assign(Object.assign({}, volunteer), { id: id });
        // return {
        //   id: id,
        //   name: volunteer.name,
        //   activities: volunteer.activities
        // };
    });
}
// Q12 - Q14
const isVerified = (verified) => {
    if (typeof verified === "string") {
        if (/YES/i.test(verified)) {
            return true;
        }
        else {
            return false;
        }
    }
    return verified;
};
// Q16
const getHours = (activity) => {
    if ("hours" in activity) {
        return activity.hours;
    }
    return activity.time;
};
// Q11 - Q18
function calculateHours(volunteers) {
    return volunteers.map((volunteer) => {
        let hours = 0;
        volunteer.activities.forEach((activity) => {
            const verified = isVerified(activity.verified);
            if (verified) {
                hours += getHours(activity);
            }
        });
        return {
            id: volunteer.id,
            name: volunteer.name,
            hours: hours,
        };
    });
}
// Q20
const byHours = (a, b) => {
    return b.hours - a.hours;
};
const combinedVolunteers = combineVolunteers([].concat(wolf_point_log_1.wolfPointVolunteers, raccoon_meadows_log_1.raccoonMeadowsVolunteers));
// Q10
// console.log(combinedVolunteers);
// Q19 && Q21
const results = calculateHours(combinedVolunteers);
console.log(results.sort(byHours));
