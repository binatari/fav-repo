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
          <p className=" text-clip text-normal font-[800]">PROJECT OVERVIEW</p>
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
        <p className="text-sm leading-[26px] text-center mt-[50px] mb-[100px]" >
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
    </div>
  );
};

export default subly;
