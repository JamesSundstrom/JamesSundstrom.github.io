class CodeBox extends HTMLElement {
  connectedCallback() {
    console.log(this.dataset);
    const codeId = this.dataset.codeid;
    const code = this.innerText.replaceAll("<", "&lt;");
    this.innerHTML = `
                  <div class="codeBox">
                    <div class="code">
                        <pre><code data-language="C++" id="${codeId}">${code}</code></pre>
                    </div>
                    <div class="copyButtonDiv">
                        <button class="copyButton" type="button" data-copy="${codeId}">
                            📋
                        </button>
                    </div>
                </div>`;
  }
}
customElements.define('code-box', CodeBox);

class WrongCodeBox extends HTMLElement {
  connectedCallback() {
    const codeId = this.dataset.codeid;
    const code = this.innerText.replaceAll("<", "&lt;");
    this.innerHTML = `
                  <div class="wrongCodeBox">
                    <div class="code">
                        <pre><code data-language="C++" id="${codeId}">${code}</code></pre>
                    </div>
                    <div class="copyButtonDiv">
                        <button class="copyButton" type="button" data-copy="${codeId}">
                            📋
                        </button>
                    </div>
                </div>`;
  }
}
customElements.define('wrong-code-box', WrongCodeBox);

const copyButtons = document.querySelectorAll(`[data-copy]`);

copyButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const codeId = e.target.dataset.copy;
    const code = document.getElementById(codeId);
    console.log(e.target.dataset);
    console.log(codeId);
    console.log(code);
    navigator.clipboard.writeText(code.innerText)
  });
});