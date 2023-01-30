const rotateLeft = ( array, d ) => {
    const n = array.length;
    var temp = new Array( n );
    let k = 0;

    for ( let i = d;i < n;i++ ) {
        temp[ k ] = array[ i ];
        k++;
    }

    for ( let i = 0;i < d;i++ ) {
        temp[ k ] = array[ i ];
        k++;
    }
    console.log( temp );
}

let array = [ 1, 2, 3, 4, 5 ];
let d = 4;
rotateLeft( array, d );
