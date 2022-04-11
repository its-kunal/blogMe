import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function mdRenderer() {
    const [prev, setPrev] = useState(false)

    return (
        <div className="card text-center">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <Link className={`nav-link ${!prev ? "" : "active"}`} aria-current="true" to="#">Text</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${prev ? "" : "active"}`} to="#">Preview</Link>
                    </li>
                </ul>
            </div>
            <div className="card-body">
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                    <label for="floatingTextarea2">Enter Markdown</label>
                </div>
            </div>
        </div>
    )
}
