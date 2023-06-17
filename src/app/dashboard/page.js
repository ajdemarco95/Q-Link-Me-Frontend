"use client";
import LinkContainer from "./links-components/LinkContainer";

export default function page() {
  const linkArr = [
    {
      desc: "Check out my Instagram lore",
      url: "www.instagram.com/ajdemarco",
      id: 1,
    },
  ];

  return (
    <>
      <LinkContainer linkArr={linkArr} />
    </>
  );
}
