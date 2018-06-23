// @flow

// Using simple bool
let isDone: boolean = false;
// isDone = 1;

// Using number
let decimal: number = 6;
// decimal = true;

// using string
let color: string = 'blue';
// color = 1;

// Using template strings
let fullName: string = `Bob Bobbington`;
// fullName = [1, 2, 3];

// Array
let list: number[] = [1, 2, 3];
// list.push('Bob');

// Opt-out of type-checking
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean

// Array
let prettySure: Array<number> = [1, 2, 3];
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Array'.

//-------------------------------------------------------
// null and void
//-------------------------------------------------------
function acceptsNull(value: null) {
  /* ... */
}

function acceptsUndefined(value: void) {
  /* ... */
}

acceptsNull(null); // Works!
//acceptsNull(undefined); // Error!
//acceptsUndefined(null); // Error!
acceptsUndefined(undefined); // Works!

//-------------------------------------------------------
// Maybe types
//-------------------------------------------------------
function acceptsMaybeString(value: ?string) {
  // ...
}

acceptsMaybeString('bar'); // Works!
acceptsMaybeString(undefined); // Works!
acceptsMaybeString(null); // Works!
acceptsMaybeString(); // Works!

//-------------------------------------------------------
// Optional object properties
//-------------------------------------------------------
function acceptsObject(value: { foo?: string }) {
  // ...
}

acceptsObject({ foo: 'bar' }); // Works!
acceptsObject({ foo: undefined }); // Works!
//acceptsObject({ foo: null }); // Error!
acceptsObject({}); // Works!

//-------------------------------------------------------
// Optional function parameters
//-------------------------------------------------------
function acceptsOptionalString(value?: string) {
  // ...
}

acceptsOptionalString('bar'); // Works!
acceptsOptionalString(undefined); // Works!
//acceptsOptionalString(null); // Error!
acceptsOptionalString(); // Works!

//-------------------------------------------------------
// Function parameters with defaults
//-------------------------------------------------------
function acceptsOptionalString(value: string = 'foo') {
  // ...
}

acceptsOptionalString('bar'); // Works!
acceptsOptionalString(undefined); // Works!
//acceptsOptionalString(null);      // Error!
acceptsOptionalString(); // Works!
