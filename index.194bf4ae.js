class e{async fetchPopular(){try{const e=`https://api.themoviedb.org/3/trending/movie/day?api_key=03779c52c93ea63ebe46db37a334d7d8&page=${this.page}`,t=await fetch(e),a=await t.json();return console.log(a),a.results}catch(e){console.log(e)}}async fetchByQuery(e){try{const t=`https://api.themoviedb.org/3/search/movie?api_key=03779c52c93ea63ebe46db37a334d7d8&language=en-US&query=${e}&page=${this.page}&include_adult=false`,a=await fetch(t);return(await a.json()).results}catch(e){console.log(e)}}async getGenres(){try{const e="https://api.themoviedb.org/3/genre/movie/list?api_key=03779c52c93ea63ebe46db37a334d7d8&language=en-US",t=await fetch(e),a=await t.json();return console.log(a.genres),a.genres}catch(e){console.log(e)}}async getCountByQuery(e){try{const t=`https://api.themoviedb.org/3/search/movie?api_key=03779c52c93ea63ebe46db37a334d7d8&language=en-US&query=${e}&include_adult=false`,a=await fetch(t);return(await a.json()).total_results}catch(e){console.log(e)}}async fetchById(e){try{const t=`https://api.themoviedb.org/3/movie/${e}?api_key=03779c52c93ea63ebe46db37a334d7d8&language=en-US`,a=await fetch(t);return await a.json()}catch(e){console.log(e)}}setCurrentPage(e){this.page=e}incrementPage(){this.page+=1}resetPage(){this.page=1}constructor(){this.searchQuery="",this.page=1}}const t=new e,a=document.querySelector(".container-card");async function n(e){const n=await t.fetchByQuery(e);a.innerHTML=await c(n)}function c(e){return e.map((({poster_path:e,id:t,original_title:a,release_date:n,genre_ids:c})=>`\n                  <div class="container-card_single-card" data-id="${t}" >\n                    <div class="poster">\n                        <img src="https://image.tmdb.org/t/p/w500${e}" alt="${a}">\n                    </div>\n                    <div class="info">\n                      <h3 class="info_title">${a}</h3>\n                      <p class="info_details">\n                          ${c} | ${n}\n                      </p>\n                    </div>\n                  </div> \n        `)).join("")}const s=new e,o=document.querySelector(".header-input-container"),r=document.querySelector("#search-box");s.fetchPopular(),o.addEventListener("submit",(function(e){try{e.preventDefault(),searchQuery=r.value,""===searchQuery&&console.log("надо ввести фильм"),n(searchQuery)}catch{}})),async function(){const e=await t.fetchPopular();a.insertAdjacentHTML("beforeend",c(e))}();
//# sourceMappingURL=index.194bf4ae.js.map
