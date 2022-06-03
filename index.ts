// https://www.codecademy.com/courses/learn-typescript/projects/park-service-volunteer-apprciation-program
import {
  RaccoonMeadowsVolunteers,
  RaccoonMeadowsActivity,
  raccoonMeadowsVolunteers,
} from './raccoon-meadows-log';

import {
  WolfPointVolunteers,
  WolfPointActivity,
  wolfPointVolunteers,
} from './wolf-point-log';

type CombinedActivity = RaccoonMeadowsActivity | WolfPointActivity;

type Volunteers = {
  id: number;
  name: string;
  activities: CombinedActivity[];
};

// Q4 - Q9
function combineVolunteers(
  volunteers: (RaccoonMeadowsVolunteers | WolfPointVolunteers)[]
) {
  return volunteers.map((volunteer: RaccoonMeadowsVolunteers | WolfPointVolunteers) => {
    let id = volunteer.id;
    if (typeof id === "string") {
      id = parseInt(id, 10);
    }

    return {
      ...volunteer,
      id: id
    }

    // return {
    //   id: id,
    //   name: volunteer.name,
    //   activities: volunteer.activities
    // };
  });
}

// Q12 - Q14
const isVerified = (verified : string | boolean) : boolean => {
  if (typeof verified === "string") {
    if (/YES/i.test(verified)) {
      return true;
    } else {
      return false;
    }
  }
  return verified;
}

// Q16
const getHours = (activity : CombinedActivity) : number => {
  if ("hours" in activity) {
    return activity.hours;
  }
  return activity.time;
}

// Q11 - Q18
function calculateHours(volunteers: Volunteers[]) {
  return volunteers.map((volunteer) => {
    let hours : number = 0;

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
}


const combinedVolunteers = combineVolunteers(
  [].concat(wolfPointVolunteers, raccoonMeadowsVolunteers)
);
// Q10
// console.log(combinedVolunteers);

// Q19 && Q21
const results = calculateHours(combinedVolunteers);
console.log(results.sort(byHours));