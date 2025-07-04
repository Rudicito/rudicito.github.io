---
title: "DOOM sur la calculatrice HP Prime"
image: "/assets/img/projects/doom.png"
---

C'est un port de [DOOM](https://fr.wikipedia.org/wiki/Doom_(jeu_vid%C3%A9o,_1993)), jeu sorti en 1993, écrit en Python, qui tourne sur la calculatrice [HP Prime](https://fr.wikipedia.org/wiki/HP_Prime). 

DOOM est à l'origine en C, donc j'ai dû prendre un code de quelqu'un trop fort et déterminé qui l'a refait en python, et utilise les fichiers d'origine du jeu (fichiers WAD). 

Le problème, c'est que ce code utilise une librairie seulement sur ordinateur (pygame), donc il a fallu faire pas mal de changement pour utiliser les librairies limitées de la calculatrice. 

Ce qui était démotivant, c'est que je devais faire beaucoup de changement de code pour avoir un début de résultat (affichage des textures du jeu dans le buffer), mais j'ai réussi :).

### Code source sur GitHub [ici](https://github.com/Rudicito/HP-DOOM)!