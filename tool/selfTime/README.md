For each one of ```./profile_A.html``` and ```./profile_B.html```, follow the following steps:

1. Open the html file in Chrome;
2. Open the DevTool and switch to "Profiles" tab;
3. Choose "Collect Javascript CPU Profile", and then click "Start" button;
4. Click the "Test" button on the page, waiting for it to finish;
5. Once the "Finished" text appears on the right of "Test" button, click the "Stop" button in DevTool;
6. Select the generated profile and switch to "Heavy(Bottom Up)" view;
7. Click the "Self" column header once or twice to make the functions rank from higher to lower in its self time;
8. Check what function is the heaviest.

Shouldn't it be ```childFunc``` since most operations are performed inside it, as shown in the profile of ```./profile_B.html```?

What happened in the result of ```./profile_A.html``` where ```childFunc``` takes up almost no time but ```startTest``` turns out to be the heaviest which only performs a function call and save the results?

It seems Chrome's built-in DevTool couldn't give a correct profile when **function inlining** is concerned.

(BTW, have a check about what I did to make ```childFunc``` failed to be inlined.)