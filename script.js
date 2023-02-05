let publicKey="faa29f6d325bb7a7e0c92783a4abd701";

let privateKey="77ca968519ebcc3c2901c404eaaf2c16e7ed939e";

let mdash="27703945b9bceacb09546d2e103ad360";





const search=document.getElementById('search');
const submit=document.getElementById('submit');
const random=document.getElementById('random');
const mealEl=document.getElementById('meal');
const resultHeading=document.getElementsByClassName('result-heading');
const single_mealEl=document.getElementById('single-meal');


// let acessToken=105434235801010;
function searchMeal(e){
    e.preventDefault();
    

    single_mealEl.innerHTML="";
    console.log(search.value);
    const term=search.value;

    if(term.trim()){

        fetch(
            `https://www.superheroapi.com/api.php/105434235801010/search/${term}`
            ).then(function(response){
                return response.json();
            }).then(function(data){
               
                resultHeading.innerHTML=`<h2>Search result for ${term}</h2>`
                if(data.response===null){
                    resultHeading.innerHTML='there are no results for ${term}'
                }
                else{
                //     console.log(data);
                // console.log(data.results[0]);
                // console.log(data.results[0].name);
                // console.log(data.results);
                mealEl.innerHTML=data.response.results.map(
                   res=`
                   <div class="meal">
                   <img src="${meal.image.url}" alt="${meal.strmeal}">
                   </div>
                   `


                );
                
                }
                
            })

    }
    else{

    }



}

submit.addEventListener('submit',searchMeal);


