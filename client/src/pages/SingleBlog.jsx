import { useParams, Link } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import blogs from "../data/blogs";

import {
  HiOutlineClock,
  HiOutlineUser,
  HiOutlineArrowRight,
} from "react-icons/hi";

const SingleBlog = () => {

  const { slug } = useParams();

  const post = blogs.find((blog) => blog.slug === slug);

  const recentPosts = blogs.slice(0, 4);

  if (!post) {

    return (
      <MainLayout>

        <div className="py-40 text-center">

          <h1 className="text-5xl font-bold">
            Blog Not Found
          </h1>

        </div>

      </MainLayout>
    );
  }

  return (
    <MainLayout>

      {/* =========================================
          HERO
      ========================================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#ECFEFF] py-20 md:py-28">

        <div className="container-custom">

          <div className="max-w-4xl">

            <span className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold">

              {post.category}

            </span>

            <h1 className="text-4xl md:text-6xl font-bold font-outfit text-dark leading-tight mt-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mt-8 text-gray-500">

              <div className="flex items-center gap-2">

                <HiOutlineUser className="text-primary text-xl" />

                <span>{post.author}</span>

              </div>

              <div className="flex items-center gap-2">

                <HiOutlineClock className="text-primary text-xl" />

                <span>{post.date}</span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          BLOG CONTENT
      ========================================= */}

      <section className="py-16 md:py-24 bg-white">

        <div className="container-custom">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">

            {/* =========================================
                LEFT CONTENT
            ========================================= */}

            <div>

              {/* IMAGE */}

              <div className="overflow-hidden rounded-[32px] shadow-xl">

                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />

              </div>

              {/* CONTENT */}

              <div className="mt-10">

                <p className="text-lg leading-[2] text-gray-700 whitespace-pre-line">
                  {post.content}
                </p>

              </div>

              {/* TAGS */}

              <div className="flex flex-wrap gap-4 mt-12">

                <span className="px-5 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                  Digital Marketing
                </span>

                <span className="px-5 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                  SEO
                </span>

                <span className="px-5 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                  Web Development
                </span>

              </div>

            </div>

            {/* =========================================
                SIDEBAR
            ========================================= */}

            <aside className="space-y-8">

              {/* SEARCH */}

              <div className="bg-[#F8FAFC] border border-gray-100 rounded-[32px] p-8 shadow-sm">

                <h3 className="text-2xl font-bold text-dark mb-6">
                  Search
                </h3>

                <input
                  type="text"
                  placeholder="Search article..."
                  className="w-full h-[58px] rounded-2xl border border-gray-200 px-5 outline-none focus:border-primary"
                />

              </div>

              {/* RECENT POSTS */}

              <div className="bg-[#F8FAFC] border border-gray-100 rounded-[32px] p-8 shadow-sm">

                <h3 className="text-2xl font-bold text-dark mb-8">
                  Recent Posts
                </h3>

                <div className="space-y-6">

                  {recentPosts.map((item) => (

                    <Link
                      key={item.id}
                      to={`/blog/${item.slug}`}
                      className="flex gap-4 group"
                    >

                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 rounded-2xl object-cover"
                      />

                      <div>

                        <h4 className="font-bold text-dark leading-snug group-hover:text-primary transition line-clamp-2">
                          {item.title}
                        </h4>

                        <p className="text-sm text-gray-500 mt-2">
                          {item.date}
                        </p>

                      </div>

                    </Link>

                  ))}

                </div>

              </div>

              {/* CATEGORIES */}

              <div className="bg-[#F8FAFC] border border-gray-100 rounded-[32px] p-8 shadow-sm">

                <h3 className="text-2xl font-bold text-dark mb-8">
                  Categories
                </h3>

                <div className="space-y-4">

                  {[
                    "Web Development",
                    "SEO",
                    "Digital Marketing",
                    "AI Automation",
                    "Branding",
                  ].map((category, index) => (

                    <div
                      key={index}
                      className="flex items-center justify-between border-b border-gray-100 pb-4"
                    >

                      <span className="font-medium text-gray-700">
                        {category}
                      </span>

                      <span className="text-primary font-semibold">
                        12
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              {/* CTA */}

              <div className="bg-primary rounded-[32px] p-8 text-white shadow-xl">

                <h3 className="text-3xl font-bold leading-snug">
                  Need Help Growing Your Business?
                </h3>

                <p className="mt-5 text-white/80 leading-relaxed">
                  Let’s create high-converting digital experiences together.
                </p>

                <button className="mt-8 bg-white text-primary px-7 py-4 rounded-full font-semibold flex items-center gap-3 hover:gap-5 transition-all duration-300">

                  Contact Us

                  <HiOutlineArrowRight className="text-xl" />

                </button>

              </div>

            </aside>

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default SingleBlog;