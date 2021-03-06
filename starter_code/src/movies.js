/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
    const newDB = JSON.parse(JSON.stringify(array));
    newDB.sort((a,b) => {
      if (a.year === b.year){
        if (a.title < b.title){
          return -1;
        }else if (a.title > b.title){
          return 1;
        }else{
          return 0;
        }
      }else{
        return a.year - b.year;
      }
    });
    return newDB;
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array){
    if(!array.length){
    return 0;
    }

    let moviesSpielberg = array.filter(function(movies){
    return movies.director === 'Steven Spielberg' && movies.genre.includes('Drama')
    });
    return moviesSpielberg.length
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
    // if(!array.length){
    // return 0
    // }

    
    // let newArray=JSON.parse(JSON.stringify(array));
    let newArray= array.map((movie) => {
        return movie.title
    });

    let a=newArray.sort()
    return a.slice(0,20);  

    // Paula's Solution
    // return titles
    // .sort()
    // .slice(0,20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){
    if(!array.length){
        return 0

        // let rateArray = array.map((movie) => {
        //     return movie.rate
        // }); 
        
        // let reducedrateArray = rateArray.reduce((accumulator,number) => {
        //     return accumulator + number}, 0);
        // let rateAverage = reducedrateArray / rateArray.length;
        // let avg=Math.round(rateAverage * 10 ** 2) / 10 ** 2
        // return avg
    } else{
        let total = array.reduce((accumulator, current) => {
            if (current.rate) {
                return accumulator + current.rate;
            } else {
                return accumulator;
            }
        }, 0);
        let average = total / array.length;
            // return Math.round(average * 10 ** 2) / 10 ** 2;
            // return Number(average.toFixed(2));
            return parseFloat(average.toFixed(2));
    }
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  if (!array.length) {
    return 0;
  } else {
    const dramaMovies = array.filter(movie => movie.genre.includes("Drama"));

    const sumArray = dramaMovies.reduce((accumulator, value) => {
      return accumulator + value.rate;
    }, 0);

    const average = sumArray / dramaMovies.length;
    if (dramaMovies.length) {
      return Math.round(average * 100) / 100;
    } else {
      return 0;
    }
  }
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {

  let newArray = array.slice().map(element =>{
    let newElement = {...element};
    if (newElement.duration.indexOf('min') >= 0 && newElement.duration.indexOf('h') >= 0) {
      newElement.duration = Number((newElement.duration.split('h')[0] * 60)) + Number((newElement.duration.split(' ')[1].split('min')[0]));
    } else if (newElement.duration.indexOf('h') >= 0 && newElement.duration.indexOf('min') < 0){
      newElement.duration = Number((newElement.duration.split('h')[0] * 60));
    } else {
      newElement.duration = Number((newElement.duration.split('min')[0]));
    }
    return newElement
  });

  return newArray;
}

// console.log(movies);

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {
  if (!array.length){
     return null;
  }
  let bestAverage={}
  let averageRate=0 
  array.forEach(movie => {

      let counter=0
      averageRateForYear=array.reduce((avgRate,movieYear)=>{
      if(movie.year == movieYear.year){
        avgRate+= movieYear.rate;
        counter++;
      } 
      return avgRate
    },0);

      averageRateForYear=averageRateForYear/counter;

      if (averageRate == averageRateForYear){
        if (bestAverage.year>movie.year){
        bestAverage = movie;
        averageRate=averageRateForYear;
        }} else if (averageRate < averageRateForYear){
        bestAverage = movie;
        averageRate=averageRateForYear;
        }
      })
   return `The best year was ${bestAverage.year} with an average rate of ${averageRate}`
 }