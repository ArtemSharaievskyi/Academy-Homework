const { pool } = require('../db');

const createPost = async (req, res) => {
    const { content } = req.body;
    const userId = req.user.id;

    try {
        const post = await pool.query('INSERT INTO posts (user_id, content) VALUES ($1, $2) RETURNING *', [userId, content])
        res.status(201).json(post.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message,
        })
    }

}

const getFeed = async (req, res) => {
    try {
        const posts = await pool.query(`
        SELECT p.*, 
                   u.username, 
                   (SELECT COUNT(*) FROM likes WHERE post_id = p.id) AS like_count
            FROM posts p 
            JOIN users u ON u.id = p.user_id
            ORDER BY p.created_at DESC
            LIMIT 20
        `);
        res.status(200).json(posts.rows);
    } catch (err) {
        res.status(500).json({
            error: err.message,
        })
    }
}

const likePost = async (req, res) => {
    const postId = req.params.id;
    const userId = req.user.id;

    try {
        const existing = await pool.query(
            'SELECT * FROM likes WHERE user_id = $1 AND post_id = $2', [userId, postId]
        )

        if (existing.rows.length) {
            await pool.query('DELETE FROM likes WHERE user_id = $1 AND post_id = $2', [userId, postId]);
            return res.status(200).json({ message: 'Unliked post' });
        }
        await pool.query('INSERT INTO likes (user_id, post_id) VALUES ($1, $2)', [userId, postId]);
        res.status(200).json({ message: 'Liked post' });
    } catch (err) {

        res.status(500).json({
            error: err.message,
        })
    }
}

module.exports = {
    createPost,
    getFeed,
    likePost
}