var colors = ['#B7E3E4', "#OO5397", "#OBBCD6", "#EF3E4A", "#FBFE568", "#C6D7C7", "#3A745F", "#O83EA7", "#19AAD1", "#EF5OB9", "#384D9D", "#96DOFF"]
var numColor = 0;

$('#newQuote').on('click', function(e) {  
 e.preventDefault();
    $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        
        $('#quote-text').html(post.content);
        $('#quote-author').html(post.title);
        
        // If the Source is available, use it. Otherwise hide it.
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#quote-source').html('Source:' + post.custom_meta.Source);
        } else {
          $('#quote-source').text('');
        }
      },
      cache: false
    });
  //calculate random number to pick a color, then set the color
  numColor = Math.floor(Math.random() * 12);
  
  document.body.style.backgroundColor = colors[numColor];   
  document.getElementById("quote-text").style.color = colors[numColor];
  document.getElementById("quote-author").style.color = colors[numColor];
  document.getElementById("quote-source").style.color = colors[numColor];
  document.getElementById("btnTweet").style.backgroundColor = colors[numColor];
  document.getElementById("newQuote").style.backgroundColor = colors[numColor];
  });


//above this line is for the subroutines

/*
//here is the DOM ready and the code that is excuted on click
$(document).ready(function() {
  getQuote();
  $('#newQuote').on('click', getQuote);
  $('#tweet-quote').on('click', function() {
    if(!inIframe()) {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    }
  });

});
*/

/* tools used: Boostrap, custom CSS, AJAX
Querying the JASON REST API to grab a random quote
Customizing the API to remove unused information
Using the new QoD JSON REST API to grab nifty quotes for your site
Color Claim for picking quote colors
*/