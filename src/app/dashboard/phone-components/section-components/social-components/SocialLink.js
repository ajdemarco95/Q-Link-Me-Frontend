import SocialIcon from "./SocialIcon";
function SocialLink(props) {
  const { network, color, link } = props;

  return (
    <a className="rounded-md bg-white [&>*]:p-1 hover:bg-slate-500" href={link}>
      <SocialIcon network={network} color={color} />
    </a>
  );
}

export default SocialLink;
