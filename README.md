# V8_puzzles

A series of Javascript puzzles helpful for understanding the underlying implementation of V8 engine.

## Getting Started

### Tools

### d8

Please follow the [instructions](https://code.google.com/p/v8-wiki/wiki/BuildingWithGYP) from the [official site](https://developers.google.com/v8/build).

*Note that if you want to inspect generated assembly code don't forget to add ```disassembler=on``` option*

By default, you will find the d8 shell's binary at ```./out/[your_architecture_or_mode]/d8``` and it will be convenient to add it to your bash's ```PATH```.

After installation successfully, executing a Javascript file using d8 is as easy as:
```
$ d8 mytest.js
```

### C1visualizer

C1visualizer is a visualization tool originally developed for JVM's internal structure, but it can also process Crankshaft's IR. Extremely useful!
Simply [download](https://java.net/projects/c1visualizer) and use it.

You can generate the output of Crankshaft's Hydrogen IR (HIR) and visualize it in C1visualizer. For example:
```
$ d8 --trace_hydrogen --trace_phase=Z mytest.js
```
Thus, a CFG(control flow graph) file ```hydrogen.cfg``` will be generated. (Of course, your JS code should at least be 'hot' enough to be processed by Crankshaft, instead of full-codegen only)

Then after executing the c1visualizer program and seeing the GUI, you can open that file by "[File] > [Open Compiled Methods...]".

Select any loaded method's "Z_Code generation", right click on it and choose "Open Control Flow Graph", then the graph will be visualized at right side. Further click any node in the graph and its corresponding HIR code and LIR code will be shown at bottom.
More information and easier to read than assembly code!

## Puzzles

For each puzzle, several Javascript files and their corresponding CFG files are provided for comparison.

To test which JS file runs faster in V8, simply execute it by
```
$ d8 puzzle_A.js
```
and a number indicating how long it takes (in ms) to finish running this file will be printed on console.

Furthermore, to check what actually happened underlying you can dive into the CFG files in ```./hydrogen/``` folder.

## References

1. [Chrome V8](https://developers.google.com/v8)
2. ["Crankshafting from the ground up" by Marja Hölttä (Google)](https://docs.google.com/document/d/1hOaE7vbwdLLXWj3C8hTnnkpE0qSa2P--dtDvwXXEeD0/pub)
3. ["A tour of V8" by Jay Conrod](http://jayconrod.com/tags/v8)
4. ["Optimizing for V8" by Florian Loitsch](http://floitsch.blogspot.jp/?view=sidebar)
5. [Posts about V8 by Andy Wingo](https://wingolog.org/tags/v8)
6. [Posts about V8 by Vyacheslav Egorov](http://mrale.ph/)