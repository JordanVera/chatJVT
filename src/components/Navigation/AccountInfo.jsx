import { Avatar } from '@mui/material';

const AccountInfo = ({ setSelectedChat, newChat }) => {
  return (
    <>
      <div id="accountInfo" className="bg-black p-3">
        <div className="w-full pt-3.5 rounded-md">
          <button className="rounded-lg w-full hover:bg-gray-900 py-1 mb-1.5">
            <div
              onClick={() => {
                setSelectedChat((prev) => prev + 1);
                newChat('');
              }}
              className="group py-0 flex p-0 items-center gap-2 rounded-lg px-2 font-medium hover:bg-token-surface-primary rounded-md"
            >
              <Avatar
                alt="Vera"
                sx={{
                  width: '32px',
                  height: '32px',
                  bgcolor: '#000',
                  color: '#fff',
                  border: '1px solid #333',
                  fontSize: '12px',
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-sm shrink-0"
                >
                  <path
                    d="M8.78158 8.60266L9.8188 5.49098C10.037 4.83634 10.963 4.83634 11.1812 5.49098L12.2184 8.60266C12.7187 10.1035 13.8965 11.2813 15.3973 11.7816L18.509 12.8188C19.1637 13.037 19.1637 13.963 18.509 14.1812L15.3973 15.2184C13.8965 15.7187 12.7187 16.8965 12.2184 18.3973L11.1812 21.509C10.963 22.1637 10.037 22.1637 9.8188 21.509L8.78158 18.3973C8.28128 16.8965 7.10354 15.7187 5.60266 15.2184L2.49098 14.1812C1.83634 13.963 1.83634 13.037 2.49098 12.8188L5.60266 11.7816C7.10354 11.2813 8.28128 10.1035 8.78158 8.60266Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M17.1913 3.69537L17.6794 2.23105C17.7821 1.92298 18.2179 1.92298 18.3206 2.23105L18.8087 3.69537C19.0441 4.40167 19.5983 4.9559 20.3046 5.19133L21.769 5.67944C22.077 5.78213 22.077 6.21787 21.769 6.32056L20.3046 6.80867C19.5983 7.0441 19.0441 7.59833 18.8087 8.30463L18.3206 9.76895C18.2179 10.077 17.7821 10.077 17.6794 9.76895L17.1913 8.30463C16.9559 7.59833 16.4017 7.0441 15.6954 6.80867L14.231 6.32056C13.923 6.21787 13.923 5.78213 14.231 5.67944L15.6954 5.19133C16.4017 4.9559 16.9559 4.40167 17.1913 3.69537Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Avatar>
              <div className="flex flex-col">
                <h4 className="text-left grow text-white overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                  Upgrade
                </h4>
                <h5 className="text-xs text-token-text-secondary line-clamp-1 text-gray-300">
                  Get GPT-4, DALL·E, and more
                </h5>
              </div>
            </div>
          </button>
        </div>
        <div className="w-full rounded-md">
          <button className="rounded-lg w-full hover:bg-gray-900 py-1 mb-1.5">
            <div
              onClick={() => {
                setSelectedChat((prev) => prev + 1);
                newChat('');
              }}
              className="group py-0 flex p-0 items-center gap-2 rounded-lg px-2 font-medium hover:bg-token-surface-primary rounded-md"
            >
              <Avatar
                alt="Vera"
                src="/static/images/avatar/1.jpg"
                sx={{
                  width: '32px',
                  height: '32px',
                  bgcolor: '#f69785',
                  color: '#fff',
                  fontSize: '16px',
                }}
              />
              <h4 className="text-left grow text-white overflow-hidden text-ellipsis whitespace-nowrap text-sm text-token-text-primary">
                Jordan Vera
              </h4>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};
export default AccountInfo;
