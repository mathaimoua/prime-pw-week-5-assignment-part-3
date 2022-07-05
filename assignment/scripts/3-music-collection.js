console.log( '***** Music Collection *****' );
let collection = [];

function addToCollection( title, artist, yearPublished ){
   let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
   }
   //console.log( album );
   collection.push(album);
   return album;
}

//console.log( '*** addToCollection TESTS ***' );
console.log( addToCollection( "Hybrid Theory", "Linkin Park", 2000 ) );
console.log( addToCollection( "Reanimation", "Linkin Park", 2002 ) );
console.log( addToCollection( "Nurture", "Porter Robinson", 2021 ) );
console.log( addToCollection( "Take Care", "Drake", 2011 ) );
console.log( addToCollection( "Believe Acoustic", "Justin Biever", 2013 ) );
console.log( addToCollection( "Kamikaze", "Twista", 2004 ) );

console.log( collection );

function showCollection( collection ){
    console.log( collection.length, 'albums' );
    for ( let i =0; i<collection.length; i++ ){
        console.log( collection[i].title, 'by', collection[i].artist + ', published in year',
        collection[i].yearPublished );
    }
}

//console.log( ' *** showCollection TEST ***' );
showCollection( collection );

function findByArtist( artist ){
    let results = [];
    for ( let albums of collection ){
        if ( albums.artist == artist ){
            results.push(albums);
        }
    }
    return results;
}

//console.log( '*** findByArtist TEST ***' );
console.log( findByArtist ( 'Drake' ) );
console.log( findByArtist ( 'Kanye East' ) );
console.log( findByArtist ( 'Linkin Park' ) );

function search( artist, yearPublished ){
    let results = [];
    for ( let albums of collection ){
        if ( albums.artist == artist && albums.yearPublished == yearPublished ){
            results.push( albums );
        }
    }
    return results;
}

//console.log( '*** search TEST ***' );
console.log( search( "Ray Charles", 1957 ) );
console.log( search( "Linkin Park", 2000 ) );