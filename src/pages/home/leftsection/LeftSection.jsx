import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link, Stack, Typography } from "@mui/joy";
import tg from "../../../assets/tg.png";

const socialMediaLinks = [
  {
    href: "https://github.com/thetiagogil",
    icon: <FaGithub className="icon" size={25} />,
  },
  {
    href: "https://www.linkedin.com/in/thetiagogil/",
    icon: <FaLinkedin className="icon" size={25} />,
  },
  {
    href: "https://www.facebook.com/thetiagogil/",
    icon: <FaFacebook className="icon" size={25} />,
  },
  {
    href: "https://www.instagram.com/thetiagogil/",
    icon: <FaInstagram className="icon" size={25} />,
  },
];

const MainBox = () => {
  return (
    <Stack sx={{ maxWidth: "35rem", gap: 4 }}>
      <Stack component="section">
        <Typography level="h1">TIAGO GIL</Typography>
        <Typography level="h3">Web Developer & Master Architect</Typography>
      </Stack>

      <Stack>
        <img className="img" src={tg} alt="Tiago Gil" />
      </Stack>

      <Stack component="section">
        <Typography level="body-md" sx={{ textAlign: "justify" }}>
          As a Junior Full Stack Web Developer with a Master's in architecture,
          I leverage my problem-solving skills and keen attention to detail to
          create user-friendly web applications. My architectural background
          inspires a fusion between design thinking and analytical
          problem-solving, enabling me to craft innovative solutions that merge
          creativity, technology, and data.
        </Typography>
      </Stack>

      <Stack component="section" sx={{ flexDirection: "row", gap: 2 }}>
        {socialMediaLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            sx={{
              color: "primary.white3",
              transition: "color 0.3s",
              "&:hover": {
                color: "primary.white",
              },
            }}
          >
            {link.icon}
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

export default MainBox;
