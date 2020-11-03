import React from "react"

function TodoItem(props) {

    const completedStyles = {
        fontStyle: "italic",
        color: "gray",
        textDecoration: "line-through"
    }

    return (
        <div className="elem-container">
            <input type="checkbox"
                checked={props.item.completed}
                onChange={(e) => props.handleChange(e, props.item.id)}
            />
            <span style = { props.item.completed ? completedStyles : null } className="span-container">{props.item.text}</span>
        </div>
    )
}

export default TodoItem