import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from "jodit-react";
const config = {
    buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
};

export default function TextEditor({ initialValue, getValue }) {
    const editor = useRef(null);

    console.log("I Want this ",getValue)

    return (
        <div>
            <JoditEditor
                ref={editor}
                value={initialValue}
                config={config}
                tabIndex={1}
                //   onBlur={(newContent) => getValue(newContent)}
                onChange={(newContent) => getValue(newContent)}
            />
        </div>
    )
}


/*
Export To -
NOt Used
*/