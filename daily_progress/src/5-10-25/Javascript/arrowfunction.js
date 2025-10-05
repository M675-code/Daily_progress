var foo = function(){
    console.log("hi");
}

var foo = () => {
    console.log('hi');
};

var square = (x) => x*x;

$(function() {
    var obj =  {
        name: "mahak",
        init: function(){
            this.anchor = $('a');
            this.bindEvents();
        },
        bindEvents: function(){
            this.anchor.on('click', (e) => {
                console.log(this.name);
                e.preventDefault();
            });
        } 
    };

    obj.init();
})