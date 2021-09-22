import React from "react";
import { Container } from "react-bootstrap";
import PostShort from "./PostShort/PostShort";

import "./Posts.css";

function Posts() {
    return(
        <div className="Posts">
            <Container>
                <h1 class="posts-title"><strong>Interviews</strong></h1>
                <div class="bottom-border"></div>
            </Container>
            <Container>
                <PostShort></PostShort>
                <PostShort></PostShort>
                <PostShort></PostShort>
            </Container>
        </div>
    );
}

export default Posts;