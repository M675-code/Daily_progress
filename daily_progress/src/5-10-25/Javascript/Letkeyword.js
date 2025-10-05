function foo(){
    var bar = "dasd";
}

console.log(bar);

function foo(){
    for(var i = 0;i<10; i++){
        console.log(i);
    }
    console.log(i);
}

foo();

function foo(){
    for(let i = 0;i<10; i++){
        console.log(i);
    }
    console.log(i);
}

foo();

//if let var is used number 10 will be displayed everytime
function foo(){
    var func = [];
    for(let i = 0;i<10; i++){
        func.push(function(){
            console.log(i);
        })
    }

    func.forEach(function(val){
        val();
    });
}

foo();