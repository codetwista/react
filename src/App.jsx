const Hello = (props) => {
  console.log(props);

  return (
    <div>
      Hello {props.name}, you are {props.age} years old.
    </div>
  );
};

const App = () => {
  // console.log('Hello from component!');

  // const now = new Date();
  // const a = 10;
  // const b = 20;

  // console.log(now, a + b);

  const nimi = 'Pekka';
  const ika = 10;

  return (
    <div>
      {/* <p>Hello world!</p>
      <p>
        {a} plus {b} is {a + b}
      </p> */}
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
    </div>
  );
};

export default App;
