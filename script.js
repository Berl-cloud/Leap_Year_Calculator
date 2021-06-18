
let results = document.getElementById("results")
function yr() {
    let year = document.getElementById('year').value;

    if (year >= 1582) {
        if (year % 4 === 0) {
            if (year % 100 === 0) {
                if (year % 400 === 0) {
                    results.innerHTML = 'A Leap Year';
                    results.style.color = 'white';
                    
                } else {
                  results.innerHTML = 'A Normal Year';
                  results.style.color = 'rgb(128, 126, 126)';
                }
            } else {
                results.innerHTML = 'A Leap Year';
                results.style.color = 'white';
               
            }
        } else {
            results.innerHTML = 'A Normal Year';
            results.style.color = 'rgb(128, 126, 126)';
        }
    } else {
        results.innerHTML = 'Error';
    }

}


