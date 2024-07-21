import { getMovie} from "./index.js";

  
  // =========================================
  
  
  export async function disPopular(){
    $(".loading-screen").removeClass('hidden');
  
    try {
      let popular = 'movie/popular?'

      getMovie(popular)

  } catch (error) {
    console.error(error);
    return null;
  }finally {
    $(".loading-screen").addClass('hidden');
  }

  }
  
  
  
  // =========================================
