// karel-lessons-data.js
// 8 Lessons x 6 Progressive Exercises (48 Challenges) for Lab-K30 Module 1

const KAREL_LESSONS = {
  1: {
    id: 1,
    title: "Lesson 1: Meet Karel (move)",
    allowedCommands: ["move();"],
    exercises: [
      {
        title: "Ex 1.1: Three Steps Forward (Complete)",
        mode: "COMPLETE",
        instruction: "Karel needs to walk 3 steps East to reach the green square. Add the missing move(); line!",
        hint: "There are already two move(); lines. Add one more move(); before the closing }.",
        rows: 4, cols: 5,
        start: { r: 3, c: 0, dir: "E", beepers: {}, walls: [] },
        goal:  { r: 3, c: 3, dir: null, beepers: {} },
        starterCode: `// Change this program so Karel moves 3 steps\nfunction main() {\n  move();\n  move();\n  \n}`
      },
      {
        title: "Ex 1.2: Too Many Steps! (Fix Bug)",
        mode: "DEBUG",
        instruction: "Oops! Someone wrote too many move(); commands and Karel will hit the wall. Delete the extra lines!",
        hint: "Count the squares from Karel to the green target: only 2 steps!",
        rows: 4, cols: 4,
        start: { r: 3, c: 0, dir: "E", beepers: {}, walls: [] },
        goal:  { r: 3, c: 2, dir: null, beepers: {} },
        starterCode: `// Delete the extra move() commands so Karel stops on green\nfunction main() {\n  move();\n  move();\n  move();\n  move();\n}`
      },
      {
        title: "Ex 1.3: Bridge Crossing (Complete)",
        mode: "COMPLETE",
        instruction: "Cross the narrow 4-step bridge without falling off the path!",
        hint: "Karel starts at column 1 and needs 4 move(); commands.",
        rows: 3, cols: 5,
        start: { r: 1, c: 0, dir: "E", beepers: {}, walls: ["1,0,N","1,1,N","1,2,N","1,3,N","1,4,N","1,0,S","1,1,S","1,2,S","1,3,S","1,4,S"] },
        goal:  { r: 1, c: 4, dir: null, beepers: {} },
        starterCode: `// Cross the bridge to the green square\nfunction main() {\n  move();\n  \n}`
      },
      {
        title: "Ex 1.4: Spelling Bug (Fix Bug)",
        mode: "DEBUG",
        instruction: "Spot the typo! Robots only understand lowercase move(); with parentheses.",
        hint: "Fix Move() and move so every line looks exactly like move();",
        rows: 3, cols: 4,
        start: { r: 2, c: 0, dir: "E", beepers: {}, walls: [] },
        goal:  { r: 2, c: 3, dir: null, beepers: {} },
        starterCode: `// Fix the spelling bugs so Karel reaches the goal\nfunction main() {\n  Move();\n  move;\n  move();\n}`
      },
      {
        title: "Ex 1.5: The Long Corridor (Write)",
        mode: "BUILD",
        instruction: "Walk all 5 steps down the corridor to reach the end.",
        hint: "Write move(); five times inside main().",
        rows: 3, cols: 6,
        start: { r: 1, c: 0, dir: "E", beepers: {}, walls: ["1,0,N","1,1,N","1,2,N","1,3,N","1,4,N","1,5,N"] },
        goal:  { r: 1, c: 5, dir: null, beepers: {} },
        starterCode: `// Guide Karel 5 steps East\nfunction main() {\n  \n}`
      },
      {
        title: "Ex 1.6: Stop Before the Wall! (Fix Bug)",
        mode: "DEBUG",
        instruction: "There is a brick wall ahead! Remove extra steps so Karel stops safely on the green square.",
        hint: "Count carefully: 1, 2, 3 steps before the wall.",
        rows: 3, cols: 5,
        start: { r: 1, c: 0, dir: "E", beepers: {}, walls: ["1,3,E"] },
        goal:  { r: 1, c: 3, dir: null, beepers: {} },
        starterCode: `// Stop right in front of the wall!\nfunction main() {\n  move();\n  move();\n  move();\n  move();\n}`
      }
    ]
  },

  2: {
    id: 2,
    title: "Lesson 2: First Turns (move & turnLeft)",
    allowedCommands: ["move();", "turnLeft();"],
    exercises: [
      {
        title: "Ex 2.1: Top of the Ledge (Complete)",
        mode: "COMPLETE",
        instruction: "Climb up onto the ledge! Karel already turned North and moved 1 step. Finish the path!",
        hint: "Move 1 more step North, turnLeft() 3 times (or turn around) — wait: look at the wall! Move North, turn right? No, walk East first!",
        rows: 3, cols: 3,
        start: { r: 2, c: 0, dir: "E", beepers: {}, walls: ["2,0,E","1,1,S"] },
        goal:  { r: 1, c: 1, dir: null, beepers: {} },
        starterCode: `// Climb to the top of the ledge\nfunction main() {\n  turnLeft();\n  move();\n  // Add commands to turn East and step onto the ledge:\n  \n}`
      },
      {
        title: "Ex 2.2: Simple L-Corner (Complete)",
        mode: "COMPLETE",
        instruction: "Walk 2 steps East, turn North, and walk 2 steps up to the green square.",
        hint: "After moving East twice, use turnLeft(); to face North.",
        rows: 4, cols: 4,
        start: { r: 3, c: 0, dir: "E", beepers: {}, walls: [] },
        goal:  { r: 1, c: 2, dir: null, beepers: {} },
        starterCode: `// Complete the L-shaped path\nfunction main() {\n  move();\n  move();\n  \n}`
      },
      {
        title: "Ex 2.3: Wrong Turn! (Fix Bug)",
        mode: "DEBUG",
        instruction: "Karel turned too early and walked into a wall! Fix the order of commands.",
        hint: "Karel must move 2 steps East BEFORE calling turnLeft();",
        rows: 4, cols: 4,
        start: { r: 3, c: 0, dir: "E", beepers: {}, walls: ["3,0,N","3,1,N"] },
        goal:  { r: 1, c: 2, dir: null, beepers: {} },
        starterCode: `// Fix the bug so Karel clears the wall before turning\nfunction main() {\n  move();\n  turnLeft();\n  move();\n  move();\n  move();\n}`
      },
      {
        title: "Ex 2.4: U-Turn Corridor (Complete)",
        mode: "COMPLETE",
        instruction: "Walk around the center wall in a U-shape to reach the top-left square.",
        hint: "Go East 2 steps -> turnLeft -> North 2 steps -> turnLeft -> West 2 steps.",
        rows: 3, cols: 3,
        start: { r: 2, c: 0, dir: "E", beepers: {}, walls: ["1,0,S","1,1,S"] },
        goal:  { r: 0, c: 0, dir: null, beepers: {} },
        starterCode: `// Navigate the U-turn corridor\nfunction main() {\n  move();\n  move();\n  turnLeft();\n  move();\n  move();\n  // Now turn West and finish!\n  \n}`
      },
      {
        title: "Ex 2.5: Turn Around 180° (Fix Bug)",
        mode: "DEBUG",
        instruction: "Karel walked to the wall and needs to return to start, but he only turned 90°! Fix it.",
        hint: "Two turnLeft(); commands make a full 180° turn around.",
        rows: 3, cols: 4,
        start: { r: 1, c: 0, dir: "E", beepers: {}, walls: ["1,2,E"] },
        goal:  { r: 1, c: 0, dir: "W", beepers: {} },
        starterCode: `// Walk to the wall, turn around, and return home\nfunction main() {\n  move();\n  move();\n  turnLeft();\n  move();\n  move();\n}`
      },
      {
        title: "Ex 2.6: Square Tour (Write)",
        mode: "BUILD",
        instruction: "Walk around a 2x2 square counter-clockwise and stop at the top-left corner.",
        hint: "East 2 -> Left -> North 2 -> Left -> West 2.",
        rows: 3, cols: 3,
        start: { r: 2, c: 0, dir: "E", beepers: {}, walls: [] },
        goal:  { r: 0, c: 0, dir: null, beepers: {} },
        starterCode: `// Walk around the square to the green goal\nfunction main() {\n  \n}`
      }
    ]
  },

  3: {
    id: 3,
    title: "Lesson 3: Treasure Hunter (pickBeeper & putBeeper)",
    allowedCommands: ["move();", "turnLeft();", "pickBeeper();", "putBeeper();"],
    exercises: [
      {
        title: "Ex 3.1: Plant 3 Diamonds (Complete)",
        mode: "COMPLETE",
        instruction: "Place a diamond (beeper) on each of the 3 bottom squares and step onto the green finish!",
        hint: "Look at the starter code: add move(); and putBeeper(); for the 3rd square, then move(); to finish.",
        rows: 4, cols: 4,
        start: { r: 3, c: 0, dir: "E", beepers: {}, walls: [] },
        goal:  { r: 3, c: 3, dir: null, beepers: { "3,0": 1, "3,1": 1, "3,2": 1 } },
        starterCode: `// Put a beeper on each of the first 3 squares\nfunction main() {\n  putBeeper();\n  move();\n  putBeeper();\n  \n}`
      },
      {
        title: "Ex 3.2: Collect the Pile of 3 (Complete)",
        mode: "COMPLETE",
        instruction: "Pick up all 3 diamonds from the middle square and walk to the green goal!",
        hint: "Call pickBeeper(); three times while standing on the pile of 3.",
        rows: 3, cols: 3,
        start: { r: 2, c: 0, dir: "E", beepers: { "2,1": 3 }, walls: [] },
        goal:  { r: 2, c: 2, dir: null, beepers: {} },
        starterCode: `// Pick up all 3 beepers and reach the goal\nfunction main() {\n  move();\n  pickBeeper();\n  \n}`
      },
      {
        title: "Ex 3.3: Grabbed Too Early! (Fix Bug)",
        mode: "DEBUG",
        instruction: "Karel tried to call pickBeeper() before stepping onto the diamond! Fix the bug.",
        hint: "Karel must move() ONTO the diamond square before calling pickBeeper();",
        rows: 3, cols: 4,
        start: { r: 1, c: 0, dir: "E", beepers: { "1,1": 1 }, walls: [] },
        goal:  { r: 1, c: 3, dir: null, beepers: { "1,3": 1 } },
        starterCode: `// Move the diamond from square 2 to the green square\nfunction main() {\n  pickBeeper();\n  move();\n  move();\n  move();\n  putBeeper();\n}`
      },
      {
        title: "Ex 3.4: Two-Diamond Delivery (Complete)",
        mode: "COMPLETE",
        instruction: "Collect both diamonds along the street and drop both of them at the green base.",
        hint: "Pick diamond 1, step forward, pick diamond 2, step to base, putBeeper() twice!",
        rows: 3, cols: 4,
        start: { r: 1, c: 0, dir: "E", beepers: { "1,1": 1, "1,2": 1 }, walls: [] },
        goal:  { r: 1, c: 3, dir: null, beepers: { "1,3": 2 } },
        starterCode: `// Collect 2 diamonds and stack them at the finish\nfunction main() {\n  move();\n  pickBeeper();\n  move();\n  pickBeeper();\n  \n}`
      },
      {
        title: "Ex 3.5: Corner Treasure (Fix Bug)",
        mode: "DEBUG",
        instruction: "Karel forgot to drop the diamond at the end! Fix the missing action.",
        hint: "Check the Goal mini-map: there should be 1 diamond on the top-right square.",
        rows: 3, cols: 3,
        start: { r: 2, c: 0, dir: "E", beepers: { "2,2": 1 }, walls: [] },
        goal:  { r: 0, c: 2, dir: null, beepers: { "0,2": 1 } },
        starterCode: `// Pick up the corner diamond and carry it North\nfunction main() {\n  move();\n  move();\n  pickBeeper();\n  turnLeft();\n  move();\n  move();\n}`
      },
      {
        title: "Ex 3.6: Build a 3-Tower (Write)",
        mode: "BUILD",
        instruction: "Gather all 3 scattered diamonds and stack a tower of 3 on the green square.",
        hint: "Walk East picking each diamond, then place all 3 on the last square.",
        rows: 3, cols: 4,
        start: { r: 1, c: 0, dir: "E", beepers: { "1,0": 1, "1,1": 1, "1,2": 1 }, walls: [] },
        goal:  { r: 1, c: 3, dir: null, beepers: { "1,3": 3 } },
        starterCode: `// Gather all 3 diamonds and build a tower at the goal\nfunction main() {\n  \n}`
      }
    ]
  },

  4: {
    id: 4,
    title: "Lesson 4: Functions (turnRight)",
    allowedCommands: ["move();", "turnLeft();", "turnRight();", "pickBeeper();", "putBeeper();"],
    exercises: [
      {
        title: "Ex 4.1: Teach Karel turnRight() (Complete)",
        mode: "COMPLETE",
        instruction: "Complete the turnRight() function recipe at the bottom (3 left turns = 1 right turn) so Karel can turn South!",
        hint: "Add two more turnLeft(); lines inside function turnRight() { ... }",
        rows: 3, cols: 3,
        start: { r: 0, c: 0, dir: "E", beepers: {}, walls: [] },
        goal:  { r: 2, c: 2, dir: null, beepers: {} },
        starterCode: `function main() {\n  move();\n  move();\n  turnRight();\n  move();\n  move();\n}\n\n// Complete the turnRight recipe:\nfunction turnRight() {\n  turnLeft();\n  \n}`
      },
      {
        title: "Ex 4.2: Climb One Stair Step (Complete)",
        mode: "COMPLETE",
        instruction: "Use turnLeft() and turnRight() to climb up the stair step and collect the diamond!",
        hint: "Step East -> turnLeft -> move North -> turnRight -> move East -> pickBeeper!",
        rows: 3, cols: 4,
        start: { r: 2, c: 0, dir: "E", beepers: { "1,2": 1 }, walls: ["2,1,E","1,2,S"] },
        goal:  { r: 1, c: 3, dir: null, beepers: {} },
        starterCode: `function main() {\n  move();\n  turnLeft();\n  move();\n  // Now turn right, grab the diamond, and finish:\n  \n}\n\nfunction turnRight() {\n  turnLeft();\n  turnLeft();\n  turnLeft();\n}`
      },
      {
        title: "Ex 4.3: Broken turnRight() (Fix Bug)",
        mode: "DEBUG",
        instruction: "Karel is spinning in a full circle instead of turning right! Fix the turnRight() function.",
        hint: "4 left turns = 360° circle! Change it to 3 left turns.",
        rows: 3, cols: 3,
        start: { r: 0, c: 0, dir: "E", beepers: {}, walls: [] },
        goal:  { r: 2, c: 2, dir: null, beepers: {} },
        starterCode: `function main() {\n  move();\n  move();\n  turnRight();\n  move();\n  move();\n}\n\nfunction turnRight() {\n  turnLeft();\n  turnLeft();\n  turnLeft();\n  turnLeft();\n}`
      },
      {
        title: "Ex 4.4: Down the Stairs (Complete)",
        mode: "COMPLETE",
        instruction: "Walk down two stair steps using turnRight() and turnLeft().",
        hint: "Move East -> turnRight -> move South -> turnLeft -> move East -> turnRight -> move South.",
        rows: 3, cols: 4,
        start: { r: 0, c: 0, dir: "E", beepers: {}, walls: ["1,0,N","2,1,N"] },
        goal:  { r: 2, c: 3, dir: null, beepers: {} },
        starterCode: `function main() {\n  move();\n  turnRight();\n  move();\n  turnLeft();\n  move();\n  // Finish the last step down:\n  \n}\n\nfunction turnRight() {\n  turnLeft();\n  turnLeft();\n  turnLeft();\n}`
      },
      {
        title: "Ex 4.5: Custom climbStep() Function (Fix Bug)",
        mode: "DEBUG",
        instruction: "We wrote a helper function climbStep(), but forgot to call it a second time in main()!",
        hint: "Call climbStep(); twice inside main() to climb both stairs.",
        rows: 4, cols: 4,
        start: { r: 3, c: 0, dir: "E", beepers: {}, walls: ["3,0,E","2,1,S","2,1,E","1,2,S"] },
        goal:  { r: 1, c: 2, dir: null, beepers: {} },
        starterCode: `function main() {\n  climbStep();\n}\n\nfunction climbStep() {\n  turnLeft();\n  move();\n  turnRight();\n  move();\n}\n\nfunction turnRight() {\n  turnLeft();\n  turnLeft();\n  turnLeft();\n}`
      },
      {
        title: "Ex 4.6: Zig-Zag Delivery (Write)",
        mode: "BUILD",
        instruction: "Use turnRight() to navigate around the obstacle and place a diamond on the goal.",
        hint: "Define turnRight() at the bottom and use it to steer around the center wall.",
        rows: 3, cols: 4,
        start: { r: 1, c: 0, dir: "E", beepers: {}, walls: ["1,1,E"] },
        goal:  { r: 1, c: 3, dir: null, beepers: { "1,3": 1 } },
        starterCode: `function main() {\n  \n}\n\nfunction turnRight() {\n  turnLeft();\n  turnLeft();\n  turnLeft();\n}`
      }
    ]
  },

  5: {
    id: 5,
    title: "Lesson 5: Repeat Loops (for)",
    allowedCommands: ["move();", "turnLeft();", "pickBeeper();", "putBeeper();", "for (...)"],
    exercises: [
      {
        title: "Ex 5.1: Cross the 5-Step Bridge (Complete)",
        mode: "COMPLETE",
        instruction: "Change the loop number so Karel walks all 5 steps across the bridge in one clean loop!",
        hint: "Replace i < 2 with i < 5 inside the for loop.",
        rows: 3, cols: 6,
        start: { r: 1, c: 0, dir: "E", beepers: {}, walls: [] },
        goal:  { r: 1, c: 5, dir: null, beepers: {} },
        starterCode: `// Change the loop count from 2 to 5\nfunction main() {\n  for (let i = 0; i < 2; i++) {\n    move();\n  }\n}`
      },
      {
        title: "Ex 5.2: Plant a Row of 4 Diamonds (Complete)",
        mode: "COMPLETE",
        instruction: "Use a for loop to plant 4 diamonds along the street and stop on the green square.",
        hint: "Inside the loop: putBeeper(); and move(); repeated 4 times.",
        rows: 3, cols: 5,
        start: { r: 1, c: 0, dir: "E", beepers: {}, walls: [] },
        goal:  { r: 1, c: 4, dir: null, beepers: { "1,0": 1, "1,1": 1, "1,2": 1, "1,3": 1 } },
        starterCode: `function main() {\n  for (let i = 0; i < 4; i++) {\n    putBeeper();\n    // Add step forward inside the loop:\n    \n  }\n}`
      },
      {
        title: "Ex 5.3: Loop Crash! (Fix Bug)",
        mode: "DEBUG",
        instruction: "This loop runs 7 times and crashes into the wall! Fix the loop counter.",
        hint: "Count the steps to the green square: 4 steps.",
        rows: 3, cols: 6,
        start: { r: 1, c: 0, dir: "E", beepers: {}, walls: ["1,4,E"] },
        goal:  { r: 1, c: 4, dir: null, beepers: {} },
        starterCode: `// Fix the loop number so Karel doesn't hit the wall\nfunction main() {\n  for (let i = 0; i < 7; i++) {\n    move();\n  }\n}`
      },
      {
        title: "Ex 5.4: Vacuum Cleaner Street (Complete)",
        mode: "COMPLETE",
        instruction: "Pick up all 5 diamonds in a row using a single for loop!",
        hint: "Loop 5 times: pickBeeper(); then move();",
        rows: 3, cols: 6,
        start: { r: 1, c: 0, dir: "E", beepers: { "1,0": 1, "1,1": 1, "1,2": 1, "1,3": 1, "1,4": 1 }, walls: [] },
        goal:  { r: 1, c: 5, dir: null, beepers: {} },
        starterCode: `function main() {\n  for (let i = 0; i < 5; i++) {\n    // Pick and move:\n    \n  }\n}`
      },
      {
        title: "Ex 5.5: Stack 6 Diamonds (Fix Bug)",
        mode: "DEBUG",
        instruction: "Karel needs a tower of 6 diamonds on his spot, then 1 step forward. Fix the bug!",
        hint: "move(); was accidentally placed INSIDE the loop! Move it AFTER the closing } of the loop.",
        rows: 3, cols: 4,
        start: { r: 1, c: 0, dir: "E", beepers: {}, walls: [] },
        goal:  { r: 1, c: 1, dir: null, beepers: { "1,0": 6 } },
        starterCode: `function main() {\n  for (let i = 0; i < 6; i++) {\n    putBeeper();\n    move();\n  }\n}`
      },
      {
        title: "Ex 5.6: Square Perimeter Patrol (Write)",
        mode: "BUILD",
        instruction: "Use a for loop that repeats 4 times to walk all 4 sides of a 3x3 square!",
        hint: "Repeat 4 times: move(); move(); turnLeft();",
        rows: 3, cols: 3,
        start: { r: 2, c: 0, dir: "E", beepers: { "2,0": 1 }, walls: [] },
        goal:  { r: 2, c: 0, dir: "E", beepers: {} },
        starterCode: `// Pick the diamond and patrol all 4 sides back to start\nfunction main() {\n  pickBeeper();\n  for (let i = 0; i < 4; i++) {\n    \n  }\n}`
      }
    ]
  },

  6: {
    id: 6,
    title: "Lesson 6: Smart Decisions (if & Sensors)",
    allowedCommands: ["move();", "turnLeft();", "pickBeeper();", "putBeeper();", "if (frontIsClear())", "if (beepersPresent())"],
    exercises: [
      {
        title: "Ex 6.1: Pick Only If Present (Complete)",
        mode: "COMPLETE",
        instruction: "Some squares have diamonds and some are empty! Use if (beepersPresent()) so Karel never gets an error.",
        hint: "Inside the if (beepersPresent()) block, write pickBeeper();",
        rows: 3, cols: 5,
        start: { r: 1, c: 0, dir: "E", beepers: { "1,1": 1, "1,3": 1 }, walls: [] },
        goal:  { r: 1, c: 4, dir: null, beepers: {} },
        starterCode: `function main() {\n  for (let i = 0; i < 4; i++) {\n    move();\n    if (beepersPresent()) {\n      // Grab the diamond safely:\n      \n    }\n  }\n}`
      },
      {
        title: "Ex 6.2: Safe Step Forward (Complete)",
        mode: "COMPLETE",
        instruction: "Check if (frontIsClear()) before moving so Karel stops safely if a wall is in front!",
        hint: "Put move(); inside if (frontIsClear()) { ... }",
        rows: 3, cols: 5,
        start: { r: 1, c: 0, dir: "E", beepers: {}, walls: ["1,2,E"] },
        goal:  { r: 1, c: 2, dir: null, beepers: {} },
        starterCode: `function main() {\n  for (let i = 0; i < 5; i++) {\n    if (frontIsClear()) {\n      \n    }\n  }\n}`
      },
      {
        title: "Ex 6.3: Double-Plant Bug! (Fix Bug)",
        mode: "DEBUG",
        instruction: "Karel should fill ONLY the empty squares so every square has 1 diamond (no double piles!). Fix the condition.",
        hint: "Use if (noBeepersPresent()) { putBeeper(); } instead of beepersPresent()!",
        rows: 3, cols: 4,
        start: { r: 1, c: 0, dir: "E", beepers: { "1,1": 1, "1,3": 1 }, walls: [] },
        goal:  { r: 1, c: 3, dir: null, beepers: { "1,0": 1, "1,1": 1, "1,2": 1, "1,3": 1 } },
        starterCode: `// Make sure every square has exactly 1 beeper\nfunction main() {\n  for (let i = 0; i < 3; i++) {\n    if (beepersPresent()) {\n      putBeeper();\n    }\n    move();\n  }\n}`
      },
      {
        title: "Ex 6.4: Smart Wall Turn (Complete)",
        mode: "COMPLETE",
        instruction: "Walk forward, and if the front is blocked (frontIsBlocked()), turnLeft()!",
        hint: "Check if (frontIsBlocked()) { turnLeft(); } inside the loop.",
        rows: 4, cols: 4,
        start: { r: 3, c: 0, dir: "E", beepers: {}, walls: ["3,2,E"] },
        goal:  { r: 1, c: 2, dir: null, beepers: {} },
        starterCode: `function main() {\n  for (let i = 0; i < 4; i++) {\n    if (frontIsBlocked()) {\n      \n    }\n    move();\n  }\n}`
      },
      {
        title: "Ex 6.5: Clean & Deliver (Fix Bug)",
        mode: "DEBUG",
        instruction: "Collect all diamonds along the 4-step path and drop 1 at the finish. Spot the missing sensor check!",
        hint: "Square 2 is empty, so calling pickBeeper() without if (beepersPresent()) crashes!",
        rows: 3, cols: 5,
        start: { r: 1, c: 0, dir: "E", beepers: { "1,1": 1, "1,3": 1 }, walls: [] },
        goal:  { r: 1, c: 4, dir: null, beepers: { "1,4": 1 } },
        starterCode: `function main() {\n  for (let i = 0; i < 4; i++) {\n    move();\n    pickBeeper();\n  }\n  putBeeper();\n}`
      },
      {
        title: "Ex 6.6: Treasure or Empty? (Write)",
        mode: "BUILD",
        instruction: "Walk 5 squares East, picking up every diamond you find along the way.",
        hint: "Combine a for (let i = 0; i < 5; i++) loop with if (beepersPresent()) { pickBeeper(); }.",
        rows: 3, cols: 6,
        start: { r: 1, c: 0, dir: "E", beepers: { "1,0": 1, "1,2": 1, "1,4": 1 }, walls: [] },
        goal:  { r: 1, c: 5, dir: null, beepers: {} },
        starterCode: `// Walk 5 steps and collect every diamond safely\nfunction main() {\n  \n}`
      }
    ]
  },

  7: {
    id: 7,
    title: "Lesson 7: Maze Runner (while Loops)",
    allowedCommands: ["move();", "turnLeft();", "pickBeeper();", "while (frontIsClear())"],
    exercises: [
      {
        title: "Ex 7.1: Walk Until the Wall (Complete)",
        mode: "COMPLETE",
        instruction: "We don't know how long this hallway is! Use while (frontIsClear()) to stop right before the wall.",
        hint: "Put move(); inside while (frontIsClear()) { ... }",
        rows: 3, cols: 6,
        start: { r: 1, c: 0, dir: "E", beepers: {}, walls: ["1,4,E"] },
        goal:  { r: 1, c: 4, dir: null, beepers: {} },
        starterCode: `function main() {\n  while (frontIsClear()) {\n    // Keep walking while path is open:\n    \n  }\n}`
      },
      {
        title: "Ex 7.2: Two-Hallway L-Maze (Complete)",
        mode: "COMPLETE",
        instruction: "Walk to the end of the first hallway, turnLeft(), and walk to the end of the second hallway!",
        hint: "Use two while (frontIsClear()) loops with turnLeft(); in between.",
        rows: 4, cols: 5,
        start: { r: 3, c: 0, dir: "E", beepers: {}, walls: ["3,3,E","0,3,N"] },
        goal:  { r: 0, c: 3, dir: null, beepers: {} },
        starterCode: `function main() {\n  while (frontIsClear()) {\n    move();\n  }\n  turnLeft();\n  // Walk the second hallway to the top:\n  \n}`
      },
      {
        title: "Ex 7.3: Collect the Pile with while (Fix Bug)",
        mode: "DEBUG",
        instruction: "There is a mystery pile of diamonds! Karel should keep picking while (beepersPresent()), then step forward.",
        hint: "Change while (frontIsClear()) to while (beepersPresent()) on the pile!",
        rows: 3, cols: 4,
        start: { r: 1, c: 0, dir: "E", beepers: { "1,1": 4 }, walls: [] },
        goal:  { r: 1, c: 2, dir: null, beepers: {} },
        starterCode: `function main() {\n  move();\n  while (frontIsClear()) {\n    pickBeeper();\n  }\n  move();\n}`
      },
      {
        title: "Ex 7.4: 3-Turn Spiral Escape (Complete)",
        mode: "COMPLETE",
        instruction: "Escape the 3-corner spiral maze using a for loop of 3 hallways + while (frontIsClear())!",
        hint: "Repeat 3 times: while (frontIsClear()) { move(); } then turnLeft();",
        rows: 4, cols: 4,
        start: { r: 3, c: 0, dir: "E", beepers: {}, walls: ["3,3,E","0,3,N","0,0,W"] },
        goal:  { r: 0, c: 0, dir: null, beepers: {} },
        starterCode: `function main() {\n  for (let side = 0; side < 3; side++) {\n    while (frontIsClear()) {\n      move();\n    }\n    // Turn at the corner:\n    \n  }\n}`
      },
      {
        title: "Ex 7.5: Sweeper Hallway (Fix Bug)",
        mode: "DEBUG",
        instruction: "Walk until the wall while picking up every diamond on the way. Fix the missing check!",
        hint: "Add if (beepersPresent()) { pickBeeper(); } inside the while loop (and check the starting square too!).",
        rows: 3, cols: 6,
        start: { r: 1, c: 0, dir: "E", beepers: { "1,1": 1, "1,3": 1, "1,4": 1 }, walls: ["1,4,E"] },
        goal:  { r: 1, c: 4, dir: null, beepers: {} },
        starterCode: `function main() {\n  while (frontIsClear()) {\n    move();\n    // Add diamond check here!\n  }\n}`
      },
      {
        title: "Ex 7.6: Maze Treasure Hunter (Write)",
        mode: "BUILD",
        instruction: "Walk to the wall, grab the diamond in the corner, turn North, and walk to the green exit.",
        hint: "while (frontIsClear()) -> pickBeeper() -> turnLeft() -> while (frontIsClear()).",
        rows: 4, cols: 5,
        start: { r: 3, c: 0, dir: "E", beepers: { "3,4": 1 }, walls: ["3,4,E","0,4,N"] },
        goal:  { r: 0, c: 4, dir: null, beepers: {} },
        starterCode: `// Escape the maze and collect the corner diamond\nfunction main() {\n  \n}`
      }
    ]
  },

  8: {
    id: 8,
    title: "Lesson 8: Boss Challenge — City Delivery",
    allowedCommands: ["All Module 1 Commands", "Functions", "for / while", "if"],
    exercises: [
      {
        title: "Ex 8.1: Express Street Delivery (Complete)",
        mode: "COMPLETE",
        instruction: "Pick up the supply package, walk to the end of the avenue, and deliver it on the green pad!",
        hint: "Use while (frontIsClear()) to reach the end, then putBeeper();",
        rows: 3, cols: 6,
        start: { r: 1, c: 0, dir: "E", beepers: { "1,0": 1 }, walls: ["1,5,E"] },
        goal:  { r: 1, c: 5, dir: null, beepers: { "1,5": 1 } },
        starterCode: `function main() {\n  pickBeeper();\n  while (frontIsClear()) {\n    move();\n  }\n  // Deliver the package:\n  \n}`
      },
      {
        title: "Ex 8.2: Roadblock Detour (Complete)",
        mode: "COMPLETE",
        instruction: "A roadblock blocks the main road! Detour North around it using turnRight() and deliver the diamond.",
        hint: "Step East -> turnLeft -> move North -> turnRight -> move 2 steps East -> turnRight -> move South -> putBeeper!",
        rows: 3, cols: 5,
        start: { r: 2, c: 0, dir: "E", beepers: { "2,0": 1 }, walls: ["2,1,E","2,2,E"] },
        goal:  { r: 2, c: 3, dir: null, beepers: { "2,3": 1 } },
        starterCode: `function main() {\n  pickBeeper();\n  move();\n  turnLeft();\n  move();\n  turnRight();\n  move();\n  move();\n  // Go back down to the road and drop the package:\n  \n}\n\nfunction turnRight() {\n  turnLeft();\n  turnLeft();\n  turnLeft();\n}`
      },
      {
        title: "Ex 8.3: Double Warehouse Pickup (Fix Bug)",
        mode: "DEBUG",
        instruction: "Karel must collect 2 packages from the middle warehouse and drop both at the finish, but dropped 1 too early!",
        hint: "Remove the extra putBeeper() in the middle and put 2 putBeeper() calls at the end.",
        rows: 3, cols: 5,
        start: { r: 1, c: 0, dir: "E", beepers: { "1,2": 2 }, walls: [] },
        goal:  { r: 1, c: 4, dir: null, beepers: { "1,4": 2 } },
        starterCode: `function main() {\n  move();\n  move();\n  pickBeeper();\n  pickBeeper();\n  putBeeper();\n  move();\n  move();\n  putBeeper();\n}`
      },
      {
        title: "Ex 8.4: Rooftop Antenna Repair (Complete)",
        mode: "COMPLETE",
        instruction: "Climb the building tower, place a diamond beacon on top, and climb down to the green base!",
        hint: "Go East 1 -> turnLeft -> climb 3 steps North -> putBeeper -> turnRight -> East 1 -> turnRight -> 3 steps South.",
        rows: 4, cols: 4,
        start: { r: 3, c: 0, dir: "E", beepers: { "3,0": 1 }, walls: ["3,1,E","2,1,E","1,1,E","1,2,N"] },
        goal:  { r: 3, c: 3, dir: null, beepers: { "0,2": 1 } },
        starterCode: `function main() {\n  pickBeeper();\n  move();\n  turnLeft();\n  for (let i = 0; i < 3; i++) { move(); }\n  turnRight();\n  move();\n  putBeeper();\n  // Climb down the right side to the green square:\n  \n}\n\nfunction turnRight() {\n  turnLeft();\n  turnLeft();\n  turnLeft();\n}`
      },
      {
        title: "Ex 8.5: Smart Street Cleaner (Fix Bug)",
        mode: "DEBUG",
        instruction: "Clean every random diamond along the avenue until the wall, then deposit all of them in the bin!",
        hint: "Check beepersPresent() on every square AND use while (beepersInBag()) { putBeeper(); } at the end!",
        rows: 3, cols: 6,
        start: { r: 1, c: 0, dir: "E", beepers: { "1,1": 1, "1,2": 1, "1,4": 1 }, walls: ["1,5,E"] },
        goal:  { r: 1, c: 5, dir: null, beepers: { "1,5": 3 } },
        starterCode: `function main() {\n  while (frontIsClear()) {\n    move();\n    if (beepersPresent()) {\n      pickBeeper();\n    }\n  }\n  putBeeper();\n}`
      },
      {
        title: "Ex 8.6: Final City Boss Mission! (Write)",
        mode: "BUILD",
        instruction: "Grand Finale: Collect both diamonds in the L-corridor and stack them at the top-right city depot!",
        hint: "Walk East collecting diamonds, turnLeft at the wall, walk North to the top-right corner, and drop both!",
        rows: 4, cols: 4,
        start: { r: 3, c: 0, dir: "E", beepers: { "3,1": 1, "2,3": 1 }, walls: ["3,3,E","0,3,N"] },
        goal:  { r: 0, c: 3, dir: null, beepers: { "0,3": 2 } },
        starterCode: `// Module 1 Boss Mission: Collect both supplies and deliver to (top-right)!\nfunction main() {\n  \n}`
      }
    ]
  }
};
