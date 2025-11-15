export function About() {
  return (
    <section className="flex w-full flex-col overflow-hidden items-center text-[32px] text-[#03000D] font-medium justify-center mt-[72px] px-[100px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="text-center text-[44px] leading-[1.6]">
        Conheça{" "}
        <span class="text-blue-200 font-semibold">
          LOMA
        </span>
      </div>
      <div className="text-center leading-[38px] mt-4 max-md:max-w-full">
        Redirecionamos seus emails não lidos
        <br />
        direto no seu app de mensagens preferido.
      </div>
      <div className="leading-none mt-4 max-md:max-w-full">
        Nunca mais perca um email novamente.
      </div>
    </section>
  );
};
