// GitHub repo: https://github.com/Baptiste-Williams/cs81-module4b-mydataexplorer

// My weekly data journal
const weekData = [
  { day: "Monday", sleepHours: 7, screenTime: 6, mood: "focused", caffeineIntake: 2, focusLevel: 8 },
  { day: "Tuesday", sleepHours: 6.5, screenTime: 7, mood: "tired", caffeineIntake: 3, focusLevel: 6 },
  { day: "Wednesday", sleepHours: 8, screenTime: 5, mood: "productive", caffeineIntake: 1, focusLevel: 9 },
  { day: "Thursday", sleepHours: 5.5, screenTime: 8, mood: "distracted", caffeineIntake: 4, focusLevel: 5 },
  { day: "Friday", sleepHours: 6, screenTime: 6.5, mood: "neutral", caffeineIntake: 2, focusLevel: 7 },
  { day: "Saturday", sleepHours: 9, screenTime: 4, mood: "relaxed", caffeineIntake: 0, focusLevel: 8 },
  { day: "Sunday", sleepHours: 7.5, screenTime: 5.5, mood: "focused", caffeineIntake: 1, focusLevel: 9 }
];

//  My Predictions:
// I'm guessing Thursday had the most screen time, it felt like I was on my phone all day. 
// I think I was probably most focused on Wednesday or Sunday. I remember getting a lot done. 
// I feel like caffeine helps me focus, but probably not the best thing to do every time. 

function findHighestScreenTime(data) {
  let maxDay = null;
  let maxHours = 0;

  for (let entry of data) {
    if (entry.screenTime > maxHours) {
      maxHours = entry.screenTime;
      maxDay = entry.day;
    }
  }

  console.log(`Most screen time: ${maxDay} (${maxHours} hrs)`);
}

function averageSleep(data) {
  let totalSleep = 0;

  for (let entry of data) {
    totalSleep += entry.sleepHours;
  }

  const average = totalSleep / data.length;
  console.log(`Average sleep: ${average.toFixed(1)} hrs`);
}

function correlateCaffeineToFocus(data) {
  let withCaffeine = 0;
  let withCaffeineFocus = 0;
  let withoutCaffeine = 0;
  let withoutCaffeineFocus = 0;

  for (let entry of data) {
    if (entry.caffeineIntake > 0) {
      withCaffeine++;
      withCaffeineFocus += entry.focusLevel;
    } else {
      withoutCaffeine++;
      withoutCaffeineFocus += entry.focusLevel;
    }
  }

  const avgWith = withCaffeineFocus / withCaffeine;
  const avgWithout = withoutCaffeineFocus / withoutCaffeine;

  console.log(`Average focus with caffeine: ${avgWith.toFixed(1)}`);
  console.log(`Average focus without caffeine: ${avgWithout.toFixed(1)}`);
}

//Added mostFrequentMood function

function mostFrequentMood(data) {
  const moodCounts = {};

  for (let entry of data) {
    const mood = entry.mood;
    if (!moodCounts[mood]) {
      moodCounts[mood] = 1;
    } else {
      moodCounts[mood]++;
    }
  }

  let maxMood = null;
  let maxCount = 0;

  for (let mood in moodCounts) {
    if (moodCounts[mood] > maxCount) {
      maxMood = mood;
      maxCount = moodCounts[mood];
    }
  }

  console.log(`Most frequent mood: "${maxMood}" (${maxCount} times)`);
}



// Run the functions
findHighestScreenTime(weekData);
averageSleep(weekData);
correlateCaffeineToFocus(weekData);
mostFrequentMood(weekData);


