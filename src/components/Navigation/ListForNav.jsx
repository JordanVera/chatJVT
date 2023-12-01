import * as React from 'react';
import { List, Divider, Avatar } from '@mui/material';

import ChatList from './ChatList';

const ListForNav = ({
  messages,
  newChat,
  setMesssages,
  chats,
  selectedChat,
  setSelectedChat,
  setModalOpen,
}) => {
  return (
    <div className="w-full h-full bg-black px-3">
      <nav aria-label="main mailbox folders">
        <List disablePadding>
          <div className="w-full pt-3.5 rounded-md">
            <button
              // className="group flex items-center gap-2 rounded-lg px-2 font-medium hover:bg-token-surface-primary rounded-md"
              className="rounded-lg w-full hover:bg-zinc-800 py-1 mb-1.5"
            >
              <button
                onClick={() => newChat(window.prompt('Set Title for CHat'))}
                className="group py-0 flex p-0 items-center gap-2 rounded-lg px-2 font-medium hover:bg-token-surface-primary rounded-md"
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{
                    width: '1.75rem',
                    height: '1.75rem',
                  }}
                />
                <div className="text-left grow text-white overflow-hidden text-ellipsis whitespace-nowrap text-sm text-token-text-primary">
                  New chat
                </div>

                <div className="flex gap-3">
                  <span
                    className="flex items-center ml-auto text-white"
                    data-state="closed"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-md"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </div>
              </button>
            </button>
          </div>

          {/* <ListItem disablePadding>
          <ListItemButton onClick={() => setAnswer([])}>
          <ListItemIcon>
          <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Trash" />
          </ListItemButton>
        </ListItem> */}
        </List>

        <ChatList chats={chats} setSelectedChat={setSelectedChat} />

        <p className="text-white text-2xl">{messages[0]?.content}</p>
        {/* <p className="text-white text-2xl">HELLOOOOOOOO</p> */}
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        {/* <List>
          {answer.map((res, i) => (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={res?.message.content} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </nav>
    </div>
  );
};
export default ListForNav;
