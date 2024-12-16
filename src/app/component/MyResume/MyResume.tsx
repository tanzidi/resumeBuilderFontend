import { FullBismillahTheme } from "../resume-theme/Bismillah-theme";

const MyResume = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="a4-page">
        <div
          dangerouslySetInnerHTML={{
            __html: FullBismillahTheme(),
          }}
        />
      </div>
    </div>
  );
};

export default MyResume;
