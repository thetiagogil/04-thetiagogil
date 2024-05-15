import { Link, Stack } from "@mui/joy";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Section5 = () => {
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

  return (
    <Stack
      component="section"
      sx={{
        flexDirection: "row",
        gap: 2,
        justifyContent: { xs: "center", lg: "left" },
      }}
    >
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
  );
};
