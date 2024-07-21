import {getMovie} from "./index.js";

  
  // =========================================
  
  
  export async function disTopRated(){
    $(".loading-screen").removeClass('hidden');
  
    try {
      let topRated = 'movie/top_rated?'

      getMovie(topRated)

  } catch (error) {
    console.error(error);
    return null;
  }finally {
    $(".loading-screen").addClass('hidden');
  }

  }
  
  
  
  // =========================================
