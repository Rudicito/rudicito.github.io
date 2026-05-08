---
title: Fleet Manager
image: "fleet_manager.png"
comps:
  - patrimoine
  - incidents
  - projet
  - disposition
  - orga
---

Fleet Manager est un logiciel de gestion de parc de véhicules.
Il sert à suivre chaque véhicule : pleins d'essence, kilométrage et graphiques.

Le projet suit une architecture MVVM (Model-View-ViewModel).

Il est programmé en C# et utilise ces technologies :

- [Avalonia](https://en.wikipedia.org/wiki/Avalonia_(software_framework)) : un framework open source pour
  créer l'interface utilisateur sur plusieurs plateformes.

- [Entity Framework](https://en.wikipedia.org/wiki/Entity_Framework) : un framework open source qui relie
  le programme à la base de données.

- [SQLite](https://en.wikipedia.org/wiki/SQLite) : une base de données open source intégrée au programme
  (pas de serveur dédié).
