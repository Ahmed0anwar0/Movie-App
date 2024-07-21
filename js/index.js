"use strict";
///<reference types="../@types/jquery"/>
  
import {disPopular} from "./popular.js";
import { disTopRated } from "./topRated.js";
import { distrending } from "./trending.js";
import { disUpcoming } from "./upcoming.js";
import { searchByName } from "./search.js";

export let apiKy = 'api_key=d4ef6d1d20372c7b45b58284ef6cc263';
export let row = document.querySelector("#rowData");
let defaultMovie = "movie/now_playing?";

// =========================================

$("#nowPlaying").on('click',function(){

  getMovie(defaultMovie);
  closeSideNav()
  $('html').animate({ scrollTop : 0 },1000)

})

$("#popular").on('click',function(e){

  disPopular();
  closeSideNav()  
  $('html').animate({ scrollTop : 0 },1000)

})
$("#topRated").on('click',function(){

  disTopRated();
  closeSideNav()
  $('html').animate({ scrollTop : 0 },1000)

})
$("#trending").on('click',function(){

  distrending();
  closeSideNav()
  $('html').animate({ scrollTop : 0 },1000)

})
$("#upcoming").on('click',function(){

  disUpcoming();
  closeSideNav()
  $('html').animate({ scrollTop : 0 },1000)

})
$("#contactLink").on('click',function(){
  let ofset = $('#contact').offset().top;
  $('html').animate({ scrollTop : ofset },1000)
  closeSideNav()
})

$(window).scroll(function(){
 let topsc=$('html, body').scrollTop();
 if(topsc > 200){
  $('#back-to-top').addClass("active");
 }else{
  $('#back-to-top').removeClass("active");
 }
})
// =========================================

$(".open-close-icon").on('click',function(){
  let close =  $(".open-close-icon").hasClass("fa-xmark");
  if(close == true){
    $(".nav-menu").animate({"left": "-250px"}, 600);
    $(".open-close-icon").removeClass("fa-xmark");
    $(".nav-menu ul li").animate({"top": "300px"}, 600);
  }else{
    $(".nav-menu").animate({"left": "0px"}, 600);
    $(".open-close-icon").addClass("fa-xmark");
    $(".nav-menu ul li").animate({"top": ""}, 1000);
   
  }
  })
// =========================================

async function closeSideNav(){
  $(".nav-menu").animate({"left": "-250px"}, 600);
  $(".open-close-icon").removeClass("fa-xmark");
  $(".nav-menu ul li").animate({"top": "300px"}, 600);
}

// =========================================

// export async function getMealDetails(mealId){

//   $(".loading-screen").removeClass('hidden');


//   let cartona = '';

//   try {
//     const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
//     const response = await  api.json();
//     const details = response.meals[0];
//     if(details.strTags == null){
//       details.strTags = '';
//     }
// // ==================================
//     let resape = '';
//     for(let i=1;i<20;i++){
//       let str = 'strIngredient'+i;
//      let ingredient = details[str];
     
//      if (ingredient && ingredient.trim() !== '') {
//       resape += `<li class="alert alert-info m-2 p-1">${ingredient}</li>`
//         }
//     }
// // ==========
// let alltags = '';
// let tags = details.strTags;
// if (tags && tags.trim() !== ''){
// let tagsArray = tags.split(',');

// tagsArray.forEach(tag => {
//   alltags += `<li class="alert alert-danger m-2 p-1">${tag.trim()}</li>`;
// });
// }else{
//   alltags = '';
// }
// // ==================================

//     cartona += `
    
//             <div class="col-md-4">
//                 <img class="w-100 rounded-3" src="${details.strMealThumb}" alt="">
//                     <h2>${details.strMeal}</h2>
//             </div>

//             <div class="col-md-8">
//               <h2>Instructions</h2>
//               <p>${details.strInstructions}</p>
//               <h3><span class="fw-bolder">Area : </span>${details.strArea}</h3>
//               <h3><span class="fw-bolder">Category : </span>${details.strCategory}</h3>
//               <h3>Recipes :</h3>
//               <ul class="list-unstyled d-flex g-3 flex-wrap">${resape}</ul>
//               <h3>Tags :</h3>
//               <ul class="list-unstyled d-flex g-3 flex-wrap">${alltags}</ul>
//               <a href="#" class="btn btn-success">Source</a>
//               <a target="_blank" href="${details.strYoutube}" class="btn btn-danger">Youtube</a>
//           </div>
//     `
//   row.innerHTML = cartona;

//   }
//   catch (error) {
//     console.error(error);
//     return null;
//   }finally {
//     $(".loading-screen").addClass('hidden');
//   }
// }

// export async function mealDetails(){
  
// $(".mealId").on('click',function(){
//   let mealinfo = this.getAttribute("mealDetails");
//   getMealDetails(mealinfo);
// })
// }

// =========================

export async function getMovie(movieList,query) {
  $(".loading-screen").removeClass('hidden');
  let cartona = '';
  if(query == undefined){query ='';};
  if(query === '&query='){query =''; movieList = defaultMovie};

  try {
      const api = await fetch(`https://api.themoviedb.org/3/${movieList+apiKy+query}`);
      const response = await  api.json();
      const movieApi = response.results;
      if (movieApi == null) {
        return null;
    }

    for(let i=0;i < Object.keys(movieApi).length ; i++){

      let rate = movieApi[i].vote_average.toString();

      cartona += `
      
      
                    <div class="col-lg-4 col-md-6 col-sm-12 animate__animated animate__fadeIn">
                        <div class="item overflow-hidden position-relative animate__fadeIn">
                            <div class="cardImage animate__fadeIn">
                                <img src="https://image.tmdb.org/t/p/w500${movieApi[i].poster_path}" class="img-fluid">
                            </div>
                            <div class="overlay hideLay overflow-hidden animate__fadeIn">
                                <h1 class="position-relative animate__animated title">${movieApi[i].title}</h1>    
                                <p class="position-relative animate__animated desc">${movieApi[i].overview}</p>
                                <p class="position-relative animate__animated date"><span class="fst-normal">Release Date<span> : ${movieApi[i].release_date}</span></span></p>
                                <h3 class="position-relative rate animate__animated"><i class="fa-solid fa-star text-muted fs-6"></i></h3>
                                <h3 class="position-relative rate animate__animated vote">${rate.slice(0,3)}</h3>
                            </div>
                        </div>
                    </div>
      
      `

    } 

    row.innerHTML = cartona;
    closeSideNav();
    overlay()
  } catch (error) {
      console.error(error);
      return null;
  }finally {
    $(".loading-screen").addClass('hidden');
  }
}

// =========================

getMovie(defaultMovie)

// =========================

async function overlay() {

  $('.overlay h1').animate({top:'-200px'});
  $('.overlay h3').animate({bottom:'-200px'});

  $('.item').mouseenter(function() {

      let lyer = $(this).find('.overlay');

      if (lyer.length > 0 && lyer.hasClass('hideLay')) {
          lyer.removeClass("hideLay"); 
          $('.overlay h1').animate({top:'0px'},200);
          $('.overlay h3').animate({bottom:'0px'},200);
        }
  });




  $('.item').mouseleave(function() {

      let lyer = $(this).find('.overlay');

      if (lyer.length > 0) {
          lyer.addClass("hideLay");
          $('.overlay h1').animate({top:'-200px'});
          $('.overlay h3').animate({bottom:'-200px'});

      }
  });




}

// =========================

