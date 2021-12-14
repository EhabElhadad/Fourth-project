var recipes=[]
var links=document.getElementsByClassName("nav-item")
for(var i=0;i<links.length;i++)
links[i].addEventListener("click",function(eventinfo)
{
currentMeal=(eventinfo.target.text)
getRecipes(currentMeal)
})



getRecipes("Pizza")

function getRecipes(meal)
{
    var httprequest=new XMLHttpRequest()
    httprequest.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${meal}`)
    httprequest.send()
    httprequest.addEventListener("readystatechange",function()
    {
       if(httprequest.readyState==4)
       {
           recipes=(JSON.parse(httprequest.response).recipes)
           displayRecipes()
       } 
    })
}


function displayRecipes()
{
    var cols=``
    for(var i=0;i<recipes.length;i++)
    {
        cols+=
        `
        <div class="col-md-4">  
        <div>
        <img class="img-fluid" src="${recipes[i].image_url}">
        <h4>${recipes[i].title}</h4>
        <button class="btn btn-primary mb-2">
        <a target="_blank" class="text-white" href="${recipes[i].source_url}">source</a>
        </button>
        <button class="btn btn-secondary mb-2"><a target="_blank" href="details.html?rId=${recipes[i].recipe_id}"> Details</button>

        </div> 
        </div>
        `
    }
    document.getElementById("recipes").innerHTML=cols
}



$(window).scroll(function()
{
    let topOffset=$(window).scrollTop()
    if(topOffset>200)
    {
        $(".navbar").css("background-color","red")
    }
})