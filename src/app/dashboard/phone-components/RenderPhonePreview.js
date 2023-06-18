import profilePic from "../../../../mock/profile-pic.png";
import Image from "next/image";
function RenderPhonePreview(props) {
  return (
    <div className=" bg-slate-500 h-full">
      <div className="flex flex-col justify-center pt-20">
        <div className="w-full flex justify-center">
          <Image alt="avatar" className="rounded-full mb-3" src={profilePic} />
        </div>
        <div className="text-center text-white">
          <h1>@ajdemarco95</h1>
          <h3>Add your bio here!</h3>
        </div>
        <div className="flex flex-col place-content-around my-10 w-full items-center">
          {props.linkArr &&
            props.linkArr.map((item, index) => {
              return (
                <button
                  key={index}
                  className="w-4/5 btn font-semibold py-2 px-4 border rounded mb-4"
                >
                  <div>{item.linkTitle}</div>
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default RenderPhonePreview;
