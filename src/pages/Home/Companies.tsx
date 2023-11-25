import Zapier from "../../assets/images/zapier.svg";
import Spotify from "../../assets/images/spotify.svg";
import Zoom from "../../assets/images/zoom.svg";
import Amazon from "../../assets/images/amazon.svg";
import Adobe from "../../assets/images/adobe.svg";
import Notion from "../../assets/images/notion.svg";
import Netflix from "../../assets/images/netflix.svg";

const COMPANIES = [
  {
    name: "zapier",
    logo: Zapier,
  },
  {
    name: "spotify",
    logo: Spotify,
  },
  {
    name: "zoom",
    logo: Zoom,
  },
  {
    name: "amazon",
    logo: Amazon,
  },
  {
    name: "adobe",
    logo: Adobe,
  },
  {
    name: "notion",
    logo: Notion,
  },
  {
    name: "netflix",
    logo: Netflix,
  },
];

export const Companies = () => {
  return (
    <div className="p-7 bg-white">
      <ul className="flex justify-between [&>li:not(:first-child)]:border-l">
        {COMPANIES.map((company) => (
          <li key={company.name} className="py-7 px-[5%]">
            <img src={company.logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};
