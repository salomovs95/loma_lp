export function Features() {
  const features = [
    "Todos os seus emails em um único lugar.",
    "Suas mensagens são apenas suas.",
    "Integre com vários provedores de email.",
    "Use o seu app de mensagens favorito."
  ];

  return (
    <section className="flex w-full max-md:flex-col items-center gap-[40px_100px] overflow-hidden justify-between flex-wrap mt-[72px] max-lg:px-8 px-[100px] py-16 max-md:max-w-full max-md:mt-10">
      <div className="self-stretch flex min-w-60 flex-col items-stretch text-3xl text-blue-500 font-semibold leading-none my-auto max-md:max-w-full">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`flex items-center gap-3 justify-center ${
              index > 0 ? 'mt-3.5' : ''
            } ${index === 1 || index === 3 ? 'pl-10 max-md:pl-5' : ''} max-md:max-w-full`}
          >
            <img
              src="src/assets/ShieldIcon.svg"
              className="aspect-[1] object-contain w-9 self-stretch shrink-0 my-auto"
              alt="Feature icon"
            />
            <span className="text-blue-500 self-stretch my-auto max-md:max-w-full">
              {feature}
            </span>
          </div>
        ))}
      </div>
      <div className="max-md:hidden self-stretch flex min-w-60 items-center gap-[40px_48px] my-auto">
        <img
          src="src/assets/PhoneMessageSvg.svg"
          class="w-auto max-h-full"
          alt="Phone Message icon"
        />
      </div>
    </section>
  );
};
