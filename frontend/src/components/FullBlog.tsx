import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export function FullBlog({ blog }: { blog: Blog }) {
    return <div>
        <Appbar />
        <div className=" grid grid-cols-3 p-12">
            <div className="flex flex-col  col-span-2 p-4">
                <div className="font-bold text-4xl">{blog.title}</div>
                <div className="pt-4">Posted on ....</div>
                <div className="text-lg">{blog.content}</div>
            </div>
            <div className="flex flex-col p-4">
                <div>Author</div>
                <div className="flex flex-row">
                    <div className="p-2">
                        <Avatar size="big"  name={blog.author.name || "Unknown"} />
                    </div>
                    <div className="pl-3">
                        <div className="font-bold text-xl">{blog.author.name || "Unknown"}</div>
                        <div>Discription</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}