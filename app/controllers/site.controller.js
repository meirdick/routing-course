var path = require('path');

module.exports = {
    showHome:       showHome,
    showAbout:      showAbout,
    showContact:    showContact,
    processContact: processContact,
    show404:        show404
}

function showHome(req, res) {

    res.sendFile(path.join(__dirname, '../../index.html'));
}

 function showAbout(req, res) {

    res.json( {message: 'about page look at me'});
}


 function showContact(req, res) {

    res.sendFile(path.join(__dirname, '../../contact.html'));
}

//post handel
 function processContact(req, res) {
    console.log(req.body);
    res.send('hello ' + req.body.name + ' nice!');
}

// 404
function show404(req, res, next) {
    res.status(404);
    res.sendFile(path.join(__dirname, '../../404.html'))
}
