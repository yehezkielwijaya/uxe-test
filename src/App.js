import "./App.css";

function App() {
  return (
    <div className="Container mx-auto px-2">
      <div className="container">
        <NameInput></NameInput>
        <PhoneInput></PhoneInput>
        <PasswordInput></PasswordInput>
        <AcmeButton>Submit</AcmeButton>
      </div>
    </div>
  );
}

function NameInput(props) {
  return (
    <input>
    </input>
  )
}

function PhoneInput() {
  return (
    <input></input>
  )
}

function PasswordInput() {
  return (
    <input></input>
  )
}

function AcmeButton(props) {
  return (
    <button className="rounded px-4 py-1 bg-gray-700 text-white border border-gray-900 font-medium shadow-lg text-center">
      {props.children}
    </button>
  );
}

export default App;
