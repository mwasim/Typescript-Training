import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";

//TYPE ANNOTATIONS
import TypeAnnotationsTutorial from "./ts1-type-annotations.ts";
TypeAnnotationsTutorial();
//TYPE ANNOTATIONS - Challenge
import TypeAnnotationsChallenge from "./ts1-type-annotations-challenge.ts";
TypeAnnotationsChallenge();

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;
