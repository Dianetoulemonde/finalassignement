$(function () {
    $("#searchButton").on("click", () => {
        let name = $("#names").val();
        let ingredients = $("#ingredients").val();
    
    $ajax({
        url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    }).done(response => {
        let res = JSON.parse(response);
    })
});