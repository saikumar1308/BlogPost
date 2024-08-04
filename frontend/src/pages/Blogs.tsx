import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { Spinner } from "../components/Spinner";
import { useBlogs } from "../hooks";

export function Blogs() {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div>
            <Appbar />
            <div className="h-screen flex flex-col justify-center">
                <div className="flex justify-center">
                <Spinner />
                </div>
            </div>
        </div>
    }

    return <div>
        <Appbar />
        <div className=" flex justify-center">
            <div className=" max-w-xl">
                {blogs.map(blog => <BlogCard
                    id={blog.id}
                    authorName={blog.author.name || "Unknown"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"14-07-2024"} 
                />)}
            </div>
        </div>

    </div>
}