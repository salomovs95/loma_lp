export function About() {
  return (
    <section className="flex w-full flex-col overflow-hidden items-center text-[32px] font-medium justify-center mt-[72px] max-lg:px-8 px-[100px] max-md:max-w-full max-md:mt-10">
      <span className="text-center text-[44px] leading-[1.6]">
        Conheça{" "}
        <span class="text-blue-200 font-semibold">
          LOMA
        </span>
      </span>
      <span className="text-center leading-[38px] mt-4 max-md:max-w-full">
        Redirecionamos seus emails não lidos
        <br />
        direto no seu app de mensagens preferido.
      </span>
      <span className="leading-none mt-4 max-md:max-w-full text-center">
        Nunca mais perca um email novamente.
      </span>
    </section>
  );
};
