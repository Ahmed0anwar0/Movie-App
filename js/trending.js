import { getMovie} from "./index.js";

  
  // =========================================
  
  
  export async function distrending(){
    $(".loading-screen").removeClass('hidden');
  
    try {
      let trending = 'trending/all/day?'

      getMovie(trending)

  } catch (error) {
    console.error(error);
    return null;
  }finally {
    $(".loading-screen").addClass('hidden');
  }

  }
  
  
  
  // =========================================
