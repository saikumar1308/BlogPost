import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@saikumar1308/medium-common";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Auth({ type }: { type: "signup" | "signin" }) {
    const [postInputs, setPostInputs] = useState<SignupInput>({
        username: "",
        password: "",
        name: "",

    })
    const navigate = useNavigate();

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type=="signup"?"signup":"signin"}`,postInputs);
            const jwt = response.data;
            localStorage.setItem("token",jwt);
            navigate("/blogs")
        } catch (error) {
            alert("Error while signing up");
        }
    }

    return <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center ">
            <div className="">
                <div className="px-10">
                    <div className="text-2xl font-bold">{type === "signup" ? "Create an account" : "Account Login"}</div>
                    <div className="text-sm font-light">{type === "signup" ? "Already have an account?" : "Do not have an account?"}<Link to={type === "signup" ? "/signin" : "/signup"}><u className="pl-2">{type === "signup" ? "Login" : "Sign Up"}</u></Link></div>
                </div>
                <div className="">
                    <LabeledInput label="Username/Email" placeholder="x@example.com" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            username: e.target.value,
                        })
                    }} />
                    {type === "signup" ? <LabeledInput label="Name" placeholder="Enter you name" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value,
                        })
                    }} /> : null}
                    <LabeledInput label="Password" type={"password"} placeholder="******" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value,
                        })
                    }} />
                    <div>
                        <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign Up" : "Sign In"}</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

interface LabeledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabeledInput({ label, placeholder, onChange, type }: LabeledInputType) {
    return <div className="mb-6 mt-6">
        <label className="block mb-2 text-sm font-bold text-gray-900 ">{label}</label>
        <input onChange={onChange} type={type || "text"} placeholder={placeholder} id="default-input" className=" border border-gray-200 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-black-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>
}

// <div className="mb-6 mt-6">
//                         <label className="block mb-2 text-sm font-bold text-gray-900 ">Username</label>
//                         <input placeholder="Enter your username" type="text" id="default-input" className=" border border-gray-200 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-black-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
//                     </div>
//                     <div className="mb-6 mt-6">
//                         <label className="block mb-2 text-sm font-bold text-gray-900 ">Email</label>
//                         <input placeholder="x@example.com" type="text" id="default-input" className=" border border-gray-200 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-black-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
//                     </div>
//                     <div className="mb-6 mt-6">
//                         <label className="block mb-2 text-sm font-bold text-gray-900 ">Password</label>
//                         <input placeholder="****" type="text" id="default-input" className=" border border-gray-200 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-black-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
//                     </div>