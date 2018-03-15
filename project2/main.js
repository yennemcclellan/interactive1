let hashTagWeird = document.querySelector('#weird')
console.log(hashTagWeird)

hashTagWeird.addEventListener('click',function(){
  hashTagWeird.classList.add('beenClicked')
  document.getElementById('worm').style.color ="#A9A9A9";
  document.getElementById("bigworm").style.visibility= "visible";
})
