import { Showcase } from "../components/Showcase";
import { TowardsTomorrow } from "../components/TowardsTomorrow";

export const Home = () => {
  return (
    <>
      <div className="main-wrap">
        <Showcase />
        <TowardsTomorrow />
      </div>
    </>
  );
};
