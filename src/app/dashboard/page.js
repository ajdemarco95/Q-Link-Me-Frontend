"use client";
import LinkContainer from "./links-components/LinkContainer";
import PhoneContainer from "./phone-components/PhoneContainer";
import { useState } from "react";

export default function page() {
  const linkArr = [
    {
      desc: "Check out my Instagram lore",
      url: "www.instagram.com/ajdemarco",
      id: 1,
    },
    {
      desc: "Check out my Instagram lore",
      url: "www.instagram.com/ajdemarco",
      id: 2,
    },
    {
      desc: "Check out my Instagram lore",
      url: "www.instagram.com/ajdemarco",
      id: 3,
    },
    {
      desc: "Check out my Instagram lore",
      url: "www.instagram.com/ajdemarco",
      id: 4,
    },
    {
      desc: "Check out my Instagram lore",
      url: "www.instagram.com/ajdemarco",
      id: 5,
    },
    {
      desc: "Check out my Instagram lore",
      url: "www.instagram.com/ajdemarco",
      id: 6,
    },
    {
      desc: "Check out my Instagram lore",
      url: "www.instagram.com/ajdemarco",
      id: 2,
    },
    {
      desc: "Check out my Instagram lore",
      url: "www.instagram.com/ajdemarco",
      id: 3,
    },
    {
      desc: "Check out my Instagram lore",
      url: "www.instagram.com/ajdemarco",
      id: 4,
    },
    {
      desc: "Check out my Instagram lore",
      url: "www.instagram.com/ajdemarco",
      id: 5,
    },
    {
      desc: "Check out my Instagram lore",
      url: "www.instagram.com/ajdemarco",
      id: 6,
    },
  ];
  const [userLinks, setUserLinks] = useState(linkArr);

  return (
    <>
      <div className="flex">
        <section className="w-6/12">
          <LinkContainer linkArr={userLinks} />
        </section>
        <section className="flex w-6/12 justify-center">
          <PhoneContainer linkArr={userLinks} />
        </section>
      </div>
    </>
  );
}
