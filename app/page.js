import Link from "next/link";

export const metadata = {
  title: 'Home Page',
  description: 'This is the Home page where you can see blog posts.',
};

export default async function Home() {
  const fetchBlogs = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!res.ok) {
      throw new Error("Failed to fetch blog posts.");
    }

    const data = await res.json();
    return data;
  };
  const blogs = await fetchBlogs();
  
  return (
    <main className="mt-10">
      <div className="text-4xl font-semibold border-b border-gray-700 pb-3 ">
        Welcome to Blog View
      </div>

      <ul className="my-6 flex flex-wrap gap-6">
        {blogs.map((blog) => (
          <li key={blog.id} className="hover:text-blue-500 border rounded-full px-4 py-1">
            <Link href={`/blogs/${blog.id}`}>{blog.id}. {blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
