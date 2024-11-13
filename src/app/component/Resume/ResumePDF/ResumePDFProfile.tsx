import { PersonalSection } from "@/app/lib/redux/types";
import { ResumePDFLink, ResumePDFText } from "./common";
import { View } from "@react-pdf/renderer";
import { ResumePDFIcon } from "./common/ResumePDFIcon";

export const ResumePDFProfile = ({
  profile,
  isPDF,
}: {
  profile: PersonalSection;
  themeColor: string;
  isPDF: boolean;
}) => {
  const {
    name,
    email,
    phone,
    url,
    address,
    city,
    customField,
    headline,
    linkedIn,
    postCode,
  } = profile;

  const iconName = (link: string) => {
    if (link.includes("github")) {
      return "url_github";
    } else if (link.includes("linkedin")) {
      return "url_linkedin";
    } else {
      return "url";
    }
  };

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
      <ResumePDFText
        bold={true}
        color="white"
        style={{ fontSize: "20pt", textAlign: "left" }}
      >
        {name}
      </ResumePDFText>
      {headline && (
        <ResumePDFText
          color="white"
          style={{
            fontWeight: "bold",
            letterSpacing: "0.3pt",
            textAlign: "left",
            marginBottom: "8pt",
          }}
        >
          {headline}
        </ResumePDFText>
      )}
      {email && (
        <ResumePDFLink src={`mailTo:${email}`} isPDF={isPDF}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "6pt",
            }}
          >
            <ResumePDFIcon type="email" isPDF={isPDF} />
            <ResumePDFText color="white">{email}</ResumePDFText>
          </View>
        </ResumePDFLink>
      )}
      {phone && (
        <ResumePDFLink
          src={`tel:${phone.replace(/[^\d+]/g, "")}`}
          isPDF={isPDF}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "6pt",
            }}
          >
            <ResumePDFIcon type="phone" isPDF={isPDF} />
            <ResumePDFText color="white">{phone}</ResumePDFText>
          </View>
        </ResumePDFLink>
      )}
      {(address || city || postCode) && (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "6pt",
          }}
        >
          <ResumePDFIcon type="location" isPDF={isPDF} />
          <ResumePDFText color="white">
            {address} {city} {postCode}
          </ResumePDFText>
        </View>
      )}
      {url && (
        <ResumePDFLink
          src={url.startsWith("http") ? url : `https://${url}`}
          isPDF={isPDF}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "6pt",
            }}
          >
            <ResumePDFIcon type={iconName(url)} isPDF={isPDF} />
            <ResumePDFText color="white">{url}</ResumePDFText>
          </View>
        </ResumePDFLink>
      )}
      {linkedIn && (
        <ResumePDFLink
          src={
            linkedIn.startsWith("http")
              ? linkedIn
              : `https://www.linkedin.com/in/${linkedIn}`
          }
          isPDF={isPDF}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "6pt",
            }}
          >
            <ResumePDFIcon type="url_linkedin" isPDF={isPDF} />
            <ResumePDFText color="white">{linkedIn}</ResumePDFText>
          </View>
        </ResumePDFLink>
      )}
      {customField && (
        <ResumePDFLink
          src={
            customField.startsWith("http")
              ? customField
              : `https://${customField}`
          }
          isPDF={isPDF}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "6pt",
            }}
          >
            <ResumePDFIcon type={iconName(customField)} isPDF={isPDF} />
            <ResumePDFText color="white">{customField}</ResumePDFText>
          </View>
        </ResumePDFLink>
      )}
    </View>
  );
};
