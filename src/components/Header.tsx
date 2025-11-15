export function Header() {
  // TEXT SIZE 28px
  return (
    <header className="flex w-full items-center gap-[40px_100px] overflow-hidden justify-between flex-wrap pt-[54px] max-lg:px-8 px-[100px] max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex flex-row max-md:flex-col min-w-60 items-center gap-5 flex-wrap my-auto max-md:max-w-full">
        <img
          src="src/assets/LogoSvg.svg"
          className="min-h-11 w-[164px]"
          alt="LOMA Logo"
        />
        <span className="text-[1.75rem] max-md:hidden font-medium self-stretch my-auto">
          -
        </span>
        <span className="text-[1.75rem] font-medium self-stretch my-auto">
          Redirecionando seus emails
        </span>
      </div>
      <div className="self-stretch flex items-center text-[1.75rem] text-blue-500 font-semibold justify-center my-auto p-0.5">
        <span className="self-stretch my-auto">
          Em breve..
        </span>
      </div>
    </header>
  );
};
