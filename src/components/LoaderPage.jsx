import React from 'react'

export default function LoaderPage() {
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{
            height: '100vh',
            width: '100vw'
        }}>
            <div className="spinner-border" role="status" style={{
                width: "3rem", height: "3rem"
            }}>
                {/* <span class="sr-only"></span> */}
            </div>
        </div>
    )
}
