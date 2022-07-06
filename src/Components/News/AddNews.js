import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from "jodit-react";
import axios from 'axios';
import { format } from 'date-fns'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//This is for text editor
const config = {
    buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
};


const AddNews = ({ title, ulbid, ulblabel }) => {  //Title Comes From Diffrent Master Pages using Props via tabs.js
    const toastMsg = (e) => toast(e);
    const editor = useRef(null);

    const [header, setHeader] = useState("");
    const [body, setBody] = useState();
    const [archive, setArchive] = useState(0);
    const dateNow = format(new Date(), 'do MMMM Y')


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Form Submitted-,Header Value is", header)
        console.log("Form Submitted-,BODY Value is", editor.current.value)

        axios({
            method: 'post',
            url: `http://localhost:8000/${title}`,
            data: {
                header: header,
                news: editor.current.value,
                date: dateNow,
                isArchived: Number(archive), // 1 = Yes ,0 = False -- Dafault No -- refer setArchive
                ulbid: Number(ulbid)
            }
        }).then(
            toastMsg('Data Added Successfully')
        );
    }

    return (
        <>
            <div className='w-2/3'>
                <form>
                    <label className="block">
                        <span className="block text-m my-2 text-slate-700">Add {`${title}`} Header {ulblabel ? ulblabel : "SELECT ULB"}</span>
                        <input type="text" onChange={(e) => setHeader(e.target.value)} className="mt-1 block w-full px-5 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 " />
                    </label>
                    <label className="block">
                        <span className="block text-m my-2 text-slate-700">Add {`${title}`} Body</span>
                        <JoditEditor
                            ref={editor}
                            value={body}
                            config={config}
                            tabIndex={1}
                            //   onBlur={(newContent) => getValue(newContent)}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </label>
                    <label className="block">
                        <span className="block text-m my-2 text-slate-700">Add This {`${title}`} in Archive ?
                            <input onChange={(e) => setArchive(e.target.value)} value={1} className='ml-2' type="checkbox" />
                            <span className='ml-1'>Yes</span> <small className='italic'>(Default No)</small>
                        </span>
                    </label>
                    <div className='flex justify-end'>
                        <button
                            onClick={handleSubmit}
                            className="h-10 px-3 mt-2 bg-sky-200 py-1 rounded-lg shadow-lg hover:shadow-xl hover:bg-sky-800 hover:text-white text-black">
                            Add {`${title}`}</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddNews;


/*
Export To -
1. Tabs.js
*/