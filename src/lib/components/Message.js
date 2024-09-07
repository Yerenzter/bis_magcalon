import { M } from "@materializecss/materialize";

export default function Message(text) {
  return M.toast({ text: text, displayLength: 2000 });
}
