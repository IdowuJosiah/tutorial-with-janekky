import react from "react";
import ReactDom from "react-dom/client";


const testscore =(
<div>
    <header>
      <h3>Your Result</h3>
    </header>
    <span>
        <h1>76</h1>
        <h4>of 100</h4>
    </span>
    <main>
        <h1>Great</h1>
        <p>you scored higher than 65% of<br>
        </br> the people who have taken <br>
        </br>these tests</p>
    </main>
    <section>
        <h2>
            summary
        </h2>
        <tb>
            <tr>
                Reaction       80/100
            </tr>
            <tr>
                Memory         92/100
            </tr>
            <tr>
                Verbal         61/100
            </tr>
            <tr>
                Visual         73/100
            </tr>
        </tb>
        <button>
            Continue
        </button>
    </section>
</div>
);


const root = ReactDom.createRoot (document.getElementById ('root'))
root.render(testscore)