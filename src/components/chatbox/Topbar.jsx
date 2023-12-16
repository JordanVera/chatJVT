import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from '@material-tailwind/react';
import LaptopIcon from '@mui/icons-material/Laptop';

const Topbar = ({ messages, selectedChat }) => {
  return (
    <div className="flex flex-row items-center justify-between bg-[#34354299] h-[56px] p-2 mb-1.5 sticky top-0 z-50">
      <button className="hover:bg-black/10 rounded-xl py-2 ">
        <Popover placement="bottom-start">
          <PopoverHandler>
            <div className="text-white text-lg font-bold px-3 bg-transpa flex flex-row items-center">
              JordanGPT <span className="text-gray-400 font-medium ">3.5</span>
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
          </PopoverHandler>
          <PopoverContent className="mt-2 bg-gray-900 border-none w-80 ">
            <div className="flex flex-row items-center mb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-md shrink-0 text-white mr-3"
              >
                <path
                  d="M19.3975 1.35498C19.3746 1.15293 19.2037 1.00021 19.0004 1C18.7971 0.999793 18.6259 1.15217 18.6026 1.35417C18.4798 2.41894 18.1627 3.15692 17.6598 3.65983C17.1569 4.16274 16.4189 4.47983 15.3542 4.60264C15.1522 4.62593 14.9998 4.79707 15 5.00041C15.0002 5.20375 15.1529 5.37457 15.355 5.39746C16.4019 5.51605 17.1562 5.83304 17.6716 6.33906C18.1845 6.84269 18.5078 7.57998 18.6016 8.63539C18.6199 8.84195 18.7931 9.00023 19.0005 9C19.2078 8.99977 19.3806 8.84109 19.3985 8.6345C19.4883 7.59673 19.8114 6.84328 20.3273 6.32735C20.8433 5.81142 21.5967 5.48834 22.6345 5.39851C22.8411 5.38063 22.9998 5.20782 23 5.00045C23.0002 4.79308 22.842 4.61992 22.6354 4.60157C21.58 4.50782 20.8427 4.18447 20.3391 3.67157C19.833 3.15623 19.516 2.40192 19.3975 1.35498Z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 3C11.4833 3 11.8974 3.34562 11.9839 3.82111C12.4637 6.46043 13.279 8.23983 14.5196 9.48039C15.7602 10.721 17.5396 11.5363 20.1789 12.0161C20.6544 12.1026 21 12.5167 21 13C21 13.4833 20.6544 13.8974 20.1789 13.9839C17.5396 14.4637 15.7602 15.279 14.5196 16.5196C13.279 17.7602 12.4637 19.5396 11.9839 22.1789C11.8974 22.6544 11.4833 23 11 23C10.5167 23 10.1026 22.6544 10.0161 22.1789C9.53625 19.5396 8.72096 17.7602 7.48039 16.5196C6.23983 15.279 4.46043 14.4637 1.82111 13.9839C1.34562 13.8974 1 13.4833 1 13C1 12.5167 1.34562 12.1026 1.82111 12.0161C4.46043 11.5363 6.23983 10.721 7.48039 9.48039C8.72096 8.23983 9.53625 6.46043 10.0161 3.82111C10.1026 3.34562 10.5167 3 11 3ZM5.66618 13C6.9247 13.5226 7.99788 14.2087 8.89461 15.1054C9.79134 16.0021 10.4774 17.0753 11 18.3338C11.5226 17.0753 12.2087 16.0021 13.1054 15.1054C14.0021 14.2087 15.0753 13.5226 16.3338 13C15.0753 12.4774 14.0021 11.7913 13.1054 10.8946C12.2087 9.99788 11.5226 8.9247 11 7.66618C10.4774 8.9247 9.79134 9.99788 8.89461 10.8946C7.99788 11.7913 6.9247 12.4774 5.66618 13Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div>
                <h4 className="text-white font-bold">JordanGPT</h4>
                <p className="text-gray-500">
                  JordanGPT is a replica clone website inspired by{' '}
                  <a
                    href="https://openai.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-900 hover:text-orange-600"
                  >
                    OpenAI's GPT-3.5
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <LaptopIcon className="text-white mr-3" />
              <div>
                <h4 className="text-white font-bold">My Portfolio</h4>
                <p className="text-gray-500">
                  Please check out{' '}
                  <a
                    href="https://www.jordanvera.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-900 hover:text-orange-600"
                  >
                    my portfolio
                  </a>{' '}
                  website to see more projects.
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </button>
      <div className="flex gap-2 pr-1">
        {/* Send Chat to someone BUTTON */}
        {messages[selectedChat].length > 0 ? (
          <button className="relative flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-lg border border-gray-600 focus:ring-0 ">
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
