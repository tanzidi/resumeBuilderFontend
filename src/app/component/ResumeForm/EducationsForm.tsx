import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import {
  changeEducations,
  selectEducations,
} from "@/app/lib/redux/resumeSlice";
import {
  changeShowBulletPoints,
  selectShowBulletPoints,
} from "@/app/lib/redux/settingsSlice";
import { Form, FormSection } from "./Form";
import { CreateHandleChangeArgsWithDescriptions } from "./types";
import { ResumeEducation } from "@/app/lib/redux/types";
import { BulletListTextArea, Input } from "./Form/InputGroup";
import { BulletListIconButton } from "./Form/IconButton";

export const EducationsForm = () => {
  const educations = useAppSelector(selectEducations);
  const dispatch = useAppDispatch();
  const showDelete = educations.length > 1;
  const form = "educations";
  const showBulletPoints = useAppSelector(selectShowBulletPoints(form));

  return (
    <Form form={form} addButtonText="Add Education">
      {educations.map(
        (
          {
            education,
            institution,
            startDate,
            endDate,
            city,
            gpa,
            descriptions,
          },
          idx
        ) => {
          const handleWorkExperienceChange = (
            ...[
              field,
              value,
            ]: CreateHandleChangeArgsWithDescriptions<ResumeEducation>
          ) => {
            dispatch(changeEducations({ idx, field, value } as any));
          };

          const handleShowBulletPoints = (value: boolean) => {
            dispatch(changeShowBulletPoints({ field: form, value }));
          };

          const showMoveUp = idx !== 0;
          const showMoveDown = idx !== educations.length - 1;

          return (
            <FormSection
              key={idx}
              form="educations"
              idx={idx}
              showMoveUp={showMoveUp}
              showMoveDown={showMoveDown}
              showDelete={showDelete}
              deleteButtonTooltipText="Delete education"
            >
              <Input
                label="Educational Institution"
                labelClassName="col-span-4"
                name="institution"
                placeholder="Name of the institution (Ex. XYZ University)"
                value={institution}
                onChange={handleWorkExperienceChange}
              />
              <Input
                label="City"
                labelClassName="col-span-2"
                name="city"
                placeholder="Eg. California, USA"
                value={city}
                onChange={handleWorkExperienceChange}
              />
              <Input
                label="Degree or Program"
                labelClassName="col-span-4"
                name="education"
                placeholder="Eg. Bachelor of Science in Computer Engineering"
                value={education}
                onChange={handleWorkExperienceChange}
              />
              <Input
                label="Grade Point Average (GPA)"
                labelClassName="col-span-2"
                name="gpa"
                placeholder="Your GPA (Eg. 3.80)"
                value={gpa}
                onChange={handleWorkExperienceChange}
              />
              <Input
                label="Start Date"
                labelClassName="col-span-3"
                name="startDate"
                placeholder="Starting Date (Eg. 01 Jan, 2020)"
                value={startDate}
                onChange={handleWorkExperienceChange}
              />
              <Input
                label="End Date"
                labelClassName="col-span-3"
                name="endDate"
                placeholder="End Date (Eg. 31 Dec, 2023 or Present)"
                value={endDate}
                onChange={handleWorkExperienceChange}
              />
              <div className="relative col-span-full">
                <BulletListTextArea
                  label="Additional Information (Optional)"
                  labelClassName="col-span-full"
                  name="descriptions"
                  placeholder="Feel free to enter additional activities and so on..."
                  value={descriptions}
                  onChange={handleWorkExperienceChange}
                  showBulletPoints={showBulletPoints}
                />
                <div className="absolute right-60 top-0">
                  <BulletListIconButton
                    showBulletPoints={showBulletPoints}
                    onClick={handleShowBulletPoints}
                  />
                </div>
              </div>
            </FormSection>
          );
        }
      )}
    </Form>
  );
};
