import { Button } from "../../components/Button";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center w-full justify-center min-h-[337px]">
      <p className="text-5xl bg-white px-4 py-3.5 rounded-xl mb-5">
        <span className="text-orange-400">Unlock</span> Your Creative Potential
      </p>
      <p className="text-4xl mb-3">
        with Online Design and Development Courses.
      </p>
      <p className="text-lg mb-14">
        Learn from Industry Experts and Enhance Your Skills.
      </p>
      <div className="flex gap-3">
        <Button primary>Explore Courses</Button>
        <Button>View Pricing</Button>
      </div>
    </div>
  );
};
