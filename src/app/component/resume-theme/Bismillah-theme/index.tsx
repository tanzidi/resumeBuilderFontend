import { useAppSelector } from "@/app/lib/redux/hooks";
import { iconWithLink } from "./icon";
import { selectResume } from "@/app/lib/redux/resumeSlice";
import { selectSettings } from "@/app/lib/redux/settingsSlice";
import { BismillahSkill } from "./skill";

export const FullBismillahTheme = () => {
  const {
    profile,
    workExperiences,
    educations,
    projects,
    about,
    customs,
    skills,
  } = useAppSelector(selectResume);

  const {
    name,
    headline,
    email,
    phone,
    address,
    city,
    postCode,
    url,
    customField,
  } = profile;

  const imageLink = "";
  const {
    fontFamily,
    fontSize,
    themeColor,
    formToHeading,
    formsOrder,
    formToShow,
    showBulletPoints,
  } = useAppSelector(selectSettings);
  const ThemeSkill = BismillahSkill({
    skills,
    heading: formToHeading["skills"],
    showBulletPoints: showBulletPoints["skills"],
    themeColor,
  });

  const originalTheme = `
      <style>
      * {
        box-sizing: border-box;
      }
      .main-theme {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        background-color: white;
        color: ${themeColor ? themeColor : "#781d54"};
        margin: 0;
        padding: 0;
      }
      .resume {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin: 0;
        background: white;
      }
      .icon-set {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }
      .icon-set a {
        text-decoration: none;
        color: white;
        in
      }
      .sidebar {
        width: 300px;
        background-color: ${themeColor ? themeColor : "#781d54"};
        color: white;
        padding: 40px 20px 20px 20px;
        min-height: 100vh;
      }
      .content {
        flex: auto;
        width: 50%;
        background: white;
        padding: 40px 20px 20px 20px;
      }
      .profile-image {
        border-radius: 50%;
        margin: 0 auto 20px;
        display: block;
        width: 120px;
        height: 120px;
      }
      .name {
        font-family: Space Grotesk;
        font-size: 24px;
        font-weight: 700;
        line-height: 30.62px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        text-align: center;
      }
      .title {
        text-align: center;
        margin-bottom: 20px;
        font-family: Space Grotesk;
        font-size: 16px;
        font-weight: 400;
        line-height: 20.42px;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
      }
      .section-title {
        font-size: 18px;
        font-weight: bold;
        margin: 20px 0 10px;
        color: #781d54;
      }
      .contact-info,
      .skills,
      .languages,
      .hobbies {
        margin: 20px 0;
      }
      ul {
        list-style: none;
        padding-left: 0;
      }
    </style>
  <div class="main-theme">
    <div class="resume">
      <div class="sidebar">
        ${
          imageLink
            ? `<img src=${imageLink} alt=${
                name ? name : "Image"
              } class="profile-image" />`
            : ""
        }
        ${name ? `<div class="name">${name}</div>` : ""}
        ${headline ? `<div class="title">${headline}</div>` : ""}
        <div class="contact-info">
          ${email ? iconWithLink(email, true) : ""}
          ${phone ? iconWithLink(phone, false, "phone") : ""}
          ${
            address || city || postCode
              ? iconWithLink(
                  `${address ? address : ""} ${city ? city : ""} ${
                    postCode ? postCode : ""
                  }`,
                  false,
                  "location",
                  true
                )
              : ""
          }
          ${url ? iconWithLink(url, false) : ""}
          ${customField ? iconWithLink(customField, false) : ""}
          ${formToShow["skills"] ? ThemeSkill : ""}
        </div>
      </div>
      <div class="content">
        <div class="profile">
          <div class="section-title">Profile</div>
          <p>
            I’m a UX/UI Designer with over two and half years of experience...
          </p>
        </div>
        <div class="education">
          <div class="section-title">Education</div>
          <p>Jan 2016 - Dec 2021: BBA in Management</p>
          <p>Jan 2014 - Dec 2016: Higher Secondary Certificate</p>
        </div>
        <div class="education">
          <div class="section-title">Education</div>
          <p>Jan 2016 - Dec 2021: BBA in Management</p>
          <p>Jan 2014 - Dec 2016: Higher Secondary Certificate</p>
        </div>
        <div class="education">
          <div class="section-title">Education</div>
          <p>Jan 2016 - Dec 2021: BBA in Management</p>
          <p>Jan 2014 - Dec 2016: Higher Secondary Certificate</p>
        </div>
        <div class="education">
          <div class="section-title">Education</div>
          <p>Jan 2016 - Dec 2021: BBA in Management</p>
          <p>Jan 2014 - Dec 2016: Higher Secondary Certificate</p>
        </div>
        <div class="employment">
          <div class="section-title">Employment</div>
          <p>Jan 2022 - Present: Product Designer, TwinBit Limited</p>
        </div>
        <div class="employment">
          <div class="section-title">Employment</div>
          <p>Jan 2022 - Present: Product Designer, TwinBit Limited</p>
        </div>
        <div class="employment">
          <div class="section-title">Employment</div>
          <p>Jan 2022 - Present: Product Designer, TwinBit Limited</p>
        </div>
        <div class="employment">
          <div class="section-title">Employment</div>
          <p>Jan 2022 - Present: Product Designer, TwinBit Limited</p>
        </div>

        <div class="employment">
          <div class="section-title">Employment</div>
          <p>Jan 2022 - Present: Product Designer, TwinBit Limited</p>
        </div>
        <div class="employment">
          <div class="section-title">Employment</div>
          <p>Jan 2022 - Present: Product Designer, TwinBit Limited</p>
        </div>
        <div class="employment">
          <div class="section-title">Employment</div>
          <p>Jan 2022 - Present: Product Designer, TwinBit Limited</p>
        </div>
        <div class="employment">
          <div class="section-title">Employment</div>
          <p>Jan 2022 - Present: Product Designer, TwinBit Limited</p>
        </div>
        <div class="certificates">
          <div class="section-title">Certificates</div>
          <p>Foundations of User Experience Design (2021)</p>
        </div>
      </div>
    </div>
  </div>

`;
  return originalTheme;
};
