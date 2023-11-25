import Logo from "../assets/logo.svg";
import { Button } from "./Button";

const NAV_ITEMS = [
  {
    label: "Home",
    active: true,
    url: "#",
  },
  {
    label: "Courses",
    active: false,
    url: "#",
  },
  {
    label: "About Us",
    active: false,
    url: "#",
  },
  {
    label: "Pricing",
    active: false,
    url: "#",
  },
  {
    label: "Contact",
    active: false,
    url: "#",
  },
];

export const Navbar = () => {
  return (
    <div className="w-full z-10 h-[99px] text-lg flex justify-between border-b border-gray-200 px-[132px]">
      <div className="flex justify-between w-[597px] items-center">
        <a href="#">
          <img src={Logo} alt="logo" width={54} height={54} />
        </a>
        <ul className="flex gap-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`${
                  item.active && "bg-gray-100 px-6 py-3.5 rounded-lg"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-6 items-center">
        <Button>Sign Up</Button>
        <Button primary>Login</Button>
      </div>
    </div>
  );
};
