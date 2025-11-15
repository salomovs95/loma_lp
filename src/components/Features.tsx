export function Features() {
  const features = [
    "Todos os seus emails em um único lugar.",
    "Suas mensagens são apenas suas.",
    "Integre com vários provedores de email.",
    "Use o seu app de mensagens favorito."
  ];

  return (
    <section className="flex w-full items-center gap-[40px_100px] overflow-hidden justify-between flex-wrap mt-[72px] px-[100px] py-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="self-stretch flex min-w-60 flex-col items-stretch text-3xl text-[#3F3D56] font-semibold leading-none my-auto max-md:max-w-full">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`flex items-center gap-3 justify-center ${
              index > 0 ? 'mt-3.5' : ''
            } ${index === 1 || index === 3 ? 'pl-10 max-md:pl-5' : ''} max-md:max-w-full`}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/2f1cc330e0fcae120ce8d6c1854f02d5e61411a4?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-9 self-stretch shrink-0 my-auto"
              alt="Feature icon"
            />
            <div className="text-blue-500 self-stretch my-auto max-md:max-w-full">
              {feature}
            </div>
          </div>
        ))}
      </div>
      <div className="self-stretch flex min-w-60 items-center gap-[40px_48px] my-auto">
        <img
          src="src/assets/PhoneMessageSvg.svg"
          class="w-auto max-h-full"
          alt="Phone Message icon"
        />
      </div>
    </section>
  );
};
