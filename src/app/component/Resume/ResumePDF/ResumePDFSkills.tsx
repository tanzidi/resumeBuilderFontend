import { ResumeSkills } from "@/app/lib/redux/types";
import { ResumeFeaturedSkill, ResumePDFBulletList } from "./common";
import { Text, View } from "@react-pdf/renderer";
import { spacing, styles } from "./styles";

export const ResumePDFSkills = ({
  heading,
  skills,
  themeColor,
  showBulletPoints,
}: {
  heading: string;
  skills: ResumeSkills;
  themeColor: string;
  showBulletPoints: boolean;
}) => {
  const { featuredSkills, descriptions } = skills;
  const featuredSkillsWithText = featuredSkills.filter((item) => item.skill);

  return (
    <View
      style={{
        marginTop: "40pt",
        marginLeft: "35pt",
        marginRight: "16pt",
        gap: "6pt",
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
      }}
    >
      <View style={{ ...styles.flexRow, alignItems: "center" }}>
        {themeColor && (
          <View
            style={{
              height: "3.75pt",
              width: "16pt",
              borderRadius: "20pt",
              backgroundColor: "white",
              marginRight: spacing["3.5"],
            }}
          />
        )}
        <Text
          style={{
            fontWeight: "bold",
            letterSpacing: "0.3pt",
            color: "white",
          }}
        >
          {heading}
        </Text>
      </View>

      {featuredSkillsWithText.length > 0 && (
        <View
          style={{
            ...styles.flexCol,
            marginTop: spacing["0.5"],
            gap: "8pt",
          }}
        >
          {featuredSkillsWithText.map((fs, idx) => (
            <ResumeFeaturedSkill
              key={idx}
              skill={fs.skill}
              rating={fs.rating}
              color="white"
              style={{ justifyContent: "space-between" }}
            />
          ))}
        </View>
      )}
      <View style={{ ...styles.flexCol }}>
        <ResumePDFBulletList
          items={descriptions}
          color="white"
          showBulletPoints={showBulletPoints}
        />
      </View>
    </View>
  );
};
