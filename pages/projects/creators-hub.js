import React from "react";

const creatorHub = () => {
  return (
    <div className="pt-[120px]">
      <h5 className="text-center text-subhead font-bold">The Creators Hub</h5>
      <p className="text-center text-[#7777] text-sm mt-[21px] mb-[160px]">
        Product design / 2022
      </p>
      <img src="/assets/creators-her.png" className="w-full" />
      <div className=" justify-around   flex-wrap flex items-center py-[111px]">
        <div className="w-full md:w-1/2">
          <p className=" text-clip text-sm font-[800]">PROJECT OVERVIEW</p>
          <h1 className="text-subhead ">
            A website for people to book co-working spaces at The Creators Hub.
          </h1>
          <p className="mt-6">
            Co-working spaces have grown in popularity in the post-pandemic era,
            not just among entrepreneurs and freelancers, but also large
            corporations. Since the pandemic has changed how many businesses
            operate, the use of co-working spaces has increased significantly
            for various reasons, one of which is the rise of hybrid and remote
            work.
            <br />
            <br />
            The Creators Hub is a company that provides co-working spaces to
            entrepreneurs, freelancers, startups, remote workers, and members of
            the general public. They sought to develop a user-friendly,
            responsive website, that accurately represented the company,
            attracted visitors, and allowed users to view and reserve co-working
            spaces.
          </p>
        </div>
        <div className="w-full md:w-1/2 "></div>
      </div>
      <div>
        <img src="/assets/creators-mid.png" className="w-full" />
      </div>
      <div className="py-[100px]">
        <h3 className="text-[30px] font-bold">Problem Statement</h3>
        <p className="pt-2 text-sm">
          There has been an increase in co-working spaces around the world in
          recent years, especially since most businesses and companies have had
          to transition to working remotely due to the pandemic. As a result,
          more professionals, freelancers, businesses, and startups are turning
          to co-working spaces. The Creators Hub is a company that provides
          co-working spaces to entrepreneurs, freelancers, startups, remote
          workers, and members of the general public. They were in need of a
          user-friendly, responsive website, that would accurately represent the
          company, attract visitors, and allow users to view and reserve
          co-working spaces.
        </p>
        <h3 className="text-[30px] font-bold mt-10">Goals and Objectives</h3>
        <div className="pt-2 text-sm">
          The main goals and objectives of this project include:
          <ul className="list-disc list-inside">
            <li>
              {" "}
              Design a website that accurately represents the company and
              provides all the necessary information to potential customers
            </li>
            <li> Provide customers with a seamless booking experience</li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="text-[30px] font-bold text-center mb-[50px]">
          The Five Element Framework
        </h3>
        <div className="flex justify-center">
          <img src="/assets/five-elements.png" />
        </div>
        <p className="text-sm leading-[26px] text-center mt-[50px] mb-[100px]">
          For this project, I used the Five Element Framework, which helped me
          consider all of the user's needs in a systematic manner. I was able to
          narrow things down from abstract to concrete and make more specific
          decisions over time as I built on each level of the framework.
        </p>
      </div>
      <div className="mb-[50px]">
        <p className=" text-clip text-sm font-[800]">STRATEGY</p>
        <h3 className="text-[30px] font-bold ">
          Defining business goals & user needs
        </h3>
        <p className="text-sm leading-[26px] mb-[100px]">
          To begin, I needed to determine the business goals and user needs. As
          a result, I began the research process, which included a competitor
          analysis and series of interviews.{" "}
        </p>
      </div>
      <h4 className="text-[21px] font-bold mb-[33px] leading-[27px]">
        Secondary Research
      </h4>
      <ul className="">
        <li className="list-inside list-disc text-lg font-extrabold">
          Competitor Analysis
          <br />
          <p className="text-sm leading-[26px] font-normal">
            I identified{" "}
            <span className="font-bold"> 5 direct competitors</span> and
            assessed their strengths and weaknesses for the analysis.The{" "}
            <span className="font-bold"> key metrics </span>I used while
            browsing their websites during the analysis were:{" "}
            <span className="font-bold">
              detailed information on co-working spaces; prices of working
              spaces; a sufficient number of pictures of each co-working space;
              a list of amenities; the ability to book a co-working space using
              the website; the ability to book a tour (virtual or in-person);
              and testimonials or client reviews.
            </span>{" "}
            The insights from the competitor analysis gave me ideas for things
            to build on and avoid while keeping the stakeholders' business goals
            in mind.{" "}
          </p>
        </li>
      </ul>
      <div className="w-full my-[60px]">
        <img src="/assets/creator-chart.png" className="w-full" />
      </div>
      <h4 className="text-[21px] mt-[100px] font-bold mb-[33px] leading-[27px]">
        Primary Research
      </h4>
      <ul className="">
        <li className="list-inside list-disc text-lg font-extrabold">
          Business Goals
          <br />
          <p className="text-sm leading-[26px] font-normal">
            As stated earlier on, the main goals and objectives of this project
            include:
          </p>
          <ul className="list-disc text-sm list-inside font-normal">
            <li className="">
              Designing a website that accurately represents the company and
              provides all the necessary information to potential customers
            </li>
            <li className="">
              Providing customers with a seamless booking experience
            </li>
          </ul>
        </li>
        <li className="list-inside list-disc text-lg font-extrabold mt-[33px]">
          User Interviews
          <p className="text-sm leading-[26px] font-normal">
            Once the competitor analysis was completed, I interviewed 5 target
            users across different industries and careers, ranging from ages 20
            to 40. In order to learn as much as possible about the users and
            identify all their needs, I made sure to ask open-ended questions
            during these interviews.
            <br />
            <br />
            Some questions asked during the interviews:
          </p>
          <ul className="list-disc text-sm list-inside font-normal">
            <li className="leading-[40px] italic">
              Why do you choose to work in a coworking space?
            </li>
            <li className="leading-[40px] italic">
              What are some things you consider when searching for a coworking
              space?
            </li>
            <li className="leading-[40px] italic">
              What amenities are most important to you in a coworking space?
            </li>
            <li className="leading-[40px] italic">
              How important is a sense of community to you in a coworking space?
            </li>
            <li className="leading-[40px] italic">
              If your coworking space held regular events, how likely are you to
              attend?
            </li>
          </ul>
          <div className="mt-[90px] mb-[73px]">
            <img className="mx-auto" src="/assets/creator-insight.png" />
          </div>
        </li>
        <li className="list-inside list-disc text-lg font-extrabold mt-[33px]">
          User Personas
          <p className="text-sm leading-[26px] font-normal">
            After speaking with users, I discovered that they fell into{" "}
            <span className="font-bold">
              3 categories: remote workers looking for a work environment,
              startups looking for an office space, and freelancers/creatives
              looking to network and collaborate with like-minded people.{" "}
            </span>{" "}
            As such, I created 3 personas to represent each of these user
            groups.
          </p>
          <div className="mt-[90px] mb-[73px]">
            <img className="mx-auto" src="/assets/creator-persona1.png" />
          </div>
          <div className="mt-[90px] mb-[73px]">
            <img className="mx-auto" src="/assets/creator-persona2.png" />
          </div>
          <div className="mt-[90px] mb-[73px]">
            <img className="mx-auto" src="/assets/creator-persona3.png" />
          </div>
        </li>
      </ul>
      <div>
        <p className=" text-clip text-sm font-[800]">SCOPE</p>
        <h4 className="text-[30px] font-bold mb-[33px] leading-[27px]">
          Highlighting functionalities & content requirements
        </h4>
        <p className="text-sm leading-[26px] mb-[50px] font-normal">
          The research findings helped me better understand the business goals
          and user’s needs. Using these insights and the MOSCOW method, I was
          able to identify and prioritize the website's functional
          specifications and content requirements.
        </p>
        <p className="text-[21px] font-bold leading-[27px]">
          Functional Specifications
        </p>
        <p className="text-sm ">
          Starting with the functionality, below are the prioritized features of
          the website that fulfil both the business goals and the user’s needs.
          (Click any of the features to learn more on how they were implemented
          in the design)
        </p>
        <div className="grid max-w-[878px]  mx-auto grid-cols-1 gap-12 justify-center md:grid-cols-2 mt-[60px]">
          <div className="flex flex-col items-center ">
            <div className="max-w-[400px]">
              <img src="/assets/creator-screen.png" />
              <p className="font-semibold mt-[20px]">
                Users can book a space and make payment online
              </p>
              <p className="font-light text-xs">
                A user can reserve a space by selecting a preferred duration,
                room capacity, time, and so on, and then proceed to pay.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="max-w-[400px]">
              <img src="/assets/creator-screen.png" />
              <p className="font-semibold mt-[20px]">
                Users can take a virtual tour of the hub
              </p>
              <p className="font-light text-xs">
                Users can take a virtual tour of the hub by watching a video
                that shows each of the workspaces in the hub.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="max-w-[400px]">
              <img src="/assets/creator-message.png" />
              <p className="font-semibold mt-[20px]">
                Companies can sign up as community members
              </p>
              <p className="font-light text-xs">
                Startups and businesses can join the hubs' membership community,
                which provides founders with resources to help them scale their
                businesses.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="max-w-[400px]">
              <img src="/assets/creator-send.png" />
              <p className="font-semibold mt-[20px]">
                Users can fill the contact form to make enquiries etc.
              </p>
              <p className="font-light text-xs">
                Users can contact the company and make enquiries by completing a
                contact form.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        <h4 className="text-[21px]  font-bold mb-[10px] leading-[27px]">
          Content Requirements
        </h4>
        <p className="text-sm leading-[26px] font-normal">
          Moving on to the content requirements, the most important content
          requirement was that the website contain as much detailed information
          as possible. This included pages like "home," "about us," "events,"
          "membership," "workspaces," and "blog." I also made certain that all
          of the images gave prospective customers a sense of what they could
          expect at the hub. (The final high-fidelity designs demonstrate this.)
        </p>
      </div>
      <div className="mt-[122px]">
        <p className=" text-clip text-sm font-[800]">STRUCTURE</p>
        <h3 className="text-[30px] font-bold ">
          Defining user interactions & website structure
        </h3>
        <p className="text-sm leading-[26px] mb-[50px]">
          After listing out the functionalities and content requirements, I
          proceeded to work on the structure of the website. This would help
          define how each of these features and content fit together, and
          determine how users would interact with the website.{" "}
        </p>
        <h4 className="text-[21px]  font-bold mb-[10px] leading-[27px]">
          Information Architecture
        </h4>
        <p className="text-sm leading-[26px] font-normal mb-[60px]">
          Using the information gathered from highlighting the functionalities
          and content requirements, I created a site map/information
          architecture to outline the organization of all the content on the
          website and to demonstrate the relationship between the various pages.
        </p>
        <img
          src="/assets/creator-flow.png"
          className="w-full mt-[60px] mb-[100px]"
        />
        <p className=" text-clip text-sm font-[800]">SKELETON</p>
        <h3 className="text-[30px] font-bold ">
          Defining the layout (Low-fidelity Designs)
        </h3>
        <p className="text-sm leading-[26px]">
          The next phase involved defining the layout and detailing the initial
          designs for the website. During this process, I concentrated on 3
          major components: Here are some of the wireframes and low-fidelity
          designs I created:
        </p>
        <ul className="list-disc text-sm list-inside font-normal  mb-[50px]">
          <li className="">
            <span className="font-bold">The Interface Design </span>- arranging
            the elements so that users can effectively interact with the
            website's functionality.
          </li>
          <li className="">
            <span className="font-bold">The Navigation Design</span>- providing
            users with a way to navigate through the website using the interface
            elements.
          </li>
          <li className="">
            <span className="font-bold"> The Information Design</span>-
            presenting content/information to users in a clear and concise
            manner.
          </li>
        </ul>
        <p className="text-sm leading-[26px] mt-[30px]">
       Here are some of the wireframes and low-fidelity
          designs I created:
        </p>
        <div className="relative py-[80px] px-6 md:px-[138px] mb-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <div className="flex justify-center">
              <img src="/assets/home-before.png" />
            </div>
            <div className="flex justify-center">
              <img src="/assets/about.png" />
            </div>
            <div className="flex justify-center">
              <img src="/assets/spaces.png" />
            </div>
            <div className="flex justify-center">
              <img src="/assets/coworking-desks.png" />
            </div>
            <div className="flex justify-center">
              <img src="/assets/booking.png" />
            </div>
            <div className="flex justify-center">
              <img src="/assets/blog.png" />
            </div>{" "}
          </div>
        </div>
      </div>
      <p className=" text-clip text-sm font-[800]">SURFACE</p>
      <h3 className="text-[30px] font-bold ">Visual/Sensory Design</h3>
      <p className="text-sm leading-[26px] mb-[50px]">
      The next step was to figure out how the design would appeal to the user's senses. I incorporated the senses of sight, sound, and touch; and made decisions on the visual appearance of the website, from typography to colours, among other things.{" "}
      </p>
      <h3 className="text-[21px] font-bold">Style Guide & UI Components</h3>
      <p className="text-sm leading-[26px]">
      I created a style guide to help define the design parameters and standards for the UI components that would be used to bring the visual appearance of the website to life. To ensure that the website's look and feel accurately reflected their brand, I considered their brand attributes (modern, vibrant, fun, serene) and used that to set the direction for the style guide and other UI components.
      </p>
      <div>
        <img src="/assets/design-system.png" className="mb-[100px] mt-[60px] mx-auto" />
        <h4 className="text-[21px]  font-bold mb-[10px] leading-[27px]">
          High-fidelity Designs & Prototype
        </h4>
        <p className="text-sm leading-[26px] font-normal mb-[33px]">
        I conducted a usability study to gather feedback from users before moving forward with the high-fidelity designs. The feedback received was used to refine and improve the high-fidelity designs.
        </p>
        <ul className="list-inside list-disc mb-[50px]">
          <li className="list-inside list-disc text-lg font-extrabold">
          Users can book a space and make payment online
            <p className="text-sm leading-[26px] mb-[60px] font-normal">
            A user can reserve a space by selecting a preferred duration, room capacity, time, and so on, and then proceed to pay, after which a reservation confirmation is sent to their email. Companies or businesses looking to book an office space on the other hand, are required to request a quote, after which they’ll be contacted to discuss. {" "}
            </p>
            <img
              src="/assets/bookin.png"
              className="mb-[73px] w-full"
            />
             <img
              src="/assets/booking-offfice.png"
              className="mb-[73px] w-full"
            />
             <img
              src="/assets/booking-space.png"
              className="mb-[73px] w-full"
            />
          </li>
          <li className="list-inside list-disc text-lg font-extrabold">
          Companies can sign up as community members
            <p className="text-sm leading-[26px] mb-[60px] font-normal">
            Startups and businesses can join the hubs' membership community, which provides founders with resources and services that can help them scale their businesses such as training and development opportunities, networking events, and access to funding and investment.{" "}
            </p>
            <img src="/assets/creator-association.png" className="mb-[73px] w-full" />
          </li>
          <li className="list-inside list-disc text-lg font-extrabold">
          Users can fill the contact form  to make enquiries etc.
            <p className="text-sm leading-[26px] mb-[60px] font-normal">
            Users can get in touch with the company or make enquiries by completing a contact form.
            </p>
            <img src="/assets/creator-sign-up.png" className="mb-[73px] w-full" />
          </li>
          <li className="list-inside list-disc text-lg font-extrabold">
            View analytics of subscription expenses
            <p className="text-sm leading-[26px] mb-[60px] font-normal">
              Users can see a breakdown of their subscription expenses, monthly
              and yearly. This makes it easier to stay on top of subscription
              expenses and make more informed decisions about which
              subscriptions to keep and which to cancel.
            </p>
            <img src="/assets/analytics.png" className="mb-[73px] w-full" />
          </li>
  
          <li className="list-inside list-disc text-lg font-extrabold">
            Other pages
            <img
              src="/assets/creator-other1.png"
              className="mb-[73px] mt-[45px]  w-full"
            />
            <img src="/assets/creator-other2.png" className="mb-[73px] w-full" />
            <img src="/assets/creator-other3.png" className="mb-[73px] w-full" />
          </li>
        </ul>
        <h4 className="text-[21px]  font-bold mb-[10px] leading-[27px]">
          Prototype Links
        </h4>
        <ul className="list-inside text-sm list-disc mb-[100px]">
          <li className="underline">
            <a href="#">Desktop prototype</a>
          </li>
          <li className="underline">
            <a href="#">Mobile prototype</a>
          </li>
        </ul>
        <h4 className="text-[21px]  font-bold mb-[10px] leading-[27px]">
          Carrying out final usability tests
        </h4>
        <p className="text-sm leading-[26px]  mb-[100px]">
        Once the high-fidelity designs were completed, I proceeded to carry out a final round of usability tests to get feedback from both  users and stakeholders on whether the website had met their expectations. From my observations and interactions with my research participants, all business and user goals were met and the website was ready to go unto the development stage.
        </p>
      </div>
      <div className="bg-[#FBF4FF] rounded-[24px] py-[107px] px-[6px] md:px-[164px] mb-[100px]">
        <p className=" text-clip text-sm font-[800]">CONCLUSION</p>
        <h1 className="text-subhead ">Reflection</h1>
        <p className="mt-6">
        By carefully considering the needs and goals of the stakeholders, I was able to create a design that not only met their expectations but exceeded them. The resulting design helped the client stand out from their competitors while also providing users with a positive experience.

          <br />
          <br />
Below is the key takeaway I gained during the course of this project:
        </p>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 mt-[25px]">
          <h4 className="text-[21px]  font-bold mb-[10px] leading-[27px]">
          The mobile-first approach is not always the best course of action.
          </h4>
          <p>
          While the mobile-first approach has many advantages and is frequently recommended, it is not always the best option. The decision to use a mobile-first approach should be based on the website's specific needs and goals, as well as its target audience. Because this website had a lot of content requirements and required a lot of data input, it was easier to start designing for desktop and then convert it to fit mobile screens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default creatorHub;
