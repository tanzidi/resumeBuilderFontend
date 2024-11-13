import {
  DEFAULT_FONT_COLOR,
  Settings,
  ShowForm,
} from "@/app/lib/redux/settingsSlice";
import { Resume } from "@/app/lib/redux/types";
import { Document, Page, View } from "@react-pdf/renderer";
import { ResumePDFProfile } from "./ResumePDFProfile";
import { spacing, styles } from "./styles";
import { ResumePDFWorkExperience } from "./ResumePDFWorkExperience";
import { ResumePDFEducation } from "./ResumePDFEducation";
import { ResumePDFProject } from "./ResumePDFProject";
import { ResumePDFAbout } from "./ResumePDFAbout";
import { ResumePDFCustom } from "./ResumePDFCustom";
import { ResumePDFSkills } from "./ResumePDFSkills";

export const ResumePDF = ({
  resume,
  settings,
  isPDF = false,
}: {
  resume: Resume;
  settings: Settings;
  isPDF?: boolean;
}) => {
  const {
    profile,
    workExperiences,
    educations,
    projects,
    about,
    customs,
    skills,
  } = resume;
  const { name } = profile;

  const {
    documentSize,
    fontFamily,
    fontSize,
    themeColor,
    formToHeading,
    formsOrder,
    formToShow,
    showBulletPoints,
  } = settings;

  const showFormsOrder = formsOrder.filter(
    (form) => form !== "skills" && formToShow[form]
  );

  const formTypeToComponent: {
    [type in Exclude<ShowForm, "skills">]: () => JSX.Element;
  } = {
    workExperiences: () => (
      <ResumePDFWorkExperience
        heading={formToHeading["workExperiences"]}
        workExperiences={workExperiences}
        themeColor={themeColor}
        showBulletPoints={showBulletPoints["workExperiences"]}
      />
    ),
    educations: () => (
      <ResumePDFEducation
        heading={formToHeading["educations"]}
        educations={educations}
        themeColor={themeColor}
        showBulletPoints={showBulletPoints["educations"]}
      />
    ),
    projects: () => (
      <ResumePDFProject
        heading={formToHeading["projects"]}
        projects={projects}
        themeColor={themeColor}
        showBulletPoints={showBulletPoints["projects"]}
      />
    ),
    customs: () => (
      <ResumePDFCustom
        heading={formToHeading["customs"]}
        customs={customs}
        themeColor={themeColor}
        showBulletPoints={showBulletPoints["customs"]}
      />
    ),
  };

  return (
    <>
      <Document title={`${name} Resume`} author={name} producer={"Inhouse"}>
        <Page
          size={documentSize === "A4" ? "A4" : "LETTER"}
          style={{
            display: "flex",
            flexDirection: "column",
            color: DEFAULT_FONT_COLOR,
            fontFamily,
            fontSize: fontSize + "pt",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "40%",
                backgroundColor: themeColor,
                minHeight: "100vh",
              }}
            >
              <ResumePDFProfile
                profile={profile}
                themeColor={themeColor}
                isPDF={isPDF}
              />
              {formToShow["skills"] && (
                <ResumePDFSkills
                  skills={skills}
                  themeColor={themeColor}
                  showBulletPoints={showBulletPoints["skills"]}
                  heading={formToHeading["skills"]}
                />
              )}
            </View>
            <View
              style={{
                width: "60%",
                backgroundColor: "white",
              }}
            >
              <View
                style={{
                  ...styles.flexCol,
                  padding: `${spacing[10]} ${spacing[6]} ${spacing[10]} ${spacing[4]}`,
                }}
              >
                <ResumePDFAbout about={about} themeColor={themeColor} />
                {showFormsOrder.map((form) => {
                  const Component =
                    formTypeToComponent[form as Exclude<typeof form, "skills">];
                  return <Component key={form} />;
                })}
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
};
