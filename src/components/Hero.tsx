export function Hero() {
  return (
    <section className="flex w-full items-center gap-[40px_100px] text-5xl text-[#03000d] font-bold leading-[72px] justify-between flex-wrap mt-[72px] px-[100px] max-md:max-w-full max-md:text-[40px] max-md:leading-[67px] max-md:mt-10 max-md:px-5">
      <div className="self-stretch my-auto max-md:max-w-full max-md:text-[40px] max-md:leading-[67px]">
        <span style={{color: 'rgba(63,61,86,1)'}}>Já</span>{" "}
        <span style={{color: 'rgba(119,172,241,1)'}}>
          perdeu uma oportunidade
        </span>
        <br />
        <span style={{color: 'rgba(63,61,86,1)'}}>por nao abrir um</span>{" "}
        <span style={{color: 'rgba(119,172,241,1)'}}>email</span>
        <br />
        <span style={{color: 'rgba(63,61,86,1)'}}>à tempo ??</span>
      </div>
      <img
        src="src/assets/BannerSvg.svg"
        className="aspect-[0.99] object-contain w-[368px] self-stretch min-w-60 my-auto"
        alt="Email illustration"
      />
    </section>
  );
};
