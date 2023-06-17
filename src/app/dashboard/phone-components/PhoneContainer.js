import RenderPhonePreview from "./RenderPhonePreview";
function PhoneContainer(props) {
  return (
    <div className="border-4 rounded-[50px] border-black w-[390px] h-[844px] scale-75 overflow-x-hidden overflow-y-scroll">
      <RenderPhonePreview linkArr={props.linkArr} />
    </div>
  );
}

export default PhoneContainer;
