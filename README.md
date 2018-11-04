Solution for the following physics problem:

```
A capacitor C is charged to an initial potential of 70.0 V, with an initial charge of Q0. It is in a circuit with a switch and an inductor with inductance L = 3.59×10-2 H and resistance RL.

A. Calculate the energy in the circuit after a time of 15 periods. Note that the curve passes through a grid intersection point.
B. Calculate the time required for 93% of the initial energy to be dissipated.
```

I knew how to do this problem, but there were so many calculator steps that I wrote this script for it.

How to solve using this script:
* Plug in your L, initial voltage
* Count the number of cycles until your graph has an intersection point on the graph, plug in for totalCycles
* Record the voltage and ms at this point, plug in for comparisonV and totalMs respectively
* Plug in for desiredCycles in a()
* Plug in for desiredDissipation (e.g. my problem asked for 93% dissipation, so I put in 93.0)
* Run the script in node or copy it into a browser console (Ctrl + Shift + J)

https://answers.yahoo.com/question/index?qid=20140709192452AAkr42X for information on how to solve this problem without the script. The code is pretty simple though.

Written for PHY 184 at Michigan State University (MSU)