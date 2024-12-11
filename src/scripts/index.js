 //'https://dummyjson.com/quotes/random'

 const baseURL = "https://dummyjson.com";
 const path = "/quotes/";

 const random = Math.floor(Math.random() * 20); 

 const getRandomQuote = (random) => {
   const xhr = new XMLHttpRequest();
   xhr.open('GET', `${baseURL}${path}${random}`, true);
   xhr.send();

   xhr.addEventListener('load', function () {
     const response = JSON.parse(xhr.responseText); 
     const quote = response.quote;  
     const author = response.author; 

     document.getElementById('quoteText').innerText = `"${quote}" - ${author}`;
     console.log(quote); 
   });
 };

 const showQuoteButton = document.getElementById('showQuoteButton');
 const overlay = document.getElementById('overlay');
 const quoteContainer = document.getElementById('quoteContainer');

 showQuoteButton.addEventListener('click', () => {
 
  overlay.style.transition = "transform .8s ease";  
  overlay.style.transform = "translateY(-100% )";   

  setTimeout(() => {
    overlay.classList.add('hidden');
  }, 1000); 

   quoteContainer.classList.add('visible');
   
   getRandomQuote(random);
 });