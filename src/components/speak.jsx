const Speak = (props) => {
    const quote = props.quote;
     const TextToSpeech = () => {
    const synth = window.speechSynthesis;

    const speak = () => {
      if (synth.speaking) {
        console.error('SpeechSynthesisUtterance is already speaking');
        return;
      }

      if (quote !== '') {
        const utterance = new SpeechSynthesisUtterance(quote);
        synth.speak(utterance);
      }
    };

    return speak;
  };
    return (<div>
     <button onClick={TextToSpeech()} className="speak">Speak</button>
    </div>  );
}
 
export default Speak;