import LinkCard from "./LinkCard";
function LinkContainer(props) {
  const { linkArr } = props;

  return (
    <div className="container">
      {linkArr.map((link, index) => (
        <LinkCard key={index} link={link} />
      ))}
      <button className="btn btn-primary btn-block mt-5">
        Add new link...
      </button>
    </div>
  );
}

export default LinkContainer;

//   {
//     linkArr.map((link, index) => (
//       <LinkCard key={index} link={link} />
//     ));
//   }
