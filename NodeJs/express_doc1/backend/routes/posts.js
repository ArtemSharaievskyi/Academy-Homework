const express = require('express');
const {createPost, getFeed, likePost } = require('../controllers/postController');
const {protect} = require('../middleware/auth');

const router = express.Router();

router.get('/', protect, getFeed)
router.post('/', protect, createPost)
router.post('/:id/like', protect, likePost)

module.exports = router;