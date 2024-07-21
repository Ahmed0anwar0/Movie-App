import {getMovie,apiKy} from "./index.js";



  
$(".searchByName").on('input',function(){
    let searchVal = $(".searchByName").val();
    searchByName(searchVal);
  })
  
 export async function searchByName(searchInput){

        try {
            let query = `&query=${searchInput}`;
            let search = `search/movie?`;
            getMovie(search,query);
        } catch (error) {
            console.error(error);
            return null;
        }   
}