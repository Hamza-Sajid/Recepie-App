// // var button = document.getElementById('remBtn')
// //
// // function removeReg(del_reg) {
// //   swal({
// //       text: "Are you sure you want to delete? \n the reg name : " + del_reg,
// //
// //     })
// //     .then(function(value) {
// //       console.log('returned value:', value);
// //     });
// // }
// //
// // button.addEventListener('click', function() {
// //   console.log('clicked on button')
// //   removeReg('');
// // });
//
// const trend={
//   url:"https://api.spoonacular.com/recipes/random?apiKey=db33c5d9697d40ca9f0c4298ac254a56&",
//   random: Math.floor(Math.random() * 1)
// };
//
//
//
//
// var tapi=document.getElementById("trend");
// var btnTexts=document.getElementById("btnText");
// var tit=document.getElementById("tit");
//
// fetch(trend.url+"number="+trend.random)
// .then((translate) => translate.json())
// .then(function (output) {
//
// console.log(output);
// var img = document.createElement("img");
// //img.clasName +="topimg";
// img.className += "topss";
//           img.src=(output.recipes[0].image);
// tapi.appendChild(img);
//
//           var title=document.createElement("h4");
//           title.style.display="block";
//           title.style.position="relative";
//           title.style.bottom="-180px";
//           var t = document.createTextNode(output.recipes[0].title);     // Create a text node
//           title.appendChild(t);                                   // Append the text to <h1>
//         tit.appendChild(title);
//           console.log(title);
//
// var btn=document.createElement("button");
//
//
//
//
// btn.style.position="relative";
// btn.style.top="200px";
// var btnText=document.createTextNode("View");
// btn.appendChild(btnText);
// btnTexts.appendChild(btn);
//
//
// var cook=output.recipes[0].instructions;
// cook=cook.replace(/<[^>]*>?/gm, '');
// //btn.onClick=fun();
// btn.onclick = function(del_reg)
//  {
//      console.log("hey");
//      swal({
//          text: cook+ del_reg,
//
//
//        })
//
//        .then(function(value) {
//          console.log('returned value:', value);
//        });
//      }
//
//      btn.addEventListener('click', function() {
//      console.log('clicked on button')
//
//      });
//
//    })
//
//
//
// .catch(function (error) {
// console.log(error);
// })\
var img1=document.getElementById("img1");
var h201=document.getElementById("h201");
var hide=document.getElementById("hide");
var tit=document.getElementById("tit");
function searchme() {
  hide.classList.remove("hide");
  hide.className += "unhide";
  var search=document.getElementById("search");
  search=search.value;
h3hai.style.display="none";

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
searchme();