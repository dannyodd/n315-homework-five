var GAMES = [
    {
        gameTitle: "Skyrim: Special Edition",
        gameImgThumb: "skyrimse_150.jpg",
        gameImgFull: "skyrimse_300.jpg",
        gameDscBrief: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        gameDsc: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eos adipisici mollitia in. Vel, necessitatibus. Exercitationem, eligendi harum. Molestiae laboriosam sequi, pariatur animi explicabo quia deserunt. Expedita!",
        gameRating: "M",
    },
    {
        gameTitle: "Diablo II: Resurrected",
        gameImgThumb: "d2res_150.jpg",
        gameImgFull: "d2res_300.jpg",
        gameDscBrief: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        gameDsc: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eos adipisici mollitia in. Vel, necessitatibus. Exercitationem, eligendi harum. Molestiae laboriosam sequi, pariatur animi explicabo quia deserunt. Expedita!",
        gameRating: "M",  
    },
    {
        gameTitle: "Back 4 Blood",
        gameImgThumb: "b4b_150.jpg",
        gameImgFull: "b4b_300.jpg",
        gameDscBrief: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        gameDsc: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eos adipisici mollitia in. Vel, necessitatibus. Exercitationem, eligendi harum. Molestiae laboriosam sequi, pariatur animi explicabo quia deserunt. Expedita!",
        gameRating: "M",  
    },
    {
        gameTitle: "DOOM Eternal",
        gameImgThumb: "doom_150.jpg",
        gameImgFull: "doom_300.jpg",
        gameDscBrief: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        gameDsc: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eos adipisici mollitia in. Vel, necessitatibus. Exercitationem, eligendi harum. Molestiae laboriosam sequi, pariatur animi explicabo quia deserunt. Expedita!",
        gameRating: "M",  
    },
    {
        gameTitle: "No Man's Sky",
        gameImgThumb: "nms_150.jpg",
        gameImgFull: "nms_300.jpg",
        gameDscBrief: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        gameDsc: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eos adipisici mollitia in. Vel, necessitatibus. Exercitationem, eligendi harum. Molestiae laboriosam sequi, pariatur animi explicabo quia deserunt. Expedita!",
        gameRating: "M",  
    },
    {
        gameTitle: "Outer Worlds",
        gameImgThumb: "outworld_150.jpg",
        gameImgFull: "outworld_300.jpg",
        gameDscBrief: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        gameDsc: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eos adipisici mollitia in. Vel, necessitatibus. Exercitationem, eligendi harum. Molestiae laboriosam sequi, pariatur animi explicabo quia deserunt. Expedita!",
        gameRating: "M",  
    },
    {
        gameTitle: "Battlefield 2042",
        gameImgThumb: "bf2042_150.jpg",
        gameImgFull: "bf2042_300.jpg",
        gameDscBrief: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        gameDsc: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eos adipisici mollitia in. Vel, necessitatibus. Exercitationem, eligendi harum. Molestiae laboriosam sequi, pariatur animi explicabo quia deserunt. Expedita!",
        gameRating: "M",  
    },
    {
        gameTitle: "Ghost of Tsushima",
        gameImgThumb: "ghost_150.jpg",
        gameImgFull: "ghost_300.jpg",
        gameDscBrief: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        gameDsc: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eos adipisici mollitia in. Vel, necessitatibus. Exercitationem, eligendi harum. Molestiae laboriosam sequi, pariatur animi explicabo quia deserunt. Expedita!",
        gameRating: "M",  
    },
    {
        gameTitle: "Legend of Zelda: Breath of the Wild",
        gameImgThumb: "botw_150.jpg",
        gameImgFull: "botw_300.jpg",
        gameDscBrief: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        gameDsc: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eos adipisici mollitia in. Vel, necessitatibus. Exercitationem, eligendi harum. Molestiae laboriosam sequi, pariatur animi explicabo quia deserunt. Expedita!",
        gameRating: "E10+",  
    },
    {
        gameTitle: "Metroid: Dread",
        gameImgThumb: "dread_150.jpg",
        gameImgFull: "dread_300.jpg",
        gameDscBrief: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, ",
        gameDsc: 
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, reiciendis nulla obcaecati eos adipisici mollitia in. Vel, necessitatibus. Exercitationem, eligendi harum. Molestiae laboriosam sequi, pariatur animi explicabo quia deserunt. Expedita!",
        gameRating: "T",  
    },
];


//Loads the game gallery with data from the GAMES object and displays it on the page
function loadData(){
    $.each(GAMES, function(index, game){
        $("#app").append(`<div id="${index}" class="gameItem">
        <div class="gameImg">
            <img src="images/thumb/${game.gameImgThumb}" alt="${game.gameTitle}">
        </div>
        <h4>${game.gameTitle}</h4>
        <div class="briefRating">
            <div class="briefDsc">
                ${game.gameDscBrief}
            </div>
            <div class="rating">Rating: ${game.gameRating}</div>
        </div>
    </div>`);
        // console.log(game.gameTitle);
        // console.log(game.gameImgThumb);
        // console.log(game.gameImgFull);
        // console.log(game.gameDscBrief);
        // console.log(game.gameDsc);
        // console.log(game.gameRating);
    })

    // for (let i = 0; i < GAMES.length; i++){
    //     console.log(GAMES[i].gameTitle)
    // }
    
}

function initListeners() {
    $("a").click(function(e){
        // This stores the id from the anchor tag
        let aID = e.currentTarget.id;
        MODEL.changePageContent(aID);
    });
}


$(document).ready(function() {
    loadData();
    //initListeners();
    //MODEL.changePageContent("home");
});