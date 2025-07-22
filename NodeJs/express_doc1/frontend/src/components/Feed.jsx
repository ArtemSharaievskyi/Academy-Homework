import { useNavigate } from "react-router-dom";
import axios from 'axios';
import cls from './Feed.module.css'
import { useEffect, useState } from "react";

function Feed() {
    const [posts, setPosts] = useState([])

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization']
        navigate('./login');
    }




    const fetchPosts = () => {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:5000/api/posts', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            setPosts(res.data)
        })
    }

    const postLike = (id) => {
        axios.post(`http://localhost:5000/api/posts/${id}/like`).then(() => {
            fetchPosts()
        })
    }

    useEffect(() => {
        fetchPosts()
    }, [])



    useEffect(() => {
        console.log(posts);

    }, [posts])

    return (
        <div className={cls.container}>
            <div className={cls.header}>
                <div>Wilkomen</div>
                <button onClick={() => { logout() }}>Вийти</button>
            </div>
            <div className={cls.posts}>
                <div className={cls.addPost}>
                    <button onClick={() => { navigate('./addPost') }}>добавити пост</button>
                </div>

                {(posts.length !== 0) ? posts.map((el) => {
                    return (
                        <div className={cls.item}>
                            <div className={cls.text}>{el.content}</div>
                            <div className={cls.name}>{el.username}</div>
                            <div className={cls.likes}>likes:{el.like_count}</div>



                            <button className={cls.like} onClick={()=>{postLike(el.id)}}>like</button>
                        </div>
                    )
                }) : <div>нема постів</div>}

            </div>
        </div>
    );
}

export default Feed;