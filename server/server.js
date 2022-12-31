const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

app.use(cors());

// PARSING
app.use(bodyParser.json())


/// routes
app.use('/api',routes)


/// error handling
// app.use(convertToApiError)
// app.use((err,req,res,next)=>{
//     handleError(err,res)
// })

const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
});