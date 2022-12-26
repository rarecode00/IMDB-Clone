const searchBar = document.getElementById("searchbar");
const searchInfo = document.getElementById("search-info");
const api = "https://www.omdbapi.com/?apikey=33b434ea";

const favList = []

function handleInput(e) {
  if (e.target.value.length > 2) fetchAllData(e.target.value);
}

async function fetchAllData(e) {
  searchInfo.innerHTML = "";
  const response = await fetch(api + `&t=${e}`);
  const data = await response.json();
  if (!data.Response || !data.Title) {
    return;
  }else{
  console.log(data)
  searchInfo.innerHTML = `
    <img src=${data.Poster}
    alt="Image">
<div class="manual">
    <h1 class="Movie-name">${data.Title}</h1>
    <p><b>About:</b> ${data.Plot}</p>
    <p><b>Actors:</b> ${data.Actors}</p>
    <p><b>Ratings:</b> ${data.imdbRating}</p>
    <p><b>Genre:</b> ${data.Genre}</p>
    <div class="btn-ar">
        <buttton id ="know-more" class="btn btn-primary">Know More</buttton>
        <buttton class="btn btn-primary">Add to Favourite</buttton>
    </div>
</div>
    `;

     function openPage(){
        localStorage.setItem("Information" , JSON.stringify(data));
        parent.location = './Html/infoPage.html'
     }

     document.getElementById('know-more').addEventListener('click' , openPage);
   }
}


searchBar.addEventListener("input", handleInput);
