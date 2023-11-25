import { Companies } from "./Companies";
import { Hero } from "./Hero";
import DemoVid from "../../assets/images/home-demo-vid.svg";

export const Home = () => {
  return (
    <div className="flex flex-col gap-[150px] pt-[99px] max-w-[1596px] w-full">
      <div className="flex flex-col gap-[100px]">
        <Hero />
        <Companies />
        <img src={DemoVid} />
      </div>
    </div>
  );
};
