import React, { useState, useEffect } from "react";
import axios from "axios";

import Posts from "../../components/Posts";
import Paginator from "../../components/Paginator";

const Home: React.FC = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    const indexLastPost = currentPage * postPerPage;
    const indexFirstPost = indexLastPost - postPerPage;
    const currentPosts = posts.slice(indexFirstPost, indexLastPost);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/posts",
            );
            setPosts(res.data);
            setLoading(false);
        };
        fetchPosts();
    }, [setPosts]);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <h1>Hello</h1>
            <Posts posts={currentPosts} loading={loading} />
            <Paginator
                itensPerPage={postPerPage}
                totalItens={posts.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </>
    );
};

export default Home;
