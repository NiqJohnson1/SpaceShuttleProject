// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeed = '17500'
let marsDistanceKm = 225000000
let moonDistanceKm = 384400
let milesPerKilometer = 0.621

// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName)
console.log(typeof shuttleSpeed)
console.log(typeof marsDistanceKm)
console.log(typeof moonDistanceKm)
console.log(typeof milesPerKilometer)

// This will determine how long it will take to reach Mars
let milesToMarsKm = marsDistanceKm * milesPerKilometer
let hoursToMars = milesToMarsKm / shuttleSpeed
let daysToMars = hoursToMars / 24

console.log (shuttleName , "will take" , daysToMars , "days to reach Mars.")

// This will determine how long it will take to reach the Moon
let milesToMoon = moonDistanceKm * milesPerKilometer
let hoursToMoon = milesToMoon / shuttleSpeed
let daysToMoon = hoursToMoon / 24

console.log (shuttleName ,   "will take",  daysToMoon , "days to reach the Moon.")










