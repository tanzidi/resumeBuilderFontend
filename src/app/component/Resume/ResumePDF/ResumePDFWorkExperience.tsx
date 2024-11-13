import { ResumeWorkExperience } from "@/app/lib/redux/types";
import { ResumePDFBulletList, ResumePDFSection, ResumePDFText } from "./common";
import { View } from "@react-pdf/renderer";
import { spacing, styles } from "./styles";

export const ResumePDFWorkExperience = ({
  heading,
  workExperiences,
  themeColor,
  showBulletPoints,
}: {
  heading: string;
  workExperiences: ResumeWorkExperience[];
  themeColor: string;
  showBulletPoints: boolean;
}) => {
  const showDescriptions = workExperiences.join() !== "";
  return (
    <ResumePDFSection themeColor={themeColor} heading={heading}>
      {workExperiences.map(
        (
          { company, city, endDate, position, startDate, descriptions },
          idx
        ) => {
          const hideCompanyName =
            idx > 0 && company === workExperiences[idx - 1].company;

          return (
            <View
              key={idx}
              style={idx !== 0 ? { marginTop: spacing["2"] } : {}}
            >
              {!hideCompanyName && (
                <ResumePDFText bold={true} color="black">
                  {company}
                </ResumePDFText>
              )}
              {city && (
                <View
                  style={{
                    ...styles.flexRowBetween,
                    marginTop: spacing["1"],
                    marginBottom: spacing["2"],
                  }}
                >
                  <ResumePDFText color="black" bold={false}>
                    {city}
                  </ResumePDFText>
                </View>
              )}
              <View
                style={{
                  ...styles.flexRowBetween,
                  marginTop: hideCompanyName
                    ? "-" + spacing["1"]
                    : spacing["1.5"],
                }}
              >
                <ResumePDFText color="black">{position}</ResumePDFText>
                <ResumePDFText color="black">
                  {startDate}
                  {endDate && " - " + endDate}
                </ResumePDFText>
              </View>
              {showDescriptions && (
                <View style={{ ...styles.flexCol, marginTop: spacing["1.5"] }}>
                  <ResumePDFBulletList
                    items={descriptions}
                    showBulletPoints={showBulletPoints}
                  />
                </View>
              )}
            </View>
          );
        }
      )}
    </ResumePDFSection>
  );
};
