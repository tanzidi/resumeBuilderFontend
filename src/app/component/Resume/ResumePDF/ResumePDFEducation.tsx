import { ResumeEducation } from "@/app/lib/redux/types";
import { ResumePDFBulletList, ResumePDFSection, ResumePDFText } from "./common";
import { View } from "@react-pdf/renderer";
import { spacing, styles } from "./styles";

export const ResumePDFEducation = ({
  heading,
  educations,
  themeColor,
  showBulletPoints,
}: {
  heading: string;
  educations: ResumeEducation[];
  themeColor: string;
  showBulletPoints: boolean;
}) => {
  return (
    <ResumePDFSection themeColor={themeColor} heading={heading}>
      {educations.map(
        (
          {
            descriptions,
            city,
            education,
            endDate,
            gpa,
            institution,
            startDate,
          },
          idx
        ) => {
          const hideInstitutionName =
            idx > 0 && institution === educations[idx - 1].institution;

          const showDescriptions = descriptions.join() !== "";

          return (
            <View
              key={idx}
              style={idx !== 0 ? { marginTop: spacing["2"] } : {}}
            >
              {!hideInstitutionName && (
                <ResumePDFText bold={true} color="black">
                  {institution}
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
                  marginTop: hideInstitutionName
                    ? "-" + spacing["1"]
                    : spacing["1.5"],
                }}
              >
                <ResumePDFText color="black">{`${
                  gpa
                    ? `${education} - ${Number(gpa) ? gpa + " GPA" : gpa}`
                    : education
                }`}</ResumePDFText>
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
