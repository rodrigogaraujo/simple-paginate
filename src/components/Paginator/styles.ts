import styled from "styled-components";

export const Container = styled.div`
    span {
        background: blue;
        padding: 10px;
        text-decoration: none;
        color: white;
        border-radius: 5px;
        border: 1px solid blue;
        transition: all 0.3s;
        margin: 0 8px;
    }
    a {
        background: blue;
        padding: 10px;
        text-decoration: none;
        color: white;
        border-radius: 5px;
        border: 1px solid blue;
        transition: all 0.3s;

        &:hover {
            background: white;
            color: blue;
        }
    }

    a + a {
        margin-left: 8px;
    }
`;
