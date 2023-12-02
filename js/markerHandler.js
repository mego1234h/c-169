AFRAME.registerComponent("markerhandler", {
  init: function(){
    this.el.addEventListener(
      "markerFound",()=> {
        this.handleMarkerFound()
    
      }
    )
    this.el.addEventListener(
      "markerLost",()=>{
        this.handleMarkerLost()
      }
    )

  },
  handleMarkerFound: function(){
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display="flex"
    var ratingButton = document.getElementById("rating-button")
    ratingButton.addEventListener("click",()=>{
      swal({
        icon:"warning",
        title:"Rate dish",
        text:"Work in progress",
      })
    })
    var orderButton = document.getElementById("order-button")
    orderButton.addEventListener("click",()=>{
      swal({
        icon:"success",
        title:"Thanks for ordering",
        text:"The order is out for delivery",
      })
    })

  },
  
  handleMarkerLost: function(){
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display="none"
  }


  

 


})
 