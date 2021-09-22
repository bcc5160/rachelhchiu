import React from "react";
import { GrClock } from "@react-icons/all-files/gr/GrClock";
import { GrFolder } from "@react-icons/all-files/gr/GrFolder";
import { GrTag } from "@react-icons/all-files/gr/GrTag";

import "./PostShort.css";

function PostShort() {
    return (
        <div className="PostShort">
            <div className="post-title-con">
            <h3 class="post-title">Post Title</h3>
            </div>
            <div className="post-body">
                <p>lalalaalall</p>
            </div>
            <div className="post-tags">
                <div className="post-tag"><GrClock className="icon"/>September 1, 2012</div>
                <div className="post-tag"><GrFolder className="icon"/>Interviews</div>
                <div className="post-tag"><GrTag className="icon"/>Tech</div>
            </div>
            
        </div>
    );

}

export default PostShort;