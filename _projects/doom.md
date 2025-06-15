---
layout: projects
title: "DOOM on the HP Prime Calculator"
image: "/assets/img/projects/doom.png"
---

This is a port of DOOM, the game released in 1993, written in Python, running on the HP Prime calculator. DOOM was originally written in C, so I had to take code from someone very skilled and determined who rewrote it in Python, using the original game files (WAD files). The problem was that this code uses a library only available on computers (pygame), so I had to make quite a few changes to use the calculator's limited libraries. What was demotivating was that I had to make many code changes just to get an initial result (displaying game textures in the buffer), but I succeeded :). The frame rate I got on the actual hardware (not an emulator) was less than 1 FPS :(. If I have the time and motivation, maybe I'll revisit the code to optimize it and gain 1, 2, or even 3 FPS?