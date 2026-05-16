import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

const Contact = () => {

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    phone: "",
    service: "",

  });

  /* =========================================
      HANDLE CHANGE
  ========================================= */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  /* =========================================
      HANDLE SUBMIT
  ========================================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(

        "http://localhost:5000/api/contact",

        {

          method: "POST",

          headers: {

            "Content-Type": "application/json",

          },

          body: JSON.stringify(formData),

        }

      );

      const data = await response.json();

      alert(data.message);

      setFormData({

        name: "",
        email: "",
        phone: "",
        service: "",

      });

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    }

  };

  return (

    <MainLayout>

      <section className="py-16 md:py-24 bg-[#F8FAFC]">

        <div className="container-custom">

          {/* TOP */}

          <div className="text-center max-w-3xl mx-auto">

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/10">

              <span className="w-2.5 h-2.5 rounded-full bg-primary" />

              <p className="text-primary font-semibold uppercase tracking-[3px] text-xs md:text-sm">
                Contact Us
              </p>

            </div>

            <h2 className="text-4xl md:text-6xl font-bold font-outfit text-dark mt-7">
              Let’s Grow Your Business
            </h2>

            <p className="paragraph mt-6 text-base md:text-lg">
              Send your requirements and our experts will contact you shortly.
            </p>

          </div>

          {/* CONTACT BOX */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">

            {/* LEFT */}

            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-lg border border-gray-100">

              <h3 className="text-3xl md:text-4xl font-bold font-outfit text-dark">
                Get In Touch
              </h3>

              <p className="paragraph mt-5">
                We help businesses with premium websites,
                SEO, digital marketing and AI automation.
              </p>

              {/* INFO */}

              <div className="space-y-6 mt-10">

                {/* ADDRESS */}

                <div className="flex items-start gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl">

                    📍

                  </div>

                  <div>

                    <h4 className="text-xl font-semibold text-dark">
                      Office Address
                    </h4>

                    <p className="paragraph mt-2">
                      Noida & Moradabad,
                      Uttar Pradesh, India
                    </p>

                  </div>

                </div>

                {/* PHONE */}

                <div className="flex items-start gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl">

                    📞

                  </div>

                  <div>

                    <h4 className="text-xl font-semibold text-dark">
                      Call Us
                    </h4>

                    <p className="paragraph mt-2">
                      +91 9958938205
                    </p>

                  </div>

                </div>

                {/* EMAIL */}

                <div className="flex items-start gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl">

                    ✉️

                  </div>

                  <div>

                    <h4 className="text-xl font-semibold text-dark">
                      Email Address
                    </h4>

                    <p className="paragraph mt-2">
                      demo@growthgarage.in
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-lg border border-gray-100">

              <h3 className="text-3xl md:text-4xl font-bold font-outfit text-dark">
                Send Message
              </h3>

              <p className="paragraph mt-5">
                Fill the form and our team will contact you shortly.
              </p>

              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="space-y-5 mt-10"
              >

                {/* NAME */}

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-[60px] rounded-2xl border border-gray-200 px-6 outline-none focus:border-primary"
                  required
                />

                {/* EMAIL */}

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-[60px] rounded-2xl border border-gray-200 px-6 outline-none focus:border-primary"
                  required
                />

                {/* PHONE */}

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-[60px] rounded-2xl border border-gray-200 px-6 outline-none focus:border-primary"
                  required
                />

                {/* SERVICE */}

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full h-[60px] rounded-2xl border border-gray-200 px-6 outline-none focus:border-primary"
                  required
                >

                  <option value="">
                    Select Service
                  </option>

                  <option>
                    Web Development
                  </option>

                  <option>
                    SEO Optimization
                  </option>

                  <option>
                    Digital Marketing
                  </option>

                  <option>
                    AI Automation
                  </option>

                  <option>
                    Branding
                  </option>

                </select>

                {/* BUTTON */}

                <button
                  type="submit"
                  className="gradient-btn w-full justify-center py-4 text-lg"
                >

                  Submit Now →

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </MainLayout>

  );

};

export default Contact;