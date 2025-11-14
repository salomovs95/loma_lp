export function About() {
  return (
    <section className="flex w-full flex-col overflow-hidden items-center text-[32px] text-[#03000D] font-medium justify-center mt-[72px] px-[100px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="text-[#03000d] text-center text-[44px] leading-[1.6]">
        Conheça{" "}
        <span style={{fontWeight: 600, color: 'rgba(119,172,241,1)'}}>
          LOMA
        </span>
      </div>
      <div className="text-[#03000D] text-center leading-[38px] mt-4 max-md:max-w-full">
        Redirecionamos seus emails não lidos
        <br />
        direto no seu app de mensagens preferido.
      </div>
      <div className="text-[#03000D] leading-none mt-4 max-md:max-w-full">
        Nunca mais perca um email novamente.
      </div>
    </section>
  );
};
