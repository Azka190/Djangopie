import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import React from "react";
import Image from "next/image";

function page() {
  return (
    <>
      <div className="text-white ">
        <Hero
          text="Our Work"
          textP="Explore our portfolio to see how we turn visionary ideas into powerful digital platforms."
        />

        <div className="mx-24">
          <div>
            <h1 className="lg:text-5xl md:text-2xl sm:text-4xl md:text-[40px] text-[30px]  font-semibold text-center leading-[1.1] -mt-20">
              Bringing <span className="gradient-text">Concepts</span> to Life,
              One <span className="gradient-text">Website </span>at a Time.
            </h1>
          </div>
          <div className="md:flex md:mt-20 gap-7">
            <p className="md:w-1/2 mb-8 mt-[26px] md:ml-[130px] sm:text-center sm:ml-2">
              At Django Pie, we create dynamic online platforms that empower
              businesses and engage users. From custom web designs to e-commerce
              solutions, here’s a look at some of our most exciting projects
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-1/2">
              <div className="bg-[#141414] rounded">
                <h3 className="p-4 text-center">
                  <span className="gradient-text font-semibold text-xl">
                    50+ Satisfied clients
                  </span>
                  <br />
                  who trust us to bring their digital visions to life
                </h3>
              </div>
              <div className="bg-[#141414] rounded">
                <h3 className="p-4 text-center">
                  <span className="gradient-text font-semibold text-xl">
                    60+ innovative
                  </span>
                  <br />
                  web design and development projects
                </h3>
              </div>
              <div className="bg-[#141414] rounded">
                <h3 className="p-4 text-center">
                  <span className="gradient-text font-semibold text-xl">
                    98% client
                  </span>
                  <br />
                  retention rate
                </h3>
              </div>
              <div className="bg-[#141414] rounded">
                <h3 className="p-4 text-center">
                  <span className="gradient-text font-semibold text-xl">
                    Projects completed
                  </span>
                  <br />
                  for clients in 10+ countries
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* card 1 section  */}
        <div className="flex md:flex-row flex-col gap-4 mt-24 md:mx-24 mx-4">
            <div className="border border-[#525252] rounded md:w-1/2">
                <Image width={835} height={695} src="/images/laptop.png" alt="" className="p-3" />
            </div>
            <div className="md:w-1/2 pl-7">
                <h2 className="gradient-text font-semibold pt-8 pb-3 text-4xl">TechNova Solutions</h2>
                <p className="text-[#4D4D4D]  pb-3">Corporate Website Development</p>
                <p className="text-[16px] pb-7 pr-8">Django Pie designed and developed a fully responsive website with a clean, intuitive interface that seamlessly blends professionalism with user engagement. By integrating a user-friendly CMS, the TechNova team can now easily manage content updates, including new blog posts, case studies, and service descriptions.</p>
                <p className="text-[16px] pb-7 pr-8">We focused on creating a streamlined layout that balances text-heavy sections with high-quality visuals to keep users engaged without overwhelming them. The site is optimized for mobile, ensuring it looks and functions perfectly on any device. Additionally, we implemented performance optimization strategies to enhance loading speed and user experience.</p>
                <p className="text-[16px] pb-7">Results</p>
                <p className="text-[16px] pb-7 pr-8">Since the launch of their new website, TechNova Solutions has experienced a 30% increase in site traffic, with improved user engagement and a higher conversion rate for potential leads. The redesigned website has become a key asset in their marketing strategy, effectively showcasing their expertise and leading to new client acquisitions. Additionally, the optimized site speed and improved SEO have significantly boosted their online presence.</p>
            </div>
        </div>

        {/* card 2 section  */}
        <div className="bg-[#1E1E1E] w-full ">
        <div className="flex md:flex-row flex-col gap-4 mt-24 md:mx-24 mx-4 py-20 ">
            <div className="md:w-1/2 pl-7">
                <h2 className="gradient-text font-semibold pt-8 pb-3 text-4xl">FitnessFusion</h2>
                <p className="text-[#4D4D4D]  pb-3">Fitness App Landing Page</p>
                <p className="text-[16px] pb-7 pr-8">Django Pie developed a fully integrated website and mobile app that focuses on user engagement and ease of use. Our design prioritized simplicity without sacrificing features, creating a vibrant, community-oriented interface where users can easily find their workouts, track their fitness goals, and connect with virtual coaches. The mobile-first design ensures users can seamlessly transition from web to app, accessing their personalized fitness plans wherever they go.</p>
                <p className="text-[16px] pb-7 pr-8">Since the launch of FitnessFusion’s new website and app, the brand has seen an impressive 40% increase in new user sign-ups, with a significant boost in user engagement and workout completion rates. The seamless integration of personalized workout plans and virtual coaching has led to a 25% rise in customer retention, as users find more value in their fitness journey through the app.</p>
                <p className="text-[16px] pb-7">Results</p>
                <p className="text-[16px] pb-7 pr-8">We also incorporated interactive features such as workout video streaming, progress tracking, and push notifications to encourage users to stay on top of their fitness routines. The platform’s intuitive design offers customized workout and nutrition plans based on each user’s fitness level, goals, and preferences, creating a highly personalized experience.</p>
            </div>
            <div className="border border-[#525252] rounded W-1/2">
                <Image width={835} height={695} src="/images/laptop2.png" alt="" className="p-3" />
            </div>
        </div>
        </div>

        {/* CARD 3  */}

        <div className="flex flex-col md:flex-row gap-4 mt-12 mx-4 md:mt-24 md:mx-24">
  <div className="border border-[#525252] rounded w-full md:w-1/2">
    <Image  width={800} height={450} src="/images/laptop.png" alt="GourmetGrill Preview" className="p-3 w-full h-auto" />
  </div>
  <div className="w-full md:w-1/2 md:pl-7">
    <h2 className="gradient-text font-semibold pt-6 md:pt-8 pb-2 md:pb-3 text-3xl md:text-4xl">GourmetGrill</h2>
    <p className="text-[#4D4D4D] pb-2 md:pb-3">E-commerce Development</p>
    <p className="text-[16px] pb-6 md:pb-7 pr-4 md:pr-8">Django Pie developed a mobile-first, fully responsive e-commerce website that allows users to browse GourmetGrills diverse range of premium dishes and place orders effortlessly. Our design focused on creating an inviting and visually rich interface, where the food takes center stage through high-quality imagery and carefully crafted product descriptions.</p>
    <p className="text-[16px] pb-6 md:pb-7 pr-4 md:pr-8">We integrated secure payment gateways, a real-time order tracking system, and custom inventory management features to streamline the ordering process from start to finish. The checkout process was designed to be as smooth as possible, with minimal friction to reduce cart abandonment and encourage repeat customers.</p>
    <p className="text-[16px] font-semibold pb-4 md:pb-7">Results</p>
    <p className="text-[16px] pb-4 md:pb-7 pr-4 md:pr-8">After launching the e-commerce website, GourmetGrill experienced a significant increase in online sales, with a 50% rise in orders within the first month. Customers praised the platforms ease of use and the overall shopping experience, with many highlighting the real-time order tracking as a standout feature. The enhanced mobile experience also contributed to a surge in mobile orders, making up a large portion of GourmetGrills customer base.</p>
  </div>
</div>



        {/* gallery section   */}

        <div>
            <div className="flex justify-center mt-20">
                <Image width={900} height={695} src="/images/Placeholder1.png" alt="h" />
            </div>
            <div className="flex gap-7 mt-7 justify-center mb-4">
                <div>
                <Image width={835} height={495} src="/images/Placeholder2.png" alt="h" className="" />
                </div>
                <div>
                <Image width={835} height={695} src="/images/Placeholder3.png" alt="h" />
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
