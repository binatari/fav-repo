import React from "react";

const subly = () => {
  return (
    <div className="pt-[120px]">
      <h5 className="text-center text-subhead font-bold">
        Subscription tracking made easy with Sub.ly
      </h5>
      <p className="text-center text-[#7777] text-sm mt-[21px] mb-[160px]">
        Product design / 2022
      </p>
      <img src="/assets/subly-phone.png" className="w-full" />
      <div className=" justify-around   flex-wrap flex items-center py-[111px]">
        <div className="w-full md:w-1/2">
          <p className=" text-clip text-sm font-[800]">PROJECT OVERVIEW</p>
          <h1 className="text-subhead ">
            A mobile app for keeping track of all your subscriptions and
            recurring payments.
          </h1>
          <p className="mt-6">
            We live in a digital age, where the majority of the content and
            information we consume is available online. As a result, the world
            is shifting toward a subscription-based economy, prompting
            businesses to adopt the subscription-based business model, in which
            consumers frequently make recurring payments to gain access to
            specific services or content. However, because we’re constantly
            consuming a myriad of content and information, it is often difficult
            to keep track of all our subscriptions.
            <br />
            <br />
            Sub.ly is a mobile application that allows users manage and keep
            track of all their online subscriptions and recurring payments.
            <br />
            <br />
            Think of it as, subscription tracking made easy.
          </p>
        </div>
        <div className="w-full md:w-1/2 "></div>
      </div>
      <div>
        <img src="/assets/subly-banner.png" className="w-full" />
      </div>
      <div className="py-[100px]">
        <h3 className="text-[30px] font-bold">Problem Statement</h3>
        <p className="pt-2 text-sm">
          As we all know, digitalization is gradually becoming a global trend
          today, and various digital technologies have become integrated into
          our daily lives—from the services we use to the content we consume
          online. Hence, many companies have adopted (and continue to adopt) a
          subscription-based business model, in which consumers frequently make
          recurring payments to gain access to certain services or content.
          According to statistics, the average consumer had 12 paid
          subscriptions in 2020. As a result, consumers are so overwhelmed that
          they are unable to keep track of all their subscriptions, as well as
          their total subscription expenses monthly and yearly. Sub.ly is a
          subscription managing mobile application that allows users manage and
          keep track of all their online subscriptions and recurring payments.
        </p>
        <h3 className="text-[30px] font-bold mt-10">Goals and Objectives</h3>
        <div className="pt-2 text-sm">
          Having looked at the general problem, the major question to be asked
          is: “How might we design a product that allows consumers conveniently
          track all their subscriptions?” <br /> Some of the main goals and
          objectives of this project include: <br />
          <ul className="list-disc list-inside">
            <li> Enable users track and manage all their</li>
            <li>
              {" "}
              subscriptions from one app Notify users before subscription
              renewal
            </li>
            <li>
              {" "}
              dates Provide users with insights of their subscription expenses
              Make
            </li>
            <li> it easier for users to cancel subscriptions</li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="text-[30px] font-bold text-center mb-[50px]">
          The Design Thinking Process
        </h3>
        <div className="flex justify-center">
          <img src="/assets/think-proces.png" />
        </div>
        <p className="text-sm leading-[26px] text-center mt-[50px] mb-[100px]">
          During the course of this project, I adopted the Design Thinking
          Process. The non-linear and iterative nature of this
          process/methodology gave me a better understanding of the users, as
          well as enabled me see things from different perspectives. I was able
          to empathize with users by carrying out various forms of research,
          which in turn helped me brainstorm creative solutions and carry out
          usability tests on the prototypes, thereby ensuring a seamless
          experience for the users.{" "}
        </p>
      </div>
      <div className="mb-[50px]">
        <p className=" text-clip text-sm font-[800]">EMPATHIZE</p>
        <h3 className="text-[30px] font-bold ">Research</h3>
        <p className="text-sm leading-[26px] mb-[100px]">
          To kickstart the project, I conducted various types of research to
          gain a general understanding of the subscription business model as
          well as a better understanding of the users. This went a long way
          toward assisting me in connecting the business goals of the
          stakeholders and the user goals.{" "}
        </p>
        <h4 className="text-[21px] font-bold leading-[27px]">Research Goals</h4>
        <p className="text-sm leading-[26px]">
          To ensure the research process went smoothly, I outlined a resarch
          plan and highlighted certain goals that helped guide me through the
          entire process. The research goals were to:
        </p>
        <ul className="list-disc list-inside text-sm leading-[26px]">
          <li>Understand the subscription business model market</li>
          <li>Identify Sub.ly’s target market</li>
          <li>
            Identify Sub.ly’s competitors (direct and indirect) and analyze
            their strengths,weaknesses, and other key features
          </li>
          <li>
            Understand how people keep track of and manage all their
            subscriptions
          </li>
          <li>
            Identify pain points that people encounter with regards to keeping
            track of their subscriptions
          </li>
        </ul>
      </div>
      <h4 className="text-[21px] font-bold mb-[33px] leading-[27px]">
        Secondary Research
      </h4>
      <ul className="">
        <li className="list-inside list-disc text-lg font-extrabold">
          Comparative Analysis
          <br />
          <p className="text-sm leading-[26px] font-normal">
            I carried out a comparative analysis, and was able to identify{" "}
            <span className="font-bold">
              {" "}
              4 competitors (direct and indirect)
            </span>{" "}
            whose strenghts and weaknesses I evaluated. The{" "}
            <span className="font-bold"> key metrics </span>used during the
            analysis were:{" "}
            <span className="font-bold">
              renewal reminders, insights/analytics of subscription expenses,
              value of subscription in different currencies, discount/promo
              recommendations.
            </span>{" "}
            The insights obtained during the comparative analysis gave me an
            idea of things to build on and things to avoid, while keeping the
            business goals of Sub.ly in mind.
          </p>
        </li>
      </ul>
      <div className="w-full my-[60px]">
        <img src="/assets/chart.png" className="w-full" />
      </div>
      <p className="text-sm leading-[26px] font-normal">
        One notable thing I discovered, was that none of the competitors were
        located in Nigeria. As such, Sub.ly would be the first of it’s kind to
        provide such services to a Nigerian audience. Also, a key feature I
        noticed on the Rocket Money app was the ability to connect cards to the
        app. The feature made provision for users to connect their cards to the
        app, in order to manage payments and subscriptions on each card, and
        also keep track of which card is being used for which subscription. This
        feature was noted down to be integrated in the design process of Sub.ly.
      </p>
      <h4 className="text-[21px] mt-[100px] font-bold mb-[33px] leading-[27px]">
        Primary Research
      </h4>
      <ul className="">
        <li className="list-inside list-disc text-lg font-extrabold">
          User Interviews
          <br />
          <p className="text-sm leading-[26px] font-normal">
            Once the comparative analysis was completed, I went ahead to
            interview <span className="font-bold"> 7 target users</span> of the
            Sub.ly mobile application. The users interviewed were within the{" "}
            <span className="font-bold"> age range of 16-40 </span>as these are
            the most prominent users of subscription based services. During
            these interviews, I asked open-ended questions to learn as much as I
            could about their experiences and identify all of the user’s needs
            and pain points.
            <br /> <br />
            <span className="text-sm">
              Some questions asked during the interview:
            </span>
          </p>
          <ul className="list-disc text-sm list-inside font-normal">
            <li className="leading-[40px] italic">
              How many services are you currently subscribed to?
            </li>
            <li className="leading-[40px] italic">
              Do you keep track of all your subscriptions and recurring
              payments? If yes, how?
            </li>
            <li className="leading-[40px] italic">
              Are you aware of how much you are spending on your subscriptions?
            </li>
            <li className="leading-[40px] italic">
              How do you get reminded that the payment for any of your
              subscriptions is due?
            </li>
            <li className="leading-[40px] italic">
              Have you encountered an instance where you forgot to cancel a
              subscription plan that you didn’t need anymore, and received an
              unexpected deduction due to auto-renewal?
            </li>
            <li className="leading-[40px] italic">
              What challenges have you faced with regards to keeping track of
              your subscriptions and other recurring payments?
            </li>
            <li className="leading-[40px] italic">
              What factors would you consider important when it comes to keeping
              track of your subscriptions and recurring payments?
            </li>
            <li className="leading-[40px] italic">
              Do you or have you ever used a subscription tracking app?
            </li>
          </ul>
        </li>
        <li className="list-inside list-disc text-lg font-extrabold mt-[33px]">
          Synthesizing research results - Affinity Mapping
          <p className="text-sm leading-[26px] font-normal">
            Once the interviews were complete, I synthesized all the data
            obtained and grouped them into themes (using the key metrics from
            the comparative analysis) to create an affinity map.
          </p>
          <div>
            <img className="mx-auto" src="/assets/document.png" />
          </div>
          <div className="mt-[90px] mb-[73px]">
            <img className="mx-auto" src="/assets/insight.png" />
          </div>
        </li>
        <li className="list-inside list-disc text-lg font-extrabold mt-[33px]">
          User Personas
          <p className="text-sm leading-[26px] font-normal">
            Having carried out both secondary and primary research, I was able
            to get a clear picture of who Sub.ly’s target users are, and created
            two personas that would accurately represent them . These personas
            continued to guide my decisions moving forward, making sure my
            designs were centered on the users.
          </p>
          <div className="mt-[90px] mb-[73px]">
            <img className="mx-auto" src="/assets/persona-1.png" />
          </div>
          <div className="mt-[90px] mb-[73px]">
            <img className="mx-auto" src="/assets/persona-2.png" />
          </div>
        </li>
      </ul>
      <div>
        <p className=" text-clip text-sm font-[800]">DEFINE & IDEATE</p>
        <h4 className="text-[30px] font-bold mb-[33px] leading-[27px]">
          Brainstorming
        </h4>
        <p className="text-sm leading-[26px] mb-[50px] font-normal">
          Now that I was aware of the major issues that needed to be addressed,
          I began to brainstorm possible solutions while keeping both the
          business and user goals in mind to ensure I was on the right track.
        </p>
        <p className="text-[21px] font-bold leading-[27px]">Key Features</p>
        <p className="text-sm ">
          I highlighted a number of requirements, features and functionalities
          to be included in the app, and made use of the MOSCOW method to
          determine which of these solutions would be prioritized. Below are the
          key features that were prioritized. <br />{" "}
          <span className="italic">
            {" "}
            (Click any of the features to learn more on how they were
            implemented in the design)
          </span>
        </p>
        <div className="grid max-w-[878px]  mx-auto grid-cols-1 gap-12 justify-center md:grid-cols-2 mt-[60px]">
          <div className="flex flex-col items-center ">
            <div className="max-w-[400px]">
              <img src="/assets/netflix-hand.png" />
              <p className="font-semibold mt-[20px]">
                Add subscriptions automatically or manually
              </p>
              <p className="font-light text-xs">
                Users can simply add a subscription by logging in to their
                account of that service (so the app automatically fetches the
                details of that subscription), or by entering the details
                manually.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="max-w-[400px]">
              <img src="/assets/iphone.png" />
              <p className="font-semibold mt-[20px]">
                Set subscription renewal reminder
              </p>
              <p className="font-light text-xs">
                Users can set reminders when adding subscriptions in order to
                get notified before a subscription is due.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="max-w-[400px]">
              <img src="/assets/form.png" />
              <p className="font-semibold mt-[20px]">
                Add card or other payment methods
              </p>
              <p className="font-light text-xs">
                Users can manually input their card details or other payment
                methods to keep track of which payment method is being used for
                each of the subscriptions.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="max-w-[400px]">
              <img src="/assets/wheel.png" />
              <p className="font-semibold mt-[20px]">
                View analytics of subscription expenses
              </p>
              <p className="font-light text-xs">
                Users can view analytics and monthly insights of their
                subscription expenses to keep track of how much money is being
                spent on their subscriptions.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="max-w-[400px]">
              <img src="/assets/cut-phone.png" />
              <p className="font-semibold mt-[20px]">
                Choose preferred currency choice
              </p>
              <p className="font-light text-xs">
                Users can select their preferred currency choice to know the
                value of their subscription in their local currency or other
                currencies.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="max-w-[400px]">
              <img src="/assets/phone-hand.png" />
              <p className="font-semibold mt-[20px]">
                Get subscription discount/promo recommendations
              </p>
              <p className="font-light text-xs">
                Users have the opportunity to select between a professional or
                student category, to get discount/promo recommendations based on
                their status.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        <h4 className="text-[21px]  font-bold mb-[10px] leading-[27px]">
          Information Architecture/Site Map
        </h4>
        <p className="text-sm leading-[26px] font-normal">
          Using the key features highlighted, I created a site map to help
          define the overall structure and architecture of the Sub.ly app, in a
          way that would be logical and seamless for users to navigate.
        </p>
        <img
          src="/assets/process-flow.png"
          className="w-full mt-[60px] mb-[100px]"
        />
      </div>
      <div className="mt-[122px]">
        <h4 className="text-[21px]  font-bold mb-[10px] leading-[27px]">
          Low-fidelity Designs (Wireframes)
        </h4>
        <p className="text-sm leading-[26px] font-normal mb-[60px]">
          Taking all the information I had gathered, and using the site map
          created, I started to work on the interface of the app by designing
          low-fidelity screens, in form of wireframes, which would eventually be
          prototyped and tested by users. Below are a few screens from the
          low-fidelity designs:
        </p>
        <div className="relative py-[80px] px-6 md:px-[138px] mb-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <div className="flex justify-center">
              <img src="/assets/onboarding-1.png" />
            </div>
            <div className="flex justify-center">
              <img src="/assets/onboarding-2.png" />
            </div>
            <div className="flex justify-center">
              <img src="/assets/onboarding-3.png" />
            </div>
            <div className="flex justify-center">
              <img src="/assets/onboarding-4.png" />
            </div>
            <div className="flex justify-center">
              <img src="/assets/onboarding-5.png" />
            </div>
            <div className="flex justify-center">
              <img src="/assets/onboarding-6.png" />
            </div>{" "}
            <div className="flex justify-center">
              <img src="/assets/onboarding-7.png" />
            </div>
            <div className="flex justify-center">
              <img src="/assets/onboarding-8.png" />
            </div>
          </div>
        </div>
      </div>
      <p className=" text-clip text-sm font-[800]">PROTOTYPE & TEST</p>
      <h3 className="text-[30px] font-bold ">Building a Prototype to Test</h3>
      <p className="text-sm leading-[26px] mb-[50px]">
        Using the low-fidelity screens designed, I worked on a prototype with
        limited functionality to carry out usability tests and identify any
        changes or improvements that needed to be made.{" "}
      </p>
      <h3 className="text-[30px] font-bold">Moderated Usability Testing</h3>
      <p className="text-sm leading-[26px]">
        Using the moderated usability testing method, I recruited the target
        users that were interviewed during the initial research process, and had
        them complete a series of tasks while interacting with the app. This
        method enabled me observe and take notes on the participants&apos;
        actions and any difficulties they encounter. <br /> The key goals of
        this study were as follows:
      </p>
      <ul className="text-sm list-disc list-inside">
        <li>
          To evaluate the app’s ease of use and identify any usability issues
        </li>
        <li>
          To measure how successfully users can complete the tasks on the app
        </li>
        <p className="mt-[20px]">
          Some of the tasks that the participants were required to complete
          include:
        </p>
        <li>Add a new subscription manually and automatically</li>
        <li>Add a payment method</li>
        <li>View insights of subscription expenses</li>
        <li>Select a preferred currency</li>{" "}
      </ul>
      <ul className="list-inside list-disc mb-[50px]">
        <li className="list-inside list-disc text-lg font-extrabold  mt-[33px]">
          insights
          <p className="mt-3 text-sm font-normal">
            The feedback gotten from this study provided insights into how the
            average user would perceive the app and use it. As such, I took note
            of the feedback and observations during the test and used that to
            identify patterns and common issues. Some of the prioritized
            insights that were to be worked on in the high-fidelity designs
            include:
          </p>
        </li>
        <li className="list-disc list-inside  text-sm">
          {" "}
          Giving users the option to scan their cards when adding payment
          methods
        </li>
        <li className="list-disc list-inside text-sm">
          On the payment methods screen, when a payment method is selected all
          subscriptions under that payment method should be listed
        </li>
      </ul>
      <div>
        <h4 className="text-[21px]  font-bold mb-[10px] leading-[27px]">
          Style Guide & UI Components
        </h4>
        <p className="text-sm leading-[26px] font-normal mb-[60px]">
          To help outline the visual design elements and principles for Sub.ly,
          a style guide was created. I also included UI components to ensure the
          app has a consistent visual language.
        </p>

        <img src="/assets/ui-components.png" className="mb-[100px] mx-auto" />
        <h4 className="text-[21px]  font-bold mb-[10px] leading-[27px]">
          High-fidelity Designs & Prototype
        </h4>
        <p className="text-sm leading-[26px] font-normal mb-[33px]">
          Once the style guide was completed, I proceeded with the high-fidelity
          designs. Using the insights obtained from the initial usability study,
          I was able to make changes and improvements to the app&apos;s design,
          user interface, and overall user experience.
        </p>
        <ul className="list-inside list-disc mb-[50px]">
          <li className="list-inside list-disc text-lg font-extrabold">
            Add subscriptions automatically or manually
            <p className="text-sm leading-[26px] mb-[60px] font-normal">
              Users can simply add a subscription by logging in to their account
              of that service (so the app automatically fetches the details of
              that subscription), or by entering the details manually.{" "}
            </p>
            <img
              src="/assets/add-automation.png"
              className="mb-[73px] w-full"
            />
          </li>
          <li className="list-inside list-disc text-lg font-extrabold">
            Set subscription renewal reminder
            <p className="text-sm leading-[26px] mb-[60px] font-normal">
              Users can simply add a subscription by logging in to their account
              of that service (so the app automatically fetches the details of
              that subscription), or by entering the details manually.{" "}
            </p>
            <img src="/assets/sub-reminder.png" className="mb-[73px] w-full" />
          </li>
          <li className="list-inside list-disc text-lg font-extrabold">
            Add card or other payment methods
            <p className="text-sm leading-[26px] mb-[60px] font-normal">
              Keeping track of multiple subscriptions and the payment methods
              associated with them can be difficult. To help users stay
              organized, this feature allows them to manually input and
              associate specific payment methods with each of their
              subscriptions. This way, a user will always know which payment
              method is being used for each subscription.
            </p>
            <img src="/assets/card-payments.png" className="mb-[73px] w-full" />
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
            Choose preferred currency choice
            <p className="text-sm leading-[26px] mb-[60px] font-normal">
              Users can select their preferred currency choice to know the value
              of their subscription in their local currency or other currencies.
              By having the ability to select their preferred currency, users
              can have an easy understanding of the price of the subscriptions
              they are purchasing. This feature can also help users avoid any
              confusion or issues that may arise when dealing with different
              currencies.
            </p>
            <img
              src="/assets/currency-phone.png"
              className="mb-[73px] w-full"
            />
          </li>
          <li className="list-inside list-disc text-lg font-extrabold">
            Get subscription discount/promo recommendations
            <p className="text-sm leading-[26px] mb-[60px] font-normal">
              Users have the opportunity to select between a professional or
              student category, to get discount/promo recommendations based on
              their status. This feature would be especially beneficial for
              students, as they may be able to take advantage of special student
              discounts or promotions that are not available to the general
              public.
            </p>
            <img
              src="/assets/discount-phone.png"
              className="mb-[73px] w-full"
            />
          </li>
          <li className="list-inside list-disc text-lg font-extrabold">
            Other pages
            <img
              src="/assets/other-1.png"
              className="mb-[73px] mt-[45px]  w-full"
            />
            <img src="/assets/other-2.png" className="mb-[73px] w-full" />
            <img src="/assets/other-3.png" className="mb-[73px] w-full" />
            <img src="/assets/other-4.png" className="mb-[73px]  w-full" />
            <img src="/assets/other-5.png" className="mb-[73px]  w-full" />
          </li>
        </ul>
        <h4 className="text-[21px]  font-bold mb-[10px] leading-[27px]">
          Prototype Links
        </h4>
        <ul className="list-inside text-sm list-disc mb-[100px]">
          <li className="underline">
            <a href="#">New user</a>
          </li>
          <li className="underline">
            <a href="#">Already-existing user</a>
          </li>
        </ul>
        <h4 className="text-[21px]  font-bold mb-[10px] leading-[27px]">
          Carrying out final usability tests
        </h4>
        <p className="text-sm leading-[26px]  mb-[100px]">
          Following the completion of the high-fidelity designs, a final round
          of usability tests was conducted to gather feedback from users and
          stakeholders. Based on my observations and interactions with test
          participants, it was clear that the product met and exceeded their
          expectations and was ready to move forward to the development stage.
        </p>
      </div>
      <div className="bg-[#F1F5FF] rounded-[24px] py-[107px] px-[6px] md:px-[164px] mb-[100px]">
        <p className=" text-clip text-sm font-[800]">CONCLUSION</p>
        <h1 className="text-subhead dark:text-black">Reflection</h1>
        <p className="mt-6 dark:text-black">
          The feedback from users and stakeholders was overwhelmingly positive,
          with many praising the app's modern visual design and ease of use. I
          particularly enjoyed working on this project for two reasons: first,
          it’s the first of its kind in Nigeria, and second, during the research
          phase, I discovered that it is a product that would be extremely
          beneficial to a large number of people (myself included), and I’m
          eagerly awaiting its official launch.
          <br />
          <br />A few things I learnt while working on this project:
        </p>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 mt-[25px]">
        <h4 className="text-[21px]  font-bold mb-[10px] leading-[27px] dark:text-black">
        Involving users in the design process is extremelyyy important!
        </h4>
        <p className="dark:text-black">
        You can create successful products that are tailored to the needs of the users and provide a satisfying user experience by making the design process user-centered. In addition to the business goals provided by stakeholders, involving users from the beginning of the research process was extremely beneficial, as much of the feedback received from users validated the business goals and helped determine which features should be prioritized. I was able to account for different perspectives and needs, such as professionals and students, by gathering feedback from a diverse user group.
        </p>
        <h4 className="text-[21px]  font-bold mb-[10px] leading-[27px] dark:text-black">
        Interaction and motion design can assist in providing visual cues to users.
        </h4>
        <p className="dark:text-black">
        Visual cues are an integral part of UX design because they help users understand the interface by providing clear and consistent feedback, indicating interactive elements, and making it easier for users to navigate the interface. A key observation during the usability studies was that the users didn’t require assistance while testing the prototypes, because of the visual cues provided by the interaction and motion designs included in the app.
        </p>
        </div>
      </div>
    </div>
  );
};

export default subly;
