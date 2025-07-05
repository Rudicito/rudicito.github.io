---
title: "Tetris on the HP Prime Calculator"
image: "tetris.png"
---

This is a version of Tetris written in Python for the [HP Prime](https://en.wikipedia.org/wiki/HP_Prime) Calculator.

More precisely, it follows the [Super Rotation System (SRS)](https://harddrop.com/wiki/SRS), which defines how tetrominoes (blocks) spawn, rotate, and how the [wall kick](https://harddrop.com/wiki/Wall_kick) system works.

The **wall kick** is a system that occurs when a tetromino cannot rotate due to a collision with a wall, floor, or other tetrominoes. In such cases, the game attempts to “kick” the tetromino into a nearby valid position.

Here's an example:
![tetris kick example](/assets/img/projects/tetris/tetris-kick-example.gif)

In this GIF, the purple tetromino is rotated counterclockwise. Since it overlaps with the floor, it gets "kicked" upward into a valid position.

This Tetris clone implements all SRS mechanics, including wall kick behavior.

### Source code on GitHub [here](https://github.com/Rudicito/hp-tetris-srs)!