let tweets = [
  {
    image : 'tweet1.png',
    reviewed : false,
    badness : 0.1,
    review : undefined,
    text : 'some nazi bullshit'
  },
  {
    image : 'tweet2.png',
    reviewed : false,
    badness : 1.0,
    review : undefined
  },
  {
    image : 'tweet3.png',
    reviewed : false,
    badness : 0.3,
    review : undefined
  },
  {
    image : 'tweet4.png',
    reviewed : false,
    badness : 0,
    review : undefined
  },
  {
    image : 'tweet5.png',
    reviewed : false,
    badness : 0,
    review : undefined
  },
  {
    image : 'tweet6.png',
    reviewed : false,
    badness : 0.2,
    review : undefined
  },
  {
    image : 'tweet7k.png',
    reviewed : false,
    badness : 0.6,
    review : undefined
  },
  {
  image : 'tweet8.png',
  reviewed : false,
  badness : 0,
  review : undefined
},
{
image : 'tweet9.png',
reviewed : false,
badness : 0,
review : undefined
},
{
image : 'tweet10.png',
reviewed : false,
badness : 0,
review : undefined
},
{
image : 'tweet11.png',
reviewed : false,
badness : 0.1,
review : undefined
},
{
image : 'tweet12.png',
reviewed : false,
badness : 0.8,
review : undefined
},
{
image : 'tweet13.png',
reviewed : false,
badness : 1,
review : undefined
},
{
image : 'tweet14.png',
reviewed : false,
badness : 0.2,
review : undefined
},
{
image : 'tweet15d.png',
reviewed : false,
badness : 0.2,
review : undefined
},
{
image : 'tweet16.png',
reviewed : false,
badness : 0.2,
review : undefined
},
{
image : 'tweet17.png',
reviewed : false,
badness : 0.8,
review : undefined
},
{
image : 'tweet18.png',
reviewed : false,
badness : 0.7,
review : undefined
},
{
image : 'tweet19.png',
reviewed : false,
badness : 0.4,
review : undefined
},
{
image : 'tweet20.png',
reviewed : false,
badness : 0.5,
review : undefined
},
]

let currentTweet = 0

var tweetViewer = document.querySelector('#tweetViewer')
var suspend = document.querySelector('#suspend')
var allow = document.querySelector('#allow')
var endScreen = document.querySelector('#endScreen')
var printButton = document.querySelector('#printButton')

function showTweet(){
  tweetViewer.src = tweets[currentTweet].image
}

function doReview(review){
  console.log('// REVIEW: ')
  if(!tweets[currentTweet + 1]){
    goToTheEnd()
  } else {
    tweets[currentTweet].reviewed = true
    tweets[currentTweet].review = review

    currentTweet ++
    showTweet()
  }
}




suspend.addEventListener('mouseup',function(){
  doReview(1)
})

allow.addEventListener('mouseup',function(){
  doReview(0)
})

printButton.addEventListener('mouseup',function(){
  window.print();
})

function goToTheEnd(){
  console.log('THE END')


  let avgBadness = 0
  let totalBadness = 0

  for(let i = 0; i < tweets.length; i++){
    if(!isNaN(tweets[i].review)){
      totalBadness += tweets[i].review
    }
  }
  avgBadness = totalBadness / tweets.length
  console.log(avgBadness)

  for(let i = 0; i < otherTweets.length; i++){
    if(otherTweets[i].badness < avgBadness){
      console.log('its all goooood')
      // pront.innerHTML += "<h1>" + tweets[currentTweet].text + " " + tweets[currentTweet].review + "</h1>"
    } else {
      console.log('ban the fuckers')
    }
  }




  endScreen.style.display = "block"
}
