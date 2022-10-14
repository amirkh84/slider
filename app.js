var swiperBase = document.getElementsByClassName("swiper-wrapper");
function addCard() {
 swiperBase[0].innerHTML += swiperBase[0].innerHTML;
};
for (let i = 0; i < 4; i++) {
addCard();
};
var allNames = document.querySelectorAll(".person-name");
var allpics = document.querySelectorAll(".card-image");
var Email = document.querySelectorAll(".person-info");
var url = "https://randomuser.me/api/";
for (let i = 0; i < allNames.length; i++) {
    fetch(url)
    .then(res => res.json())
    .then( function(data) { 
            allNames[i].innerText = data.results[0].name.first + " " + data.results[0].name.last;
            allpics[i].src = data.results[0].picture.large;
            Email[i].innerText = data.results[0].email;
    });
};