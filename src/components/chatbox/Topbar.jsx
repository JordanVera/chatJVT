const Topbar = ({ messages, selectedChat }) => {
  return (
    <div className="flex flex-row items-center justify-between bg-[#343541] h-[56px] p-2 mb-1.5">
      <button className="hover:bg-black/10 rounded-xl py-2 ">
        <div className="text-white text-lg font-bold px-3 flex flex-row items-center">
          <div>
            ChatGPT <span className="text-gray-400 font-medium ">3.5</span>
          </div>

          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            className="ml-1"
          >
            <path
              d="M11.3346 7.83203L8.00131 11.1654L4.66797 7.83203"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </button>
      <div className="flex gap-2 pr-1">
        {/* Send Chat to someone BUTTON */}
        {messages[selectedChat].length > 0 ? (
          <button className="relative flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-lg border border-zinc-600 focus:ring-0 ">
            <div className="flex w-full gap-2 items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-md"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L16.7071 6.29289C17.0976 6.68342 17.0976 7.31658 16.7071 7.70711C16.3166 8.09763 15.6834 8.09763 15.2929 7.70711L13 5.41421V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V5.41421L8.70711 7.70711C8.31658 8.09763 7.68342 8.09763 7.29289 7.70711C6.90237 7.31658 6.90237 6.68342 7.29289 6.29289L11.2929 2.29289ZM4 13C4.55228 13 5 13.4477 5 14V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V14C3 13.4477 3.44772 13 4 13Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        ) : null}
      </div>
    </div>
  );
};
export default Topbar;
