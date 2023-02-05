import React from "react";

const collaborativePlaylists = () => {
  return (
    <div className="pt-[120px]">
      <h5 className="text-center text-subhead font-bold">
        Introducing collaborative playlists on Apple Music
      </h5>
      <p className="text-center text-[#7777] text-sm mt-[21px] mb-[160px]">
        Product design / 2022
      </p>
      <img src="/assets/music-banner.png" className="w-full" />
      <div className=" justify-around   flex-wrap flex items-center py-[111px]">
        <div className="w-full md:w-1/2">
          <p className=" text-clip text-sm font-[800]">PROJECT OVERVIEW</p>
          <h1 className="text-subhead ">
            A feature that allows multiple people edit shared playlists on Apple
            Music.
          </h1>

          <p className="mt-6">
            Music, they say, is meant to be shared. Some people believe that
            sharing music is a form of love. As a result, most music platforms
            now allow users to create and share playlists with friends and loved
            ones. The collaborative playlist feature, which allows multiple
            people to manage and collaborate (i.e. add, remove, and reorder
            songs) on playlists, is a major feature that goes hand in hand with
            shared playlists. Collaborating on playlists, however, is still not
            possible on the Apple Music platform.
            <br />
            <br />
            This study assesses this limitation and introduces a new
            collaborative playlist feature to Apple Music, which allows users
            and their friends to manage and collaborate on shared playlists
            together.
            <br />
            <br />
            P.S. - This is a personal project with no connections to Apple
            Music. I'd had so many frustrating experiences with the current
            design of the playlist feature that I decided to conduct a case
            study to solve my problem (and that of others who may have
            encountered it).
          </p>
        </div>
        <div className="w-full md:w-1/2 "></div>
      </div>
      <div>
        <img src="/assets/music-app.png" className="w-full" />
      </div>
      <div className="py-[100px]">
        <h3 className="text-[30px] font-bold">Problem Statement</h3>
        <p className="pt-2 text-sm">
          Creating playlists with friends is one of the best ways to enjoy your
          individual music tastes together, and this has been incorporated into
          pretty much all music platforms today using the shared playlist
          feature. However, certain music platforms still have their limitations
          when it comes to shared playlists, one of which happens to be Apple
          Music. Apple Music lets users create and share playlists with other
          subscribers, but there’s no way for multiple people to edit the same
          playlist — so only the playlist creator can add or remove songs from
          it. As a result, most people are abandoning the app in favor of other
          music platforms such as Spotify and YouTube Music. This study focuses
          on addressing this issue by introducing a collaborative playlist
          feature to Apple Music, which allows users and their friends to manage
          and collaborate on shared playlists together.
        </p>
        <h3 className="text-[30px] font-bold mt-10">Goals and Objectives</h3>
        <div className="pt-2 text-sm">
          Based on the initial assumption made in the problem statement, the
          question to ask is: “How can we improve the shared playlist feature,
          thus increasing user engagement on the app?”
          <br />
          <br />
          The major goal and objective of this study is:
          <br />
          <p className="text-[30px] mt-5 playfair text-[#757575] italic text-center font-bold">
            “To enable multiple people manage and collaborate <br /> (add,
            remove, and reorder songs) on shared playlists.”
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-[30px] font-bold text-center mb-[50px]">
          The Lean UX Process
        </h3>
        <div className="flex justify-center">
          <img src="/assets/thinking-process.svg" />
        </div>
        <p className="text-sm leading-[26px] text-center mt-[50px] mb-[100px]">
          For this study, I applied the Lean UX Process. Using this process
          enabled me empathize with users, and validate my initial
          assumption/observation from the research results obtained. This aided
          me in brainstorming a solution to the problem by introducing a
          collaborative playlist feature, which was tested by users to ensure it
          met their needs and expectations.{" "}
        </p>
      </div>
      <div className="mb-[50px]">
        <p className=" text-clip text-sm font-[800]">THINK</p>
        <h3 className="text-[30px] font-bold ">Assumptions</h3>
        <p className="text-sm leading-[26px]">
          To kickstart the project, I started by highlighting my assumption
          which was:{" "}
        </p>
        <p className="text-[30px] mt-5 playfair text-[#757575] italic text-center font-bold">
          “Many users are abandoning Apple Music in favour of other music
          platforms because there is no way for multiple people to collaborate
          on or edit shared playlists.”
        </p>
        <h4 className="text-[21px] font-bold leading-[27px] mt-[75px]">
          Primary Research
        </h4>
        <ul className="">
          <br />
          <li className="list-inside list-disc text-lg font-extrabold">
            User Interviews
            <br />
            <p className="text-sm leading-[26px] mt-[11px] font-normal">
              To better understand the problem and determine whether solving it
              would be impactful, I went ahead to interview
              <span className="font-bold"> 7 existing users</span> of Apple
              Music. The users interviewed were between the{" "}
              <span className="font-bold">ages of 16 and 30</span> , to get a
              variety of perspectives and also because they were more likely to
              use the shared playlist feature. I asked open-ended questions
              during these interviews in order to learn as much as possible
              about their experiences.
            </p>
          </li>
        </ul>
        <ul className="list-disc list-inside mt-[25px] italic text-sm leading-[26px]">
          <p className="text-sm not-italic mt-[10px]">
            Some questions asked during the interviews
          </p>
          <li>Some questions asked during the interviews:</li>
          <li>How often do you create playlists on the app?</li>
          <li>
            Do you currently have any shared playlists with family, friends
            etc.?
          </li>
          <li>
            Could you share your overall experience creating playlists on the
            app?
          </li>
          <li>
            Have you ever wanted to add songs to a shared playlist but couldn’t?
          </li>
          <li>
            What do you think about having a collaborative playlist feature
            introduced on the app?
          </li>
          <li>
            What other elements/features would you like to see included in this
            feature that would be beneficial to you?
          </li>
        </ul>
        <div className="my-[60px]">
          <img className="mx-auto" src="/assets/apple-reseaech.png" />
        </div>
      </div>
      <ul className="">
        <li className="list-inside list-disc text-lg font-extrabold">
          User Persona
          <br />
          <p className="text-sm leading-[26px] font-normal">
            After compiling the research findings, I created a persona that
            accurately represented the users affected by this issue. This
            persona continued to guide my decisions going forward, ensuring that
            my designs were user-centered.
          </p>
        </li>
      </ul>
      <div className="w-full my-[60px]">
        <img src="/assets/music-persona.png" className="w-full" />
      </div>
      <h4 className="text-[21px] mt-[100px] font-bold mb-[10px] leading-[27px]">
        Hypothesis
      </h4>
      <ul className="">
        <p className="text-sm leading-[26px] font-normal">
          Having validated my assumption, I decided to put it to the test by
          developing a hypothesis. To develop my hypothesis, I combined the
          desired outcome, the target user (persona), and the specific feature
          that would solve the problem. The hypothesis is as follows:
        </p>
        <p className="text-[30px] mt-5 playfair text-[#757575] italic text-center font-bold">
          “We (or, in this case, I) believe that allowing multiple subscribers
          to collaborate on or edit shared playlists would significantly
          increase user engagement on Apple Music.”
        </p>
      </ul>
      <div className="mt-[120px]">
        <p className=" text-clip text-sm font-[800] mb-5">MAKE</p>
        <h4 className="text-[30px] font-bold mb-[10px] leading-[27px]">
          Minimum Viable Product (MVP)
        </h4>
        <p className="text-sm leading-[26px] mb-[50px] font-normal">
          With the hypothesis defined, the next step was to translate it into an
          actual product that would provide value to users while also solving
          their problem. To accomplish this, I introduced the collaborative
          playlist feature, which allows multiple people to collaborate on and
          edit shared playlists.
        </p>
        <p className="text-[21px] font-bold leading-[27px]">
          The Collaborative Playlist Feature
        </p>
        <p className="text-sm mt-[10px] ">
          I broke down this feature and highlighted a number of requirements
          that must be met. Using the MOSCOW method, I was able to determine
          which of these requirements would be prioritized. Below are the
          prioritized requirements/functionalities. (Click on any of the
          features to find out more about how they were incorporated into the
          design)
        </p>
        <div className="grid max-w-[878px]  mx-auto grid-cols-1 gap-12 justify-center md:grid-cols-2 mt-[60px]">
          <div className="flex flex-col items-center ">
            <div className="max-w-[400px]">
              <img src="/assets/pink-collaborator.png" />
              <p className="font-semibold mt-[20px]">
                Users can create playlist and invite others
              </p>
              <p className="font-light text-xs">
                A user can create a playlist and invite others to be editors
                (subscribers who can make changes to the playlist) or listeners
                (subscribers with no edit access).{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="max-w-[400px]">
              <img src="/assets/pink-hand.png" />
              <p className="font-semibold mt-[20px]">
                Owners and editors can edit playlist
              </p>
              <p className="font-light text-xs">
                Owners and editors of the collaborative playlist can edit it by
                adding, deleting, and reordering songs, as well as changing the
                name, description, and cover image.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="max-w-[400px]">
              <img src="/assets/pink-mid.png" />
              <p className="font-semibold mt-[20px]">
                Owners have complete control over playlists
              </p>
              <p className="font-light text-xs">
                The creator of a collaborative playlist is the only person who
                can do things like share/invite others, assign roles, revoke
                access, and delete the playlist.{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="max-w-[400px]">
              <img src="/assets/pink-top.png" />
              <p className="font-semibold mt-[20px]">
                Members of a playlist are notified with new changes
              </p>
              <p className="font-light text-xs">
                When a collaborative playlist is modified or a new person is
                added to the playlist, all members of that playlist are
                notified.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[122px]">
        <h4 className="text-[21px]  font-bold mb-[10px] leading-[27px]">
          Low-fidelity Designs (Wireframes)
        </h4>
        <p className="text-sm leading-[26px] font-normal mb-[60px]">
          Using these prioritized features, I began working on the app's
          interface by creating low-fidelity screens in the form of wireframes,
          which were eventually prototyped and tested. Here are a few screens
          from the wireframes:
        </p>
        <div className="relative bg-[#FFF4F7] py-[80px] px-6 md:px-[138px] mb-[120px]">
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
      <div>
        <h4 className="text-[21px]  font-bold mb-[10px] leading-[27px]">
          High-fidelity Designs & Prototype
        </h4>
        <p className="text-sm leading-[26px] font-normal mb-[33px]">
          After finishing the wireframes, I conducted an initial usability study
          to validate the MVP's core and ensure I was on the right track. The
          feedback from this preliminary usability study assisted in refining
          the final high-fidelity designs and prototype.
        </p>
        <ul className="list-inside list-disc mb-[50px]">
          <li className="list-inside list-disc text-lg font-extrabold">
            Introducing the collaborative playlist feature
            <p className="text-sm leading-[26px] mb-[60px] font-normal">
              During the initial usability study for the low-fidelity prototype,
              users frequently commented on the lack of a tutorial to guide them
              through the process of creating a collaborative playlist. This
              feedback was taken note of, and I made sure to include in the
              high-fidelity designs a tutorial user flow on how to use the new
              feature.
            </p>
            <img src="/assets/collab.png" className="mb-[73px] w-full" />
          </li>
          <li className="list-inside list-disc text-lg font-extrabold">
            Users can create a playlist and invite others
            <p className="text-sm leading-[26px] mb-[60px] font-normal">
              A user can create a playlist and invite others to be editors
              (subscribers who can make changes to the playlist) or listeners
              (subscribers with no edit access). The playlist then becomes a
              collaborative playlist.
            </p>
            <img src="/assets/play-invite.png" className="mb-[73px] w-full" />
          </li>
          <li className="list-inside list-disc text-lg font-extrabold">
            Owners and editors can edit playlists
            <p className="text-sm leading-[26px] mb-[60px] font-normal">
              Owners and editors (subscribers who can make changes) of the
              collaborative playlist can edit it by adding, deleting, and
              reordering songs, as well as changing the name, description, and
              cover image.
            </p>
            <img src="/assets/play-restrict.png" className="mb-[73px] w-full" />
          </li>
          <li className="list-inside list-disc text-lg font-extrabold">
            Owners have complete control over playlists
            <p className="text-sm leading-[26px] mb-[60px] font-normal">
              The creator of a collaborative playlist is the only person who can
              do things like share/invite others, assign roles, revoke access,
              and delete the playlist.
            </p>
            <img src="/assets/phone-coll.png" className="mb-[73px] w-full" />
          </li>
        </ul>
        <div className=" rounded-[24px] py-[107px] px-[6px] mb-[100px]">
          <p className=" text-clip text-sm font-[800]">CHECK</p>
          <h1 className="text-subhead ">Testing MVP</h1>
          <p className="mt-6 text-sm">
            After completing the MVP, the next step was to test it with the
            users who had been interviewed during the research stage. The
            feedback from the tests would provide a better understanding of how
            users would use the new feature, and would aid in carrying out
            necessary improvements and iterations.
            <br />
            <br />
          </p>
          <div className="grid gap-5 grid-cols-1  mt-[25px]">
            <h4 className="text-[21px]  font-bold mb-[10px] leading-[27px]">
              Moderated Usability Testing
            </h4>
            <div className="text-sm">
            I used the moderated usability testing method to conduct the tests. This allowed me to pay close attention to the body language of users as they tested the prototype, as well as get candid feedback from them through in-depth conversations and interactions. The following were the study's objectives:

              <ul className="text-sm font-normal">
                <li className="list-inside list-disc text-sm ">
                To ensure that the MVP was validated and that it solved the problems of the users
                </li>
                <li className="list-inside list-disc text-sm ">
                To ensure that users had a smooth experience while using the collaborative playlist feature.
                </li>
              </ul>
              <p className="mt-5">
              During the tests, users were divided into two groups: playlist creators (owners of the playlists) and editors (subscribers with edit access, i.e., those who could make changes to the playlist). Each of these users was asked to try out various actions with the prototype while I observed how they interacted with it.
              </p>
              <p className="text-[14px] mt-5 font-extrabold mb-[10px] leading-[26px]">
                PLAYLIST CREATORS
              </p>
              <ul className="">
                <li className="list-inside list-disc text-sm ">
                  Create a playlist
                </li>
                <li className="list-inside list-disc text-sm ">
                  Invite collaborators to the playlist created
                </li>
                <li className="list-inside list-disc text-sm ">
                  Remove collaborators from playlist
                </li>
                <li className="list-inside list-disc text-sm ">
                  Edit a playlist (either add, delete, reorder songs, change
                  playlist name, description, or cover image)
                </li>
              </ul>
              <p className="text-[14px] mt-5  font-extrabold mb-[10px] leading-[26px]">
                EDITORS
              </p>
              <ul className="">
                <li className="list-inside list-disc text-sm">
                  Edit a playlist (either add, delete, reorder songs, change
                  playlist name, description, or cover image)
                </li>
                <li className="list-inside list-disc mt-[33px] text-lg font-extrabold">
                Insights
            <p className="text-sm leading-[26px] mb-[60px] font-normal">
            Based on my observations and interactions with users during the testing process, it was clear that the MVP had met their expectations and they were completely satisfied. As a result, I concluded that my initial assumption and hypothesis had been validated.
            </p>
            
          </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFF4F7] no-black rounded-[24px] py-[107px] px-[6px] md:px-[164px] mb-[100px]">
        <p className=" text-clip dark:text-black text-sm font-[800]">CONCLUSION & NEXT STEPS</p>
        <h1 className="text-subhead dark:text-black">Reflection</h1>
        <p className="mt-6 dark:text-black">
        In my opinion, seeing the reactions of users during the final usability test was a sight to behold. There was a lot of relief and excitement about being able to collaborate on playlists, and this confirmed the hypothesis that allowing multiple users to collaborate on and edit shared playlists would result in a significant increase in user engagement on Apple Music. In terms of next steps, I don't have any other features I'd like to investigate just yet, but I'm really hoping Apple Music joins other music platforms in incorporating the collaborative playlist feature soon. It will undoubtedly go a long way!



          <br />
          <br />Overall, it was an interesting project, considering it was my first time exploring the Lean UX approach, so here are some key takeaways I gained:
        </p>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 mt-[25px]">
          <h4 className="text-[21px]  font-bold mb-[10px] leading-[27px] dark:text-black">
          Lean UX enables you to quickly create an MVP that can be tested.
          </h4>
          <p>
          Rather than wasting time trying to find the perfect solution, Lean UX allows you to concentrate on the minimum viable product. This allows you to test your assumptions from the start of the project and then make necessary iterations based on user feedback. So you don't have to try to solve all of the users' problems all at once; instead, start with a small product or feature that works, and then build on that over time.
          </p>
          <h4 className="text-[21px]  font-bold mb-[10px] leading-[27px] dark:text-black">
          Get out of your comfort zone every now and then.
          </h4>
          <p className="dark:text-black">
          As a designer, organization, or business, I believe it is critical to interact and engage with users and customers as frequently and consistently as possible. Working outside your comfort zone is essential for understanding your users and gaining a better understanding of the world. I especially commend companies like Figma for constantly interacting with their community/users, as this frequently drives some of the new features they release over time.
          </p>
          <h4 className="text-[21px]  font-bold mb-[10px] leading-[27px] dark:text-black">
          Don’t worry about being perfect, just start from somewhere.
          </h4>
          <p className="dark:text-black">
          This might seem unrelated, but using the Lean UX approach taught me that when you have big dreams or goals, you don’t necessarily have to do them all at once. Start by breaking them down into manageable actions, then choose one that interests you and will add value, and simply begin. Don't spend too much time worrying about being perfect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default collaborativePlaylists;
