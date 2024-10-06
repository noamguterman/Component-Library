import React from "react"
import { FaBuffer } from "react-icons/fa"

export default function Card({ children, icon = <FaBuffer /> }) {
    return (
        <div className="card">
            <div className="card--icon">{icon}</div>
            {children}
        </div>
    )
}