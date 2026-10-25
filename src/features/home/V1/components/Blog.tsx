import { BookOpen, Clock, Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    excerpt:
      "Learn the fundamentals of web development and start your journey as a developer.",
    content: `
      Are you interested in becoming a web developer? This comprehensive guide will walk you through
      the essential concepts, tools, and technologies you need to know to get started in web development.
      From HTML and CSS basics to modern JavaScript frameworks, we'll cover everything you need to begin
      your journey.
    `,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    date: "Mar 16, 2024",
    readTime: "5 min read",
    author: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    },
    categories: ["Web Development", "Beginners"],
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    excerpt:
      "Deep dive into React Hooks and how they can improve your React applications.",
    content: `
      React Hooks have revolutionized how we write React components. In this article, we'll explore
      the most commonly used hooks like useState, useEffect, and useContext, along with custom hooks
      and best practices for managing state and side effects in your applications.
    `,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    author: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    },
    categories: ["React", "JavaScript"],
    tags: ["React Hooks", "Frontend", "Web Development"],
  },
  {
    id: 3,
    title: "The Power of TypeScript",
    excerpt:
      "Discover how TypeScript can make your JavaScript code more robust and maintainable.",
    content: `
      TypeScript has become an essential tool for building large-scale JavaScript applications.
      Learn about static typing, interfaces, generics, and how TypeScript can help catch errors
      before they make it to production. We'll also cover integration with popular frameworks and tools.
    `,
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800",
    date: "Mar 14, 2024",
    readTime: "6 min read",
    author: {
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400",
    },
    categories: ["TypeScript", "JavaScript"],
    tags: ["TypeScript", "Static Typing", "Development"],
  },
];

function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center" data-aos="fade-up">
        <div className="flex items-center justify-center space-x-2">
          <BookOpen className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
        </div>
        <p className="mt-4 text-xl text-gray-500">
          Discover our latest articles and insights
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={post.id * 100}
          >
            <div className="relative">
              <img
                className="h-48 w-full object-cover"
                src={post.image}
                alt=""
              />
              <div className="absolute top-4 right-4 space-x-2">
                {post.categories.map((category) => (
                  <span
                    key={category}
                    className="inline-block bg-white bg-opacity-90 text-blue-600 text-sm px-3 py-1 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1 p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {post.author.name}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <time dateTime="2024-03-16">{post.date}</time>
                    <span className="mx-2">·</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="space-x-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <button className="inline-flex items-center text-blue-600 hover:text-blue-500 transition-colors">
                Read more
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;
