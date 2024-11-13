import { ResumeCustom } from "@/app/lib/redux/types";
import { ResumePDFBulletList, ResumePDFSection, ResumePDFText } from "./common";
import { View } from "@react-pdf/renderer";
import { spacing, styles } from "./styles";

export const ResumePDFCustom = ({
  heading,
  customs,
  themeColor,
  showBulletPoints,
}: {
  heading: string;
  customs: ResumeCustom[];
  themeColor: string;
  showBulletPoints: boolean;
}) => {
  return (
    <ResumePDFSection themeColor={themeColor} heading={heading}>
      {customs.map(({ title, details, descriptions }, idx) => {
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
                {title}
              </ResumePDFText>
            </View>
            {details && (
              <View
                style={{
                  ...styles.flexRowBetween,
                  marginTop: spacing["1"],
                  marginBottom: spacing["2"],
                  textAlign: "justify",
                }}
              >
                <ResumePDFText color="black" bold={false}>
                  {details}
                </ResumePDFText>
              </View>
            )}
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
