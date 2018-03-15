let hashTagWeird = document.querySelector('#weird')
console.log(hashTagWeird)

hashTagWeird.addEventListener('click',function(){
  hashTagWeird.classList.add('beenClicked')
  document.getElementById('worm').style.color ="gray";
})
