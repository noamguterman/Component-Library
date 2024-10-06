import React from "react"
import { FaCheckCircle } from "react-icons/fa"
import { IoIosWarning } from "react-icons/io"
import { IoIosCloseCircle } from "react-icons/io"
import { FaInfoCircle } from "react-icons/fa"

export default function Banner({ children, status }) {
    let bannerIcon = ""
    let bannerText = ""
    
    if (status === "success") {
        bannerIcon = <FaCheckCircle />
        bannerText = "Congratulations!"
    } else if (status === "warning") {
        bannerIcon = <IoIosWarning />
        bannerText = "Attention"
    } else if (status === "error") {
        bannerIcon = <IoIosCloseCircle />
        bannerText = "There is a problem with your application"
    } else {
        bannerIcon = <FaInfoCircle />
        bannerText = "Update available"
    }
    
    return (
        <div className={`banner ${status}`}>
            <div className="banner--header">
                <span className={`banner--icon ${status}`}>{bannerIcon}</span>
                <span className={`banner--text ${status}`}>{bannerText}</span>
            </div>
            {children && <p className="banner--body">{children}</p>}
        </div>
    )
}