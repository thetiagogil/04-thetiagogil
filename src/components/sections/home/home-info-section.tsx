import { Button, Link, Stack, Typography } from "@mui/joy";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link as ReactLink } from "react-router-dom";
import profilePhoto from "../../../assets/tg.png";
import { useLanguageContext } from "../../../contexts/language.context";

const socialMediaLinks = [
  { href: "https://github.com/thetiagogil", icon: <FaGithub className="icon" size={25} /> },
  { href: "https://www.linkedin.com/in/thetiagogil/", icon: <FaLinkedin className="icon" size={25} /> }
];

export const HomeInfoSection = () => {
  const { t } = useLanguageContext();

  return (
    <Stack maxWidth={{ xs: "100%", lg: 600 }} gap={4}>
      <Stack component="section" textAlign={{ xs: "center", lg: "left" }}>
        <Typography level="h1" fontWeight={700}>
          TIAGO GIL
        </Typography>
        <Typography level="h3" fontSize={{ xs: 20, lg: 24 }}>
          {t("title")}
        </Typography>
      </Stack>

      <Stack component="section">
        <img src={profilePhoto} alt="Tiago Gil" />
      </Stack>

      <Stack component="section">
        <Typography level="body-md" textAlign={{ textAlign: "justify" }}>
          {t("home_bio")}
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
          {t("checkTimeline")}
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
          {t("downloadResume")}
        </Button>
      </Stack>

      <Stack component="section" direction="row" justifyContent="center" gap={2}>
        {socialMediaLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            textColor="neutral.low"
            sx={{ "&:hover": { color: "neutral.high" } }}
          >
            {link.icon}
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};
