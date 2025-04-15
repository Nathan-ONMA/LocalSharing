# LocalSharing

**LocalSharing** est une application légère et simple d’utilisation permettant de partager des fichiers entre appareils connectés sur le même réseau local, sans avoir besoin d’Internet.

## 🚀 Fonctionnalités

- 📁 Partage de fichiers entre appareils via le réseau local
- 🌐 Interface web intuitive accessible depuis tout navigateur
- 🔐 Transferts sécurisés sans serveur externe
- ⚡ Vitesse de transfert élevée (dépend du réseau)
- 🖥️ Multi-plateforme (Windows, Linux, macOS)

## 📦 Installation

### 🔧 Prérequis

- Python 3.x
- pip (gestionnaire de paquets Python)

### 🧪 Cloner le projet

git clone https://github.com/votre-utilisateur/LocalSharing.git
cd LocalSharing

### 📥 Installer les dépendances

pip install -r requirements.txt


## ▶️ Lancer l'application

python app.py


Une fois le serveur démarré, ouvrez votre navigateur et accédez à :


http://<votre-IP-locale>:<port>


> Exemple : `http://192.168.1.15:5000`

## 📷 Capture d’écran

![screenshot](./assets/screenshot.png)

## 📁 Structure du projet


LocalSharing/
├── app.py
├── templates/
│   └── index.html
├── static/
│   └── style.css
├── uploads/
├── requirements.txt
└── README.md


## 🛠️ Technologies utilisées

- Python
- Flask (ou FastAPI, selon ton choix)
- HTML/CSS/JavaScript

## 🔒 Sécurité

Les fichiers partagés ne sont pas envoyés à des serveurs tiers. Toutes les communications se font localement entre appareils sur le même réseau.

## 🤝 Contribuer

Les contributions sont les bienvenues !  
N'hésitez pas à créer une *issue* ou à soumettre une *pull request*.

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus d’informations.


Développé avec ❤️ par [Nathan](https://github.com/nathan_85)
