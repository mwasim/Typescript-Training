import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";

//TYPE ANNOTATIONS
import TypeAnnotationsTutorial from "./ts1-type-annotations.ts";
TypeAnnotationsTutorial();
//TYPE ANNOTATIONS - Challenge
import TypeAnnotationsChallenge from "./ts1-type-annotations-challenge.ts";
TypeAnnotationsChallenge();

//UNION TYPES
import UnionTypesTutorial from "./ts2-union-types.ts";
UnionTypesTutorial();
import UnionTypesChallenge from "./ts2-union-types-challenge.ts";
UnionTypesChallenge();

//ARRAYS
import ArraysTutorial from "./ts3-arrays.ts";
ArraysTutorial();

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