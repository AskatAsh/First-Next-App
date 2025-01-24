import { notFound } from "next/navigation";

export default async function BlogPost({params}) {
    const {id} = params;

    if(id > 100){
        notFound();
    }

    const fetchBlogs = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    
        if (!res.ok) {
          throw new Error("Failed to fetch blog posts.");
        }
    
        const data = await res.json();
        return data;
      };
      const blogPost = await fetchBlogs();
  return (
    <div className="my-6 space-y-4 max-w-xl mx-auto w-11/12 border border-gray-900 rounded-md p-4">
        <h1 className="text-2xl font-semibold">{blogPost.title}</h1>
        <p>{blogPost.body}</p>
    </div>
  )
}
