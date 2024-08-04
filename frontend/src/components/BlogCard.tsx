import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: string;
}

export function BlogCard({
    id,
    authorName,
    title,
    content,
    publishedDate,
}:BlogCardProps) {
    return <Link to={`/blog/${id}`}>
    <div className="p-4 border-b">
        <div className="flex">
            <div className=""><Avatar name={authorName}/></div>
            <div className="font-light text-sm pl-2 flex justify-center flex-col">{authorName} </div> 
            <div className="pl-2">&#x2022;</div>
            <div className="font-light text-sm text-slate-400 pl-2 flex justify-center flex-col">{publishedDate}</div>
        </div>
        <div className="text-xl font-semibold pt-2">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0,100)+"..."}
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
            {`${Math.ceil(content.length/100)} minute(s) read.`}
        </div>
    </div></Link>
}

export function Avatar({name, size = "small"}:{name:string, size?: "small" | "big"}) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-300 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"} `}>
        <span className={`${size === "small" ? "text-xs" : "text-md"} font-xs text-gray-600 `}>{name[0]}</span>
    </div>
    
}