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
}
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

  buttonBox.style.display = "none"

  let avgBadness = 0
  let totalBadness = 0

  for(let i = 0; i < tweets.length; i++){
    if(!isNaN(tweets[i].review)){
      totalBadness += tweets[i].review
    }
  }
  avgBadness = totalBadness / tweets.length
  console.log(avgBadness)

  let otherTweets= [
    {
     text: "I hate people who are complicit with harrassment. Especially those who then blame victims. 👏 your condescending tone can be taken somewhere else 👏",
     badness : 0,
   },
   {
     text: "I like it when girls lick my butthole....its a life changing feeling",
     badness : 0.4,
   },
   {
     text: "The creepiest gay men are short, old asian men with long nails. Fact.",
      badness : 0.6,
   },
   {
     text: "My boy don't love me like he promised",
     badness : 0,
   },

   {
     text : "My step brother is insufferable why do i have to associate with him",
     badness : 0.2,
   },
   {
     text: "vegetarian food is uh. so fucking good",
     badness: 0.1,
   },
   {
     text: "bring back my...will to live",
     badness: 0.3,
   },
   {
     text: "I wanna die but if I kill myself everyone will make fun of me",
     badness: 0.4,
   },
   {
     text: "I can't believe we're going to Africa today omg what if we get Ebola? James we're fine we could've gotten it at chipotle last year...",
     badness: 0.5,
   },
   {
     text: "BLACK LIVES MATTER! - What the fuck is a black life???? Last time I checked, we're all just people",
     badness: 0.6,
   },
   {
     text: "Trump has blocked me from reading his tweets. I may have to kill myself",
     badness: 0.3,
   },
   {
     text: "Going to Africa. Hope I don't get AIDS. Just kidding. I'm white!",
     badness: 0.8,
   },
   {
     text: "I wish we could just kick them all out this country. This is England. Keep it that way",
     badness: 0.6,
   }

 ]

 let goodHTML = ''
 let badHTML = ''
 for(let i = 0; i < otherTweets.length; i++){
    if(otherTweets[i].badness < avgBadness){
       console.log('Allow')
       console.log(otherTweets[i])
        goodHTML += "<p>" + otherTweets[i].text + " " + otherTweets[i].badness + "</p>"
   } else {
      console.log('Suspend')
      console.log(otherTweets[i])
       badHTML += "<p>" + otherTweets[i].text + " " + otherTweets[i].badness + "</p>"
     }
  }

pront.innerHTML = "<h2>ALLOWED</h2>" + goodHTML +  "<h2 class='breakColumn'>SUSPENDED</h2>" + badHTML



  endScreen.style.display = "block"
}
