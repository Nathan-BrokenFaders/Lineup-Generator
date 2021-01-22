let headlineAct = ["A$AP Rocky", "Ab-Soul", "Action Bronson", "Anderson .Paak & The Free Nationals", "Black Hippy", "Busta Rhymes", "CASISDEAD", "Chance The Rapper", "Childish Gambino", "Danny Brown", "De La Soul", "DJ Shadow", "Earl Sweatshirt", "EARTHGANG", "Flatbush Zombies", "Foreign Beggars", "Four Owls", "Frank Ocean", "Freddie Gibbs & Madlib", "Gang Starr", "Ghostface Killah", "Giggs", "GZA", "Ice Cube", "J Dilla - Donuts 15th Anniversary Set", "J. Cole", "Jay Rock", "Joey Bada$$", "Jurassic 5", "Kano", "Kendrick Lamar", "Logic", "Loyle Carner", "Mac Miller", "Madvillain", "Method Man", "MF DOOM", "Mobb Deep", "Mos Def", "N.W.A", "Nas", "Notorious B.I.G", "Nujabes - DJ Set", "Ocean Wisdom", "P Money", "The Pharcyde", "Raekwon", "Redman", "Run The Jewels", "ScHoolboy Q", "Skepta", "Slowthai", "Stormzy", "Tom Misch", "A Tribe Called Quest", "Tyler, The Creator", "Vince Staples", "Wu Tang Clan"];

let supportAct = ["A$AP Twelvyy", "Akala", "Akua Naru", "The Alchemist - DJ Set", "Babylon Dead", "Black Josh", "Capo Lee", "Children Of Zeus", "The Cinematic Orchestra", "Conway The Machine", "Coops", "Cult Of The Damned", "Dabbla", "Dead Players", "Dirty Dike", "DRS", "Flowdan", "Frankie Stew & Harvey Gunn", "Gravediggaz", "IAMDDB", "The Internet", "Jam Baxter", "Jehst", "JME", "Kaytranada", "Killa P", "Knxwledge", "Kojey Radical", "Lee Scott", "Leikeli47", "LEVELZ", "Little Simz", "Meyhem Lauren", "Milkavelli", "The Mouse Outfit", "Nao", "Nightmares On Wax - DJ Set", "Omniverses", "Pete Rock & CL Smooth", "Rejjie Snow", "Roots Manuva", "Sir Spyro - DJ Set", "Slum Village", "Souls Of Mischief", "Swindle", "Thundercat", "The Underachievers", "Your Old Droog", "Benny The Butcher"];

let openingAct = ["Abstract Orchestra - Full Orchestra", "Akemi Fox", "Anti Lilly", "Phoniks", "BVA", "Chimpo - DJ Set", "Chokez - DJ Set", "Clear Soul Forces", "Danny Scrilla - DJ Set", "Datkid", "DR Syntax", "Dream Mclean", "Ed Scissor", "FKJ", "Flamingosis", "Fox", "Ghostpoet", "Harry Fraud - DJ Set", "Hi5Ghost - DJ Set", "Ivy Lab - Future Beats Set", "JD. Reid", "Jungle Brown", "[ K S R ]", "KinKai", "KLIM - DJ Set", "LAUSSE THE CAT", "Layfullstop", "Mr Slipz", "Noname", "Pitch 92 - DJ Set", "Ramson Badbonez", "Res One", "Sir Hiss - DJ Set", "Sly Moon", "Smellington Piff", "Snowy", "Splurgeboys", "Stinkin Slumrock", "Strategy - DJ Set", "Sumgii - DJ Set", "TrueMendous", "Wiki", "Wish Master"];

const generateLineup = (array1, array2, array3) => {
    let headliner = Math.floor(Math.random() * array1.length);
    let supporter = Math.floor(Math.random() * array2.length);
    let opener = Math.floor(Math.random() * array3.length);
    let lineUp = "Headling the show will be " + array1[headliner] + "! Supporting the headline act will be " + array2[supporter] + "! Opening the night will be " + array3[opener];
    return lineUp;
}

generateLineup(headlineAct, supportAct, openingAct);

