let count = 0;

export function AddLink() {
  let socials = document.querySelector("#socials");
  let addLink = document.querySelector("#addLink");
  let box = document.createElement("div");
  let input = document.createElement("input");
  let label = document.createElement("label");

  count += 1;

  box.className = "col s12 m4 mb-3 me-3 input-field outlined social-box";
  input.placeholder = `Link ${count}`;
  input.className = "link";
  input.name = `link${count}`;
  label.textContent = `Link ${count}`;

  box.appendChild(input);
  box.appendChild(label);
  socials.insertBefore(box, addLink);
}

export function ResetCount() {
  return (count = 0);
}

export default { AddLink, ResetCount}
