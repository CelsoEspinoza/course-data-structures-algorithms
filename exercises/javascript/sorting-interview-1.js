//#1 - Sort 10 schools around your house by distance:
// insertion sort (small amount of data)

//#2 - eBay sorts listings by the current Bid amount:
// radix or counting sort (only numbers that are small)

//#3 - Sport scores on ESPN
// quick sort (Faster algorithm)

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// merge sort (We're not sorting in memory and since it's massive data we can't risk using quick sort O(n^2).)

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// insertion sort

//#6 - Temperature Records for the past 50 years in Canada
// quick sort (since it might have decimal values, radix or counting sort are not possible. Then the next best one is quick sort)

//#7 - Large user name database needs to be sorted. Data is very random.
// quick sort (if it's not that large and we can pick a nice pivot this is the best one)

//#8 - You want to teach sorting for the first time
// aswer: bubble sort / selection sort