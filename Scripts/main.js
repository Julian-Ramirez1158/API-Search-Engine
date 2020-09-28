
$(function (){
    let APIKEY = "4TZn3MNINHOctdASo3YzC53mvkqThjmK";
    $('#submit').click(function ( event ){
        event.preventDefault();
        $('#output').empty();
        let userInput = $('#search').val();
        console.log(userInput);
        let urlSent = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${userInput}&limit=12`;
        console.log(urlSent);
        $.get( urlSent )
            .done( function( result ) {
                for(let thing of result.data) {
                    console.log(thing);
                    let item = `<img class="col-sm-3" src="${thing.images.downsized_large.url}" alt="${thing.title}"/>`;
                    $('#output').append(item);
                }
            } );
    });
});





