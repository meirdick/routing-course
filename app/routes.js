var express             = require('express'),
    router              = express.Router(),
    path                = require('path'),
    siteController      = require('./controllers/site.controller'),
    dashboardController = require('./controllers/dashboard.controller');

    //export router
    module.exports = router;

    // sire routes
    router.get('/',             siteController.showHome);
    router.get('/about',        siteController.showAbout);
    router.get('/contact',      siteController.showContact);
    router.post('/contact',     siteController.processContact);

    //dashboard routes
    router.get('/dashboard',    dashboardController.showDashboard);


    // catchall 404
router.use(                     siteController.show404);

