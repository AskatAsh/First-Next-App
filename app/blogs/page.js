import Link from "next/link";

export default async function Blogs() {
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
        Total Blog Posts: {blogs.length}
      </div>

      <ul className="my-6 ml-8">
        {blogs.map((blog, idx) => (
          <li key={idx} className="hover:text-blue-500 list-decimal my-2">
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
