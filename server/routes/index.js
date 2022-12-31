const express = require('express');
const router = express.Router();

// routes
const insectRoute = require('./insect.route');

const routesIndex = [
    {
        path:'/solution',
        route: insectRoute
    }
] 

routesIndex.forEach((route)=>{
    router.use(route.path,route.route)
})



module.exports = router
