let i = 1; // Counter for problem numbering

class ProblemHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h2 id="P${i}">Problem ${i}
                <span style="font-weight: normal; font-size: 1rem;">(<a href="${solutionFile}#P${i}">Solution</a>)</span>
            </h2> `;
    ++i;
  }
}
customElements.define('prob-h2', ProblemHeader);

class SolutionHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h2 id="P${i}"><a href="${problemFile}#P${i}">Problem ${i}</a></h2>`;
    ++i;
  }
}
customElements.define('soln-h2', SolutionHeader);

