import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import {
  changeWorkExperiences,
  selectWorkExperiences,
} from "@/app/lib/redux/resumeSlice";
import { Form, FormSection } from "./Form";
import { CreateHandleChangeArgsWithDescriptions } from "./types";
import { ResumeWorkExperience } from "@/app/lib/redux/types";
import { BulletListTextArea, Input } from "./Form/InputGroup";
import {
  changeShowBulletPoints,
  selectShowBulletPoints,
} from "@/app/lib/redux/settingsSlice";
import { BulletListIconButton } from "./Form/IconButton";

export const WorkExperiencesForm = () => {
  const workExperiences = useAppSelector(selectWorkExperiences);
  const dispatch = useAppDispatch();
  const form = "workExperiences";

  const showBulletPoints = useAppSelector(selectShowBulletPoints(form));

  const showDelete = workExperiences.length > 1;

  const handleShowBulletPoints = (value: boolean) => {
    dispatch(changeShowBulletPoints({ field: form, value }));
  };

  return (
    <Form form={form} addButtonText="Add Job">
      {workExperiences.map(
        (
          { company, endDate, position, startDate, descriptions, city },
          idx
        ) => {
          const handleWorkExperienceChange = (
            ...[
              field,
              value,
            ]: CreateHandleChangeArgsWithDescriptions<ResumeWorkExperience>
          ) => {
            dispatch(changeWorkExperiences({ idx, field, value } as any));
          };

          const showMoveUp = idx !== 0;
          const showMoveDown = idx !== workExperiences.length - 1;

          return (
            <FormSection
              key={idx}
              form="workExperiences"
              idx={idx}
              showMoveUp={showMoveUp}
              showMoveDown={showMoveDown}
              showDelete={showDelete}
              deleteButtonTooltipText="Delete Experience"
            >
              <Input
                label="Company Name"
                labelClassName="col-span-full"
                name="company"
                placeholder="Ex. XYZ Company"
                value={company}
                onChange={handleWorkExperienceChange}
              />
              <Input
                label="Job Title / Position"
                labelClassName="col-span-4"
                name="position"
                placeholder="Ex. Software Engineer"
                value={position}
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
