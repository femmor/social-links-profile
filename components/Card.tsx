import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "./Link";

const links = [
  {
    href: "https://www.linkedin.com/in/emmanuel-egomson-react-developer",
    title: "LinkedIn",
  },
  {
    href: "https://github.com/femmor",
    title: "Github",
  },
  {
    href: "/",
    title: "Facebook",
  },
  {
    href: "/",
    title: "Twitter",
  },
  {
    href: "/",
    title: "Instagram",
  },
];

const Card = () => {
  return (
    <div className="card">
      <Image
        src="/assets/femmy.jpg"
        alt="avatar"
        width={88}
        height={88}
        priority
        className="profile-img"
      />
      <Typography variant="h1" className="title">
        Femmy Egomson
      </Typography>
      <Typography variant="h2" className="location">
        Dallas, Texas US.
      </Typography>
      <Typography className="description">
        &quot;Frontend Developer and a Musician&quot;
      </Typography>
      {links.map((link) => (
        <Link key={link.title} href={link.href} title={link.title} />
      ))}
    </div>
  );
};
export default Card;
