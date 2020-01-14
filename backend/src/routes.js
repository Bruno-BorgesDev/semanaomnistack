const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs', async (request, response) => {
    const{ github_username } = request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    console.log(response.data);

    return response.json({ messsage: 'Hello omnistack' });
});

module.exports = routes;
