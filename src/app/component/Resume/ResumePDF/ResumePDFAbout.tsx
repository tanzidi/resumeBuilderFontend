import { ResumePDFSection, ResumePDFText } from "./common";

export const ResumePDFAbout = ({
  about,
  themeColor,
}: {
  about: { about: string };
  themeColor: string;
}) => {
  if (!about?.about || about?.about?.length < 10) {
    return <></>;
  }
  return (
    <ResumePDFSection themeColor={themeColor} heading={"PROFILE"}>
      <ResumePDFText
        color="black"
        bold={false}
        style={{ textAlign: "justify" }}
      >
        {about.about}
      </ResumePDFText>
    </ResumePDFSection>
  );
};
