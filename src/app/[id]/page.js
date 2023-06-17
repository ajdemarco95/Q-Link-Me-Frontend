import LinkContainer from "./components/LinkContainer";
import Image from "next/image";
import profilePic from "../../../mock/profile-pic.png";

async function getData(id) {
  const api = `http://localhost:1337/api/users?filters[username][$eq]=${id}&populate[profile][populate]=*`;
  const res = await fetch(api, { cache: "no-store" });
  const data = res.json();
  return data;
}

export default async function page({ params }) {
  const response = await getData(params.id);
  const pageData = response[0];

  if (pageData) {
    return (
      <>
        <div className="w-screen flex justify-center z-10 absolute mt-10 text-white">
          <div className="text-center w-9/12">
            <div className="flex justify-center">
              <Image
                src={`http://localhost:1337${pageData.profile.avatar.url}`}
                width={pageData.profile.avatar.width}
                height={pageData.profile.avatar.height}
                alt="profile-picture"
                className="rounded-full mb-3"
              />
            </div>
            <h1>@{pageData.username}</h1>
            <h3>{pageData.profile.bio}</h3>
            <br />
            <LinkContainer links={pageData.profile.links} />
          </div>
        </div>
        <div className="bg-neutral-600 w-screen h-screen "></div>
      </>
    );
  } else {
    return (
      <>
        <div className="w-screen flex justify-center z-10 absolute mt-10 text-white">
          <div className="text-center w-9/12">
            <div className="flex justify-center">
              {/* <Image
                src={}
                alt="profile-picture"
                placeholder="blur"
                priority
                className="rounded-full mb-3"
              /> */}
            </div>
            <h1>@{params.id}</h1>
            <h3>Is currently available!</h3>
            <br />
          </div>
        </div>
        <div className="bg-neutral-600 w-screen h-screen "></div>
      </>
    );
  }
}
