---
layout: "default"
title: "veille technologique"
scripts:
  - assets/js/rust-news-feed.js
---
# Rust

Rust, est un langage de programmation moderne qui met l’accent sur la sécurité et les performances.

Il est aussi performant que des langages bas niveau comme le C/C++,  
tout en évitant les erreurs classiques de ces langages, comme les problèmes de mémoire, de concurrence, et 
d’autres bugs difficiles à détecter.

La plupart des failles de sécurité, dans les navigateurs internet par exemple, sont liées à des problèmes propres 
aux langages bas niveau, notamment les erreurs de gestion de mémoire comme les buffer overflow.
Rust permet justement de limiter fortement ce type de problème, et faire des programmes plus safe.

C’est notamment pour ça que des programmes critiques, comme **sudo** (la commande Linux pour gérer les droits admin),  
sont en train d’être réécrits en Rust pour éviter les failles de sécurité. Le projet **sudo-rs** commence à être 
utilisé sur Ubuntu 25.10.

Les + de Rust :
- Il aide à éviter les bugs liés à la mémoire.
- Il est très performant, autant que C/C++.
- Il a une communauté très active.
- Il est utilisé dans des projets sérieux (navigateurs internet, systèmes critiques, serveurs…).

## Dernière news du blog de Rust
<div id="rust-blog-feed"></div>

## Dernière news de sécurité de Rust
<div id="rust-secu-feed"></div>

