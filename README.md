nxManager
=========

* This repository is a next generation central manager framework.
* The target is to make cluster product development very easy and effective.
* Also be used as Android Central Server.

Table of Contents
=================

* [Prepare](#prepare)
* [Start](#start)
* [Libs](#libs)
* [Directory](#directory)
* [FAQ](#faq)
* [Todo List](#todo-list)
* [Features](#features)

Prepare
=======

Linux
-----

sudo apt-get install nodejs  
sudo apt-get install npm  
sudo npm install -g supervisor  
sudo npm install -g bower  
sudo npm install -g less  

Windows
-------

download nodejs from [http://nodejs.org/download/](http://nodejs.org/download/)  
npm install -g supervisor  
npm install -g bower  
npm install -g less  

[Back to TOC](#table-of-contents)

Quick Start
=====

First download nxManager  
unzip nxManager & cd nxManager  
npm install  
cd public  
bower install  
cd ../  
supervisor app.js  
browse localhost:3000  

[Back to TOC](#table-of-contents)

Libs
====

* Backbones.js Marionette.js Underscore.js Handlebars.js D3.js
* Bootstraps CSS3 HTML5
* Node.js Express.js MongoDB Mongoose.js Cheerio.js

[Back to TOC](#table-of-contents)

Directory
=========

* db: use mongoose to connect mongodb, some configuration
* model: mongoose model
* node_modules (After run "npm install"): all node modules
* public: Server GUI
* routes: 

[Back to TOC](#table-of-contents)

FAQ
===

1. Move to Issues  

[Back to TOC](#table-of-contents)

Todo List
=========

* Cookies  
* Select a new DB  

Features
========

* Support Android CRUD Operation with mongoose.js
* Add dianping api query script for get business infomation to mongodb
* Use bootstrap to support mobile GUI
* Add High-Stock to analysis stock price

[Back to TOC](#table-of-contents)