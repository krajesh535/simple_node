const express = require('express');
const port = 3000 | process.env.PORT

app = express();

app.get('/', (request, response) => {
    response.send({
        name: 'Rajesh'
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});