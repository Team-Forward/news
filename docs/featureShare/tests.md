# Nextcloud News Test Run Results
[Retour à la documentation](/README?id=tests)
## Utilisation
Lancer le jeu complet de tests avec `make test`.

Le jeu de tests contient :
* Des tests unitaires du code serveur PHP (`phpunit`)
* Des tests d'analyse statique du code serveur PHP (`phpstan`)
* Des tests de suivi de conventions de code PHP (`phpcs`, `phpcbf`)
* Des tests unitaires du code client Javascript (`karma`, `jasmine`)

## Résultats

### Tests unitaires serveur


```bash
make unit-test

...............................................................  63 / 414 ( 15%)
............................................................... 126 / 414 ( 30%)
............................................................... 189 / 414 ( 45%)
............................................................... 252 / 414 ( 60%)
............................................................... 315 / 414 ( 76%)
............................................................... 378 / 414 ( 91%)
....................................                            414 / 414 (100%)

Time: 00:00.543, Memory: 40.00 MB

OK (414 tests, 1161 assertions)
```

### Analyse statique serveur

```bash
make phpstan

Note: Using configuration file /home/marco/server/apps/news/phpstan.neon.dist.
 78/78 [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%


 [OK] No errors
```

### Tests Javascript

```bash
make js-test

Firefox 88.0 (Windows 10): Executed 152 of 152 SUCCESS (2.518 secs / 1.879 secs)
TOTAL: 152 SUCCESS
```

### PHP CodeSniffer

```
make phpcs

./vendor/bin/phpcs --standard=PSR2 --ignore=lib/Migration/Version*.php lib
(sans retour = tests passées)
```
