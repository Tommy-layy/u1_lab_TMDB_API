const API_KEY = '4e18483a2c2109e30fc1feb927e8c68b'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'
const button = document.querySelector('button')
const input = document.querySelector('input')
const list = document.querySelector('h2')
const movieSection = document.querySelector('.movie-list')
//
const renderList = (movies) => {
  movies.forEach((movies) => {
    let div = document.createElement('div')
    movieSection.appendChild(div)
    //
    let movieTitle = document.createElement('h2')
    div.innerHTML = `<img src=${IMAGE_BASE_PATH + movies.poster_path}/>`
    movieTitle.innerHTML = movie.original_title
    movieSection.appendChild(movieTitle)
  })
}
//
button.addEventListener('click', async () => {
  const movieTitle = input.value
  console.log(movies)
  let response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&api_key=${API_KEY}`
  )
  renderList(response.data.results)
})
