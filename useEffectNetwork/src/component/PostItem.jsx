import React from "react";

const PostItem = ({post}) =>{
return (
    <div
    style={{border: "1px solid black", margin: "10px"}}>
        {post.map((item) =>(
            <div key={item.id}>
                <p>Id: {item.id}</p>
                <p>Title: {item.title}</p>
                <p>Body: {item.body}</p>
            </div>
        ))}
    </div>
)
}
export default PostItem;