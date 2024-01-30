import React from "react";
const DataDisplay = ({data}) => {
return (
    <div className="main">
    {data.map((item) => (
        <div key={item.id} className = "sam">
            <p>Id: {item.id}</p>
            <p>Title: {item.title}</p>
            <p>Body: {item.body}</p>
            </div>
    ))}
    </div>
)
}
export default DataDisplay