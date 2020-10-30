import React from "react"

function TodoItem(props) {
    console.log(props)
    return (
        <div className="elem-container">
            <input type="checkbox"
                checked={props.completed}
            />
            <span className="span-container">{props.text}</span>
        </div>
    )
}

export default TodoItem