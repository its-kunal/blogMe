import React, { useEffect } from 'react'
import { useAuth } from '../authContext'
import * as bootstrap from 'bootstrap';


export default function toaster() {

    const { user, loading, flash, error, setFlash } = useAuth()

    function showToast() {
        let toastEl = document.getElementById('myToast');
        let toastEl1 = document.getElementById('myToast1');
        let toast = new bootstrap.Toast(toastEl, { autohide: false });
        let toast1 = new bootstrap.Toast(toastEl1, { autohide: false });
        toast.show();
        toast1.show();
    }

    useEffect(() => {
        if (flash) {
            setTimeout(() => {
                let flashNew = {
                    message: " ",
                    type: "primary"
                }
                setFlash(flashNew)
            }, 3000)
        }
    }, [flash])

    return (
        <>
            <div className="toast-container" style={{
                position: "absolute",
                top: "1rem",
                right: "1rem"
            }}>
                <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" id='myToast'>
                    <div className="toast-header">
                        <strong className="me-auto">Bootstrap</strong>
                        <small className="text-muted">just now</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        See? Just like this.
                    </div>
                </div>


            </div>

            <button type="button" className="btn btn-primary" id="showToast" onClick={showToast}>Show Toast</button>
        </>
    )
}
