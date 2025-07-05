---
title: "Tetris sur la calculatrice HP Prime"
image: "tetris.png"
---

C'est une version de Tetris codé en Python pour la calculatrice [HP Prime](https://fr.wikipedia.org/wiki/HP_Prime).

Plus précisément, elle respecte le [Super Rotation System (SRS)](https://harddrop.com/wiki/SRS), qui définit la manière dont les tétrominos (pièces) apparaissent, tournent, et également le fonctionnement du système de [wall kick](https://harddrop.com/wiki/Wall_kick).

Le **wall kick** est un système qui intervient lorsqu’un tétromino ne peut pas tourner à cause d’une collision avec un mur, le sol ou d’autres tetrominoes. Dans ce cas, le jeu tente de "kick" ("pousser" en français) le tétromino vers une position voisine valide.

Voici un exemple :
![exemple de kick tetris](/assets/img/projects/tetris/tetris-kick-example.gif)

Dans ce GIF, le tétromino violet est tourné dans le sens antihoraire. Comme il est en collision avec le sol, il est "kick" vers le haut pour atteindre une position valide.

Ce clone de Tetris implémente toutes les mécaniques du SRS, y compris le comportement de wall kick.

### Code source sur GitHub [ici](https://github.com/Rudicito/hp-tetris-srs)!