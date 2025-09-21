var fruits = ["Apple","Orange","Apple","Orange","Orange","Watermelon"]

/*
- prev = {} next = Apple => {Apple: 1, Orange:1}
- prev = {Apple: 1 } next: orange=> {Apple:1, Orange:1}

*/ 

var fruitsInfo = fruits.reduce(function(prev,next){
    if(next in prev){
        prev[next]++;
    } else{
        prev[next] = 1;
    }

    return prev;
}, {})

console.log(fruitsInfo)
