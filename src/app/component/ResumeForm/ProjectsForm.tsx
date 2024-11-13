import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import { selectProjects, changeProjects } from "@/app/lib/redux/resumeSlice";
import { Form, FormSection } from "./Form";
import { CreateHandleChangeArgsWithDescriptions } from "./types";
import { ResumeProject } from "@/app/lib/redux/types";
import { BulletListTextArea, Input } from "./Form/InputGroup";
import { BulletListIconButton } from "./Form/IconButton";
import {
  changeShowBulletPoints,
  selectShowBulletPoints,
} from "@/app/lib/redux/settingsSlice";

export const ProjectsForm = () => {
  const projects = useAppSelector(selectProjects);
  const dispatch = useAppDispatch();
  const showDelete = projects.length > 1;

  const form = "projects";

  const showBulletPoints = useAppSelector(selectShowBulletPoints(form));

  const handleShowBulletPoints = (value: boolean) => {
    dispatch(changeShowBulletPoints({ field: form, value }));
  };

  return (
    <Form form={form} addButtonText="Add Project">
      {projects.map(({ project, startDate, endDate, descriptions }, idx) => {
        const handleProjectChange = (
          ...[
            field,
            value,
          ]: CreateHandleChangeArgsWithDescriptions<ResumeProject>
        ) => {
          dispatch(changeProjects({ idx, field, value } as any));
        };

        const showMoveUp = idx !== 0;
        const showMoveDown = idx !== projects.length - 1;

        return (
          <FormSection
            key={idx}
            form="projects"
            idx={idx}
            showMoveUp={showMoveUp}
            showMoveDown={showMoveDown}
            showDelete={showDelete}
            deleteButtonTooltipText="Delete project"
          >
            <Input
              label="Project Title"
              labelClassName="col-span-6"
              name="project"
              placeholder="Title of the project (Ex. XYZ Project)"
              value={project}
              onChange={handleProjectChange}
            />
            <Input
              label="Start Date"
              labelClassName="col-span-3"
              name="startDate"
              placeholder="Starting Date (Eg. 01 Jan, 2020)"
              value={startDate}
              onChange={handleProjectChange}
            />
            <Input
              label="End Date"
              labelClassName="col-span-3"
              name="endDate"
              placeholder="End Date (Eg. 31 Dec, 2023 or Present)"
              value={endDate}
              onChange={handleProjectChange}
            />
            <div className="relative col-span-full">
              <BulletListTextArea
                label="Additional Information (Optional)"
                labelClassName="col-span-full"
                name="descriptions"
                placeholder="Feel free to enter additional activities and so on..."
                value={descriptions}
                onChange={handleProjectChange}
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
      })}
    </Form>
  );
};
