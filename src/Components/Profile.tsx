import React from 'react';
import contentImg from "../assets/images/aesthetic-background-with-patterned-glass-texture.jpg";

export const Profile = ()=>{
    return(
        <div className="content">Main content
            <div>
                <img src={contentImg} alt="content image"/>
            </div>
            <div>
                ava+desc
            </div>
            <div>
                My posts
                <div>
                    New Post
                </div>
                <div>
                    Post1
                </div>
                <div>
                    Post2
                </div>
            </div>

        </div>

    )
}

