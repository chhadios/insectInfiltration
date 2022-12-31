const express = require('express');
const router = express.Router();
const simulator = require('../solution/simulator')

router.route('/insects')
.post((req,res)=>{
    console.log(req.body.instructions)
    const sol=simulator.simulateMission(req.body.instructions)
    console.log(sol);
    res.send({result:sol})
})


module.exports = router;