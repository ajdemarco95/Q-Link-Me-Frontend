import RenderPhonePreview from "./RenderPhonePreview";
function PhoneContainer(props) {
  return (
    <div className="border-[13px] rounded-[50px] border-black w-[390px] h-[844px] scale-[.70] overflow-x-hidden  -translate-y-24 ">
      <RenderPhonePreview linkArr={props.linkArr} />
    </div>
  );
}

export default PhoneContainer;
