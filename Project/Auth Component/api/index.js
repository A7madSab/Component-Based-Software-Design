export const getRes = async () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://api.ocr.space/parse/imageurl?apikey=b0a6c9967e88957&url=http://i.imgur.com/fwxooMv.png", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    // var options = {
    //     'method': 'POST',
    //     'url': 'https://api.ocr.space/parse/image',
    //     'headers': {
    //         'apikey': 'b0a6c9967e88957'
    //     },
    //     formData: {
    //         'url': 'https://i.stack.imgur.com/7Ji0H.gif'
    //     }
    // };
    // request(options, function (error, response) {
    //     if (error) throw new Error(error);
    //     console.log(response.body);
    // });
}