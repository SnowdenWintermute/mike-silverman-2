import React, { useState, useEffect, useRef } from "react";
import CornerBrackets from "../../CornerBrackets/CornerBrackets";
import OffsetZoomer from "../../OffsetZoomer/OffsetZoomer";
import { ReactComponent as GitHubIcon } from "../../../img/icons/github-icon.svg";
import { ReactComponent as InternetIcon } from "../../../img/icons/internet-icon.svg";
import CardButton from "./CardButton/CardButton";
import AppearingText from "./AppearingText/AppearingText";

const ProjectCard = ({
  title,
  image,
  tagline,
  link,
  gitHubLink,
  logo,
  description,
}) => {
  const [hovering, setHovering] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const [descTextHidden, setDescTextHidden] = useState("offscreen-top");
  const cardRef = useRef();

  const trackScrolling = (e) => {
    if (cardRef.current?.getBoundingClientRect()?.bottom <= window.innerHeight)
      setDescTextHidden(false);
    else setDescTextHidden(true);
  };

  useEffect(() => {
    document.addEventListener("scroll", trackScrolling);
    return () => document.removeEventListener("scroll", trackScrolling);
  }, []);

  const handleMouseEnter = () => {
    setHovering(true);
  };
  const handleMouseLeave = () => {
    setHovering(false);
    setMouseDown(false);
  };
  const handleMouseDown = () => {
    setMouseDown(true);
  };
  const handleMouseUp = () => {
    setMouseDown(false);
  };

  return (
    <div
      className="project-card"
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      ref={cardRef}
    >
      <CornerBrackets
        color="green"
        altColor="green"
        length={40}
        thickness={4}
        maxSizeOffset={-15}
        hovering={hovering}
        mouseDown={mouseDown}
      />
      <div className="project-card-title">
        <img src={logo} alt="logo" className="project-card-logo" />
        <a href={link}>{title}</a>
      </div>
      <div className="project-card-image-holder">
        <OffsetZoomer image={image} alt={title} />
      </div>
      <div className="project-card-tagline-and-buttons">
        <AppearingText text={tagline} hidden={descTextHidden} />
        <div className="project-card-button-holder">
          <CardButton
            text={"Visit"}
            icon={<InternetIcon className="button-icon" />}
            link={link}
          />
          <CardButton
            text={"Code"}
            icon={<GitHubIcon className="button-icon" />}
            link={gitHubLink}
          />
        </div>
      </div>
      <div
        className="project-card-description"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

export default ProjectCard;
