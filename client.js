const data = loadData()

document.querySelector("p").style.color = "red"
const $moviesList = document.getElementById("moviesList")
console.log(loadData())
renderMovies();
function renderMovies() {
    data.movies.forEach(movie => {
        const $movie = document.createElement("div")
    $movie.innerHTML = `<h1>${data.movie.name}</h1>`
    movie.reviews.forEach(review => {$movie.innerHTML = `<li>${review.rating}</li>`})
    $moviesList.append($movie)
})
    
}

function loadData() {
    //JSON = Javascript object notation
    const movies = [
    
    {
        //key : value
        "title" : "Stepbrothers",
        "genre" : "Comedy",
        "reviews" : [
            {
                "rating" : 5,
                "like" : true,
                "user" : {
                    "name" : "Remy Savoie",
                    "gender" : "male",
                    "region" : "USA"
                }
            },
            {
                "rating" : 2,
                "like" : false,
                "user" : {
                    "name" : "Luke Rupp",
                    "gender" : "male",
                    "region" : "USA"
                }
            }
        ]
    },

    {
        //key : value
        "title" : "Moneyball",
        "genre" : "Drama",
        "reviews" : []
    },

    {
        //key : value
        "title" : "The Grinch",
        "genre" : "Children",
        "reviews" : [
            {
                "rating" : 3,
                "like" : false,
                "user" : {
                    "name" : "Remy Savoie",
                    "gender" : "male",
                    "region" : "USA"
                }
            },
            {
                "rating" : 3,
                "like" : false,
                "user" : {
                    "name" : "Eric Thomas",
                    "gender" : "male",
                    "region" : "USA"
                }
            },
            {
                "rating" : 3,
                "like" : false,
                "user" : {
                    "name" : "Cody Schafer",
                    "gender" : "male",
                    "region" : "USA"
                }
            },
            {
                "rating" : 3,
                "like" : false,
                "user" : {
                    "name" : "Anthony Hall",
                    "gender" : "male",
                    "region" : "USA"
                }
            },
            {
                "rating" : 4,
                "like" : true,
                "user" : {
                    "name" : "Gabriella DelVerne",
                    "gender" : "female",
                    "region" : "USA"
                }
            },
            {
                "rating" : 4,
                "like" : true,
                "user" : {
                    "name" : "Nicholas Watson",
                    "gender" : "male",
                    "region" : "USA"
                }
            },

        ]
    },
]

return {
    "movies" : movies
}
}