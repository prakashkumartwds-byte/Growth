import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

import {
  HiOutlineArrowRight,
  HiOutlineClock,
  HiOutlineUser,
} from "react-icons/hi";
import blogs from "../data/blogs";

const Blog = () => {
  return (
    <MainLayout>

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#ECFEFF] py-20 md:py-28">

        <div className="container-custom">

          <div className="max-w-4xl mx-auto text-center">

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">

              <span className="w-2.5 h-2.5 rounded-full bg-primary" />

              <p className="text-primary font-semibold uppercase tracking-[3px] text-xs md:text-sm">
                Latest Articles
              </p>

            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-outfit text-dark leading-tight mt-8">
              Our
              <span className="text-primary"> Blog</span>
            </h1>

            <p className="paragraph mt-7 text-lg md:text-xl max-w-3xl mx-auto">
              Explore insights, guides, SEO strategies, web development
              trends and digital marketing knowledge from our experts.
            </p>

          </div>

        </div>

      </section>

      {/* BLOG GRID */}

      <section className="py-16 md:py-24 bg-white">

        <div className="container-custom">

          {/* TOP */}

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">

            <div>

              <p className="text-primary font-semibold uppercase tracking-[4px] text-sm">
                Recent Blogs
              </p>

              <h2 className="heading-lg mt-4">
                Latest Insights & Articles
              </h2>

            </div>

            <p className="paragraph max-w-2xl">
              Stay updated with modern digital trends, marketing
              strategies, AI tools, branding tips and business growth
              solutions.
            </p>

          </div>

          {/* GRID */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {blogs.map((post, index) => (

              <div
                key={index}
                className="group bg-white rounded-[32px] overflow-hidden border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,194,168,0.18)] transition-all duration-500 hover:-translate-y-2"
              >

                {/* IMAGE */}

                <div className="relative overflow-hidden">

                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[260px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  {/* CATEGORY */}

                  <div className="absolute top-5 left-5">

                    <span className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {post.category}
                    </span>

                  </div>

                </div>

                {/* CONTENT */}

                <div className="p-7">

                  {/* META */}

                  <div className="flex items-center gap-5 text-gray-500 text-sm">

                    <div className="flex items-center gap-2">

                      <HiOutlineUser />

                      <span>{post.author}</span>

                    </div>

                    <div className="flex items-center gap-2">

                      <HiOutlineClock />

                      <span>{post.date}</span>

                    </div>

                  </div>

                  {/* TITLE */}

                  <h3 className="text-3xl font-bold text-dark font-outfit mt-5 leading-snug group-hover:text-primary transition">
                    {post.title}
                  </h3>

                  {/* DESC */}

                  <p className="paragraph mt-5">
                    {post.description}
                  </p>

                  {/* BUTTON */}

                  <Link to={`/blog/${post.slug}`} className="mt-7 flex items-center gap-3 text-primary font-semibold text-lg group-hover:gap-5 transition-all duration-300">

                    Read More

                    <HiOutlineArrowRight className="text-2xl" />

                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-20 bg-[#0F172A] relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,194,168,0.25),transparent_40%)]" />

        <div className="container-custom relative z-10">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-4xl md:text-6xl font-bold font-outfit text-white leading-tight">
              Want To Grow Your
              <span className="text-primary"> Business Online?</span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl mt-7 leading-relaxed">
              Let’s create powerful digital strategies, SEO systems and
              high-converting websites for your brand.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">

              <button className="gradient-btn">
                Start Your Project
              </button>

              <button className="outline-btn border-white text-white hover:bg-white hover:text-dark">
                Free Consultation
              </button>

            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  );
};

export default Blog;