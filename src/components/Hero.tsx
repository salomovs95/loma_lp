export function Hero() {
  return (
    <section className="flex w-full items-center gap-[40px_100px] text-5xl text-[#03000d] font-bold leading-[72px] justify-between flex-wrap mt-[72px] px-[100px] max-md:max-w-full max-md:text-[40px] max-md:leading-[67px] max-md:mt-10 max-md:px-5">
      <div className="text-blue-500 self-stretch my-auto max-md:max-w-full max-md:text-[40px] max-md:leading-[67px]">
        <span>Já</span>{" "}
        <span class="text-blue-200">
          perdeu uma oportunidade
        </span>
        <br />
        <span>por nao abrir um</span>{" "}
        <span class="text-blue-200">email</span>
        <br />
        <span>à tempo ??</span>
      </div>
      <img
        src="src/assets/BannerSvg.svg"
        className="aspect-[0.99] object-contain w-[368px] self-stretch min-w-60 my-auto"
        alt="Email illustration"
      />
    </section>
  );
};
