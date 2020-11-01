import React from "react"

function TodoItem(props) {
    return (
        <div className="elem-container">
            <input type="checkbox"
                checked={props.item.completed}
                onChange={(e) => props.handleChange(e, props.item.id)}
            />
            <span className="span-container">{props.item.text}</span>
        </div>
    )
}

export default TodoItem