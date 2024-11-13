import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import { selectCustom, changeCustom } from "@/app/lib/redux/resumeSlice";
import { Form, FormSection } from "./Form";
import { CreateHandleChangeArgsWithDescriptions } from "./types";
import { ResumeCustom } from "@/app/lib/redux/types";
import { BulletListTextArea, Input } from "./Form/InputGroup";
import { BulletListIconButton } from "./Form/IconButton";
import {
  changeShowBulletPoints,
  selectShowBulletPoints,
} from "@/app/lib/redux/settingsSlice";

export const CustomForm = () => {
  const projects = useAppSelector(selectCustom);
  const dispatch = useAppDispatch();
  const showDelete = projects.length > 1;

  const form = "customs";

  const showBulletPoints = useAppSelector(selectShowBulletPoints(form));

  const handleShowBulletPoints = (value: boolean) => {
    dispatch(changeShowBulletPoints({ field: form, value }));
  };

  return (
    <Form form={form} addButtonText="Add Custom">
      {projects.map(({ title, details, descriptions }, idx) => {
        const handleCustomChange = (
          ...[
            field,
            value,
          ]: CreateHandleChangeArgsWithDescriptions<ResumeCustom>
        ) => {
          dispatch(changeCustom({ idx, field, value } as any));
        };

        const showMoveUp = idx !== 0;
        const showMoveDown = idx !== projects.length - 1;

        return (
          <FormSection
            key={idx}
            form="customs"
            idx={idx}
            showMoveUp={showMoveUp}
            showMoveDown={showMoveDown}
            showDelete={showDelete}
            deleteButtonTooltipText="Delete custom"
          >
            <Input
              label="Title"
              labelClassName="col-span-6"
              name="title"
              placeholder="Title"
              value={title}
              onChange={handleCustomChange}
            />
            <Input
              label="Description"
              labelClassName="col-span-full"
              name="details"
              placeholder="Your custom description"
              value={details}
              onChange={handleCustomChange}
            />
            <div className="relative col-span-full">
              <BulletListTextArea
                label="Additional Information (Optional)"
                labelClassName="col-span-full"
                name="descriptions"
                placeholder="Feel free to enter additional activities and so on..."
                value={descriptions}
                onChange={handleCustomChange}
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
