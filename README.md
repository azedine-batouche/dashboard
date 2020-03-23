[![Coverage Status](https://coveralls.io/repos/github/batouche-dev/dashboard/badge.svg?branch=master)](https://coveralls.io/github/batouche-dev/dashboard?branch=master)
[![Build Status](https://travis-ci.org/batouche-dev/dashboard.svg?branch=master)](https://travis-ci.org/batouche-dev/dashboard)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/100efa0c79134cdfa784e66845250220)](https://www.codacy.com/manual/batouche-dev/dashboard?utm_source=github.com&utm_medium=referral&utm_content=batouche-dev/dashboard&utm_campaign=Badge_Grade)

[![Known Vulnerabilities](https://snyk.io/test/npm/markdown-it/10.0.0/badge.svg)](https://snyk.io/test/npm/markdown-it/10.0.0)

# Dashboard

this project is a dashboard who display different information from api and you can custom all of them as you like. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.


## Screenshop 
You can see the final result of the project who look like this:

![Getting Started](../dashboard/dist/dashboard/assets/imgs/../../../../src/assets/imgs/Capture&#32;d’écran&#32;2020-03-21&#32;à&#32;21.46.48.png)



## Setup
first clone the porject in your workspace with this command line

```
git clone https://github.com/batouche-dev/dashboard.git
```

then go inside the folder 'dashboard': 
```
cd dashboard
```

## API KEY
go the settings file under this path
```
src/app/dashboard/widgets/settings/settings.ts
```
then add you own apikey on each varaibles.
list of a few api

## List of website thats you can get some api Key  

[Weather](https://openweathermap.org/api): api key for weather widget

[Movies](https://api.themoviedb.org/3/movie): api key for movies widget

[Joke](https://blague.xyz/api/joke): api key for joke widget

[Giphy](https://developers.giphy.com/): api key for giphy widget

[News](https://newsapi.org/v2/): api key for news widget


## Launch
you have different envirement that you can use it, or start like this: 
```
ng serve 
```


## Note
this project run with theses versions of tools:
```
npm: 6.13.7
angular: 8.2.2
Node: 13.6
```
