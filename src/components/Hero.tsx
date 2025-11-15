export function Hero() {
  return (
    <section className="flex max-lg:gap-12 max-lg:flex-col  w-full items-center max-lg:justify-center justify-between text-5xl font-bold leading-[72px] mt-[72px] max-lg:px-8 px-[100px] max-md:max-w-full max-md:text-[40px] max-md:leading-[67px] max-md:mt-10">
      <div className="max-lg:text-center text-blue-500 self-stretch my-auto max-md:max-w-full max-md:text-[40px] max-md:leading-[67px]">
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
