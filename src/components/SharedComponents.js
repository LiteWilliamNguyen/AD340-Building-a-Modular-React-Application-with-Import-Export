import React from "react";

export function Button(props) {
    return (
        <button className="btn btn-primary" onClick={props.onClick}>
            {props.text}
        </button>
    );
}