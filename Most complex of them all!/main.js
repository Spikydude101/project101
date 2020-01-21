'use strict';

let cnv = document.getElementById('myCanvas');
let ctx = cnv.getContext('2d');
let mouseX;
let mouseY;

cnv.width = 1200;

cnv.height = 800;

//globak variables

let drawPokeball = document.getElementById('pokeball');



// event listeners
document.getElementById('loadPokeballs').addEventListener('click', showPokeballs);
document.addEventListener('click' , pokemonResult );
document.addEventListener('mousemove' , mouseDetect);


// array of names of pokemon
let pokemon = [];

// array to store pokeball info
let pokeballs = [];

//fetchs info from file
fetch('words.txt').then(convertData).then(processData);

function convertData(rawData) {

    //converts file contents to a string

    return rawData.text();
}

function processData(data) {

    //Split's string by end of line

    pokemon = data.split(/, /);
    

}


function showPokeballs(){
    //create a array of pokeballs
    pokeballs = [];

    for(let i = 0; i < 50; i++){
        
        
        pokeballs.push({
            x: Math.floor(Math.random()*cnv.width -20),
            y: Math.round(Math.random() * cnv.height - 20),
            w:130,
            h:120,
            speed: Math.random() * 5 + 1,
            image: 'images/Pokeball.jpg',
            thisPokemon:pokemon[Math.floor(Math.random() * 49)]  ,
            // thisPokemon: 'meowth'
            
        });
        
    }
    console.log(pokeballs);
    setTimeout(iChooseYou, 100);
    
}





function iChooseYou(){
    
    
    // black background
    ctx.fillStyle = ' black';
    ctx.fillRect(0 , 0 , cnv.width , cnv.height);

    // draw pokeballs
    for(let i = 0; i < pokeballs.length; i ++){
        ctx.drawImage(drawPokeball , pokeballs[i].x ,pokeballs[i].y , pokeballs[i].w , pokeballs[i].h );

        

    }

    //requestAnimationFrame(iChooseYou);
    
}
//calculates mouse positions of x and y on canvas

function mouseDetect(event){

    let cnvRect = cnv.getBoundingClientRect(); 
      
    // Calc mouse coordinates using mouse event and canvas location info
    mouseX = Math.round(event.clientX - cnvRect.left);
    mouseY = Math.round(event.clientY - cnvRect.top);


}

//this function calculates if you clicked on an image or not, then displays image depending on what pokemon is inside the pokeball

function pokemonResult(){
    for(let i = 0; i < pokeballs.length; i++){
        if(mouseX > pokeballs[i].x && mouseX < pokeballs[i].x + pokeballs[i].w && mouseY > pokeballs[i].y && mouseY < pokeballs[i].y + pokeballs[i].h) {
            console.log('clicking a pokeball: ' + pokeballs[i].thisPokemon);
            
            if(pokeballs[i].thisPokemon == 'pikachu') {
                
                let poke1 = document.getElementById('pikachu');
                ctx.drawImage( poke1 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                console.log('I like soup')
            }else if (pokeballs[i].thisPokemon == 'venusaur'){
                let poke2 = document.getElementById('venusaur');
                ctx.drawImage ( poke2 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);

            }else if (pokeballs[i].thisPokemon == 'blastoise'){
                let poke3 = document.getElementById('blastoise');
                ctx.drawImage ( poke3 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'lapras'){
                let poke4 = document.getElementById('lapras');
                ctx.drawImage ( poke4 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'pidgey'){
                let poke5 = document.getElementById('pidgey');
                ctx.drawImage ( poke5 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'rattata'){
                let poke6 = document.getElementById('rattata');
                ctx.drawImage ( poke6 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'meowth'){
                let poke7 = document.getElementById('meowth');
                ctx.drawImage ( poke7 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'ponyta'){
                let poke8 = document.getElementById('ponyta');
                ctx.drawImage ( poke8 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'persian'){
                let poke9 = document.getElementById('persian');
                ctx.drawImage ( poke9 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'rapidash'){
                let poke9 = document.getElementById('rapidash');
                ctx.drawImage ( poke9 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'galarian ponyta'){
                let poke10 = document.getElementById('galarian ponyta');
                ctx.drawImage ( poke10 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'galarian rapidash'){
                let poke11 = document.getElementById('glarian rapidash');
                ctx.drawImage ( poke11 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'galarian meowth'){
                let poke12 = document.getElementById('galarian meowth');
                ctx.drawImage ( poke12 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'perserker'){
                let poke13 = document.getElementById('perserker');
                ctx.drawImage ( poke13 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'farfetchd'){
                let poke14 = document.getElementById('farfetchd');
                ctx.drawImage ( poke14 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'sirfetchd'){
                let poke16 = document.getElementById('sirfetchd');
                ctx.drawImage ( poke16 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'weezing'){
                let poke17 = document.getElementById('weezing');
                ctx.drawImage ( poke17 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'galarian weezing'){
                let poke18 = document.getElementById('galarian weezing');
                ctx.drawImage ( poke18 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'mime.jr'){
                let poke19 = document.getElementById('mime.jr');
                ctx.drawImage ( poke19 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'mr.mime'){
                let poke20 = document.getElementById('mr.mime');
                ctx.drawImage ( poke20 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'galarian mr.mime'){
                let poke21 = document.getElementById('galarian mr.mime');
                ctx.drawImage ( poke21 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'mr.rime'){
                let poke22 = document.getElementById('mr.rime');
                ctx.drawImage ( poke22 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                

            }else if (pokeballs[i].thisPokemon == 'butterfree'){
                let poke23 = document.getElementById('butterfree');
                ctx.drawImage ( poke23 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'tauros'){
                let poke24 = document.getElementById('tauros');
                ctx.drawImage ( poke24 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'charizard'){
                let poke25 = document.getElementById('charizard');
                ctx.drawImage ( poke25 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'corsola'){
                let poke26 = document.getElementById('corsola');
                ctx.drawImage ( poke26 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'galarian corsola'){
                let poke27 = document.getElementById('galarian corsola');
                ctx.drawImage ( poke27 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'cursola'){
                let poke28 = document.getElementById('cursola');
                ctx.drawImage ( poke28 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'zigzagoon'){
                let poke29 = document.getElementById('zigzagoon');
                ctx.drawImage ( poke29 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'galarian zigzagoon'){
                let poke30 = document.getElementById('galarian zigzagoon');
                ctx.drawImage ( poke30 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'linoone'){
                let poke31 = document.getElementById('linoone');
                ctx.drawImage ( poke31 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'galarian linoone'){
                let poke32 = document.getElementById('galarian linoone');
                ctx.drawImage ( poke32 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'obstagoon'){
                let poke33 = document.getElementById('obstagoon');
                ctx.drawImage ( poke33 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'stunky'){
                let poke34 = document.getElementById('stunky');
                ctx.drawImage ( poke34 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'stunktank'){
                let poke35 = document.getElementById('stunktank');
                ctx.drawImage ( poke35 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'tympole'){
                let poke36 = document.getElementById('tympole');
                ctx.drawImage ( poke36 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'palpitoad'){
                let poke37 = document.getElementById('palpitoad');
                ctx.drawImage ( poke37 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'seismitoad'){
                let poke38 = document.getElementById('seismitoad');
                ctx.drawImage ( poke38 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'scraggy'){
                let poke39 = document.getElementById('scraggy');
                ctx.drawImage ( poke39 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'scrafty'){
                let poke40 = document.getElementById('scrafty');
                ctx.drawImage ( poke40 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'yamask'){
                let poke41 = document.getElementById('yamask');
                ctx.drawImage ( poke41 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'coffagrigus'){
                let poke42 = document.getElementById('coffagrigus');
                ctx.drawImage ( poke42 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'galarian yamask'){
                let poke43 = document.getElementById('galarian yamask');
                ctx.drawImage ( poke43 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'runerigus'){
                let poke44 = document.getElementById('runerigus');
                ctx.drawImage ( poke44 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'stunfisk'){
                let poke45 = document.getElementById('stunfisk');
                ctx.drawImage ( poke45 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'galarian stunfisk'){
                let poke46 = document.getElementById('yamask');
                ctx.drawImage ( poke46 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'darumaka'){
                let poke47 = document.getElementById('darumaka');
                ctx.drawImage ( poke47 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'darmanitan'){
                let poke48 = document.getElementById('darmanitan');
                ctx.drawImage ( poke48 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'galarian darumaka'){
                let poke49 = document.getElementById('galarian daramaka');
                ctx.drawImage ( poke49 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }else if (pokeballs[i].thisPokemon == 'galarian darmanitan'){
                let poke50 = document.getElementById('galarian darmanitan');
                ctx.drawImage ( poke50 , pokeballs[i].x , pokeballs[i].y , pokeballs[i].w , pokeballs[i].h);
                
            }
            
            
        }
        
    }

    
}

