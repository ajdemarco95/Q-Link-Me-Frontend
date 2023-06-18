"use client";
import LinkContainer from "./links-components/LinkContainer";
import PhoneContainer from "./phone-components/PhoneContainer";
import { useState } from "react";

export default function page() {
  const linkArr = [
    {
      linkTitle: "Instagram",
      desc: "Check out my Instagram lore laskdjfhaksdfhjkashdfkjakhjsdfhjkashjdfksjfkajfaksfhaksdjfasfakhs",
      url: "www.instagram.com/instagram",
      id: 1,
      isPrivate: "false",
      thumb: {
        src: "https://www.site.com/img.jpeg",
      },
    },
    {
      linkTitle: "Twitter",
      desc: "Check out my twitter and all the cool things I have on it !",
      url: "www.twitter.com/twitter",
      id: 2,
    },
    {
      linkTitle: "WhatsApp",
      desc: "Check out my WhatsApp!",
      url: "https://stackoverflow.com/questions/12710843/want-to-move-a-particular-div-to-right",
      id: 3,
    },
    {
      linkTitle: "Telegram",
      desc: "Check out my Instagram lore",
      url: "https://stackoverflow.com/questions/12710843/want-to-move-a-particular-div-to-right",
      id: 4,
    },
    {
      linkTitle: "Facebook",
      desc: "Check out my Instagram lore",
      url: "https://stackoverflow.com/questions/12710843/want-to-move-a-particular-div-to-right",
      id: 5,
    },
    {
      linkTitle: "Calendly",
      desc: "Check out my Instagram lore",
      url: "https://stackoverflow.com/questions/12710843/want-to-move-a-particular-div-to-right",
      id: 6,
    },
  ];

  const accountInfo = {
    username: "ajdemarco95",
    avatar: "URL",
  };

  const [userLinks, setUserLinks] = useState(linkArr);

  const deleteLink = (id) => {
    const newLinkArr = userLinks.filter((link) => link.id != id);

    setUserLinks(newLinkArr);
  };

  const updateLink = (id) => {};

  const addLink = (data) => {};

  if (userLinks.length) {
    return (
      <>
        <div className="flex">
          <section className="w-6/12">
            <LinkContainer
              linkArr={userLinks}
              deleteLink={deleteLink}
              updateLink={updateLink}
              addLink={addLink}
            />
          </section>
          <section className="flex w-6/12 justify-center">
            <PhoneContainer linkArr={userLinks} accountInfo={accountInfo} />
          </section>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Looks like you don't have any links yet!</h1>
        <p>set some up now</p>
      </>
    );
  }
}
