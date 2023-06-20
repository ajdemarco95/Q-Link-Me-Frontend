import SocialLink from "./social-components/SocialLink";
function SocialLinks() {
  return (
    <div className="h-10 flex items-center justify-center [&>*]:mr-3">
      <SocialLink network="instagram" color="black" />
      <SocialLink network="twitter" color="black" />
    </div>
  );
}

export default SocialLinks;
