
var query= new URLSearchParams(location.search)
var currentID=query.get("rId")
var imgSrc=document.getElementById("imgSrc")
var linkBtn=document.getElementById("linkBtn")
var ingredients=[]

var recipeID=[]
getRecipesDetails()

function getRecipesDetails()
{
    var httprequest=new XMLHttpRequest
    httprequest.open("get",`https://forkify-api.herokuapp.com/api/get?rId=${currentID}`)
    httprequest.send()
    httprequest.addEventListener("readystatechange",function()
    {
        if(httprequest.readyState==4)
        {
            recipeID=(JSON.parse(httprequest.response).recipe)
            imgSrc.src=recipeID.image_url
            linkBtn.href=recipeID.source_url
            linkBtn.target="_blank"
            ingredients=recipeID.ingredients
            displayIngredients()
        }
    })
}


function displayIngredients (){
    var lis=""
    for(var i=0;i<ingredients.length;i++){
        lis+=
        `
        <li>${ingredients[i]}</li>
        
        `
    }
    document.getElementById("recepiUl").innerHTML=lis
}