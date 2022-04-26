const express = require('express');
const { getMember , createMember ,deleteMember  } = require('../controllers/member')
const route = express.Router();

route.get('/',getMember);
route.post('/', createMember);
route.delete('/:id',deleteMember);

module.exports = route;