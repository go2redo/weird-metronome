const options = {
  context: new( window.AudioContext || window.webkitAudioContext )(),
  oscillatorOptions: {
    type: "sawtooth",
    frequency: {
      value: [ 220, 440 ]
    }
  }
};

const createOscillator = key => {
  const {
    type,
    frequency
  } = options.oscillatorOptions;
  const oscillator = options.context.createOscillator();
  let now = options.context.currentTime;
  oscillator.type = type;
  oscillator.frequency.value = frequency.value[ key ];
  oscillator.connect( options.context.destination );
  oscillator.start( now );
  oscillator.stop( now + 0.1 );
};


const metronome = ( run, beat, bpm, call, count = 0 ) => {
  if ( run ) {
    call( count );
    clearInterval( this.timer );
    const interval = ( 60 / bpm ) * 1000;
    this.timer = setInterval( () => {
      count % beat === 0 ? createOscillator( 0 ) : createOscillator( 1 );
      const newCount = ++count % beat;
      metronome( run, beat, bpm, call, newCount )
    }, interval );
  } else {
    clearInterval( this.timer );
  }
};

export default metronome;