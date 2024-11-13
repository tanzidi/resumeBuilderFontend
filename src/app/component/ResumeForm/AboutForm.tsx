import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import { changeAbout, selectAbout } from "@/app/lib/redux/resumeSlice";
import { BaseForm } from "./Form";
import { Input } from "./Form/InputGroup";
import { AboutSection } from "@/app/lib/redux/types";

export const AboutForm = () => {
  const aboutData = useAppSelector(selectAbout);
  const dispatch = useAppDispatch();

  const { about } = aboutData;

  const handleAboutChange = (field: keyof AboutSection, value: string) => {
    dispatch(changeAbout({ field, value }));
  };

  return (
    <BaseForm heading="Description">
      <div className="grid grid-cols-6 gap-3">
        <Input
          labelClassName="col-span-full"
          name="about"
          placeholder="Briefly describe yourself, your skills, or your professional background."
          value={about}
          onChange={handleAboutChange}
        />
      </div>
    </BaseForm>
  );
};
