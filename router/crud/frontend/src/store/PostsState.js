import React, {createContext, useEffect, useState} from 'react';

const initialState = [];

export const PostContext = createContext(initialState);

export const PostsProvider = ({children}) => {
    const [posts, setPosts] = useState(initialState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        const response = await fetch("http://localhost:7777/posts", {method: "GET"});
        setPosts(await response.json());
        setLoading(false);
    }

    function addPost(post) {
        setLoading(true);
        fetch("http://localhost:7777/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        })
            .then(response => response.json())
            .then(data => {
                setPosts(prev => [...prev, data]);
                setLoading(false);
            });
    }

    async function editPost(post) {
        setLoading(true);
        const response = await fetch("http://localhost:7777/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });

        if (!response.ok) {
            console.log("Что-то пошло не так! Данные не сохранены!");
        } else {
            setPosts(prev => prev.map(p => {
                if(p.id === post.id) {
                    return post;
                }
                return p;
            }));
            setLoading(false);
        }
    }

    async function deletePost(id) {
        setLoading(true);
        const response = await fetch(`http://localhost:7777/posts/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            console.log("Что-то пошло не так! Данные не сохранены!");
        } else {
            setPosts(prev => prev.filter(p => p.id !== id));
            setLoading(false);
        }
    }

    return (
        <PostContext.Provider
            value={{
                posts,
                loading,
                addPost,
                editPost,
                deletePost
            }}
        >
            {children}
        </PostContext.Provider>
    );
};
