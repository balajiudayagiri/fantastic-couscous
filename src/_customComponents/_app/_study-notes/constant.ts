export const StudyNotesList: { id: number; title: string; data: string }[] = [
  {
    id: 1,
    title:
      "JavaScript `var`, `let`, and `const` Explained: Scope, Hoisting & Best Practices",
    data: `**everything you need to know** about \`var\`, \`let\`, and \`const\` in **JavaScript**, including **scope, hoisting, TDZ, mutability, re-declaration, use cases, and common pitfalls**.

---

## ✅ 1. **Scope**
### 🔹 \`var\` – Function Scope
- Available throughout the **entire function** in which it is declared.
- Doesn't respect block-level scope (like \`if\`, \`for\`, etc.)

\`\`\`js
function example() {
  if (true) {
    var x = 10;
  }
  console.log(x); // ✅ 10
}
\`\`\`

### 🔹 \`let\` & \`const\` – Block Scope
- Only available **within the block \`{}\`** where they are defined.

\`\`\`js
function example() {
  if (true) {
    let y = 20;
    const z = 30;
  }
  console.log(y); // ❌ ReferenceError
  console.log(z); // ❌ ReferenceError
}
\`\`\`

---

## ✅ 2. **Hoisting**
All three are **hoisted** (moved to the top of their scope), but behave differently:

| Keyword | Hoisted | Initialized | Access Before Declaration |
|---------|---------|-------------|----------------------------|
| \`var\`   | ✅ Yes  | ✅ as \`undefined\` | ✅ Allowed (undefined)    |
| \`let\`   | ✅ Yes  | ❌ No        | ❌ Throws ReferenceError   |
| \`const\` | ✅ Yes  | ❌ No        | ❌ Throws ReferenceError   |

### 🔹 Temporal Dead Zone (TDZ)
\`let\` and \`const\` are in a **"dead zone"** from the start of the scope to where they are declared. You **cannot access** them before declaration.

\`\`\`js
console.log(a); // ✅ undefined
var a = 10;

console.log(b); // ❌ ReferenceError
let b = 20;
\`\`\`

---

## ✅ 3. **Re-declaration and Reassignment**

| Keyword | Re-declaration (same scope) | Reassignment | Notes |
|---------|------------------------------|--------------|-------|
| \`var\`   | ✅ Allowed                   | ✅ Allowed    | May lead to bugs |
| \`let\`   | ❌ Not allowed               | ✅ Allowed    | Safer |
| \`const\` | ❌ Not allowed               | ❌ Not allowed | Constant reference |

\`\`\`js
var x = 1;
var x = 2; // ✅ OK

let y = 1;
// let y = 2; // ❌ SyntaxError

const z = 1;
// z = 2; // ❌ TypeError
\`\`\`

---

## ✅ 4. **Mutability**
- **\`const\` does not make the value immutable**, only the **binding** is constant.
- If \`const\` refers to an object or array, you **can mutate** its content.

\`\`\`js
const arr = [1, 2];
arr.push(3); // ✅ Allowed
// arr = [1, 2, 3]; // ❌ Not allowed

const obj = { name: 'Balaji' };
obj.name = 'Boss'; // ✅ Allowed
\`\`\`

---

## ✅ 5. **Global Object Binding**
- Variables declared with \`var\` in the global scope become a property of the **global object** (\`window\` in browsers).
- \`let\` and \`const\` do **not** attach to the global object.

\`\`\`js
var a = 1;
let b = 2;

console.log(window.a); // ✅ 1
console.log(window.b); // ❌ undefined
\`\`\`

---

## ✅ 6. **Use Cases / Best Practices**
| Use Case                     | Preferred Keyword |
|-----------------------------|-------------------|
| Value changes over time     | \`let\`             |
| Constant values or references | \`const\`         |
| Avoid unless legacy support | \`var\`             |

> ✅ Use \`const\` by default.  
> 🔄 Switch to \`let\` only when you need to reassign.  
> ❌ Avoid \`var\` in modern code.

---

## ✅ 7. **Interview Pitfalls & Trick Questions**

### ❓ What will this print?
\`\`\`js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// ❌ 3, 3, 3
\`\`\`

🔸 \`var\` is function-scoped. By the time the \`setTimeout\` runs, the loop is over, and \`i\` is \`3\`.

### ✅ Fix with \`let\`:
\`\`\`js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// ✅ 0, 1, 2
\`\`\`

---

## ✅ 8. Summary Table

| Feature               | \`var\`               | \`let\`            | \`const\`             |
|-----------------------|---------------------|------------------|---------------------|
| Scope                 | Function             | Block             | Block                |
| Hoisting              | Yes (initialized)    | Yes (TDZ)         | Yes (TDZ)            |
| Use before declaration| ✅ Allowed (undefined) | ❌ ReferenceError | ❌ ReferenceError    |
| Redeclaration         | ✅ Yes               | ❌ No             | ❌ No                |
| Reassignment          | ✅ Yes               | ✅ Yes            | ❌ No                |
| Mutable content       | ✅ Yes               | ✅ Yes            | ✅ Yes (objects/arrays) |
| Global object binding | ✅ Yes               | ❌ No             | ❌ No                |
`,
  },
];
