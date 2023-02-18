import { ReactNode } from "react";
import { Popover, Transition } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { ITeamMember } from "../TeamList/data/members";
import { MemberCard, MemberDesc, PanelContent, PanelCover, PanelMember, SocialMedia, StyledPanel } from "./styles";
import { BsLinkedin, BsInstagram, BsGithub, BsTwitter } from "react-icons/bs";

export default function TeamMemberCard({ name, description, pfp, id, social_media, cover }: ITeamMember) {
  interface ISocialMediaIconsKeys {
    [key: string]: ReactNode;
  }

  interface ISocialMediaIcons extends ISocialMediaIconsKeys {
    linkedin: ReactNode;
    github: ReactNode;
    twitter: ReactNode;
    instagram: ReactNode;
  }

  const socialMediaIcons: ISocialMediaIcons = {
    linkedin: <BsLinkedin />,
    github: <BsGithub />,
    twitter: <BsTwitter />,
    instagram: <BsInstagram />,
  };

  return (
    <li key={id}>
      <Popover>
        {({ open }) => (
          <>
            <MemberCard>
              <img src={pfp} alt={`Imagem do ${name}`} />
              <p>{name}</p>
            </MemberCard>
            <AnimatePresence>
              {open && (
                <StyledPanel
                  key={id}
                  as={motion.div}
                  initial={{ opacity: 0, position: "absolute", zIndex: 4, y: 10 }}
                  animate={{ opacity: 1, y: 5 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <PanelCover>{cover && <img src={cover} alt="Capa de fundo" />}</PanelCover>
                  <PanelContent>
                    <PanelMember>
                      <img src={pfp} alt={`Imagem do ${name}`} />
                      <p>{name}</p>
                    </PanelMember>
                    <MemberDesc>
                      <p>{description}</p>
                    </MemberDesc>
                    <SocialMedia>
                      {social_media &&
                        Object.keys(social_media).map((userMedia: string, index) => {
                          return (
                            <a href={social_media[userMedia]} key={index} target="_blank">
                              {socialMediaIcons[userMedia]}
                            </a>
                          );
                        })}
                    </SocialMedia>
                  </PanelContent>
                </StyledPanel>
              )}
            </AnimatePresence>
          </>
        )}
      </Popover>
    </li>
  );
}
