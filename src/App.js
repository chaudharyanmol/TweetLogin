import './App.css';

function App() {
  return (
    <div className="App">
        <div className="logo-box">
          <img src="./twitter.png" alt="Logo" className="logo"/>
          <h2>Sign In to Twitter</h2>
          <button>
            <img src="./google.png" alt="logo" className="logo-google"/>
              Sign In with google
          </button>

          <button>
            <img src="./apple.png" alt="logo" className="logo-google"/>
              Sign In with apple
          </button>

          <hr/>
          <span>Or</span>
          <form>
            <input type="text" placeholder="phone / email or username"/>
            <button>Next</button>
          </form>

          <button >Forget Password</button>
          <p>Don't have an Account <a>Sign Up</a> </p>
        </div>
    </div>
  );
}

export default App;
