//This is the function that run when you click submit button

async function loadData() {
  // Get HTML element where the quote will be displayed.
  //Get paragraph element & made const because I don't need to change it 
  const quoteDisplay = document.getElementById("quote"); //(((SELECT)))
  // Show a loading message in the quote box.
  quoteDisplay.innerHTML = "<li>Loading quote...</li>";//change

  try { //keyword "try" means try to run API if it does not work 
    // then try to catch the error and display error message
    // (Send fetch request to quotes API.)
    const response = await fetch("https://dummyjson.com/quotes");//(((Change for the rest of function)))

    // Check for invalid API response.
    // if request was not sucessful we throw a new error
    if (!response.ok) {
      throw new Error("Failed to fetch data."); 
    }
    // define new variable 
    // (call)Extract body of API response as JSON.
    //return json format data
    //await (promise to get data)
    const data = await response.json();
    // Step 1
    // write json to console(print)
    console.log(data);

    // Step 2
    quoteInd = quoteInd + 3 //advance in threes quotes


    // Retrieve three new quote and display it in quote box.
    //Using modulus to cycle back to the beginning 
    // the remainder index/length which provide 3 different quotes
    const numquote = data.quotes.length;
    const newQuote1 = data.quotes[quoteInd %numquote].quote;
    const newQuote2 = data.quotes[(quoteInd+1) %numquote].quote;
    const newQuote3 = data.quotes[(quoteInd+2) %numquote].quote;
    //Display the list
    quoteDisplay.innerHTML = `<li>${newQuote1}</li>\n<li>${newQuote2}</li>\n<li>${newQuote3}</li>`;

  } catch (error) {
    // Step 4
    // Display error message and write error to log.
    quoteDisplay.innerHTML = "<li>Could not retrieve quote. Please try again.</li>";
    console.log(error);
  }
}

// Global variable keeping track of currently displayed quote.
// start @ -3 so it increase to zero when you first run loadData
//( quoteInd = quoteInd + 3;)
let quoteInd = -3;

// Initialize quote box with first quote.(call loadData)
loadData();

// Step 5
//press the button calls loadData function (LISTEN)
document.getElementById("quoteBtn").addEventListener("click", loadData);