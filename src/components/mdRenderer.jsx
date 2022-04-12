import React, { useState, useRef } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

export default function mdRenderer() {
    const AreaRef = useRef()
    const MdRef = useRef()
    const [text, setText] = useState('')

    async function _EvHandler() {
        const text = AreaRef.current.value
        // console.log(text)
        await axios.post("https://api.github.com/markdown", {
            text, mode: "gfm"
        })
            .then((res) => {
                setText(res.data)
                MdRef.current.innerHTML = res.data
            })
    }

    return (<div className='my-5'>
        <h3 className='text-secondary'>Text and Markdown  Rendering</h3>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Text</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="20" ref={AreaRef}></textarea>
        </div>
        <button type="button" className="btn btn-secondary" onClick={_EvHandler}><i className="bi bi-arrow-clockwise"></i></button>
        <h6 className='my-4'>Markdown</h6>
        <div className="my-3" ref={MdRef}>

        </div>
    </div>)

}

