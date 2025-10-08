function getStudent(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            reject("Something went wrong");
        }, 500);
    })
}

console.log(getStudent());
getStudent().then(success, faliure);

function success(){
    console.log("success")
}

function faliure(errormessage){
    console.log("errormessage");
}