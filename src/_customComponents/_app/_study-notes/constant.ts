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
  {
    id: 2,
    title:
      "JavaScript Closures Explained: How They Work and Their Role in `Functional Programming`",
    data: `**everything you need to know** about **\`closures\`** in **JavaScript**, including **what they are, how they work under the hood, practical examples, functional programming patterns, and common pitfalls**.

---

## ✅ 1. **Definition & Lexical Scope**
- A **closure** is an **inner function** that has access to variables from an **outer (enclosing) function's scope**, even after the outer function has returned.
- Closures rely on JavaScript's **lexical scoping**, where functions remember the environment in which they were created.

\`\`\`js
function outer() {
  const message = 'Hello, Closure!';
  function inner() {
    console.log(message);
  }
  return inner;
}
const greet = outer();
greet(); // ✅ "Hello, Closure!"
\`\`\`

---

## ✅ 2. **How Closures Work Internally**
- **Lexical Environment**  
  Each function execution creates a _Lexical Environment_ record containing local variables and a reference to its parent environment.
- **Memory Retention**  
  When an inner function is returned or passed around, its Lexical Environment stays alive in memory, preserving the variable values it closed over.

---

## ✅ 3. **Practical Examples**
### 🔹 Private Data / Module Pattern
\`\`\`js
const Counter = (function() {
  let count = 0; // private
  return {
    increment() { return ++count; },
    get()       { return count; }
  };
})();
console.log(Counter.get());      // ✅ 0
Counter.increment();
console.log(Counter.get());      // ✅ 1
\`\`\`

---

## ✅ 4. **Functional Programming Patterns**
| Pattern                 | Description                                                       |
|-------------------------|-------------------------------------------------------------------|
| **Currying**            | Transforming a function with multiple arguments into chained calls |
| **Partial Application** | Pre-filling some arguments to create specialized functions         |
| **Memoization**         | Caching function results to optimize performance                  |

\`\`\`js
// Currying example
function add(a) {
  return function(b) {
    return a + b;
  };
}
const add5 = add(5);
console.log(add5(3)); // ✅ 8

// Memoization example
function memoize(fn) {
  const cache = {};
  return function(arg) {
    if (!(arg in cache)) cache[arg] = fn(arg);
    return cache[arg];
  };
}
const fib = memoize(n =>
  n < 2 ? n : fib(n - 1) + fib(n - 2)
);
console.log(fib(10)); // ✅ 55
\`\`\`

---

## ✅ 5. **Common Pitfalls**
- **Unintended Memory Leaks**  
  Keeping closures alive longer than necessary can bloat memory if they close over large objects or arrays.
- **Shared Loop Variables**  
  Using \`var\` in loops can lead closures to capture the same variable instance.

\`\`\`js
for (var i = 0; i < 3; i++) {
  setTimeout(function() { console.log(i); }, 1000);
}
// ❌ Prints 3, 3, 3 instead of 0, 1, 2
\`\`\`

---

## ✅ 6. **Summary Table**

| Aspect              | Details                                                                 |
|---------------------|-------------------------------------------------------------------------|
| **Creation**        | When an inner function accesses variables from its outer scope         |
| **Scope**           | Captures the Lexical Environment at definition time                     |
| **Lifetime**        | Closed-over variables live as long as any referencing closure exists   |
| **Use Cases**       | Encapsulation, currying, partial application, memoization               |
| **Pitfalls**        | Memory leaks, unexpected shared state                                  |

> ✅ Use closures to **encapsulate private state**, **build higher-order functions**, and implement **functional programming patterns**.  
> ❌ Avoid over-retaining large data structures or unintentionally sharing variables.  
`,
  },
  {
    id: 3,
    title:
      "JavaScript Event Loop Explained: How Asynchronous Operations with `Promises` and `Async/Await` Are Handled",
    data: `**everything you need to know** about the **JavaScript \`event loop\`**, including **\`call stack\`**, \`task queues\`, \`promises\`, \`async/await\`, \`microtasks vs. macrotasks\`, \`execution order\`, and \`common pitfalls\`.

---

## ✅ 1. **Event Loop Basics**
- The **call stack** executes function frames in a LIFO order.
- **Web APIs / Runtime** (browser or Node) handle asynchronous operations (timers, I/O, DOM events).
- Completed async callbacks are queued in **task queues** for the event loop to pick up.

\`\`\`js
console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
console.log('End');
// ✅ Logs: Start, End, Timeout
\`\`\`

---

## ✅ 2. **Macro-tasks vs. Micro-tasks**
| Queue Type   | Examples                          | When They Run               |
|--------------|-----------------------------------|------------------------------|
| **Macro-task**   | \`setTimeout\`, \`setInterval\`, I/O callbacks | After the current stack and all microtasks |
| **Micro-task**   | \`Promise.then\`, \`MutationObserver\`       | Immediately after current stack, before next macrotask |

---

## ✅ 3. **Promises & Microtasks**
- \`Promise\` callbacks always go into the **microtask queue**.
- Microtasks run **before** the next macrotask, allowing promise chains to execute quickly.

\`\`\`js
console.log('A');
Promise.resolve().then(() => console.log('B'));
console.log('C');
// ✅ Logs: A, C, B
\`\`\`

---

## ✅ 4. **Async/Await Under the Hood**
- \`async\` functions return a promise; \`await\` pauses execution until the promise settles.
- Behind the scenes, each \`await\` yields to the event loop, scheduling the rest of the function as a microtask.

\`\`\`js
async function foo() {
  console.log('1');
  await null;
  console.log('2');
}
foo();
console.log('3');
// ✅ Logs: 1, 3, 2
\`\`\`

---

## ✅ 5. **Practical Example**
\`\`\`js
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const json = await response.json();
    console.log('Data:', json);
  } catch (err) {
    console.error('Error:', err);
  }
}
fetchData();
console.log('After fetch');
// Possible logs: "After fetch", then "Data: …"
\`\`\`

---

## ✅ 6. **Common Pitfalls**
- **Blocking the Call Stack**  
  Heavy synchronous work prevents the event loop from processing tasks.
- **Unresolved Promise Chains**  
  Forgetting to return or catch can leave microtasks dangling.
- **setTimeout(fn, 0) ≠ Immediate**  
  Even zero-delay timers wait for the next macrotask turn.

---

## ✅ 7. **Summary Table**

| Feature                    | Description                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
| **Call Stack**             | Executes frames LIFO                                                          |
| **Macro-tasks**            | \`setTimeout\`, I/O – queued for next tick after microtasks                   |
| **Micro-tasks**            | \`Promise.then\`, \`MutationObserver\` – run immediately after current stack  |
| **Async/Await**            | Sugar on promises; each \`await\` yields to microtask queue                   |
| **Order of Execution**     | Call Stack → Microtasks → Render → Macro-tasks                                |
| **Pitfalls**               | Blocking, dangling promises, misunderstanding of task ordering               |

> ✅ Leverage microtasks (\`Promise\`, \`async/await\`) for smoother async flows.  
> ❌ Don’t block the call stack with heavy sync work or assume \`setTimeout(fn, 0)\` is instantaneous.  
`,
  },
  {
    id: 4,
    title:
      "JavaScript Shallow vs Deep Comparison: Differences, Use Cases & Best Practices",
    data: `**everything you need to know** about **shallow vs deep comparison** in **JavaScript**, including **definitions**, **implementation patterns**, **performance considerations**, **common pitfalls**, and **when to use each**.

---

## ✅ 1. **Definitions**
- **Shallow Comparison**  
  Checks only **first-level** values or **object references**.
- **Deep Comparison**  
  Recursively checks **all nested properties** for full structural equivalence.

\`\`\`js
// Shallow
3 === 3;                // true
{ a: 1 } === { a: 1 };  // false (different references)

// Deep (using lodash)
_.isEqual({ a: 1 }, { a: 1 }); // true
\`\`\`

---

## ✅ 2. **Shallow Comparison**
- **Primitives**: use \`===\` (strict) or \`==\` (loose) equality.
- **Objects/Arrays**: compares **references**, not contents.

\`\`\`js
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 === arr2); // false (different refs)
const arr3 = arr1;
console.log(arr1 === arr3); // true  (same ref)
\`\`\`

---

## ✅ 3. **Deep Comparison**
- **Recursive algorithms**: walk object graph, compare types and values.
- **Built-in hack**: \`JSON.stringify\`, but beware of key order and unsupported types.
- **Libraries**: e.g. \`lodash.isEqual\`.

\`\`\`js
function deepEqual(a, b) {
  if (a === b) return true;
  if (
    a == null || b == null ||
    typeof a !== 'object' || typeof b !== 'object'
  ) return false;
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  for (let key of keysA) {
    if (!deepEqual(a[key], b[key])) return false;
  }
  return true;
}
console.log(
  deepEqual(
    { a: 1, b: { c: 2 } },
    { a: 1, b: { c: 2 } }
  )
); // ✅ true
\`\`\`

---

## ✅ 4. **Use Cases**
| Scenario                          | Preferred Comparison |
|-----------------------------------|----------------------|
| Checking primitive values         | Shallow              |
| Referential equality in React      | Shallow              |
| Validating nested data structures | Deep                 |
| Object-diff tools or serializers   | Deep                 |

---

## ✅ 5. **Common Pitfalls**
- **Performance**: deep comparisons on large or circular graphs can be very slow.
- **Circular References**: naive recursion will stack-overflow.
- **Special Types**: \`Date\`, \`RegExp\`, \`Map\`, \`Set\`, functions aren’t handled by simple JSON hacks.

---

## ✅ 6. **Summary Table**

| Comparison Type | Checks                         | Performance | Pitfall                   |
|-----------------|--------------------------------|-------------|---------------------------|
| **Shallow**     | Top-level primitives or refs   | Fast        | Misses nested differences |
| **Deep**        | Entire nested object graph     | Slower      | Circular refs, overhead  |

> ✅ Use **shallow** for high-performance, first-level checks.  
> ✅ Use **deep** (or a library) for full structural equality.  
> ❌ Avoid deep on very large or circular objects without safeguards.  
`,
  },
  {
    id: 5,
    title:
      "JavaScript Prototypal Inheritance Explained: How It Works and Differences from Classical Inheritance",
    data: `**everything you need to know** about **prototypal inheritance** in **JavaScript**, including **prototypes, prototype chain, delegation patterns, ES6 classes under the hood, classical vs prototypal differences, use cases, and common pitfalls**.

---

## ✅ 1. **Core Concept & Prototype Chain**
- Every JavaScript object has an internal **\`[[Prototype]]\`** (accessible via **\`__proto__\`** or **\`Object.getPrototypeOf\`**).
- **Prototypal inheritance** means objects delegate property access to their prototype object.

\`\`\`js
const parent = { greet() { return 'Hello'; } };
const child = Object.create(parent);
console.log(child.greet()); // ✅ "Hello"
\`\`\`

---

## ✅ 2. **Creating Inheritance**
### 🔹 Object.create
\`\`\`js
const animal = { speak() { console.log('...'); } };
const dog = Object.create(animal);
dog.speak(); // ✅ "..."
\`\`\`

### 🔹 Constructor Functions
\`\`\`js
function Person(name) { this.name = name; }
Person.prototype.sayName = function() {
  console.log(this.name);
};
const alice = new Person('Alice');
alice.sayName(); // ✅ "Alice"
\`\`\`

### 🔹 ES6 Classes (Syntactic Sugar)
\`\`\`js
class Vehicle {
  constructor(type) { this.type = type; }
  describe() { console.log(this.type); }
}
class Car extends Vehicle {
  drive() { console.log('Driving'); }
}
const c = new Car('Sedan');
c.describe(); // ✅ "Sedan"
\`\`\`

---

## ✅ 3. **Prototypal vs Classical**
| Aspect                | Prototypal Inheritance               | Classical Inheritance                  |
|-----------------------|--------------------------------------|----------------------------------------|
| Mechanism             | Objects delegate to other objects    | Classes define blueprints and hierarchies |
| Syntax                | \`Object.create\`, \`__proto__\`      | \`class\`, \`extends\`, \`super\`      |
| Dynamics              | Highly dynamic; modify at runtime    | More static; class definitions fixed   |
| Instantiation         | Delegation-based                     | Construction via \`new\` and constructors |
| Flexibility           | Mixins & delegation                  | Structured hierarchy                   |

---

## ✅ 4. **Use Cases**
- **Object Composition & Mixins**: share behavior across unrelated objects.  
- **Dynamic Extensions**: add or override methods at runtime.  
- **Polymorphism**: delegate to different prototypes for variation.

---

## ✅ 5. **Common Pitfalls**
- **Overwriting Prototype**: resetting a constructor’s \`prototype\` can break the \`constructor\` link.  
- **Modifying Built-ins**: altering \`Array.prototype\` or \`Object.prototype\` can lead to global conflicts.  
- **Confusing \`__proto__\` vs \`prototype\`**: the former is on instances, the latter on constructor functions.

---

## ✅ 6. **Summary Table**

| Feature              | Prototypal                               | Classical                                    |
|----------------------|------------------------------------------|----------------------------------------------|
| Definition           | Objects inherit directly via prototype   | Classes and instances via constructors       |
| Prototype Chain      | \`[[Prototype]]\` link                   | Class hierarchy under the hood               |
| Runtime Dynamics     | Can change at runtime                    | Fixed structure after definition             |
| Syntax Flexibility   | Procedural/object-based                  | Declarative \`class\` syntax                 |
| Method Sharing       | Shared on prototype object               | Shared on class prototype                    |

> ✅ Use **Object.create** for simple delegation patterns.  
> ✅ Favor **composition** (mixins) over deep inheritance chains.  
> ❌ Avoid modifying **built-in prototypes** in production.  
`,
  },
  {
    id: 6,
    title:
      "TypeScript Type Inference Explained: How It Works & Improves Development",
    data: `**everything you need to know** about **type inference** in **TypeScript**, including **basic inference rules, contextual typing, generics inference, type widening/narrowing, IDE support, and common pitfalls**.

---

## ✅ 1. **Definition & Inference Basics**
- **Type Inference** is TypeScript’s ability to **automatically deduce types** when you don’t explicitly annotate them.
- Inference occurs by analyzing **initializers**, **return expressions**, and **usage contexts**.

\`\`\`ts
let count = 0;        // inferred as number
const greeting = 'Hi'; // inferred as string
function square(x: number) {
  return x * x;        // return type inferred as number
}
\`\`\`

---

## ✅ 2. **Variable & Function Inference**
- **Variables**: The type of the initializer becomes the variable’s type.
- **Functions**: If no return type is declared, TS infers it from the \`return\` statements.

\`\`\`ts
function foo() {
  return { success: true };
}
// foo(): { success: boolean }
\`\`\`

---

## ✅ 3. **Contextual Typing**
- Parameters in callbacks, event handlers, JSX props, etc., get their types from the **surrounding context**.
  
\`\`\`ts
window.addEventListener('click', e => {
  // e is inferred as MouseEvent
  console.log(e.clientX);
});
\`\`\`

---

## ✅ 4. **Generics & Advanced Inference**
- **Generic Functions/Classes** infer type parameters from the arguments you pass.
- **Type Widening**: literal types (e.g. \`'hello'\`) may widen to \`string\` unless you use \`as const\`.
- **Control-flow Narrowing**: TS narrows union types based on checks like \`typeof\` or \`in\`.

\`\`\`ts
function identity<T>(arg: T): T { return arg; }
const num = identity(42);  // T inferred as number

let status = 'idle';       // inferred as string
status = 'loading';        // still string
\`\`\`

---

## ✅ 5. **IDE & Developer Experience**
- **Autocompletion & Tooltips** are richer with accurate inferred types.
- **Refactoring** is safer, since TS knows the shapes of your data without extra annotations.
- **Reduced Boilerplate**: fewer explicit type annotations for local variables and simple functions.

---

## ✅ 6. **Common Pitfalls**
- **Implicit any**: when TS can’t infer a type (e.g. uninitialized \`let x;\`), it falls back to \`any\`.
- **Over-widening**: literal types may widen unexpectedly (\`let x = null;\` → \`any\`).
- **Complex Inference**: deeply nested generics or overloads can confuse inference and slow down compile times.

---

## ✅ 7. **Summary Table**

| Aspect                  | Inference Behavior                                             | Example                                      | Benefit                                |
|-------------------------|----------------------------------------------------------------|----------------------------------------------|----------------------------------------|
| **Variable Declarations** | Infers from initializer                                       | \`let n = 5;\` → \`n: number\`               | Reduces annotation noise               |
| **Function Returns**    | Infers from \`return\` statements                             | \`function f(){ return true; }\` → \`f(): boolean\` | Simplifies signatures           |
| **Contextual Typing**   | Infers parameter types from usage context                      | \`arr.map(x => x * 2)\` → \`x: number\`       | Better autocompletion                  |
| **Generics**            | Infers type parameters from arguments                          | \`identity('hi')\` → \`T = string\`           | No manual generic specification needed |
| **Union Narrowing**     | Narrows union types via control-flow predicates                | \`if (typeof x==='string') x: string\`       | Enhanced type safety                   |

> ✅ Favor inference for local data and simple functions.  
> ✅ Add explicit annotations on public APIs, complex generics, and uninitialized variables.  
> ❌ Don’t rely on implicit \`any\`; always ensure your types are intentional.  
`,
  },
  {
    id: 7,
    title: "TypeScript Type Assertion Explained: What It Is & When to Use It",
    data: `**everything you need to know** about **type assertion** in **TypeScript**, including **definition, syntax, use cases, differences from type casting, runtime behavior, benefits, and common pitfalls**.

---

## ✅ 1. **Definition & Syntax**
- A **type assertion** tells the compiler to treat a value as a specific type without changing its runtime behavior.
- Syntax:
  - Angle-bracket: \`<Type>value\` (not allowed in \`*.tsx\`)
  - \`as\` operator: \`value as Type\`

---

## ✅ 2. **Examples**
\`\`\`ts
let someValue: unknown = "hello world";
let strLength: number = (someValue as string).length;

// Angle-bracket syntax
let count = (<number>(<unknown>"123")).toFixed(0);
\`\`\`

---

## ✅ 3. **Use Cases**
| Scenario                                         | Recommended Pattern                        |
|--------------------------------------------------|--------------------------------------------|
| Working with \`any\` or \`unknown\`               | Use type assertion to refine type         |
| Interacting with DOM (e.g., \`document.getElementById\`) | Assert element types                     |
| Third-party library types                        | Assert specific interfaces                 |

---

## ✅ 4. **Comparison to Casting**
- **Type Assertion**: Compile-time only, no runtime conversion.
- **Type Casting** (in other languages): May involve runtime checks or conversions.
- In TS, assertions are purely for the compiler.

---

## ✅ 5. **Benefits & Pitfalls**
- **Benefits**:
  - Improves type safety when the compiler lacks context.
  - Enables proper autocompletion and type checking.
- **Pitfalls**:
  - Overusing assertions can hide real type errors.
  - Incorrect assertions can lead to runtime errors if the actual value doesn’t match the asserted type.

---

## ✅ 6. **Summary Table**

| Aspect               | Details                                                      |
|----------------------|--------------------------------------------------------------|
| **Syntax**           | \`value as Type\` or \`<Type>value\`                         |
| **Runtime Behavior** | No effect at runtime                                         |
| **Use Cases**        | Refining \`any\`/\`unknown\`, DOM elements, libraries        |
| **Warning**          | Unsafe assertions bypass type checks                         |

> ✅ Use type assertions sparingly to guide the compiler.  
> ❌ Don’t assert to \`any\` or bypass legitimate type errors.  
`,
  },
  {
    id: 8,
    title:
      "JavaScript null vs undefined Explained: Differences, Use Cases & Best Practices",
    data: `**everything you need to know** about **\`null\`** and **\`undefined\`** in **JavaScript**, including **definitions**, **type categories**, **initialization**, **comparisons**, **use cases**, **best practices**, and **common pitfalls**.

---

## ✅ 1. **Definitions**
- **\`undefined\`** indicates a variable has been declared but not initialized.  
- **\`null\`** is an assignment value representing intentional absence of any object value.

---

## ✅ 2. **Type & Category**
- **\`undefined\`** has type \`undefined\`.  
- **\`null\`** has type \`object\` (a legacy JavaScript quirk).

\`\`\`js
console.log(typeof undefined); // 'undefined'
console.log(typeof null);      // 'object'
\`\`\`

---

## ✅ 3. **Declaration & Initialization**
\`\`\`js
let foo;
console.log(foo); // undefined

let bar = null;
console.log(bar); // null
\`\`\`

---

## ✅ 4. **Equality Comparisons**
- Loose equality \`==\` considers \`null\` and \`undefined\` equal.  
\`\`\`js
console.log(null == undefined);  // true
\`\`\`
- Strict equality \`===\` differentiates them.  
\`\`\`js
console.log(null === undefined); // false
\`\`\`

---

## ✅ 5. **Use Cases & Best Practices**
| Scenario                          | Use                |
|-----------------------------------|--------------------|
| Uninitialized variables           | \`undefined\`      |
| Resetting or clearing values      | \`null\`           |
| Function return when no result    | \`null\`           |
| API responses absence of data     | \`null\`           |

---

## ✅ 6. **Common Pitfalls**
- **\`typeof null\`** returns \`object\`, which can be misleading.  
- Using **\`undefined\`** unintentionally signals missing value.  
- **JSON.stringify** omits \`undefined\` but serializes \`null\`.

---

## ✅ 7. **Summary Table**
| Feature                | \`undefined\`                   | \`null\`                       |
|------------------------|---------------------------------|--------------------------------|
| Type                   | \`undefined\`                   | \`object\`                     |
| Value                  | uninitialized variable          | explicit empty value          |
| \`==\` comparison      | equal to \`null\`               | equal to \`undefined\`         |
| \`===\` comparison     | not equal to \`null\`           | not equal to \`undefined\`     |
| JSON behavior          | omitted in JSON.stringify       | serialized as \`null\`         |

---

> ✅ Use \`undefined\` for uninitialized or missing values.  
> ✅ Use \`null\` when you explicitly want to denote “no value.”  
> ❌ Avoid treating \`undefined\` and \`null\` interchangeably; choose based on intent.  
`,
  },
  {
    id: 9,
    title: "Optimizing SSR Performance in Next.js",
    data: `**Optimizing Server-Side Rendering (SSR)** in **Next.js** can dramatically enhance performance, reducing load times and improving the user experience.

---

## ✅ 1. **Efficient Data Fetching**
### 🔹 **Use \`getServerSideProps\` Wisely**
- SSR should be used only when real-time data fetching is required on every request.
- Prefer **Static Site Generation (SSG)** or **Incremental Static Regeneration (ISR)** for pages that don’t need to be dynamically rendered on each request.

\`\`\`js
// Using getServerSideProps for SSR
export async function getServerSideProps(context) {
  const data = await fetchData(); // Fetch real-time data here
  return { props: { data } };
}
\`\`\`

### 🔹 **Minimize External API Calls**
- Combine API requests into a single call to reduce server-side fetches.
- Cache the API responses where applicable to minimize load on the server.

---

## ✅ 2. **Caching Data and Pages**
### 🔹 **Implement Caching Strategies**
- Use HTTP cache headers to cache static SSR responses, especially for pages that don't change often.
- Leverage CDNs like **Vercel** or **Cloudflare** to cache static content and reduce server load.

\`\`\`js
// Example caching headers
export async function getServerSideProps(context) {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return {
    props: { data },
    revalidate: 3600, // Cache data for 1 hour
  };
}
\`\`\`

---

## ✅ 3. **Non-blocking I/O Operations**
### 🔹 **Use Asynchronous Operations**
- Ensure data fetching and SSR code use asynchronous techniques to avoid blocking operations.
- Use **Promises** and **async/await** to keep the server non-blocking.

\`\`\`js
const fetchData = async () => {
  const res = await fetch('https://api.example.com/data');
  return res.json();
};
\`\`\`

---

## ✅ 4. **Lazy Loading Resources**
### 🔹 **Defer Non-Critical Resources**
- Use **React.lazy** and **next/dynamic** to load components only when required.
- Implement **image lazy loading** using the \`loading="lazy"\` attribute to defer the loading of images not in view.

\`\`\`js
import dynamic from 'next/dynamic';

const LazyComponent = dynamic(() => import('../components/LazyComponent'));

export default function Page() {
  return <LazyComponent />;
}
\`\`\`

---

## ✅ 5. **Optimize Image Handling**
### 🔹 **Use Next.js Image Component**
- Automatically optimize images with **Next.js's \`<Image />\` component** for better performance, serving images in formats like WebP.

\`\`\`js
import Image from 'next/image';

<Image 
  src="/images/photo.jpg" 
  alt="Sample Image" 
  width={500} 
  height={300} 
  priority 
/>
\`\`\`

---

## ✅ 6. **Bundle Optimization**
### 🔹 **Split Large Bundles**
- Use **dynamic imports** and **React.lazy** to split JavaScript bundles into smaller chunks that are loaded on-demand.
- Keep track of the bundle size using **next/bundle-analyzer** and remove unused dependencies.

\`\`\`js
// Dynamic import example
const DynamicComponent = dynamic(() => import('../components/DynamicComponent'));
\`\`\`

---

## ✅ 7. **Minification and Compression**
### 🔹 **Minify CSS and JavaScript**
- Ensure **Terser** and **CSSNano** minify JavaScript and CSS files in production.
- Enable **Gzip** or **Brotli compression** to reduce the size of files sent to the client.

\`\`\`js
// Example of enabling Brotli compression
const nextConfig = {
  compress: true, // Enable Gzip/Brotli compression
};
\`\`\`

---

## ✅ 8. **Optimize HTML Rendering**
### 🔹 **Preload Critical Resources**
- Use \`<link rel="preload">\` to preload key assets like fonts and CSS files to reduce loading time.
- Use **clean \`<head>\` tags** to avoid blocking resources like unnecessary JavaScript or CSS files.

---

## ✅ 9. **Improve Time to First Byte (TTFB)**
### 🔹 **Optimize Server Response Time**
- Use **in-memory caching** like Redis to cache frequently requested data, reducing the time spent fetching from the database.
- Minimize latency by ensuring your server-side functions are optimized and responding quickly.

\`\`\`js
// Using Redis for caching
const redis = require('redis');
const client = redis.createClient();

client.get('cachedData', (err, data) => {
  if (data) {
    return data;
  } else {
    // Fetch and cache data
    client.set('cachedData', 'new data');
  }
});
\`\`\`

---

## ✅ 10. **Use HTTP/2**
### 🔹 **Enable HTTP/2**
- HTTP/2 helps in improving the performance by enabling multiplexing and reducing the number of connections for multiple resources.
- Implement **server push** to send multiple assets (like JavaScript, CSS) before the browser even requests them.

\`\`\`js
// Example of HTTP/2 server push in NGINX
location / {
  http2_push /js/main.js;
  http2_push /css/styles.css;
}
\`\`\`

---

## ✅ 11. **Summary Table**

| Optimization Technique          | Description                                           |
|----------------------------------|-------------------------------------------------------|
| **Efficient Data Fetching**      | Use SSR only when necessary, use SSG/ISR for others   |
| **Caching Data & Pages**         | Use caching headers and CDNs for static data         |
| **Non-blocking I/O Operations**  | Use async/await for non-blocking operations          |
| **Lazy Loading Resources**       | Use dynamic imports and lazy load non-critical assets|
| **Optimize Image Handling**      | Use Next.js Image component for image optimization   |
| **Bundle Optimization**          | Split bundles and track sizes with next/bundle-analyzer|
| **Minification & Compression**   | Minify JS and CSS, enable Brotli/Gzip compression    |
| **Optimize HTML Rendering**      | Preload critical assets and clean \`<head>\` tags      |
| **Improve TTFB**                 | Use in-memory caching and optimize server response   |
| **Use HTTP/2**                   | Enable HTTP/2 for multiplexing and resource push     |
`,
  },
  {
    id: 10,
    title: "`Closures` in JavaScript",
    data: "A closure is created when a function is defined inside another function and gains access to the outer function’s variables — even after the outer function has finished execution.\n\n✅ Key points:\n\n- The inner function 'remembers' the environment (variables) in which it was created.\n\n- Closures enable private variables — variables that cannot be accessed from outside the function directly.\n\n**Simple Example:**\n\n```javascript\nfunction outerFunction() {\n  let privateVariable = 'I'm private';\n\n  function innerFunction() {\n    console.log(privateVariable); // Accesses the variable from outerFunction\n  }\n\n  return innerFunction;\n}\n\nconst closureFunc = outerFunction();\nclosureFunc(); // Output: 'I'm private'\n```\nEven though outerFunction has finished running, closureFunc still remembers privateVariable.\n\n**Real-world use case: Private Counters**\n\n```javascript\nfunction createCounter() {\n  let count = 0;\n\n  return {\n    increment: function() {\n      count++;\n      console.log(count);\n    },\n    decrement: function() {\n      count--;\n      console.log(count);\n    }\n  };\n}\n\nconst counter = createCounter();\ncounter.increment(); // 1\ncounter.increment(); // 2\ncounter.decrement(); // 1\n```\nHere, count is private — it can only be modified using increment and decrement.",
  },
  {
    id: 11,
    title: "`Event Loop` in JavaScript",
    data: "JavaScript uses a single thread. Asynchronous operations are processed using the event loop, which processes tasks once the call stack is empty. Promises and async/await simplify async handling.\n\n🧠 Main idea:\n\nJavaScript runs in a single thread, meaning it can only do one thing at a time (one line of code at a time).\n\nBut we often want to do asynchronous tasks (like fetching data, setting timers) without blocking the rest of the code.\nThis is where the event loop comes into play.\n\nHow it works step-by-step:\n\n**Call Stack:**\n\n- This is where JavaScript keeps track of what function is currently running.\n- Only one function can be on top at a time.\n\n**Web APIs / Background APIs:**\n\n- When we do async tasks (like setTimeout, fetch, etc.), they are handled outside of the call stack (by the browser environment or Node.js).\n\n**Task Queue / Microtask Queue:**\n\n- Once an async task (e.g., a fetch or timeout) finishes, it sends a callback to the Task Queue (or Microtask Queue for promises).\n\n**Event Loop:**\n\n- The event loop checks:\n  - Is the Call Stack empty?\n  - If yes, it moves the first task from the queue to the call stack and runs it.\n  - It keeps repeating this forever.\n\n**Visual idea:**\n\n```text\nCall Stack (current work)\n↓\nif empty ➔ Event Loop\n↓\nTask Queue / Microtask Queue (waiting tasks)\n↓\nMove tasks to Call Stack\n```\n**Quick Example:**\n\n```javascript\nconsole.log('Start');\n\nsetTimeout(() => {\n  console.log('Timeout callback');\n}, 1000);\n\nPromise.resolve().then(() => {\n  console.log('Promise callback');\n});\n\nconsole.log('End');\n```\nOutput:\n\n```text\nStart\nEnd\nPromise callback\nTimeout callback\n```\n**Why this order?**\n\n- Start and End run first (normal synchronous code).\n- Then Promise runs (promises use the Microtask Queue, which is prioritized).\n- Finally, setTimeout runs (tasks from the Task Queue).\n\n**Promises and async/await:**\n\n- Promises and async/await allow us to write asynchronous code that looks synchronous.\n- Under the hood, they still rely on the event loop and the microtask queue.\n\n```javascript\nasync function fetchData() {\n  const data = await fetch('https://api.example.com/data');\n  console.log('Data fetched');\n}\n```\nEven though fetch is async, await makes it look sequential — but the event loop is still managing the behind-the-scenes waiting.",
  },
  {
    id: 12,
    title: "`Prototypal Inheritance`",
    data: "In JavaScript, objects inherit directly from other objects, unlike classical inheritance in other languages.\n\n🧠 Main idea:\n\nEvery JavaScript object has a hidden internal property called [[Prototype]] (or __proto__ in some cases).\nThis prototype is simply another object.\n\nWhen you try to access a property or method on an object:\n\n- If the object does not have it, JavaScript looks up the prototype chain — i.e., it checks the object's prototype, and so on.\n\n**Simple Example:**\n\n```javascript\nconst parent = {\n  greet() {\n    console.log('Hello from parent!');\n  }\n};\n\nconst child = Object.create(parent); // child inherits from parent\n\nchild.greet(); // Output: 'Hello from parent!'\n```\nHere, child itself doesn’t have greet(), but JavaScript looks up child.__proto__ (which is parent) and finds greet() there.\n\n**The Prototype Chain (visual):**\n\n```text\nchild → parent → Object.prototype → null\n```\nIt's like a linked list! When JavaScript can't find a property, it moves up the chain until it finds it or reaches null.\n\n**Why is it powerful?**\n\n- You can share methods across multiple objects without copying.\n- It's memory efficient: shared behavior lives once on the prototype, not on each object.\n\n**Modern JavaScript and class syntax:**\n\n```javascript\nclass Animal {\n  speak() {\n    console.log('Animal speaks');\n  }\n}\n\nconst dog = new Animal();\ndog.speak(); // Output: 'Animal speaks'\n```\ndog internally has a prototype pointing to Animal.prototype.\n\nIn short:\nPrototypes are the \"behind-the-scenes\" mechanism for inheritance in JavaScript — flexible, dynamic, and powerful.",
  },
  {
    id: 13,
    title: "`Type Inference` in TypeScript",
    data: 'TypeScript infers types based on the assigned value, reducing the need for explicit type annotations.\n\n🧠 Main idea:\n\nType Inference means that TypeScript automatically figures out the type of a variable based on the assigned value, so you don’t always have to manually annotate types.\n\n**Simple Example:**\n\n```typescript\nlet name = "Alice";\n```\nTypeScript infers that name is a string, even though you didn’t explicitly write : string.\n\nIf you later try to assign a number:\n\n```typescript\nname = 123; // ❌ Error: Type \'number\' is not assignable to type \'string\'.\n```\nTypeScript will prevent it!\n\n**Where Type Inference Happens:**\n\n- **Variables**\n\n```typescript\nlet count = 42; // inferred as number\n```\n- **Function Return Types:**\n\n```typescript\nfunction getGreeting() {\n  return "Hello!";\n}\n```\nInferred return type: string\n\n- **Function Parameters (with Contextual Typing):**\n\n```typescript\nconst numbers = [1, 2, 3];\nnumbers.forEach(num => {\n  console.log(num.toFixed(2)); // num is inferred as number\n});\n```\nHere, num is automatically inferred as number because numbers is an array of numbers.\n\n- **Destructuring:**\n\n```typescript\nconst user = { name: "Alice", age: 30 };\n\nconst { name, age } = user;\n// name: string\n// age: number\n```\n\n**Why is it useful?**\n\n- Less code — no need to annotate every variable manually.\n- Safer code — still gets all the type-checking benefits.',
  },
  {
    id: 14,
    title: "`Type Assertion` in TypeScript",
    data: "Type Assertion allows you to manually tell TypeScript to treat a value as a specific type, useful in situations where you are confident in the type but TypeScript cannot infer it.\n\n🧠 Main idea:\n\nType Assertion lets you manually tell TypeScript: 'Trust me, I know what I'm doing — treat this value as a specific type.'\n\n**Syntax:**\nThere are two ways to do type assertion:\n\n1. Angle-bracket syntax (mostly in .ts files, not allowed in .tsx files):\n\n```typescript\nlet value = \"hello\" as string;\n```\n\n2. `as` syntax (recommended and works everywhere):\n\n```typescript\nlet value = <string>\"hello\";\n```\n\n**Example 1: DOM Manipulation**\nWhen querying DOM elements, TypeScript only knows it returns a general Element, but you might know it's an HTMLInputElement.\n\n```typescript\nconst input = document.querySelector('input') as HTMLInputElement;\ninput.value = \"Hello world\"; // No error because TypeScript knows it's an input!\n```\n\n**Example 2: Narrowing unknown types**\nWhen working with unknown or APIs, you might assert the type:\n\n```typescript\nfunction getValue(): unknown {\n  return \"hello\";\n}\n\nconst str = getValue() as string;\nconsole.log(str.length); // safe now\n```\n\nImportant: Type Assertion doesn't do real conversion! It does NOT change the runtime type — it only tells TypeScript to treat it differently for type checking.",
  },
  {
    id: 15,
    title: "`null` vs. `undefined`",
    data: 'null vs undefined in JavaScript:\n\n**null:** Represents intentional absence.\n\n**undefined:** Represents an uninitialized variable.\n\n**Key Differences:**\n\n| Feature               | null                                | undefined                               |\n|-----------------------|-------------------------------------|-----------------------------------------|\n| Meaning               | Intentional absence of any value.   | Variable declared but not yet assigned a value. |\n| Type                  | object (quirk from early JavaScript) | undefined                              |\n| Who sets it?          | You, the developer.                 | JavaScript itself (automatically).      |\n| Usage                 | To intentionally clear a value.     | To indicate missing, uninitialized, or unknown state. |\n\n**Example of undefined:**\n\n```javascript\nlet a;\nconsole.log(a); // Output: undefined\n```\n\na is declared but not assigned any value.\nJavaScript automatically assigns undefined.\n\n**Example of null:**\n\n```javascript\nlet b = null;\nconsole.log(b); // Output: null\n```\n\nHere, you deliberately assigned null.\nIt means \'this variable should have no value.\'\n\n**Comparison:**\n```javascript\nconsole.log(null == undefined);  // true  (loose equality - values are considered equal)\nconsole.log(null === undefined); // false (strict equality - types are different)\n```\n== allows type coercion.\n=== checks value and type — so they are not strictly equal.\n\n**Real-world examples:**\n✅ When clearing an object reference:\n\n```javascript\nlet user = { name: "Alice" };\nuser = null; // Done working with user\n```\n✅ When a function doesn\'t return anything:\n\n```javascript\nfunction sayHello() {\n  console.log("Hello");\n}\n\nconst result = sayHello();\nconsole.log(result); // Output: undefined\n```\nFunctions without a return implicitly return undefined.',
  },
  {
    id: 16,
    title: "`Spread Operator (...)` and `Rest Parameters (...)`",
    data: 'Spread Operator (...):\n🧠 Main idea:\nSpread expands an iterable (like an array or object) into individual elements.\n\n**Example 1: Expanding an array**\n\n```javascript\nconst numbers = [1, 2, 3];\nconsole.log(...numbers);  // Output: 1 2 3\n```\n\n**Example 2: Copying an array**\n\n```javascript\nconst original = [1, 2, 3];\nconst copy = [...original];\n```\n\ncopy is now a new array with the same elements.\n\n**Example 3: Merging arrays**\n\n```javascript\nconst arr1 = [1, 2];\nconst arr2 = [3, 4];\nconst merged = [...arr1, ...arr2];  // [1, 2, 3, 4]\n```\n\n**Example 4: Expanding objects**\n\n```javascript\nconst obj1 = { a: 1 };\nconst obj2 = { b: 2 };\nconst mergedObj = { ...obj1, ...obj2 };\n// { a: 1, b: 2 }\n```\n\nRest Parameters (...):\n🧠 Main idea:\nRest collects a bunch of values into a single array.\n\n**Example 1: Collecting function arguments**\n\n```javascript\nfunction sum(...numbers) {\n  return numbers.reduce((total, num) => total + num, 0);\n}\n\nconsole.log(sum(1, 2, 3, 4)); // Output: 10\n```\n\nnumbers is an array: [1, 2, 3, 4].\n\n**Example 2: Destructuring with rest**\n\n```javascript\nconst [first, ...rest] = [10, 20, 30, 40];\nconsole.log(first); // 10\nconsole.log(rest);  // [20, 30, 40]\n```\n\n**Visual Summary:**\n\n| Operation | Purpose    | Behavior           |\n|-----------|------------|--------------------|\n| Spread    | Expand     | Breaks items out   |\n| Rest      | Collect    | Gathers items together |\n\n**Simple way to remember:**\n"Spread = break it apart. Rest = gather it together."\n\nIn short:\nSpread (...): Explodes values out into individual items.\nRest (...): Collects multiple items into one array.',
  },
  {
    id: 17,
    title: "`==` vs. `===` in JavaScript",
    data: "You got it! Let’s dive a bit deeper into the differences between == and === in JavaScript and why understanding them is essential:\n\n**== (Loose Equality or Abstract Equality):**\n🧠 Main idea:\n\n== compares values after performing type coercion, meaning it converts the values to the same type before comparing.\n\n**Example 1: Comparing different types**\n\n```javascript\nconsole.log(5 == '5');  // true\n```\nJavaScript coerces the string '5' to a number before comparing, so it results in true.\n\n**Example 2: Comparing null and undefined**\n\n```javascript\nconsole.log(null == undefined);  // true\n```\nnull and undefined are considered equal when using ==, even though they are different types.\n\n**=== (Strict Equality):**\n🧠 Main idea:\n\n=== compares both the value and the type without performing any type coercion.\n\n**Example 1: Comparing different types**\n\n```javascript\nconsole.log(5 === '5');  // false\n```\nNo coercion happens here, so the number 5 and the string '5' are not the same.\n\n**Example 2: Comparing null and undefined**\n\n```javascript\nconsole.log(null === undefined);  // false\n```\nnull and undefined are not equal with === because their types are different (null is an object, undefined is undefined).\n\n**Key Differences:**\n```javascript\nconsole.log(5 == '5'); // true\nconsole.log(5 === '5'); // false\n```\nWhy Use ===?\n- Predictable: === avoids unexpected behavior caused by type coercion.\n- Best practice: Always use === for explicit comparison. It makes your code clearer and safer.\n- Avoiding bugs: When using ==, you might encounter tricky issues (like comparing null and undefined), leading to hard-to-find bugs.",
  },
  {
    id: 18,
    title: "Functional vs. Class Components",
    data: `In React, there are two primary ways to define components: **Functional Components** and **Class Components**. Both have different strengths and purposes in the React ecosystem.\n\n### 🧠 **Functional Components:**
- Functional components use hooks (introduced in React 16.8) for managing state, side effects, and context.\n
- **Simplicity**: They are concise, easier to read, and have less boilerplate code compared to class components.\n
- **Hooks**: With hooks like \`useState\`, \`useEffect\`, and \`useMemo\`, functional components can manage state and side effects without the need for class syntax.\n
- **Easier to test**: Since they are just functions, functional components are easier to unit test.\n
- **Performance**: Functional components typically have better performance because they have less overhead.\n\n**Example of a functional component:**\n
\`\`\`javascript\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}\n\`\`\`\n\n### 🧠 **Class Components:**
- Class components were the original way to define components in React.\n
- **Lifecycle Methods**: They rely on lifecycle methods like \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\` to handle side effects.\n
- **Verbosity**: Class components require more boilerplate code.\n
- **State Management**: State is managed using the \`this.state\` object and \`this.setState()\` method.\n\n**Example of a class component:**\n
\`\`\`javascript\nclass Counter extends React.Component {\n  constructor() {\n    super();\n    this.state = { count: 0 };\n  }\n\n  increment = () => {\n    this.setState({ count: this.state.count + 1 });\n  }\n\n  render() {\n    return <button onClick={this.increment}>{this.state.count}</button>;\n  }\n}\n\`\`\`\n\n### **Conclusion:**
- **Functional components** are now the recommended approach due to their simplicity, ease of testing, and support for hooks.\n
- **Class components** are still supported but are generally seen as more verbose and harder to maintain.`,
  },
  {
    id: 19,
    title: "Virtual DOM in React",
    data: `The **Virtual DOM** is a key concept in React that enhances performance by reducing the amount of direct manipulation of the real DOM.\n\n### 🧠 **How the Virtual DOM Works:**
- **Initial Render**: React creates a virtual DOM, a lightweight representation of the actual DOM elements, during the first render of the app.\n
- **State/Props Update**: When a component’s state or props change, React updates the virtual DOM first.\n
- **Reconciliation**: React compares the updated virtual DOM with the previous version (called "diffing") to detect changes.\n
- **Efficient Update**: React then updates only the parts of the real DOM that have changed, minimizing costly DOM operations.\n\n### 🧠 **Why Virtual DOM Improves Performance:**
- **Minimized Repaints/Reflows**: By updating only the parts of the real DOM that have changed, React avoids unnecessary reflows and repaints, leading to better performance, especially in large applications.\n
- **Batching Updates**: React groups multiple state updates into a single render cycle, reducing the number of operations on the DOM.\n
- **Optimized Rendering**: The virtual DOM allows React to perform efficient comparisons of changes and apply them to the real DOM in the most optimized way.\n\n### **In short:**\nThe Virtual DOM improves performance by reducing unnecessary interactions with the real DOM and ensuring that only the necessary updates are applied.`,
  },
  {
    id: 20,
    title: "Component Lifecycle in React",
    data: `The lifecycle of a component refers to the different stages a component goes through during its existence. This lifecycle is particularly important for **class components**, while functional components use hooks to replicate similar behaviors.\n\n### 🧠 **Class Component Lifecycle Methods:**
1. **Mounting**: When the component is created and added to the DOM.\n   - \`constructor()\`: Initializes state and binds methods.\n   - \`componentDidMount()\`: Called after the component is added to the DOM.\n2. **Updating**: Happens when props or state change.\n   - \`shouldComponentUpdate()\`: Determines if a re-render is necessary.\n   - \`componentDidUpdate()\`: Called after the component is updated in the DOM.\n3. **Unmounting**: When the component is removed from the DOM.\n   - \`componentWillUnmount()\`: Used to clean up before the component is destroyed.\n\n### 🧠 **Using Hooks for Lifecycle in Functional Components:**
- **useEffect()**: In functional components, \`useEffect()\` replaces most lifecycle methods like \`componentDidMount\` and \`componentDidUpdate\`.\n
- It runs code after the component renders, similar to how lifecycle methods work in class components.\n\n### **In short:**\n- Class components use lifecycle methods for handling side effects and managing component state.\n- Functional components use \`useEffect()\` for similar tasks, offering a more concise and flexible solution for handling side effects.`,
  },
  {
    id: 21,
    title: "React Hooks",
    data: `React introduced **Hooks** in version 16.8 to allow functional components to manage state and side effects, something that was previously only possible in class components.\n\n### 🧠 **useState Hook:**
- The \`useState\` hook allows functional components to add state.\n
- **Syntax:** \`const [state, setState] = useState(initialValue);\`\n
- Example: A counter component that increments a number when clicked.\n
\`\`\`javascript\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}\n\`\`\`\n\n### 🧠 **useEffect Hook:**
- The \`useEffect\` hook lets you perform side effects like data fetching, subscribing to events, and manual DOM manipulation.\n
- **Syntax:** \`useEffect(() => { /* effect */ }, [dependencies]);\`\n
- Example: Fetching data when a component mounts.\n
\`\`\`javascript\nuseEffect(() => {\n  fetchData();\n}, []);\n\`\`\`\n\n### 🧠 **useMemo Hook:**
- The \`useMemo\` hook is used to memoize values, which helps optimize performance by preventing unnecessary re-calculations of expensive calculations.\n
- **Syntax:** \`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\`\n\n### **In short:**\n- **useState** is used to manage state.\n- **useEffect** handles side effects in a component.\n- **useMemo** helps with performance optimization by memoizing values.`,
  },
  {
    id: 22,
    title: "Scalability in React",
    data: `To build scalable and maintainable React applications, certain strategies should be followed to handle growing complexity and large applications.

### 🧠 **Use Functional Components:**
Functional components are generally preferred over class components because they are easier to write, test, and maintain.

### 🧠 **Leverage React Hooks:**
- Hooks like \`useState\`, \`useEffect\`, and \`useContext\` provide a cleaner and more modular approach to managing state and side effects.

### 🧠 **Code Splitting and Lazy Loading:**
React supports **code splitting** and **lazy loading** of components to ensure that only the required code is loaded on demand, improving the initial load time.

- **React.lazy()**: Dynamically imports components.

\`\`\`javascript
import React, { lazy } from 'react';
const LazyComponent = lazy(() => import('./LazyComponent'));
\`\`\`

### 🧠 **State Management Libraries:**
For larger applications, use libraries like **Redux** or the **Context API** to handle global state and manage interactions across multiple components.\n\n### **In short:**\nFor scalable React apps, prefer functional components, use hooks, implement code splitting, and leverage state management libraries for better maintainability.`,
  },
  {
    id: 23,
    title: "React.memo() Optimization",
    data: `React’s **React.memo()** is a higher-order component that helps optimize the performance of functional components by preventing unnecessary re-renders.\n\n### 🧠 **How React.memo() Works:**
- \`React.memo()\` performs a shallow comparison of the component’s props and prevents re-renders if the props have not changed.\n\n**Usage Example:**\n\n\`\`\`javascript\nconst MyComponent = React.memo((props) => {\n  return <div>{props.name}</div>;\n});\n\`\`\`\n\n### 🧠 **When to Use React.memo():**
- Use \`React.memo()\` for **pure components** that receive props and don't need to re-render unless the props change.\n
- **Important**: It does a shallow comparison, so complex objects as props might require additional optimization.\n\n### **In short:**\nReact.memo() optimizes performance by avoiding unnecessary re-renders of functional components when their props haven’t changed.`,
  },
  {
    id: 24,
    title: "Context API vs. Redux",
    data: `The **Context API** and **Redux** are both used for managing global state in React, but they are designed for different use cases and have different levels of complexity.\n\n### 🧠 **Context API:**
- The Context API is built into React and allows you to share state across components without having to pass props through every level of the component tree (avoiding prop drilling).\n
- **Simpler**: It is more lightweight and easier to implement than Redux.\n
- **Usage**: Ideal for smaller to medium-sized apps or when the state doesn't change often.\n\n**Example:**\n
\`\`\`javascript\nconst MyContext = React.createContext();\n\nfunction App() {\n  return (\n    <MyContext.Provider value={/* value */}>\n      <ComponentA />\n    </MyContext.Provider>\n  );\n}\n\`\`\`\n\n### 🧠 **Redux:**
- Redux is a more powerful state management library designed for large-scale applications.\n
- **Centralized State**: It uses a single store to manage state and provides middleware for handling async actions.\n
- **Complexity**: Redux requires more setup and boilerplate code compared to Context API, but it provides more control over your app's state.\n\n### **In short:**\nUse **Context API** for simpler, smaller apps, and **Redux** for more complex applications that require powerful state management and additional features like middleware.`,
  },
  {
    id: 25,
    title: "Component Composition",
    data: `**Component Composition** is the process of combining smaller, reusable components to build larger, more complex components.\n\n### 🧠 **Benefits of Component Composition:**
- **Reusability**: Smaller components can be reused across the app.\n
- **Maintainability**: Smaller components are easier to test, update, and debug.\n
- **Separation of Concerns**: Component composition allows each component to have a single responsibility.\n\n### 🧠 **How to Compose Components:**
- You can compose components by nesting them within each other.\n\n**Example of composing components:**\n
\`\`\`javascript\nconst Header = () => <h1>Header</h1>;\nconst Body = () => <p>This is the body</p>;\n\nconst App = () => {\n  return (\n    <div>\n      <Header />\n      <Body />\n    </div>\n  );\n};\n\`\`\`\n\n### **In short:**\nComponent composition allows you to build complex UIs from smaller, reusable components, improving maintainability and scalability.`,
  },
  {
    id: 26,
    title: "Controlled vs. Uncontrolled Components",
    data: `In React, form elements can be either **controlled** or **uncontrolled**, depending on how the form state is managed.\n\n### 🧠 **Controlled Components:**
- In controlled components, the state of the form element is managed by React via the component's state.\n
- React updates the state when the user interacts with the form element (e.g., typing in a text field).\n
- **Example:**\n
\`\`\`javascript\nconst MyForm = () => {\n  const [value, setValue] = useState('');\n\n  const handleChange = (e) => {\n    setValue(e.target.value);\n  };\n\n  return <input value={value} onChange={handleChange} />;\n}\n\`\`\`\n\n### 🧠 **Uncontrolled Components:**
- In uncontrolled components, form state is managed by the DOM, typically using a **ref**.\n
- React doesn’t directly manage the state of the form element.\n\n**Example:**\n
\`\`\`javascript\nconst MyForm = () => {\n  const inputRef = useRef();\n\n  const handleSubmit = () => {\n    console.log(inputRef.current.value);\n  };\n\n  return <input ref={inputRef} />;\n}\n\`\`\`\n\n### **In short:**\n- **Controlled components** have their state managed by React, while **uncontrolled components** let the DOM manage the form state.`,
  },
  {
    id: 27,
    title: "Pure Components",
    data: `A **Pure Component** in React is a component that only re-renders when its props or state change.\n\n### 🧠 **Why Pure Components are Useful:**
- **Optimized Performance**: Pure components avoid unnecessary re-renders by implementing shallow comparison on props and state.\n
- **Automatic Optimization**: React performs a shallow comparison of props and state automatically, ensuring that the component only re-renders when there are actual changes.\n\n**Example of a Pure Component:**\n
\`\`\`javascript\nclass MyComponent extends React.PureComponent {\n  render() {\n    return <div>{this.props.value}</div>;\n  }\n}\n\`\`\`\n\n### **In short:**\nPure components are efficient because they only re-render when there is a change in their props or state, optimizing performance in React applications.`,
  },

  {
    id: 28,
    title: "SSR vs. SSG",
    data: `In Next.js, **SSR (Server-Side Rendering)** and **SSG (Static Site Generation)** are two ways of rendering pages with their own unique characteristics.\n\n### 🧠 **SSR (Server-Side Rendering):**\n- **Definition**: With SSR, data is fetched on each request to the server, and the page is generated dynamically each time.\n- **Usage**: Ideal for pages that require fresh data on every request, such as user dashboards or news sites.\n- **Pros**: Ensures that the page is always up-to-date with the latest data.\n- **Cons**: Slower performance because the page is generated on each request.\n\n**Example of SSR using getServerSideProps:**\n\`\`\`javascript\nexport async function getServerSideProps(context) {\n  const res = await fetch('https://api.example.com/data');\n  const data = await res.json();\n  return { props: { data } };\n}\n\`\`\`\n\n### 🧠 **SSG (Static Site Generation):**\n- **Definition**: With SSG, data is fetched at build time, and the page is pre-rendered as static HTML.\n- **Usage**: Best suited for content that doesn’t change frequently, such as blogs or documentation.\n- **Pros**: Faster performance because the page is pre-rendered during the build process and served as static content.\n- **Cons**: Data is static until the next build; any new content will only be available after a new deployment.\n\n**Example of SSG using getStaticProps:**\n\`\`\`javascript\nexport async function getStaticProps() {\n  const res = await fetch('https://api.example.com/data');\n  const data = await res.json();\n  return { props: { data } };\n}\n\`\`\`\n\n### **In short:**\n- **SSR**: Fetches data on every request, ideal for dynamic content.\n- **SSG**: Fetches data at build time, ideal for static content that doesn’t change often.`,
  },
  {
    id: 29,
    title: "Dynamic Routes in Next.js",
    data: `Dynamic routes in Next.js are created by using square brackets in the filename. This feature allows you to create pages based on dynamic parameters, such as an article ID or a user profile.\n\n### 🧠 **How Dynamic Routes Work:**
  - **Filename Convention**: Use square brackets \`[param].js\` in the filename to create a dynamic route, where \`param\` is the dynamic part of the URL.\n\n**Example of a dynamic route:**\n\`\`\`javascript\n// pages/[id].js\nexport default function Post({ id }) {\n  return <div>Post ID: {id}</div>;\n}\n\n// To fetch dynamic data, you can use getServerSideProps or getStaticProps.\n\`\`\`\n- The dynamic route can then capture any value in the URL path and use it in the component.\n\n**Example URL:**\n- If the URL is \`/posts/1\`, the \`id\` parameter will be \`1\`.\n\n### **In short:**\nDynamic routes in Next.js are created by using square brackets in the filename, allowing you to capture dynamic parameters from the URL.`,
  },
  {
    id: 30,
    title: "Incremental Static Regeneration (ISR)",
    data: `In Next.js, **Incremental Static Regeneration (ISR)** allows you to update static pages **after deployment** without requiring a full rebuild. This makes it ideal for performance and SEO on dynamic sites.\n\n### 🧠 **How ISR Works:**\n- ISR enables the regeneration of static pages after the site has been deployed.\n- You can define a **revalidate time**, which tells Next.js how often to re-generate the page in the background.\n\n### 🔄 **Revalidate Time**\n- The \`revalidate\` field inside \`getStaticProps\` specifies the number of seconds to wait before regenerating the page.\n\n**Example of ISR using getStaticProps:**\n\`\`\`javascript\nexport async function getStaticProps() {\n  const res = await fetch('https://api.example.com/data');\n  const data = await res.json();\n  return { props: { data }, revalidate: 60 };\n}\n\`\`\`\n- In this example, the page will be re-generated **every 60 seconds** in the background when a request is made after the interval.\n\n### **In short:**\n- **ISR**: Combines the benefits of SSG and dynamic updates.\n- Keeps pages fresh without a full rebuild.\n- Great for blogs, products, and frequently updated content.`,
  },

  {
    id: 31,
    title: "API Routes in Next.js",
    data: `In Next.js, **API Routes** let you create backend endpoints directly within your app, allowing you to build full-stack features without a separate server.\n\n### 🧠 **How API Routes Work:**\n- API routes are defined inside the \`/pages/api\` directory.\n- Each file in this folder maps to a corresponding API endpoint.\n\n**Example of an API Route:**\n\`\`\`javascript\n// pages/api/hello.js\nexport default function handler(req, res) {\n  res.status(200).json({ message: 'Hello, World!' });\n}\n\`\`\`\n- This file defines the endpoint \`/api/hello\` which responds with a simple JSON object.\n- API routes support different HTTP methods like **GET**, **POST**, **PUT**, and **DELETE**, enabling flexible server-side logic.\n\n### **In short:**\n- **API Routes** let you run server-side code (e.g., handling requests, accessing databases).\n- They’re great for adding dynamic backend features directly into your Next.js project.`,
  },

  {
    id: 32,
    title: "Middleware in Next.js",
    data: `In Next.js, **Middleware** allows you to run logic **before a request is completed**, enabling powerful features like authentication, redirects, and request modifications.\n\n### 🧠 **How Middleware Works:**\n- Middleware runs **before** the request reaches a page or an API route.\n- It can inspect and modify the request, perform checks (like authentication), or rewrite/redirect responses.\n\n**Example of Middleware for authentication:**\n\`\`\`javascript\n// middleware.js\nimport { NextResponse } from 'next/server';\n\nexport function middleware(req) {\n  const token = req.cookies.get('token');\n  if (!token) {\n    return new NextResponse('Unauthorized', { status: 401 });\n  }\n  return NextResponse.next();\n}\n\`\`\`\n- In this example, the middleware checks for a token in cookies. If it's missing, the request is blocked with a 401 response.\n\n### **In short:**\n- **Middleware** runs code before routing completes.\n- Great for **auth checks**, **logging**, **redirects**, and other pre-processing logic.`,
  },

  {
    id: 33,
    title: "next/image Optimization",
    data: `In Next.js, the **\`next/image\`** component provides built-in image optimization to enhance performance and user experience by serving images in the best format and size.\n\n### 🧠 **Features of \`next/image\`:**\n- **Automatic Optimization**: Resizes and serves images based on the user's device, screen size, and resolution.\n- **Modern Formats**: Supports formats like **WebP** and **AVIF** for better compression and quality.\n- **Lazy Loading**: Loads images only when they enter the viewport, reducing initial page load time.\n\n**Example of using \`next/image\`:**\n\`\`\`javascript\nimport Image from 'next/image';\n\nexport default function MyPage() {\n  return (\n    <Image \n      src='/path/to/image.jpg' \n      alt='An example image' \n      width={500} \n      height={300} \n    />\n  );\n}\n\`\`\`\n\n### **In short:**\n- The \`next/image\` component automatically handles image optimization, resizing, and format conversion.\n- It improves performance, SEO, and loading speeds with minimal setup.`,
  },

  {
    id: 34,
    title: "SEO and Open Graph Optimization",
    data: `In Next.js, SEO and Open Graph optimization are achieved using the **\`next/head\`** component, allowing you to customize how your pages appear in search engines and on social media.\n\n### 🧠 **SEO Optimization:**\n- Use the \`next/head\` component to define meta tags such as title, description, and keywords.\n- Helps search engines understand your content, improving indexing and page rankings.\n\n**Example of SEO optimization:**\n\`\`\`javascript\nimport Head from 'next/head';\n\nexport default function Page() {\n  return (\n    <Head>\n      <title>My Page Title</title>\n      <meta name="description" content="Description of the page" />\n    </Head>\n  );\n}\n\`\`\`\n\n### 🧠 **Open Graph Optimization:**\n- Open Graph tags control how your content appears when shared on platforms like Facebook, Twitter, and LinkedIn.\n\n**Example of Open Graph optimization:**\n\`\`\`javascript\nimport Head from 'next/head';\n\nexport default function Page() {\n  return (\n    <Head>\n      <meta property="og:title" content="My Page Title" />\n      <meta property="og:image" content="/path/to/image.jpg" />\n    </Head>\n  );\n}\n\`\`\`\n\n### **In short:**\nUse \`next/head\` to inject SEO and Open Graph tags into your pages for better search engine visibility and rich social media previews.`,
  },

  {
    id: 35,
    title: "Data Fetching Methods in Next.js",
    data: `Next.js supports multiple data fetching strategies to balance performance and dynamic content needs, including **getServerSideProps**, **getStaticProps**, and **getInitialProps**.\n\n### 🧠 **getServerSideProps**\n- **SSR (Server-Side Rendering):** Fetches data on each request, ensuring real-time freshness.\n- **Use Case:** Ideal for pages where the content changes frequently or needs to be always up to date.\n\n**Example:**\n\`\`\`javascript\nexport async function getServerSideProps() {\n  const res = await fetch('https://api.example.com/data');\n  const data = await res.json();\n  return { props: { data } };\n}\n\`\`\`\n\n### 🧠 **getStaticProps**\n- **SSG (Static Site Generation):** Fetches data at build time, generating static HTML.\n- **Use Case:** Best for pages with data that doesn't change often (e.g., blog posts, documentation).\n\n**Example:**\n\`\`\`javascript\nexport async function getStaticProps() {\n  const res = await fetch('https://api.example.com/data');\n  const data = await res.json();\n  return { props: { data } };\n}\n\`\`\`\n\n### 🧠 **getInitialProps**\n- **Universal:** Runs on the server during SSR and on the client during client-side navigation.\n- **Note:** Generally used for backward compatibility; not recommended for new projects.\n\n### **In short:**\n- \`getServerSideProps\`: Server-side rendering, fetch on every request.\n- \`getStaticProps\`: Static generation, fetch at build time.\n- \`getInitialProps\`: Legacy method for both SSR and client use, less preferred today.`,
  },
  {
    id: 36,
    title: "Client-side Routing in Next.js",
    data: `Next.js provides **automatic client-side routing** through its \`Link\` component, which helps in navigating between pages in a Next.js app without reloading the entire page.\n\n### 🧠 **How Client-Side Routing Works:**
  - When you use the \`Link\` component, Next.js pre-fetches the linked page and renders it without a full page reload.\n
  - **Usage:** This allows for smooth, fast, and efficient navigation between pages.\n\n**Example of client-side routing with the Link component:**\n
  \`\`\`javascript\nimport Link from 'next/link';\n\nconst HomePage = () => (\n  <div>\n    <Link href='/about'>Go to About Page</Link>\n  </div>\n);\n\`\`\`\n\n### **In short:**\nClient-side routing in Next.js is automatically handled using the \`Link\` component, providing seamless navigation between pages without full page reloads.`,
  },
  {
    id: 37,
    title: "`map`, `filter`, `reduce` - Explained",
    data: `Sure! Here's a **clear breakdown** of \`map\`, \`filter\`, and \`reduce\` — three core JavaScript array methods that are widely used for data transformation.

---

## 🗺️ 1. \`map()\`

### ✅ **What it does**:

Transforms each element in an array and returns a **new array** of the same length.

### 📌 Syntax:

\`\`\`js
array.map((item, index, array) => {
  return newItem;
});
\`\`\`

### 📦 Example:

\`\`\`js
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
\`\`\`

### 🔍 Use Cases:

* Converting data formats
* Applying transformations (e.g., currency formatting, string formatting)

---

## 🔍 2. \`filter()\`

### ✅ **What it does**:

Returns a **new array** containing only the elements that match the given condition (predicate).

### 📌 Syntax:

\`\`\`js
array.filter((item, index, array) => {
  return condition; // true to keep, false to discard
});
\`\`\`

### 📦 Example:

\`\`\`js
const nums = [1, 2, 3, 4];
const even = nums.filter(n => n % 2 === 0);
console.log(even); // [2, 4]
\`\`\`

### 🔍 Use Cases:

* Filtering out invalid data
* Getting items that match criteria (e.g., isActive users)

---

## 🧮 3. \`reduce()\`

### ✅ **What it does**:

Reduces an array to a **single value** by applying a function to each item with an accumulator.

### 📌 Syntax:

\`\`\`js
array.reduce((accumulator, item, index, array) => {
  return updatedAccumulator;
}, initialValue);
\`\`\`

### 📦 Example:

\`\`\`js
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
\`\`\`

### 🔍 Use Cases:

* Calculating totals (sum, average)
* Grouping data
* Building objects from arrays

---

## 🧠 Summary Table

| Method   | Return Value       | Use Case                        | Mutates Original? |
| -------- | ------------------ | ------------------------------- | ----------------- |
| \`map\`    | New array          | Transform data                  | ❌ No              |
| \`filter\` | New array (subset) | Select specific items           | ❌ No              |
| \`reduce\` | Single value (any) | Aggregate or transform entirely | ❌ No              |

---`,
  },
];
