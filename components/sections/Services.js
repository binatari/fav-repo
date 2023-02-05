import React from "react";

const cards = [
  {
    image: "/assets/semi-circle.svg",
    dark_image: "/assets/semi-circle-dark.svg",
    head: "What i can do for you",
    body: "Bring products to life, using a user-centered design approach. Here are the services I provide:",
    list: ["UI/UX Design", "Graphic Design", "Brand Design"],
  },
  {
    image: "/assets/triangle.svg",
    dark_image: "/assets/triangle-dark.svg",
    head: "Applications I’m fluent in",
    body: "Every designer needs the right tools to get the job done. Here are a few of my go-to applications:",
    list: ["Figma", "Adobe Creative Suite", "Canva"],
  },
  {
    image: "/assets/ball-head.svg",
    dark_image: "/assets/ball-head-dark.svg",
    head: "What you can expect",
    body: "I don’t just design beautiful products,I also ensure the best user experiences. Users first, design second.",
    list: ["Innovative and usable products", "Creative visual designs", "Iconic brand identities"],
  },
];
const Services = () => {
  return (
    <div className="mb-[210px]">
      <p className="text-center text-clip text-normal font-[800]">SERVICES</p>
      <h3 className="text-subhead text-center mt-[20px] mb-[80px]">
        Building fascinating products, <br /> with great user experiences.
      </h3>
<div className="flex flex-col md:flex-row justify-center items-center gap-8">
{
        cards.map(({image, head, body, list, dark_image}, i)=>(
          <div key={i} className='md:w-1/3 w-full'>
            <img src={image} className='h-[4rem] dark:hidden'/> 
            <img src={dark_image} className='h-[4rem] hidden dark:block'/> 
            <h4 className="text-[21px] font-bold mt-[18px] mb-[11px]">{head}</h4>
            <p className="mb-[11px]">{body}</p>
            <ul>
             {
                list.map((item, i)=>(
                    <li key={i} className='list-disc'>{item}</li>
                ))
             }
            </ul>
          </div>  
        ))
      }
</div>
   
    </div>
  );
};

export default Services;
