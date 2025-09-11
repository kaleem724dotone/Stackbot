import React from "react";
import { blogPosts } from "../../data/blogPost";

const FeaturedPostCard = ({ post }) => (
  <div className="flex bg-white rounded-xl max-w-full max-h-48 mx-auto my-16">
    <div className="w-1/2">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover rounded-l-xl"
      />
    </div>
    <div className="w-1/2 p-8 flex flex-col justify-center">
      <h2 className="text-xl font-bold mb-4">{post.title}</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">{post.description}</p>
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <img
          src={post.userAvatar}
          alt={post.userName}
          className="w-8 h-8 rounded-full"
        />
        <span>{post.userName}</span>
        <span>• {post.date}</span>
      </div>
    </div>
  </div>
);

const BlogPostCard = ({ post }) => (
  <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h4 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h4>
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <img src={post.userAvatar} alt={post.userName} className="w-6 h-6 rounded-full" />
        <span>{post.userName}</span>
        <span>• {post.date}</span>
        <span>• {post.time}</span>
      </div>
    </div>
  </div>
);

// export const BlogShowcase = ({
//   title,
//   posts = blogPosts,
//   filterType = "featured",
//   show = "yes" // default to "yes"
// }) => {
//   // If show is "no", render nothing
//   if (show === "no") return null;

//   const filteredPosts = posts.filter((p) => p.type === filterType);

//   if (filteredPosts.length === 0) {
//     return (
//       <section className="my-12">
//         <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
//         <p className="mt-4 text-gray-600">No posts to display in this section.</p>
//       </section>
//     );
//   }

//   const mainPost = filteredPosts[0];
//   const otherPosts = filteredPosts.slice(1);

//   return (
//     <section className="my-12">
//       <header className="mb-8 md:mb-12">
//         <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h2>
//       </header>

//       <main>
//         <FeaturedPostCard post={mainPost} />

//         {otherPosts.length > 0 && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {otherPosts.map((post) => (
//               <BlogPostCard key={post.id} post={post} />
//             ))}
//           </div>
//         )}
//       </main>
//     </section>
//   );
// };
export const BlogShowcase = ({
  title,
  posts = blogPosts,
  filterType = "featured",
  show = "yes" // controls FeaturedPostCard only
}) => {
  const filteredPosts = posts.filter((p) => p.type === filterType);

  if (filteredPosts.length === 0) {
    return (
      <section className="my-12">
        <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
        <p className="mt-4 text-gray-600">No posts to display in this section.</p>
      </section>
    );
  }

  const mainPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <section className="my-12">
      <header className="mb-8 md:mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h2>
      </header>

      <main>
        {/* Render FeaturedPostCard only if show === "yes" */}
        {show === "yes" && <FeaturedPostCard post={mainPost} />}

        {otherPosts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </main>
    </section>
  );
};
