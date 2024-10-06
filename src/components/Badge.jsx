import React from "react"

export default function Badge({ children, shape, color }) {
    return (
        <div className={`badge ${shape} ${color}`}>
            {children}
        </div>
    )
}

// shape="round" for round badge
//color="red/yellow/green/blue/indigo/purple/pink">