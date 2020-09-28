
$(function (){
    let APIKEY = "4TZn3MNINHOctdASo3YzC53mvkqThjmK";
    $('#submit').click(function ( event ){
        event.preventDefault();
        $('#output').empty();
        let userInput = $('#search').val();
        let urlSent = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${userInput}&limit=12`;
        $.get( urlSent )
            .done( function( result ) {
                for(let thing of result.data) {
                    let item = `<img class="col-sm-6 col-md-4" src="${thing.images.downsized_large.url}" alt="${thing.title}"/>`;
                    $('#output').append(item);
                }
            } );
    });
});






