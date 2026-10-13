
// STARTING VALUES

const guestName = "   Amina Yusuf   ";
const eventName = "Creative Meetup";
const eventDate = "24 October 2026";
const venue = "Lagos Community Hall";
const activities = "Design,Photography,Writing";
const bookingId = "83";
const ticketPrice = 2500;
const ticketQuantity = 2;

// TASK 1 — Prepare and Explore the Booking Details

// 1. Remove spaces
const cleanName = guestName.trim();
console.log("Clean Name:", cleanName);

// 2. Uppercase and lowercase
console.log("Uppercase:", cleanName.toUpperCase());
console.log("Lowercase:", cleanName.toLowerCase());

// 3. Length of the clean name
console.log("Name Length:", cleanName.length);

// 4. First character using charAt()
console.log("First Character:", cleanName.charAt(0));

// 5. Check if eventName includes "Meetup"
console.log("Includes 'Meetup'?", eventName.includes("Meetup"));

// 6. Check if it starts with "Creative" and ends with "Meetup"
console.log("Starts with 'Creative'?", eventName.startsWith("Creative"));
console.log("Ends with 'Meetup'?", eventName.endsWith("Meetup"));

// 7. Find where "Meetup" begins
// It returns 9 because 'Meetup' starts at index 9 in "Creative Meetup"
console.log("Position of 'Meetup':", eventName.indexOf("Meetup"));

// 8. Extract "Creative" using substring()
// Grabs from index 0 up to (but not including) index 8
console.log("Extracted word:", eventName.substring(0, 8));

// 9. Split activities into an array
const activitiesArray = activities.split(",");
console.log("Activities Array:", activitiesArray);

// 10. Format bookingId to "0083" using padStart()
// We want a total of 4 characters, padded with "0" at the start
const formattedBookingId = bookingId.padStart(4, "0");
console.log("Formatted Booking ID:", formattedBookingId);

// 11. Format bookingId to "83***" using padEnd()
// We want a total of 5 characters, padded with "*" at the end
console.log("Padded End Booking ID:", bookingId.padEnd(5, "*"));

// 12. Repeat the welcome phrase
console.log("Repeat Message:", "See you there! ".repeat(3));



// TASK 2 — Join Strings

// Using the '+' operator (Concatenation)
const bookingMessage = "Welcome, " + cleanName + "! Your booking for " + eventName + " on " + eventDate + " at " + venue + " has been received. We look forward to seeing you!";
console.log("Using + operator:", bookingMessage);

// Using the .concat() method

const secondMessage = "Welcome, ".concat(cleanName, " Your booking for ", eventName, " on ", eventDate, " at ", venue, " has been received. We look forward to seeing you!");
console.log("Using .concat():", secondMessage);


// TASK 3 — Use a Template Literal

// Backticks ` allow us to input variables directly using ${} and do math inside them
const bookingSummary = `${cleanName} booked ${ticketQuantity} tickets for ${eventName} on ${eventDate} at ${venue}. The booking ID is ${formattedBookingId}, and the total cost is ₦${ticketPrice * ticketQuantity}.`;

console.log("Booking Summary:", bookingSummary);



// TASK 4 — Update the Event Name

// Use .replace() to swap words
const updatedEventName = eventName.replace("Creative", "Community");
console.log("Updated Event Name:", updatedEventName);

// Checking the original variable proves that .replace() returns a new string, 
// it does not permanently change the original string.
console.log("Original Event Name remains:", eventName);