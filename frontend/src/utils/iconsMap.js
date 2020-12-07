import * as SocialIcons from "../components/icons";

export const getIconComponentBySlug = (iconName) => {
  const nameIconMap = {
    twitter: SocialIcons.Twitter,
    youtube: SocialIcons.Youtube,
  };

  const IconComponent = nameIconMap[iconName];

  return IconComponent ? <IconComponent /> : null;
};
