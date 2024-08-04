import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export function Publish() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    return <div>
        <Appbar />

        <div className="flex justify-center w-full">
            <div className="max-w-screen-lg w-full">
                <textarea rows={1} onChange={(e) => { setTitle(e.target.value) }} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  focus:ring-blue-500 focus:border-blue-500 " placeholder="Title"></textarea>
                <textarea rows={6} onChange={(e) => { setDescription(e.target.value) }} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your story here..."></textarea>
                <div className="flex justify-center">
                    <button onClick={ async () => {
                        const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                            title,
                            content: description
                        },{
                            headers: {
                                Authorization: localStorage.getItem("token")
                            }
                        });
                        navigate(`/blog/${res.data.id}`)
                    }} type="button" className="m-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ">Publish Post</button>

                </div>
            </div>
        </div>

    </div>
}