export function Header() {
  // TEXT SIZE 28px
  return (
    <header className="flex w-full items-center gap-[40px_100px] overflow-hidden justify-between flex-wrap pt-[54px] px-[100px] max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex min-w-60 items-center gap-5 flex-wrap my-auto max-md:max-w-full">
        <img
          src="src/assets/LogoSvg.svg"
          className="min-h-11 w-[164px]"
          alt="LOMA Logo"
        />
        <span className="text-[#03000D] text-[1.75rem] font-medium self-stretch my-auto">
          -
        </span>
        <span className="text-[#03000D] text-[1.75rem] font-medium self-stretch my-auto">
          Redirecionando seus emails
        </span>
      </div>
      <div className="self-stretch flex items-center text-[1.75rem] text-[#3F3D56] font-semibold justify-center my-auto p-0.5">
        <span className="text-[#3F3D56] self-stretch my-auto">
          Em breve..
        </span>
      </div>
    </header>
  );
};
