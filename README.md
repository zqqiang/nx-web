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

Windows
-------

download nodejs from [http://nodejs.org/download/](http://nodejs.org/download/)  
npm install -g supervisor  
npm install -g bower  

[Back to TOC](#table-of-contents)

Quick Start
=====

First download nxManager  
unzip nxManager & cd nxManager  
npm install  
cd public  
bower install  
cd ../  
supervisor bin/www  
browse localhost:3000  

[Back to TOC](#table-of-contents)

Libs
====

* Backbones.js Marionette.js Underscore.js Handlebars.js
* Bootstraps CSS3 HTML5
* Node.js Express.js MongoDB Mongoose.js Cheerio.js
* TODO: openresty(nginx) lua

[Back to TOC](#table-of-contents)

Directory
=========

* bin: node start file
* db: use mongoose to connect mongodb, some configuration
* model: mongoose model
* node_modules (After run "npm install"): all node modules
* public: Server GUI
* routes: 

[Back to TOC](#table-of-contents)

FAQ
===

1. when start with supervisor bin/www, an error occured "/usr/bin/env: is not found or a directory".
   if you use sudo apt-get install nodejs to install you node.js, you need use "sudo ln -s /usr/bin/nodejs /usr/bin/node" to link node with you nodejs.

[Back to TOC](#table-of-contents)

Todo List
=========

* Add cookies support for login user
* Add bower to manage gui dependence

Features
========

* Support Android CRUD Operation with mongoose.js
* Add dianping api query script for get business infomation to mongodb

[Back to TOC](#table-of-contents)