import { Link } from "react-router-dom";
import { Avatar } from "./BlogCard";

export function Appbar() {
    return <div className=" border-b flex justify-between px-10 py-3">
        <Link to={"/blogs"}>
            <div className="font-bold text-xl justify-center">Blog Post</div>
        </Link>

        <div>
            <Link to={"/publish"}>
            <button type="button" className="m-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ">Publish</button>
            </Link>
            <Avatar size="big" name="Blog Post" />
        </div>
    </div>
}