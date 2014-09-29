nxManager
=========

* This repository is a next generation central manager framework.
* The target is to make cluster product development very easy and effective.

Table of Contents
=================

* [Prepare](#prepare)
* [Start](#start)
* [Libs](#libs)
* [Directory](#directory)
* [FAQ](#faq)

Prepare
=======

Linux
-----

sudo apt-get install nodejs  
sudo apt-get install npm  
sudo npm install -g supervisor  

Windows
-------

download nodejs from [http://nodejs.org/download/](http://nodejs.org/download/)  
npm install -g supervisor  

[Back to TOC](#table-of-contents)

Quick Start
=====

First download nxManager  
unzip nxManager & cd nxManager  
supervisor bin/www  
browse localhost:3000  

[Back to TOC](#table-of-contents)

Libs
====

* Backbones.js Marionette.js Underscore.js Handlebars.js
* Bootstraps CSS3 HTML5
* Node.js Express.js MongoDB
* openresty(nginx) lua

[Back to TOC](#table-of-contents)

Directory
=========

* bin
* node_modules
* public: GUI
* routes
* views

[Back to TOC](#table-of-contents)

FAQ
===

1. when start with supervisor bin/www, an error occured "/usr/bin/env: is not found or a directory".
   if you use sudo apt-get install nodejs to install you node.js, you need use "sudo ln -s /usr/bin/nodejs /usr/bin/node" to link node with you nodejs.

[Back to TOC](#table-of-contents)

TODO List
=========

* Add cookies support for login user.

[Back to TOC](#table-of-contents)