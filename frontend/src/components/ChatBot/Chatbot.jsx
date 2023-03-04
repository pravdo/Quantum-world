import Tooltip from '@mui/material/Tooltip';

import ChatbotBody from './ChatbotBody';

import './Chatbot.css';
import ChatbotI from '../../images/chatbot-icon.svg';
import { useState } from 'react';

const Chatbot = () => {
  const [seeChat, setSeeChat] = useState(false);

  return (
    <>
      <Tooltip
        title="Click for conversation with our chatbot"
        placement="top"
        arrow
      >
        <div className="col-lg-1 col-md-1 chat-icon">
          <li>
            <img
              src={ChatbotI}
              onClick={() => setSeeChat(!seeChat)}
              alt="chatbot img"
            />
          </li>
        </div>
      </Tooltip>

      {seeChat && <ChatbotBody />}
    </>
  );
};

export default Chatbot;
