import Button from "../components/Button";
import Footer from "../components/Footer";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      {/* Banner part */}
      <div className="flex justify-center items-center flex-col gap-10 h-screen relative ">
        <div className="absolute sm:top-24 -z-10">
          <Image src="/images/home_bg.png" width={835} height={695} alt="" />
        </div>
        <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-[40px] font-semibold text-white text-center leading-[1.1]">
          <span className="gradient-text">Transforming Ideas</span> into&nbsp;
          <span className="sm:inline hidden">
            <br />
          </span>
          digital masterpieces
        </h1>
        <p className="text-[#b2b2b2] xl:w-2/5 sm:w-2/3 w-4/5 text-center sm:!leading-normal sm:pb-8 pb-4 !leading-relaxed">
          Ready to elevate your digital presence? Contact us today for a free
          consultation and see how Django Pie can transform your vision into a
          stunning digital masterpiece.
        </p>
        <Button text="Let’s Talk" />
      </div>
      {/* completed task section */}
      <section className="w-11/12 flex justify-between items-center border-t border-[#525252] mx-auto lg:py-28 py-24 flex-wrap lg:gap-0 sm:gap-8 gap-10">
        <div className="flex items-center justify-between lg:w-1/2 sm:w-4/5 w-11/12 sm:gap-0 gap-8 flex-wrap lg:order-1 order-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-white xl:text-7xl text-5xl font-semibold">
              100+
            </h2>
            <p className="text-primary xl:text-2xl sm:text-xl text-lg">
              Project Delivered
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-white xl:text-7xl text-5xl font-semibold">
              5.0
            </h2>
            <p className="text-primary xl:text-2xl sm:text-xl text-lg">
              Rating Services
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-white xl:text-7xl text-5xl font-semibold">
              50+
            </h2>
            <p className="text-primary xl:text-2xl sm:text-xl text-lg">
              Happy Clients
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-end lg:order-2 order-1">
          <p className="xl:text-xl sm:text-lg text-xl font-normal text-white xl:leading-loose leading-relaxed sm:tracking-wider text-justify xl:w-4/5 lg:w-11/12">
            Our tailored and client-focused solutions creates experiences that
            keep our clients coming back for more.
          </p>
        </div>
      </section>
      {/* About section */}
      <section className="py-20 xl:w-4/5 w-11/12 mx-auto">
        <div className="about-card flex items-start sm:border-t sm:border-l sm:border-r-0 sm:border-b-0 border-r border-b border-primary justify-between rounded-[4rem] sm:p-20 p-8 sm:pt-24 pt-16 flex-wrap lg:gap-0 gap-14">
          <div className="flex flex-col items-start xl:w-2/5 lg:w-1/2 w-full">
            <h2 className="text-white xl:text-[80px] sm:text-6xl text-5xl pb-6 font-semibold tracking-tight">
              About Us
            </h2>
            <h4 className="text-white font-semibold xl:text-5xl sm:text-4xl text-3xl sm:pb-7 pb-5 font-sans tracking-tight xl:leading-[1.15] leading-snug">
              International
              <span className="gradient-text">
                {" "}
                Web Development and Design{" "}
              </span>
              Agency with a team of creative professionals
            </h4>
            <p className="text-white text-lg text-opacity-90 xl:pb-11 sm:pb-16 pb-10 sm:leading-relaxed leading-loose w-11/12">
              Django Pie crafts tailored web solutions that blend creativity and
              innovation to enhance your online presence and drive business
              growth.
            </p>
            <Button text="See More" />
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/images/about.png"
              className="rounded-br-[11rem] rounded-tr-md rounded-bl-md rounded-tl-md"
              width={500}
              height={500}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Services Section created by Azka Rehman */}
      <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/images/servicesBack.png')" }}>
          <div className="text-white mx-6 sm:mx-12 lg:mx-24">
            <p className="text-sm text-center my-6 sm:my-10">What we do</p>
            <div className="p-6 sm:p-10">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2">
                  <h2 className="text-white xl:text-[80px] sm:text-6xl text-4xl pb-4 sm:pb-6 font-semibold tracking-tight">
                    Our Services
                  </h2>
                  <p className="text-white text-lg text-opacity-90 xl:pb-11 sm:pb-16 pb-6 sm:leading-relaxed leading-loose w-full lg:w-11/12">
                    At Django Pie, our primary objective is to enhance the user experience. To achieve this, we provide exceptional web design and development services.
                  </p>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col sm:flex-row mt-8 lg:mt-0 lg:ml-28">
                  <div className="flex flex-col mb-4 sm:mb-0">
                    <button className="border border-white rounded-full flex px-3 py-1 mb-2 sm:mr-5">
                      <Image width={30} height={695} src="/images/3d_rotation.png" className="mr-2" alt="btn" />3D Design
                    </button>
                    <button className="border border-white rounded-full flex items-center px-5 py-1">
                      <Image width={30} height={695} src="/images/desktop_windows.png" className="mr-2"  alt="btn"/>Development
                    </button>
                  </div>
                  <div className="flex flex-col sm:ml-6">
                    <button className="border border-white rounded-full flex items-center px-3 py-1 mb-2">
                      <Image width={30} height={695} src="/images/category.png" className="mr-2" alt="btn"/>Design
                    </button>
                    <button className="border border-white rounded-full flex items-center px-3 py-1 sm:ml-14">
                      <Image width={30} height={695} src="/images/design_services.png" className="mr-2" alt="btn"/>Illustrator
                    </button>
                  </div>
                </div>
              </div>

              <div className="container mx-auto py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-9">
                  <div className="border border-[#525252] rounded p-4">
                    <div className="bg-[#141414] rounded p-8">
                      <Image width={80} height={695} src="/images/django.png" alt="" />
                      <h3 className="font-semibold pb-2 pt-20 text-2xl">Custom Web Development</h3>
                      <p className="pt-2">We build bespoke websites tailored to your business needs, ensuring high performance and unique features.</p>
                    </div>
                  </div>
          
                  <div className="border border-[#525252] rounded p-4">
                    <div className="bg-[#141414] rounded p-8 ">
                      <Image width={80} height={695} src="/images/html.png" alt="" />
                      <h3 className="font-semibold pb-2 pt-20 text-2xl">Web Design Solutions</h3>
                      <p className="mt-6">Transforming visions into stunning, user-friendly web designs that captivate and engage.</p>
                    </div>
                  </div>
                
                  <div className="border border-[#525252] rounded p-4">
                    <div className="bg-[#141414] rounded p-8">
                      <Image width={80} height={695} src="/images/figma.png" alt="" />
                      <h3 className="font-semibold pb-2 pt-20 text-2xl">UX UI Design</h3>
                      <p className="mt-6">We build bespoke websites tailored to your business needs, ensuring high performance and unique features.</p>
                    </div>
                  </div>
                
                  <div className="border border-[#525252] rounded p-4">
                    <div className="bg-[#141414] rounded p-8">
                      <Image width={80} height={695} src="/images/android.png" alt="" />
                      <h3 className="font-semibold pb-2 pt-20 text-2xl">Custom Web Development</h3>
                      <p>We build bespoke websites tailored to your business needs, ensuring high performance and unique features.</p>
                    </div>
                  </div>
                  <div className="border border-[#525252] rounded p-4">
                    <div className="bg-[#141414] rounded p-8">
                      <Image width={80} height={695} src="/images/django.png" alt="" />
                      <h3 className="font-semibold pb-2 pt-20 text-2xl">Custom Web Development</h3>
                      <p>We build bespoke websites tailored to your business needs, ensuring high performance and unique features.</p>
                    </div>
                  </div>
                  <div className="border border-[#525252] rounded p-4">
                    <div className="bg-[#141414] rounded p-8">
                      <Image width={80} height={695} src="/images/django.png" alt="" />
                      <h3 className="font-semibold pb-2 pt-20 text-2xl">Custom Web Development</h3>
                      <p>We build bespoke websites tailored to your business needs, ensuring high performance and unique features.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work Section created by Azka Rehman */}
        
        <div className="text-white mt-10 mx-24">
          <div className="md:flex md:gap-4 ">
            <h2 className="xl:text-[80px] sm:text-6xl text-4xl font-semibold tracking-tight whitespace-nowrap">
              Our Work
            </h2>
            <p className="md:ml-96 md:mt-0 mt-3   text-sm">
              Explore our diverse portfolio showcasing innovative web and mobile solutions tailored to elevate your brand. Each project reflects our commitment to excellence and creativity.
            </p>
          </div>
          <div className="md:flex md:bg-[#141414]  rounded-full md:px-6 mt-10">
            <button className="custom-btn md:py-2 md:px-5 md:mx-10 md:ml-20 rounded-full  text-base flex items-center gap-4">
            Web Developmen
            </button>
            <button className=" custom-btn md:py-2 md:px-5 md:mx-10  rounded-full  text-base flex items-center gap-4">
            Web Design Solution
            </button>
            <button className=" custom-btn md:py-2 md:px-5 md:mx-10  rounded-full  text-base flex items-center gap-4">
            UX UI Design
            </button>
            <button className=" custom-btn md:py-2 md:px-5 md:mx-10   rounded-full  text-base flex items-center gap-4">
            Android Development
            </button>
          </div>

          <div className="mt-16 md:flex gap-6 ">
            <div class="relative w-full md:w-1/2">
              <Image width={835} height={695} src="/images/phones.jpg" alt="phone" className="w-full object-cover rounded-[2rem] "/>
              <div class="absolute inset-0  md:mt-[420px] mt-[180px] ">
                <h2 class="text-2xl font-bold text-[#0097B2]  ml-6  md:ml-9">Healthcare App</h2>
                <p class="ml-6 md:ml-9 mr-6 md:mr-24 mt-2 md:mt-4 text-xs md:text-sm">Utilized cutting-edge health technology to create dependable solutions that enhanced patient care and ensured adherence to industry standards.</p>
              </div>

              <div className="absolute bottom-4 right-4 button-bg h-8 w-8 md:h-10 md:w-10 md:mb-14 flex justify-center items-center rounded-full">
                <i class="fa-solid fa-arrow-right text-black "></i>
              </div>
            </div>
            <div class="relative w-full md:w-1/2 ">
              <Image width={835} height={695} src="/images/Rectangle.jpg" alt="phone" className="w-full object-cover rounded-[2rem] "/>
              <div class="absolute inset-0  md:mt-[420px] mt-[180px] ">
                <h2 class="text-2xl font-bold text-[#0097B2]  ml-6  md:ml-9">Retail Website</h2>
                <p class="ml-6 md:ml-9 mr-6 md:mr-24 mt-2 md:mt-4 text-xs md:text-sm">Crafted sleek and intuitive UI designs that elevated the shopping experience and drove customer engagement.</p>
              </div>
              <div className="absolute bottom-4 right-4 button-bg h-8 w-8 md:h-10 md:w-10 md:mb-14 flex justify-center items-center rounded-full">
                <i class="fa-solid fa-arrow-right text-black "></i>
              </div>
            </div>
           
          </div>
          <div className=" justify-center flex mt-14 text-sm">
          <Button text="view all" />          
          </div>
          <p className="text-center my-14">What Differentiate Django pie?  give Reason why choose you. link with header option    </p>
        </div>

        {/* Blog Section created by Azka Rehman  */}

        <div className="mx-24 ">
          <div className=" mt-28 w-full lg:w-1/2">
            <h2 className="text-white xl:text-[80px] sm:text-6xl text-4xl pb-4 font-semibold tracking-tight">
              Our Blogs
            </h2>
            <p className="text-white text-lg text-opacity-90 xl:pb-11 sm:pb-16 pb-10 sm:leading-relaxed leading-loose w-11/12">
              At Django Pie, our primary objective is to enhance the user experience. To achieve this, we provide exceptional web design and development services.                </p>
          </div>

          <div className="md:flex gap-6">
            <div className=" border border-[#525252]  text-white rounded-lg shadow-lg overflow-hidden">
              <div className="">
                <Image width={835} height={695} className=" w-full p-4 object-cover" src="/images/Card1.png" alt="Card Image" />
                <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">Card Heading</h2>
                    <p className=" mb-4">
                        This is a brief description or content text for the card. It gives an overview of what this card is about.
                    </p>
                    <div className="flex gap-2">
                    <a href="#" className="text-[#0097B2] ">Read More</a>
                    <div className=" button-bg h-5 w-5  flex justify-center items-center rounded-full">
                       <i class="fa-solid fa-arrow-right "></i>
                    </div>
                    </div>
                </div>
              </div>
            </div>
            <div className=" border border-[#525252]  text-white rounded-lg shadow-lg overflow-hidden">
              <div className="">
                <Image width={835} height={695} className="w-full p-4  object-cover" src="/images/Card2.png" alt="Card Image" />
                <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">Card Heading</h2>
                    <p className=" mb-4">
                        This is a brief description or content text for the card. It gives an overview of what this card is about.
                    </p>
                    <div className="flex gap-2">
                    <a href="#" className="text-[#0097B2] ">Read More</a>
                    <div className=" button-bg h-5 w-5  flex justify-center items-center rounded-full">
                       <i class="fa-solid fa-arrow-right "></i>
                    </div>
                    </div>
                </div>
              </div>
            </div>
            <div className=" border border-[#525252]  text-white rounded-lg shadow-lg overflow-hidden">
              <div className="">
                <Image width={835} height={695} className=" w-full p-4 object-cover" src="/images/Card3.png" alt="Card Image" />
                <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">Card Heading</h2>
                    <p className=" mb-4">
                        This is a brief description or content text for the card. It gives an overview of what this card is about.
                    </p>
                    <div className="flex gap-2">
                    <a href="#" className="text-[#0097B2] ">Read More</a>
                    <div className=" button-bg h-5 w-5  flex justify-center items-center rounded-full">
                       <i class="fa-solid fa-arrow-right "></i>
                    </div>
                    </div>
                </div>
              </div>
          </div>
          </div>
          <div className="flex justify-center mt-10">
          <Button text="See More" />
          </div>
        </div>

        {/* Testimonial Section Created by Azka Rehman  */}
        
        <div className="mx-24 mt-32 ">

            <div className="flex">
              <div className="w-full lg:w-1/2">
                <h2 className="text-white sm:text-6xl text-4xl pb-4 font-semibold tracking-tight">
                  Client Testimonials
                </h2>
                <p className="text-white text-lg text-opacity-90 xl:pb-11 sm:pb-16 pb-10 sm:leading-relaxed leading-loose w-11/12">
                  Here are the success stories from our clients who rely on us for their product needs.
                </p> 
              </div>
              <div className="w-1/2 flex justify-end  "> 
                <Image width={160} height={695} src="/images/04.png" alt="Client Testimonials" className="h-36" /> 
              </div>
            </div>
        </div>

        <Footer />
    </>
  );
}
