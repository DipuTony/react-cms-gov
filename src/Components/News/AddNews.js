import React from 'react';
import TextEditor from './TextEditor'

const AddNews = () => {
    return (
        <>
            <div className='w-2/3'>
                <form>
                    <label className="block">
                        <span className="block text-lg text-slate-700">Header</span>
                        <input type="text" className="mt-1 block w-full px-5 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 " />
                    </label>
                    {/* <label className="block">
                        <span className="block text-lg text-slate-700">Header</span>
                        <input type="text" className="mt-1 block w-full px-5 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 " />
                    </label> */}
                    <label className="block">
                        <span className="block text-lg text-slate-700">Containtes</span>
                        <TextEditor />
                    </label>
                    <div className='flex justify-end'>
                    <button className="h-10 px-5 mt-2 text-green-100 bg-green-700 rounded-lg hover:bg-green-800">Success</button>
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