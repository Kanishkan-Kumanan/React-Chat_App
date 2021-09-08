import "./styles.css";

import { ChatEngine } from "react-chat-engine";

import ChatFeed from "../components/ChatFeed";

import LoginForm from "../components/LoginForm";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="679e5b22-b62c-458f-b393-3ddf6cc9cd21"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
