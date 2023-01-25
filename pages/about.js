import React from "react";

const about = () => {
  const photos = [
    "/assets/quotes-1.png",
    "/assets/quotes-2.png",
    "/assets/quotes-3.png",
    "/assets/quotes-4.png",
  ];
  return (
    <div>
      <div className=" justify-around min-h-screen flex-wrap flex items-center pt-[20px]">
        <div className="w-full md:w-1/2">
          <h1 className="text-subhead ">Hi there, I&apos;m Favour</h1>
          <p className="text-sm leading-[26px] text-black mt-5">
            I’m a product designer with 2+ years of experience across various
            technology and product design disciplines (UI, UX, Graphics and
            Branding) currently residing in Abuja, Nigeria 🇳🇬
            <br /> <br />
            I specialize in the UI/UX field. I love creating thoughtful user
            experiences and interfaces that are built for everyone to use and
            enjoy. Using a people-centered design approach, I am able empathize
            with users in order to create designs and visuals that they connect
            with. Constantly seeking the answer to: how can we create
            experiences people love?
            <br /> <br />
            I’ve had the opportunity to work in different organizations and
            environments as a Software Engineering Intern and UI/UX Designer. My
            experiences in these roles have sharpened my skills in digital
            design, empathizing with people, carrying out research, identifying
            goals/needs, and creating solutions to a wide range of problems and
            user pain points. This has also helped me build some of the skills I
            currently possess, such as creativity, problem-solving,
            design-thinking, organization, and other design-related skills.
            <br /> <br />
            How I got into UX? I’ve always been immersed in various creative
            activities, one of which is designing. During my time in college, I
            had the opportunity to take a UX course which increased my interest
            in working in a creative field, and I applied the knowledge obtained
            from this course in my Final Year Capstone Project. Overtime, I
            decided to transition from Software Engineering to UX Design where I
            could utilize and further explore my passion for design to solve
            user problems and create enjoyable user experiences.
          </p>
          <div className="flex gap-6 mt-[30px]">
            <div className="flex px-[30px] py-[20px] gap-2 max-w-[178px] border border-[#242424] rounded-[50px]">
              <img src="/assets/resume.png" />
              <span className="font-bold text-sm ">View Resume</span>
            </div>
            <ul className="flex gap-6 items-center">
              <li>
                <img src="/assets/email.png" />
              </li>
              <li>
                <img src="/assets/dribble.png" />
              </li>
              <li>
                <img src="/assets/linked-in.sv.png" />
              </li>
              <li>
                <img src="/assets/behance.png" />
              </li>
              <li>
                <img src="/assets/insta.png" />
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 ">{/* <img></img> */}</div>
      </div>
      <div>
        <h3 className="text-subhead ">Other things I enjoy ...</h3>
        <ul className="mt-[36px]">
          <li className="list-disc list-inside mb-2">
            <span className="text-sm font-bold leading-[26px]">
              Movies & TV Shows 🎞
            </span>{" "}
            I’m one of those people who literally can’t eat a meal without
            watching something. I’d say when I’m not designing, I’m probably
            watching a movie or tv show, but it’s actually the other way around;
            when I’m not watching a movie or tv show, then I’m probably
            designing. Get it? 😅
          </li>
          <li className="list-disc list-inside  mb-2">
            <span className="text-sm font-bold leading-[26px]">
              Solitude 😶
            </span>{" "}
            If there’s one place you’ll always find me, it’s probably going to
            be in my room, in bed, just watching a movie or designing stuff. I
            enjoy my alone time A LOT; it’s kinda a part of who I am.
          </li>
          <li className="list-disc list-inside">
            <span className="text-sm font-bold leading-[26px]">
              The Art of Gifting 🎁
            </span>{" "}
            I’m a sucker for gifting, especially sentimental and personalized
            gifts. I’ve always had a dream of owning a personalized/custom gifts
            business. I love lovee loveee curating gifts. I also design and sell
            greeting cards, check them out here!
          </li>
        </ul>
        <div className="grid-cols-1 gap-3 grid md:grid-cols-4 items-center mb-[160px] mt-[60px]">
          {photos.map((photo, i) => (
            <div key={i} className="flex justify-center">
              <img src={photo} />
            </div>
          ))}
        </div>
        <h5 className="text-center text-[30px] font-bold">
          “Design is a funny word. Some people think design means how it looks.
          But of course, if you dig deeper, it’s really how it works.”
        </h5>
        <p className="text-center text-sm mt-[21px] mb-[160px]">— STEVE JOBS</p>
      </div>
    </div>
  );
};

export default about;
