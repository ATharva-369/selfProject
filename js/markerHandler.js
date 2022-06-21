AFRAME.registerComponent("marker-handler",{
    init:async function(){
        alert("Hello")
        this.el.addEventListener("markerFound",()=>{
            console.log("Marker Found!");
            this.markerFound();
        });
        this.el.addEventListener("markerLost",()=>{
            console.log("Marker Lost!");
            this.markerLost();
        });    
    },
    markerFound:function(){
        var button = document.getElementById("button1");
        button.style.display = "flex" ;
        var ratingButton = document.getElementById("rating-button");
        var orderButton = document.getElementById("order-button");
        ratingButton.addEventListener("click",()=>{
            swal({
                icon : "warning",
                tite : "Rate Dish",
                text : "Work In Progress..."
            });
        });
        orderButton.addEventListener("click",()=>{
            swal({
                icon : "https://i.imgur.com/4NZ6uLY.jpg",
                tite : "Thankyou For Ordering!",
                text : "Your Order Will Be Served Soon"
            });
        });
    },
    markerLost:function(){
        var button = document.getElementById("button1");
        button.style.display = "none" ;

    }
})