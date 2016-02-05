//JQuery code to change color of button when hover
$("#quoteButton").hover(function() {
  $(this).css("background-color", "#bbb")
}, function() {
  $(this).css("background-color","#bdb")
});

//array to store quotes or strings
var quoteArray = [
  "The richest man is not he who has the most, but he who needs the least. <br><i>-Unknown Author</i>",
  "Watch your thoughts; they become words.<br> Watch your words; they become actions.<br> Watch your actions; they become habits.<br> Watch your habits; they become character.<Br> Watch your character; it becomes your destiny.<br> <i>—Lao-Tze</i>",
  "Be there for others, but never leave yourself behind.<br><i>-Dodinsky</i>",
  "In the end, it's not the years in your life that count. It's the life in your years.<br> <i>-Abraham Lincoln</i>",
  "Life is not a problem to be solved, but a reality to be experienced.<br> <i>-Soren Kierkegaard</i>",
  "The best preparation for tomorrow is doing your best today.<br> <i>-H. Jackson Brown, Jr.",
  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.<br> <i>-Helen Keller</i>",
  "If opportunity doesn't knock, build a door.<br> <i>-Milton Berle</i>",
  "Life is 10% what happens to you and 90% how you react to it.<br> <I>-Charles R. Swindoll</i>",
  "In order to succeed, we must first believe that we can.<br> <i>-Nikos Kazantzakis</i>",
  "What you do today can improve all your tomorrows.<br> <i>-Ralph Marston</i>",
  "Accept the challenges so that you can feel the exhilaration of victory.<br> <i>-George S. Patton</i>",
  "You are never too old to set another goal or to dream a new dream.<br> <i>-C. S. Lewis</i>",
  "Yesterday is not ours to recover, but tomorrow is ours to win or lose.<br> <i>-Lyndon B. Johnson</i>",
  "Once you replace negative thoughts with positive ones, you'll start having positive results.<br> <i>-Willie Nelson</i>",
  "To succeed, you need to find something to hold on to, something to motivate you, something to inspire you.<br> <i>-Tony Dorsett</i>",
  "I have decided to stick with love. Hate is too great a burden to bear.<br> <i>-Martin Luther King, Jr.</i>",
  "Trust in the Lord with all your heart, and lean not on your own understanding; but in all your ways acknowledge Him, and He shall direct your paths<br> <i>-Proverbs 3:5-6</i>",
  "There are moments when troubles enter our lives and we can do nothing to avoid them. But they are there for a reason. Only when we have overcome them will we understand why they were there.<br> <i>― Paulo Coelho, The Fifth Mountain</i>",
  "You can get a thousand no's from people, and only one \"yes\" from God.<br> <i>― Tyler Perry<\i>"
];  //end of array

//initialize variables
var randomQuote = 0;    //variable to store random index of quote/string in array to be displayed
var stringQuote = "";   //string variable to store quote/string to be displayed

//function to display a quote
function displayQuote(quoteArray) {
  randomQuote = Math.floor(Math.random() * quoteArray.length);  //generate a random number between 0 and length of quoteArray and assign to randomQuote variable
  stringQuote = quoteArray[randomQuote];  //display quote/string at index of quoteArray stored in randomQuote, and assign the string to variable stringQuote
  
  //get element quoteSection from HTML and display selected string assigned in stringQuote variable 
  document.getElementById("quoteSection").innerHTML = stringQuote;
}