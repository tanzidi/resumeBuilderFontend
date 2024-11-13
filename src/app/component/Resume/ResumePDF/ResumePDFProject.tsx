import { ResumeProject } from "@/app/lib/redux/types";
import { ResumePDFBulletList, ResumePDFSection, ResumePDFText } from "./common";
import { View } from "@react-pdf/renderer";
import { spacing, styles } from "./styles";

export const ResumePDFProject = ({
  heading,
  projects,
  themeColor,
  showBulletPoints,
}: {
  heading: string;
  projects: ResumeProject[];
  themeColor: string;
  showBulletPoints: boolean;
}) => {
  return (
    <ResumePDFSection themeColor={themeColor} heading={heading}>
      {projects.map(({ project, endDate, startDate, descriptions }, idx) => {
        const showDescriptions = descriptions.join() !== "";
        return (
          <View key={idx}>
            <View
              style={
                idx !== 0
                  ? { ...styles.flexRowBetween, marginTop: spacing["2"] }
                  : { ...styles.flexRowBetween }
              }
            >
              <ResumePDFText bold={true} color="black">
                {project}
              </ResumePDFText>
              <ResumePDFText color="black">
                {startDate}
                {endDate && " - " + endDate}
              </ResumePDFText>
            </View>

            {showDescriptions && (
              <View style={{ ...styles.flexCol, marginTop: spacing["0.5"] }}>
                <ResumePDFBulletList
                  items={descriptions}
                  showBulletPoints={showBulletPoints}
                />
              </View>
            )}
          </View>
        );
      })}
    </ResumePDFSection>
  );
};
