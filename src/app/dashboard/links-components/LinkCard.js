import TrashBtn from "./link-card-components/TrashBtn";
import EditBtn from "./link-card-components/EditBtn";
import SaveBtn from "./link-card-components/SaveBtn";
function LinkCard(props) {
  const { link, isEditing, handleEditClick, deleteLink, updateLink, addLink } =
    props;

  return (
    <div className="bg-base-200 rounded-2xl p-3 mb-5  select-none">
      <div className="flex items-center">
        <div className="cursor-grab">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="ml-5 w-[70%]">
          {!isEditing && (
            <input
              type="text"
              className="w-[80%] input mb-1 input-sm"
              defaultValue={link.linkTitle}
            />
          )}
          {isEditing && (
            <div className="font-semibold text-lg ">{link.linkTitle}</div>
          )}
          <hr className="w-[80%]" />
          {!isEditing && (
            <>
              <input
                defaultValue={link.desc}
                className="w-[80%] input mb-1 input-sm"
              ></input>
              <input
                className="w-[80%] input input-sm"
                defaultValue={link.url}
              ></input>
            </>
          )}
          {isEditing && (
            <>
              <div className="max-w-[80%] overflow-hidden overflow-ellipsis font-medium">
                {link.desc}
              </div>
              <div className="max-w-[80%] whitespace-nowrap overflow-hidden overflow-ellipsis italic font-light">
                {link.url}
              </div>
            </>
          )}
          <div className="mt-2 flex flex-row [&>*]:mr-2 ">
            <div className="lock">
              <button className="btn btn-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </button>
            </div>
            <div className="photo">
              <button className="btn btn-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </button>
            </div>
            <div className="hide">
              <button className="btn btn-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="actions ml-auto">
          {!isEditing && (
            <SaveBtn
              handleEditClick={handleEditClick}
              index={props.index}
              isEditing={isEditing}
            />
          )}
          {isEditing && (
            <EditBtn
              handleEditClick={handleEditClick}
              index={props.index}
              isEditing={isEditing}
            />
          )}
          <TrashBtn deleteLink={deleteLink} link={link} />
        </div>
      </div>
    </div>
  );
}

export default LinkCard;
