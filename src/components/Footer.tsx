export function Footer() {
  return (
    <footer className="justify-between flex min-h-64 w-full gap-[40px_100px] overflow-hidden flex-wrap bg-[#77ACF1] mt-[72px] pb-12 px-[100px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex min-w-60 flex-col items-center justify-center">
        <img
          className="w-[164px] max-w-full"
          src="src/assets/LogoSvg.svg"
          alt="LOMA Logo"
        />
        <span className="text-[#3F3D56] text-center text-xl font-medium leading-[1.2] mt-2">
          Redirecionando seus emails
        </span>
      </div>
      <span className="text-[#3F3D56] text-center text-2xl font-medium leading-[1.2] max-md:max-w-full">
        Nunca mais perca um email novamente.
      </span>
    </footer>
  );
};
