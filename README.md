# Euclidean Algorithm Bug

This repository demonstrates a subtle bug in a JavaScript implementation of the Euclidean algorithm for finding the greatest common divisor (GCD) of two numbers. The algorithm generally works correctly but fails for specific inputs.

## Bug Description

The bug lies in the handling of negative numbers and the stopping condition. The original code doesn't correctly handle scenarios where the numbers become negative during the recursive calls. This can lead to infinite recursion or incorrect results. 

## Solution

A corrected version of the code is provided in `bugSolution.js`. This version explicitly handles negative numbers by taking their absolute values before performing the recursive calls.  Additionally, the base case is improved to handle zero correctly.

## How to run
1. Clone the repository.
2. Open `bug.js` to view the buggy code and its output.
3. Open `bugSolution.js` to view the corrected code and its output.
4. Execute each file using a JavaScript engine (e.g., Node.js).