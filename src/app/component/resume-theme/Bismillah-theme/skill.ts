import { ResumeSkills } from "@/app/lib/redux/types";

export const BismillahSkill = ({
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

  return `
    <!-- Heading Section -->
    <div style="display: flex; flex-direction: row; align-items: center; margin-top: 20px;">
      <div style="height: 5px; background-color: white; width: 20px; border-radius: 20px; margin-right: 5px;"></div>
      <p style="font-weight: bold; margin: 0; color: white;">${heading}</p>
    </div>

    ${
      featuredSkillsWithText.length > 0
        ? featuredSkillsWithText
            .map((fs) => {
              return `
        <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between; margin-bottom: 5px;">
          <p style="margin-right: 4px; color: white; font-weight: bold;">${
            fs.skill
          }</p>
          <div style="display: flex; flex-direction: row; gap: 2pt;">
            ${[...Array(5)]
              .map((_, idx) => {
                const circleColor = fs.rating > idx - 1 ? "white" : "#ffffff3b";
                return `
                <div style="
                  height: 9pt;
                  width: 9pt;
                  margin-left: 2.25pt;
                  background-color: ${circleColor};
                  border-radius: 50%;
                "></div>
              `;
              })
              .join("")}
          </div>
        </div>
      `;
            })
            .join("")
        : ""
    }

    ${
      showBulletPoints && descriptions.length > 0
        ? `
      <ul style="list-style-type: disc; padding-left: 20px; color: white;margin-top:25px">
        ${descriptions
          .map(
            (desc) => `
          <li style="margin-bottom: 5px;">${desc}</li>
        `
          )
          .join("")}
      </ul>
    `
        : ""
    }
    ${
      !showBulletPoints && descriptions.length
        ? `
      <p style="margin-top:25px">
        ${descriptions}
      </p>
    `
        : ""
    }
  `;
};
