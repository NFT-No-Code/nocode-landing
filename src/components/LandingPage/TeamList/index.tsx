import { MemberList } from "./styles";
import { teamMembersData } from "./data/members";
import TeamMemberCard from "../TeamMemberCard";

export default function TeamList() {
  return (
    <MemberList>
      {teamMembersData
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((member) => {
          return (
            <TeamMemberCard
              key={member.id}
              cover={member.cover}
              name={member.name}
              description={member.description}
              id={member.id}
              pfp={member.pfp}
              social_media={member.social_media}
            />
          );
        })}
    </MemberList>
  );
}
