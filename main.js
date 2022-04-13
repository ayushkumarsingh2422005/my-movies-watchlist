window.onload = function(){
    const all_ele = document.querySelector("#all_ele");
    const inp = document.querySelector("#inp")
    var mv_names = [
        "Resident Evil The Final Chapter",
        "Resident Evil Retribution",
        "Independence Day",
        "Independence Day Resurgence",
        "Pacific Rim",
        "Pacific Rim Uprising",
        "hunter killer",
        "Spider Man 1",
        "Spider Man 2",
        "Spider Man 3",
        "The Amazing Spider Man 1",
        "The Amazing Spider Man 2",
        "Venom",
        "Venom Let There Be Carnage",
        "Resident Evil Afterlife",
        "The Adam Project",
        "Spider Man No Way Home",
        "Resident Evil Extinction",
        "Doctor Strange",
        "Suicide Squad",
        "Captain America Civil War",
        "Avengers Infinity War",
        "Thor Ragnarok",
        "Spider Man  Homecoming",
        "Captain Marvel",
        "Shazam",
        "Men in Black International",
        "Avengers Endgame",
        "Eternals",
        "The Incredible Hulk",
        "Green Lantern",
        "Thor",
        "Captain America: The First Avenger",
        "The Avengers",
        "Guardians of the Galaxy",
        "Captain America: The Winter Soldier",
        "The Dark Knight Rises",
        "Ant-Man",
        "Avengers: Age of Ultron",
        "Godzilla",
        "Batman v superman dawn of justice",
        "Deadpool",
        "Iron man 1",
        "Iron man 2",
        "Iron man 3",
        "Wonder Woman 1984",
        "Wonder Woman",
        "Batman Begins",
        "Man of Steel",
        "The Dark Knight",
        "Godzilla vs. Kong",
        "Godzilla King of the Monsters",
        "King Kong Vs Godzilla",
        "Wrath of the Titans",
        "Clash of the Titans",
        "Resident Evil",
        "Resident Evil Apocalypse",
        "Kick",
        "Phokran",
        "Three ediot",
        "chichore",
        "PK",
        "Hate story 1",
        "Hate story 2",
        "Hate story 3",
        "Hate story 4",
        "ragini mms",
        "ragini mms 2",
        "krish 2",
        "KGF chapter 1",
        "Uri",
        "Shershah",
        "Bhuj",
        "Exorsis",
        "Anabel",
        "G.I. Joe: Ever Vigilant",
        "Snake Eyes G.I. Joe Origins",
        "Snake Eyes",
        "G.I. Joe Retaliation",
        "G.I. Joe The Rise of Cobra",
        "Avatar",
        "Thor The dark world",
        "Guardians of the Galaxy Vol 2",
        "Black Widow",
        "Black Panther",
        "Ant-Man and The Wasp",
        "Loki",
        "What if",
        "WandaVision",
        "Shang Chi",
        "Falcon and the Winter Soldier",
        "Moon Knight",
        "Spider-Man Far from Home",
        "Hawkeye",
        "Justice League",
        "Zack Snyder's Justice League",
        "Aquaman",
        "Birds of pray",
        "The Suicide squad",
        "Joker",
        "Catwoman",
        "Oblivion",
        "The Lion King",
        "the jungle book",
        "Martian",
        "Bumblebee",
        "Transformers The Last Knight",
        "Transformers Age of Extinction",
        "Transformers Dark of the Moon",
        "Transformers Revenge of the Fallen",
        "Transformers",
        "Edge of tomorrow",
        "Gemini man",
        "The A team",
        "Fantastic Four 2015",
        "Fantastic Four Rise of the Silver Surfer",
        "Fantastic Four 2005",
        "The Fantastic Four",
        "X-Men: Dark Phoenix",
        "Deadpool 2",
        "Logan",
        "X-Men: Days of Future Past",
        "X-Men: Apocalypse",
        "The Wolverine",
        "X-Men Origins: Wolverine",
        "X-Men: First Class",
        "X-Men: The Last Stand",
        "X-Men",
        "X2",
        "Bagwaan",
        "Robote",
        "Robote 2.0",
        "Ra1",
        "Krish 3",
        "Koi mil gaya",
        "Kabir singh",
        "Pushpa",
        "ala vaikunthapurramuloo",
        "chhichhore",
        "Ms Dhoni",
        "2012",
        "Ghost in the shell",
        "F9",
        "The Fate of the Furious",
        "Furious 7",
        "Fast & Furious 6",
        "Fast Five",
        "Los Bandoleros",
        "The Fast and the Furious: Tokyo Drift",
        "Fast & Furious",
        "The Turbo Charged Prelude for 2 Fast 2 Furious",
        "The Fast and the Furious",
        "Fast 2 Furious",
        "Ghost Rider",
        "Ghost Rider Spirit of Vengeance",
        "Death Race Beyond Anarchy",
        "Death Race Inferno",
        "Death Race 2",
        "Death Race",
        "Radius",
        "Sonic The hadgehog",
        "",
        "",
        "",
        "",
        "",
        "",

    ].sort();
    //mv_names.sort();
    var num = 1;
    var htm = ``
    for (i in mv_names){
        if (mv_names[i] != ""){
            htm+= `<div class="lst">${num++}. ${mv_names[i]}</div>`;
        }
    }
    all_ele.innerHTML = htm;
    
    
    inp.oninput = function(){
        htm = ``;
        num = 1;
        for (i in mv_names){
            if (mv_names[i] != "" ){
                if((mv_names[i].toLowerCase()).includes(inp.value.toLowerCase(), 0)){
                    htm+= `<div class="lst">${num++}. ${mv_names[i]}</div>`;
                    //console.log(htm)
                    
                }
            }
            else{
                continue;
            }
        }
        all_ele.innerHTML = htm;
    }
    
    
    var vin = document.getElementById("all_ele");
    vin.onscroll = function(){
        var winScroll = vin.scrollTop;
        var height = vin.scrollHeight - vin.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("scroll").style.width = scrolled + "%";
    }
}
