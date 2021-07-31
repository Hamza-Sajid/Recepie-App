//Global Variables

var tapi=document.getElementById("trend");
var btnTexts=document.getElementById("btnText");
var tit=document.getElementById("tit");
var button = document.getElementById('remBtn')

//Button Function Code (sweetcodejs)

function removeReg(text,del_reg) {
  swal({
    text: (text+del_reg),


  })
}
//Random API KEY
/***************/
const trend={
  url:"https://api.spoonacular.com/recipes/random?apiKey=1d1131748a69430d831c6042f66333ab&",
  random: Math.floor(Math.random() * 1)
};

fetch(trend.url+"number="+trend.random)
.then((translate) => translate.json())

.then(function (output)
{
  console.log(output);
  var img = document.createElement("img");
  //img.clasName +="topimg";
  img.className += "topss";
  img.src=(output.recipes[0].image);
  tapi.appendChild(img);
  var title=document.createElement("h4");
  title.style.display="block";
  title.style.position="relative";
  title.style.bottom="-180px";
  var t = document.createTextNode(output.recipes[0].title);
  title.appendChild(t);
  tit.appendChild(title);
  console.log(title);
  var btn=document.createElement("button");
  btn.style.position="relative";
  btn.style.top="200px";
  btn.style.fontFamily= "'Hind Madurai', sans-serif";

  var btnText=document.createTextNode("View");
  btn.appendChild(btnText);
  btnTexts.appendChild(btn);


  btn.addEventListener('click', function() {
    console.log('clicked on button')
    var text=(output.recipes[0].instructions);
    text=text.replace(/<[^>]*>?/gm, '');
    text.slice(1,5);


    removeReg(text);
  });
})


.catch(function (error) {
  console.log("this is error"+error);
});
/***************/



//Search Recepie Against User Search//
/***************/

//2nd Part Global Variables

var mains=document.getElementById("mains");
var img1=document.getElementById("img1");
var h201=document.getElementById("h201");
var hide=document.getElementById("hide");
var tit=document.getElementById("tit");
var trends=document.getElementById("trend");

//Main 2nd Function

function searchme()
{
  trends.style.display=("none");
  trends.classList.remove("api");
  hide.classList.remove("hide");
  hide.className += "unhide";
  var search=document.getElementById("search");
  search=search.value;
  h3hai.style.display="none";

  //User Search API
  const sapi=
  {
    url:"https://api.spoonacular.com/recipes/complexSearch?apiKey=27ae01a75b87449fa4c6815c9d137758&query="
  }
  fetch(sapi.url+search)
  .then((result) =>result.json())
  .then(function (output) {
    let image0 = output.results[0].image;
    let image1 = output.results[1].image;
    let image2 = output.results[2].image;
    let image3 = output.results[3].image;

    document.getElementsByClassName("cards")[0].innerHTML = output.results[0].title;
    document.getElementsByClassName("cards")[0].style.backgroundImage =`url(${image0})`;
    document.getElementsByClassName("cards")[1].innerHTML = output.results[1].title;
    document.getElementsByClassName("cards")[1].style.backgroundImage =`url(${image1})`;

    document.getElementsByClassName("cards")[2].innerHTML = output.results[2].title;
    document.getElementsByClassName("cards")[2].style.backgroundImage =`url(${image2})`;

    document.getElementsByClassName("cards")[3].innerHTML = output.results[3].title;
    document.getElementsByClassName("cards")[3].style.backgroundImage =`url(${image3})`;

    // tapi.appendChild(img);
    //var img = document.createElement("img");
    // //img.clasName +="topimg";
    // img.className += "topss";
    //           img.src=(output.recipes[0].image);
    // tapi.appendChild(img);

    console.log(output);
  })
  .catch(function (error) {
    console.log(error);
  })

  console.log(search);
}
