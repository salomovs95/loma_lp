import { useState, FormEvent } from 'react';

export function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
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
    <section className="flex w-full items-center gap-[40px_100px] overflow-hidden text-center justify-between flex-wrap mt-[72px] px-[100px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="self-stretch flex min-w-60 flex-col items-center text-[#3f3d56] justify-center w-[512px] my-auto max-md:max-w-full">
        <div className="text-5xl font-semibold leading-[48px] max-md:max-w-full max-md:text-[40px] max-md:leading-[45px]">
          <span style={{fontWeight: 700, lineHeight: '58px'}}>
            Nos ajude a tornar{" "}
          </span>
          <span style={{fontWeight: 700, lineHeight: '58px', color: 'rgba(119,172,241,1)'}}>
            LOMA{" "}
          </span>
          <span style={{fontWeight: 700, lineHeight: '58px', color: 'rgba(63,61,86,1)'}}>
            ainda melhor.
          </span>
        </div>
        <div className="text-[28px] font-bold leading-[34px] mt-4 max-md:max-w-full">
          Nos envie sugestões de melhorias no formulário ao lado ou clique{" "}
          <span className="underline text-[#77ACF1] hover:text-[#5a9ae8] transition-colors">
            {/* onClick={() => window.open('mailto:feedback@loma.com', '_blank')}*/}
            aqui
          </span>
          .
        </div>
      </div>
      <form 
        onSubmit={handleSubmit}
        className="self-stretch min-w-60 text-2xl text-[#F0F2F5] font-medium whitespace-nowrap leading-none w-[341px] my-auto"
      >
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Digite sua sugestão aqui..."
          className="flex min-h-[196px] w-full bg-[#77ACF1] rounded-xl p-4 text-white placeholder-[#F0F2F5] placeholder-opacity-70 resize-none focus:outline-none focus:ring-2 focus:ring-[#3F3D56]"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting || !feedback.trim()}
          className="justify-center items-center flex w-full bg-[#3F3D56] mt-4 px-2 py-3 rounded-[10px] hover:bg-[#2d2a42] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="text-[#F0F2F5] self-stretch my-auto">
            {isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
          </div>
        </button>
      </form>
    </section>
  );
};
