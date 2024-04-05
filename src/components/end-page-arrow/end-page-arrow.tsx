import { MouseEventHandler } from "react"
import "./end-page-arrow.css"

export default function EndPageArrow(props: { onClick?: MouseEventHandler }) {
    return (
        <>
            <div className="arrow arrow-first" onClick={props.onClick}></div>
            <div className="arrow arrow-second" onClick={props.onClick}></div>
        </>
    )
}