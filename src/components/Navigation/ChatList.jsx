import { useEffect } from 'react';

const ChatList = ({ chats, setSelectedChat }) => {
  useEffect(() => {
    console.log('_____________M____________');
    console.log(chats);
  }, [chats]);

  return (
    <div id="chatList" className="mt-[20px]">
      <h3 className="p-2  text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all ">
        Today
      </h3>

      {chats.map((title, i) => (
        <h5 className="text-white truncate p-2 rounded-lg text-sm hover:bg-zinc-800">
          <button onClick={() => setSelectedChat(i)} key={i}>
            {title}
          </button>
        </h5>
      ))}
    </div>
  );
};
export default ChatList;
