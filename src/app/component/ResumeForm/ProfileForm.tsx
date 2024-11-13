import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import { changeProfile, selectProfile } from "@/app/lib/redux/resumeSlice";
import { BaseForm } from "./Form";
import { Input } from "./Form/InputGroup";
import { PersonalSection } from "@/app/lib/redux/types";

export const ProfileForm = () => {
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();

  const {
    name,
    email,
    phone,
    url,
    headline,
    address,
    city,
    customField,
    linkedIn,
    postCode,
  } = profile;

  const handleProfileChange = (field: keyof PersonalSection, value: string) => {
    dispatch(changeProfile({ field, value }));
  };

  return (
    <BaseForm heading="Persona Info">
      <div className="grid grid-cols-6 gap-3">
        <Input
          label="Full Name"
          labelClassName="col-span-full"
          name="name"
          placeholder="Enter your full name"
          value={name}
          onChange={handleProfileChange}
        />
        <Input
          label="Professional Headline"
          labelClassName="col-span-full"
          name="headline"
          placeholder="Ex. Software Engineer | Data Scientist"
          value={headline}
          onChange={handleProfileChange}
        />
        <Input
          label="Email Address"
          labelClassName="col-span-4"
          name="email"
          placeholder="example@mail.com"
          value={email}
          onChange={handleProfileChange}
        />
        <Input
          label="Phone Number"
          labelClassName="col-span-2"
          name="phone"
          placeholder="(123) 456-7890"
          value={phone}
          onChange={handleProfileChange}
        />
        <Input
          label="Personal Website"
          labelClassName="col-span-4"
          name="url"
          placeholder="www.yourwebsite.com"
          value={url}
          onChange={handleProfileChange}
        />
        <Input
          label="Address"
          labelClassName="col-span-3"
          name="address"
          placeholder="Street name, building number, apartment (if applicable)"
          value={address}
          onChange={handleProfileChange}
        />
        <Input
          label="City and State"
          labelClassName="col-span-3"
          name="city"
          placeholder="City, State (Ex., San Francisco, CA)"
          value={city}
          onChange={handleProfileChange}
        />
        <Input
          label="Postal Code / ZIP Code"
          labelClassName="col-span-3"
          name="postCode"
          placeholder="Enter your postal code"
          value={postCode}
          onChange={handleProfileChange}
        />
        <Input
          label="LinkedIn Profile"
          labelClassName="col-span-3"
          name="linkedIn"
          placeholder="your-profile"
          value={linkedIn}
          onChange={handleProfileChange}
        />
        <Input
          label="Custom Link (Ex. GitHub or Portfolio Link)"
          labelClassName="col-span-4"
          name="customField"
          placeholder="github.com/your-username"
          value={customField}
          onChange={handleProfileChange}
        />
      </div>
    </BaseForm>
  );
};
