import React from 'react'
import { AiOutlineDownload } from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import { TiContacts } from "react-icons/ti";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FinalSection = () => {
    const showEmail = () => {
        toast.info('Email at vg6796@srmist.edu.in', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    return (
        <>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <br />
            <div className='w-full flex justify-around text-sm'>
                <a href='https://drive.google.com/file/d/1h4v7lTHozBxVuLU67frM3yhgZWeGlaRZ/view?usp=sharing' target='_blank' rel="noreferrer" className='flex items-center p-2 rounded-md border-green-100 border-2'>
                    Download&nbsp;CV&nbsp;<AiOutlineDownload />
                </a>
                <button onClick={showEmail} className='flex items-center p-2 rounded-md border-green-100 border-2'>
                    Contact&nbsp;Me&nbsp;<TiContacts />
                </button>
                <a href='https://www.github.com/viralgupta/portfolio' target='_blank' rel="noreferrer" className='flex items-center p-2 rounded-md border-green-100 border-2'>
                    Fork&nbsp;This&nbsp;Repo&nbsp;<CgGitFork />
                </a>
            </div>
            <br />
        </>
    )
}

export default FinalSection