function LinkContainer(props) {
  const linkArr = props.links;

  return (
    <div>
      {linkArr.map((item, index) => (
        <div className="flex place-content-around mb-5">
        <button 
        className="w-full bg-transparent hover:bg-white font-semibold hover:text-black py-2 px-4 border border-white rounded" key={index}>
          <div>{item.title}</div>
        </button>
        </div>

      ))}
    </div>
  );
}

export default LinkContainer;
