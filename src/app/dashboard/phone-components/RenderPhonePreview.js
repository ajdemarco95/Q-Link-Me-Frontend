import profilePic from "../../../../mock/profile-pic.png";
import Image from "next/image";
import SocialLinks from "./section-components/SocialLinks";
function RenderPhonePreview(props) {
  return (
    <div className=" bg-gray-700">
      <div className="flex flex-col justify-center pt-20 mx-3">
        <div className="w-full flex justify-center">
          <Image alt="avatar" className="rounded-full mb-3" src={profilePic} />
        </div>
        <div className="text-center text-white mb-3 ">
          <h1 className="">@ajdemarco95</h1>
          <h3>Add your bio here!</h3>
        </div>
        <SocialLinks socialLinks={props.socialLinks} />
        <div className="flex flex-col place-content-around my-10 w-full items-center">
          {props.linkArr &&
            props.linkArr.map((item, index) => {
              return (
                <button
                  key={index}
                  className="text-center flex justify-between items-center h-auto relative p-3 bg-slate-200 w-full mb-3 rounded-xl hover:bg-white"
                >
                  <Image
                    className="w-[46px] h-[46px]  left-3"
                    src={profilePic}
                    alt="icon link"
                  />
                  <div className="w-[50%] overflow-hidden">{item.desc}</div>
                  <div className="w-[15%] right-3"> </div>
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default RenderPhonePreview;
