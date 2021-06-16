
function yr() {
    let year = document.getElementById('year').value;

    if (year >= 1582) {
        if (year % 4 === 0) {
            if (year % 100 === 0) {
                if (year % 400 === 0) {
                    document.getElementById("results").innerHTML = 'A Leap Year';
                    // output.style.fontcolor('red');
                } else {
                   document.getElementById("results").innerHTML = 'A Normal Year';
                }
            } else {
                document.getElementById("results").innerHTML = 'A Leap Year';
                // output.style.css ({'color':'red'});
            }
        } else {
            document.getElementById("results").innerHTML = 'A Normal Year';
        }
    } else {
        document.getElementById("results").innerHTML = 'Error';
    }

}


