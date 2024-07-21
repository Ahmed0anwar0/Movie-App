import {getMovie} from "./index.js";

  
  // =========================================
  
  
  export async function disUpcoming(){
    $(".loading-screen").removeClass('hidden');
  
    try {
      let upcoming = 'movie/upcoming?'

      getMovie(upcoming)

  } catch (error) {
    console.error(error);
    return null;
  }finally {
    $(".loading-screen").addClass('hidden');
  }

  }
  
  
  
  // =========================================
