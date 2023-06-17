function LinkCard(props) {
  const { link } = props;

  return (
    <div className=" outline-dashed p-3 mb-5 cursor-grab select-none">
      <div className="link-content flex justify-between items-center">
        <div className="icon">Grab Icon</div>
        <div className="text whitespace-nowrap overflow-hidden  overflow-ellipsis max-w-[20%] ">
          {link.desc}
        </div>
        <div className="text whitespace-nowrap overflow-hidden  overflow-ellipsis max-w-[20%]">
          {link.url}
        </div>
        <div className="actions">
          <button className="btn btn-outline btn-warning mr-3">Edit</button>
          <button className="btn btn-outline btn-error">Remove</button>
        </div>
      </div>
    </div>
  );
}

export default LinkCard;
