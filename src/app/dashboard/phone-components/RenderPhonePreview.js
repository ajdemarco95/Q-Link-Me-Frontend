import profilePic from "../../../../mock/profile-pic.png";
import Image from "next/image";
function RenderPhonePreview(props) {
  return (
    <div className="">
      <div className="flex flex-col justify-center mt-20">
        <div className="w-full flex justify-center">
          <Image className="rounded-full mb-3" src={profilePic} />
        </div>
        <div className="text-center">
          <h1>@Username</h1>
          <h3>Add your bio here!</h3>
        </div>
        <div className="flex flex-col place-content-around my-10">
          {props.linkArr &&
            props.linkArr.map((item, index) => {
              return (
                <button
                  key={index}
                  className="w-full font-semibold py-2 px-4 border rounded hover:bg-slate-500 mb-3"
                >
                  <div>Instagram</div>
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default RenderPhonePreview;
