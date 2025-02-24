import { Button, Link, Stack, Typography } from "@mui/joy";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link as ReactLink } from "react-router-dom";
import tg from "../../assets/tg.png";

const socialMediaLinks = [
  { href: "https://github.com/thetiagogil", icon: <FaGithub className="icon" size={25} /> },
  { href: "https://www.linkedin.com/in/thetiagogil/", icon: <FaLinkedin className="icon" size={25} /> },
  { href: "https://www.instagram.com/thetiagogil/", icon: <FaInstagram className="icon" size={25} /> }
];

export const HomeInfoSection = () => (
  <Stack maxWidth={{ xs: "100%", lg: 600 }} gap={4}>
    <Stack component="section" textAlign={{ xs: "center", lg: "left" }}>
      <Typography level="h1" fontWeight={700}>
        TIAGO GIL
      </Typography>
      <Typography level="h3" fontSize={{ xs: 20, lg: 24 }}>
        Full-stack Developer & Master Architect
      </Typography>
    </Stack>

    <Stack component="section">
      <img src={tg} alt="Tiago Gil" />
    </Stack>

    <Stack component="section">
      <Typography level="body-md" textAlign={{ textAlign: "justify" }}>
        As a Junior Full-stack Developer with a Master's Degree in Architecture, I bring strong problem-solving skills
        and attention to detail to building user-friendly web applications. My background in architecture allows me to
        blend creative design with technical expertise, enabling the development of innovative solutions that combine
        design, technology, and data.
      </Typography>
    </Stack>

    <Stack component="section" direction={{ xs: "column", sm: "row" }} gap={1}>
      <Button
        variant="outlined"
        component={ReactLink}
        to="/timeline"
        endDecorator={<FaArrowRightLong size={12} />}
        sx={{ width: "100%" }}
      >
        Check out my timeline
      </Button>
      <Button
        variant="outlined"
        component={Link}
        href="/CV_TiagoGil.pdf"
        download="CV_TiagoGil.pdf"
        underline="none"
        endDecorator={<MdOutlineFileDownload size={16} />}
        sx={{ width: "100%" }}
      >
        Download my resume
      </Button>
    </Stack>

    <Stack component="section" direction="row" justifyContent="center" gap={2}>
      {socialMediaLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          target="_blank"
          textColor="neutral.light"
          sx={{ "&:hover": { color: "neutral.lightest" } }}
        >
          {link.icon}
        </Link>
      ))}
    </Stack>
  </Stack>
);
