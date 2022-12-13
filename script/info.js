const info = document.getElementById('information');

function setInformation(){
    let data = JSON.parse(localStorage.getItem('Information'));
    console.log(data)
    info.innerHTML = `
    <img src=${data.Poster}
    alt="Image">
<div class="manual">
    <h1 class="Movie-name">${data.Title}</h1>    
    <p><b>About:</b> ${data.Plot}</p>
    <p><b>Year:</b> ${data.Year}</p>
    <p><b>Writer:</b> ${data.Writer}</p>
    <p><b>Actors:</b> ${data.Actors}</p>
    <p><b>Awards:</b> ${data.Awards}</p>
    <p><b>Ratings:</b> ${data.imdbRating}</p>
    <p><b>Genre:</b> ${data.Genre}</p>
    <div class="btn-ar">
        <buttton id ="Back" class="btn btn-primary">Back to Search</buttton>
        <buttton class="btn btn-primary">Add to Favourite</buttton>
    </div>
</div>
    `; 

     function handleBack(){

         parent.location='../index.html'
         localStorage.removeItem('Information');
     }

     document.getElementById('Back').addEventListener('click' , handleBack);

}

setInformation();