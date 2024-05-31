import { useState } from 'react';

export default function Appp() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleSuccess = () => {
    setSubscribed(true);
  };
  return (
    <div>
      {!subscribed ? (
        <Login
          email={email}
          setEmail={setEmail}
          setSubscribed={handleSuccess}
          setIsValidEmail={setIsValidEmail}
          isValidEmail={isValidEmail}
        />
      ) : (
        <Success email={email} />
      )}
    </div>
  );
}

function Login({
  email,
  setEmail,
  setSubscribed,
  setIsValidEmail,
  isValidEmail,
}) {
  function onSubmit(e) {
    e.preventDefault();
    // basic email validation
    const isValid = /\S+@\S+\.\S+/.test(email);
    setIsValidEmail(isValid);
    if (isValid) {
      setSubscribed(true);
    }
  }
  return (
    <div className='container'>
      <form onSubmit={onSubmit}>
        <h1>Stay Updated!</h1>
        <p>Join 60,000+ product manager receiving update om:</p>
        <ul>
          <ol>Product discovery and building what matters</ol>
          <ol>Measuring to enable updates are a success</ol>
          <ol>And many more!</ol>
        </ul>

        <label>Email address</label>
        {!isValidEmail && (
          <p className={!isValidEmail ? 'error-text' : ''}>
            Please enter a valid email address
          </p>
        )}
        <input
          className={!isValidEmail ? 'error-border' : ''}
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type='submit'>Subscribe to monthly news letter</button>
      </form>
    </div>
  );
}

function Success({ email }) {
  return (
    <div>
      <h1>Thanks for subscribing!</h1>A confirmation email has been sent to{' '}
      <br />
      {email} Please open it and click the button inside to confirm your
      subscription and happy coding!!!!!
    </div>
  );
}
