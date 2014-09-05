#nxManager#
* This repository is a next generation central manager framework.
* The target is to make cluster product development very easy and effective.

##Prepare##
* sudo apt-get install nodejs
* sudo apt-get install npm
* sudo npm install -g supervisor

##Start##
* First download nxManager
* unzip nxManager & cd nxManager
* supervisor bin/www
* browse localhost:3000

##Libs##
1. Backbones.js Marionette.js Underscore.js Handlebars.js
2. Bootstraps CSS3 HTML5
3. Node.js Express.js MongoDB
4. openresty(nginx) lua

##Directory##
* bin
* node_modules
* public: GUI
* routes
* views

##FAQ##
1. when start with supervisor bin/www, an error occured "/usr/bin/env: is not found or a directory".
A: if you use sudo apt-get install nodejs to install you node.js, you need use "sudo ln -s /usr/bin/nodejs /usr/bin/node" to link node with you nodejs.