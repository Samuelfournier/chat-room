# chat-room

Guide de développement - ChatRoom 

 

1.0 Description de l’application 

Le principe de l’application est le suivant : on crée une “room” dans laquelle des utilisateurs peuvent se rejoindre pour discuter. Un utilisateur se rend à sur la page web de la “room” ou on lui demande de choisir un pseudonyme, afin que ce dernier puisse envoyer des messages dans la “room”. Évidemment, tous les messages sont lisibles par les utilisateurs dans la room. 

 

2.0 Dépendances 

Voici la liste des packages que notre application utilise : 

Node.js 

Express.js 

Bootstrap 

Jquery 

Nodemon 

Body-parser 

Socket.io 

http 

 

3.0 Quick start 

3.1 Installation de Node 

Se rendre sur le site officiel de Node et installer la version désirée :  

https://nodejs.org/en/download/ 

Une fois Node installé, il est possible d’utiliser les commandes npm. 

Créer un nouveau dossier afin d’importer le repository du projet.  

Ouvrer un terminal à partir de cet emplacement. 

3.2 Installation des dépendances  

Dans un terminal, déplacé-vous à la racine de votre projet si ce n’est pas encore fait, et lancer les commandes suivantes afin d’installer les dépendances du projet : 

Npm install 

Lancer le serveur Node : 

Npm start 

3.3 Mise en place de la base de données 

Ouvrir votre gestionnaire de base de données et lancer le script : 
ChatroomDBCode_withoutnotnull.sql 

Ce script créera une base de données que l’application utilisera pour gérer les messages et les utilisateurs. 

3.4 Utilisation avec l’interface 

Entrer un nom pour le message. Ce sera votre pseudonyme. 

Entrer un message dans l’input. 

Appuyer sur envoyer.  

Votre message est maintenant envoyé. Vous devriez le voir apparaître dans le bas de la page. 
