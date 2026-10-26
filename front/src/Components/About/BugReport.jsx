import { useState } from "react";

const BugReport = () => {
  // TODO : Get logged in user info?
  const [email, setEmail] = useState(null);
  const [bugOrFeedback, setBugOrFeedback] = useState(null);
  const enabled = () => {
    console.log(email, bugOrFeedback);
    return (
      email !== null &&
      email !== "" &&
      bugOrFeedback !== null &&
      bugOrFeedback !== ""
    );
  };
  const submit = () => {
    console.log("Submitting feedback", email, bugOrFeedback);
  };
  return (
    <div>
      <h1>Bug Report / Feedback</h1>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <textarea
          name="bugOrFeedback"
          id="bugOrFeedback"
          value={bugOrFeedback}
          onChange={(e) => setBugOrFeedback(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button onClick={submit} disabled={!enabled()}>
          submit
        </button>
      </div>
    </div>
  );
};

export default BugReport;
