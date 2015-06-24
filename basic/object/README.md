Use C1visualizer to check the HIR of specific nodes in following hydrogen files.
Especially pay attention to these things:

* How many in-object field is initialized (@24, @32, @40, @48, @56?)
* After initialization, how each property (a, b, c, d, e) is actually set, using ```StoreNamedField``` or ```StoreNamedGeneric```? is ```[in-object]``` present?

### hydrogen_A.cfg

Generated from [objectCreation_A.js](../objectCreation_A.js).

Check the HIR of node ```B12``` of ```objectCreation``` function.

### hydrogen_B.cfg

Generated from [objectCreation_B.js](../objectCreation_B.js).

Check the HIR of node ```B4``` and ```B12``` of ```objectCreation``` function.

### hydrogen_C.cfg

Generated from [objectCreation_C.js](../objectCreation_C.js).

Check the HIR of node ```B4``` and ```B12``` of ```objectCreation``` function.

### hydrogen_D.cfg

Generated from [objectCreation_D.js](../objectCreation_D.js).

Check the HIR of node ```B12``` and ```B27``` of ```objectCreation``` function.

### hydrogen_E.cfg

Generated from [objectCreation_E.js](../objectCreation_E.js).

Check the HIR of node ```B4```, ```B12``` and ```B26``` of ```objectCreation``` function.
