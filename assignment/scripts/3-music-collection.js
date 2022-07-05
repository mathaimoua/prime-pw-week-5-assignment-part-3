console.log('***** Music Collection *****')
let collection = [];

function addToCollection( title, artist, yearPublished ){
   let album = {
    title: title,
    artist: artist,
    year: yearPublished
   }
   //console.log( album );
   collection.push(album);
   return album;
}

console.log(addToCollection( "Hybrid Theory", "Linkin Park", 2000 ));
console.log(addToCollection( "Reanimation", "Linkin Park", 2002 ));
console.log(addToCollection( "Nurture", "Porter Robinson", 2021 ));
console.log(addToCollection( "Take Care", "Drake", 2011 ));
console.log(addToCollection( "Believe Acoustic", "Justin Biever", 2013 ));
console.log(addToCollection( "Kamikaze", "Twista", 2004 ));

console.log( collection );