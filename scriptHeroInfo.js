var myLocalStorage = window.localStorage;

let hero_id = myLocalStorage.getItem('showSuperHero');

var apiRequest = new XMLHttpRequest();

var url = 'https://superheroapi.com/api.php/105434235801010/'+hero_id;

apiRequest.onreadystatechange = function(){
    if(this.readyState ==4 && this.status ==200){

        var data = JSON.parse(this.responseText);
        console.log(data);

        //the api has null values in some sections so here replacing all the null values with '-' if some powerstats/attribute of a super hero is not available
        if(data.powerstats.intelligence != "null"){
            document.getElementById('intelligence_stats').innerHTML = data.powerstats.intelligence;
        }else{
            document.getElementById('intelligence_stats').innerHTML = '-';
        }

        if(data.powerstats.strength != "null"){
            document.getElementById('strength_stats').innerHTML = data.powerstats.strength;
        }else{
            document.getElementById('strength_stats').innerHTML = '-';
        }

        if(data.powerstats.speed != "null"){
            document.getElementById('speed_stats').innerHTML = data.powerstats.speed;
        }else{
            document.getElementById('speed_stats').innerHTML = '-';
        }

        if(data.powerstats.durability != "null"){
            document.getElementById('durability_stats').innerHTML = data.powerstats.durability;
        }else{
            document.getElementById('durability_stats').innerHTML = '-';
        }
        
        if(data.powerstats.power != "null"){
            document.getElementById('power_stats').innerHTML = data.powerstats.power;
        }else{
            document.getElementById('power_stats').innerHTML = '-';
        }
       
        if(data.powerstats.combat != "null"){
            document.getElementById('combat_stats').innerHTML = data.powerstats.combat;
        }else{
            document.getElementById('combat_stats').innerHTML = '-';
        }
        
    


        //setting name and image of the hero
        document.getElementById('imageOfSuperHero').setAttribute(
            "src",
            data.image.url ?? "default-image.jpeg"
          );
        // if(data.image.response=="success"){
        //     document.getElementById('imageOfSuperHero').setAttribute('src',data.image.url);

        // }else{
        //     document.getElementById('imageOfSuperHero').setAttribute('src','default-hero-image.jpeg');
        // }
        

        document.getElementById('hero-name').innerText = data.name;

        document.getElementById('real-name').innerText=data.biography["full-name"];
        

        let alignment = document.getElementById('alignment');

        if(data.biography.alignment=='good'){
            alignment.setAttribute('src','good.jpg');
        }else{
            alignment.setAttribute('src','bad.jpg');
        }

        
       
        
    }
}
apiRequest.open('get',url,true);
apiRequest.send();