import { useState, FormEvent } from 'react';

export function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!feedback.trim()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Obrigado pelo seu feedback!');
      setFeedback('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="flex w-full items-center max-md:flex-col gap-[40px_100px] max-md:gap-[96px] overflow-hidden text-center justify-between flex-wrap mt-[72px] max-lg:px-8 px-[100px] max-md:max-w-full max-md:mt-10">
      <div className="self-stretch flex min-w-60 flex-col items-center text-[#3f3d56] justify-center w-[512px] my-auto max-md:max-w-full">
        <div className="text-5xl text-blue-500 font-semibold leading-[48px] max-md:max-w-full max-md:text-[40px] max-md:leading-[45px]">
          <span class="font-bold" style={{lineHeight: '58px'}}>
            Nos ajude a tornar{" "}
          </span>
          <span class="text-blue-200 font-bold" style={{lineHeight: '58px'}}>
            LOMA{" "}
          </span>
          <span class="font-bold" style={{lineHeight: '58px'}}>
            ainda melhor.
          </span>
        </div>
        <div className="text-[28px] font-bold leading-[34px] mt-4 max-md:max-w-full">
          Nos envie sugestões de melhorias no formulário a seguir ou clique{" "}
          <span className="underline text-blue-200 hover:opacity-3/4 transition-colors">
            aqui
          </span>
          .
        </div>
      </div>
      <form 
        onSubmit={handleSubmit}
        className="self-stretch min-w-60 text-2xl text-white font-medium whitespace-nowrap leading-none w-[341px] my-auto"
      >
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Digite sua sugestão aqui..."
          className="flex min-h-[196px] w-full bg-blue-200 rounded-xl p-4 text-white placeholder-white placeholder-opacity-70 resize-none focus:outline-none focus:ring-none"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting || !feedback.trim()}
          className="justify-center items-center flex w-full bg-blue-500 mt-4 px-2 py-3 rounded-[10px] hover:bg-[#2d2a42] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="text-white self-stretch my-auto">
            {isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
          </span>
        </button>
      </form>
    </section>
  );
};
