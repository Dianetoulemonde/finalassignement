$(function() {
    $(".button").on("click", () => {
  
      let cocktailName = $(".cocktailSelector").val();
      let cocktailIngredient = $(".cocktailIngredient").val();
  
      if (cocktailName == "") {
          $.ajax({
              url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailName
            })
      } else {
          $.ajax({
              url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + cocktailIngredient
            }) 
      }



        <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="https://cdn.pixabay.com/photo/2017/07/18/06/21/mojito-2514908_960_720.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Mojito</h5>
                    <p class="card-text">To create this delicious cocktail, you need...</p>
                    <a href="#" class="btn btn-primary">Get recipe</a>
                </div>
        </div>

});
    
