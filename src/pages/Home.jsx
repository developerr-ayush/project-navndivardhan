import { News } from "../components/News";
import { Projects } from "../components/Projects";
import { Showcase } from "../components/Showcase";
import { TowardsTomorrow } from "../components/TowardsTomorrow";

export const Home = () => {
  return (
    <>
      <div className="main-wrap">
        <Showcase />
        <TowardsTomorrow />
        <Projects />
        <News />
      </div>
    </>
  );
};
