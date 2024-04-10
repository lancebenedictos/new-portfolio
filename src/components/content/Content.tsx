import Header from "./Header";
import Main from "./Main";

const MainContent = () => {
  return (
    <div className="flex-1 relative space-y-4">
      <Header />
      <Main />
    </div>
  );
};

export default MainContent;
