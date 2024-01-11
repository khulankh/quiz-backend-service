const { Router } = require('express');
const { createFact, getFacts, getUserFacts, deleteFact, updateFact, addLikes, addDislikes } = require('../controller/quizController');
const factRoute = Router()

factRoute.post('/fact', createFact)
factRoute.get('/fact', getFacts)
factRoute.get('/fact/:userId', getUserFacts)
factRoute.delete('/fact/:factId', deleteFact)
factRoute.put('/fact/:factId', updateFact)
factRoute.put('/fact/like/:factId/:userId', addLikes)
factRoute.put('/fact/dislike/:factId/:userId', addDislikes)

module.exports = factRoute