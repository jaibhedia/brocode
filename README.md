<h1 align="center">BroCode</h1>
<p align="center">
<a href="https://www.github.com/jaibhelia/brocode"><img alt="Build" src="https://img.shields.io/badge/website-github.com/jaibhelia/brocode-orange"/></a>
<a href="https://bhailang.js.org/"><img alt="Build" src="https://img.shields.io/badge/website-bhailang.js.org-orange"/></a>
<a href="https://www.npmjs.com/package/bhailang"><img alt="Build" src="https://img.shields.io/badge/npm-bhailang-orange"/></a>
  
</p>
<p align="center">
  This is official repository for brocode, a project based on Bhai lang.<br><br>
  <b>An enhanced toy programming language based on bhailang.</b>
</p>
<br>

<h2 align="center">Installation</h2>

```
npm i -g bhailang
```

<h2 align="center">Usage</h2>

<h4 align="left">Create a new file (<code>test.bhai</code>)</h4>


<h4 align="left">Edit the file with a text editor.
You can also try out your code on <a href="https://bhailang.js.org/#playground">Bhai Lang PlayGround</a></h4>

```
hi bro
  heli bro "Hello bhai";
aytu bro

```

<h4 align="left">Run</h4>

```
bhailang test.bhai
```

<h4 align="left">Output</h4>

```
hello bhai
```

<h2 align="center">Documentation</h2>

<h3 align="center">General</h3>
<p align="center"><code>hi bro</code> is the entrypoint for the program and all program must end with <code>aytu bro</code>. Anything outside of it will be ignored.</p>

```

This will be ignored

hi bro
// Write code here
aytu bro

This too
```

<h3 align="center">Variables</h3>
<p align="center">Variables can be declared using <code>bhai ye hai</code>.</p>

```

hi bro
  bhai ye hai a = 10;
  bhai ye hai b = "two";
  bhai ye hai c = 15;
  a = a + 1;
  b = 21;
  c *= 2;
aytu bro
```

<h3 align="center">Types</h3>
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>nalla</code>. <code>sahi</code> and <code>galat</code> are the boolean values.</p>

```

hi bro
  bhai ye hai a = 10;
  bhai ye hai b = 10 + (15*20);
  bhai ye hai c = "two";
  bhai ye hai d = 'ok';
  bhai ye hai e = nalla;
  bhai ye hai f = sahi;
  bhai ye hai g = galat;
aytu bro
```

<h3 align="center">Built-ins</h3>
<p align="center">Use <code>heli bro</code> to print anything to console.</p>

```

hi bro
  heli bro "Hello World";
  bhai ye hai a = 10;
  {
    bhai ye hai b = 20;
    heli bro a + b;
  }
  heli bro 5, 'ok', nalla , sahi , galat;
aytu bro
```

<h3 align="center">Conditionals</h3>
<p align="center">Bhailang supports if-else-if ladder construct , <code>agar bhai</code> block will execute if condition is <code>sahi</code>, otherwise one of the subsequently added <code>nahi to bhai</code> blocks will execute if their respective condition is <code>sahi</code>, and the <code>warna bhai</code> block will eventually execute if all of the above conditions are <code>galat</code>

```

hi bro
  bhai ye hai a = 10;
  agar bhai (a < 20) {
    heli bro "a is less than 20";
  } nahi to bhai ( a < 25 ) {
    heli bro "a is less than 25";
  } warna bhai {
    heli bro "a is greater than or equal to 25";
  }
aytu bro
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>jab tak bhai</code> blocks are executed as long as a specified condition evaluates to sahi. If the condition becomes <code>galat</code>, statement within the loop stops executing and control passes to the statement following the loop. Use <code>bas kar bhai</code> to break the loop and <code className="language-cpp">agla dekh bhai</code> to continue within loop.</p>


```

hi bro
  bhai ye hai a = 0;
  jab tak bhai (a < 10) {
   a += 1;
   agar bhai (a == 5) {
    heli bro "andar se heli bro ", a;
    agla dekh bhai;
   }
   agar bhai (a == 6) {
    bas kar bhai;
   }
   heli bro a;
  }
  heli bro "done";
aytu bro
```

<h2 align="center">Development</h2>
<p align="left">Kannada Language Translation Credits: Kushal M Handigund</p>
<p align="left">You can explore abstract syntax tree(AST) of bhailang <a href="https://bhailang-ast.netlify.app/" target="_blank">here</a>.</p>








