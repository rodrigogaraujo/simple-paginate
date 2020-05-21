import React from "react";

import loadGif from "../../assets/load.gif";

interface Posts {
    id: number;
    title: string;
    body: string;
}

interface Props {
    posts: Posts[];
    loading: boolean;
}

const Posts: React.FC<Props> = ({ posts, loading }) => {
    if (loading) {
        return <img src={loadGif} alt="loading" />;
    }
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
};

export default Posts;
