# 🚀 Guide de déploiement - Portfolio

## 📦 Fichiers à transférer sur le serveur

Vous avez créé les fichiers suivants dans `c:\Users\bab20\Documents\GitHub\portfolio\portfolio\` :

1. **portfolio-docker-image.tar.gz** (26 MB) - Image Docker complète
2. **portfolio-deploy-package.tar.gz** (1.1 KB) - Fichiers de configuration
3. **deploy-to-server.sh** - Script de déploiement automatique

## 🖥️ Déploiement sur votre serveur OVH

### Prérequis sur le serveur

Votre serveur doit avoir :
- Docker installé
- Docker Compose installé
- Port 80 ou 443 disponible
- Accès SSH

### Méthode 1 : Déploiement avec l'image Docker (Recommandé)

#### Étape 1 : Transférer les fichiers

Depuis votre PC Windows, ouvrez PowerShell et exécutez :

```powershell
# Remplacez USER et SERVER_IP par vos informations
$SERVER_USER = "votre-utilisateur"
$SERVER_IP = "votre-serveur.ovh.net"

# Transférer les fichiers
scp portfolio-docker-image.tar.gz ${SERVER_USER}@${SERVER_IP}:~/
scp portfolio-deploy-package.tar.gz ${SERVER_USER}@${SERVER_IP}:~/
scp deploy-to-server.sh ${SERVER_USER}@${SERVER_IP}:~/
```

#### Étape 2 : Se connecter au serveur

```powershell
ssh ${SERVER_USER}@${SERVER_IP}
```

#### Étape 3 : Décompresser et déployer

```bash
# Créer un dossier pour le portfolio
mkdir -p ~/portfolio && cd ~/portfolio

# Extraire les fichiers de configuration
tar -xzf ../portfolio-deploy-package.tar.gz

# Déplacer l'image Docker
mv ../portfolio-docker-image.tar.gz .

# Rendre le script exécutable
chmod +x ../deploy-to-server.sh

# Lancer le déploiement
../deploy-to-server.sh
```

### Méthode 2 : Build directement sur le serveur

#### Étape 1 : Cloner ou transférer le code source

```bash
# Option A : Via Git (si votre repo est sur GitHub)
git clone https://github.com/misterbou/portfolio.git
cd portfolio

# Option B : Transférer tous les fichiers du projet
# Depuis votre PC :
# scp -r c:\Users\bab20\Documents\GitHub\portfolio\portfolio ${SERVER_USER}@${SERVER_IP}:~/
```

#### Étape 2 : Builder et lancer

```bash
cd ~/portfolio
docker-compose up -d --build
```

## 🌐 Configuration du nom de domaine

### Option 1 : Utiliser Nginx comme reverse proxy (Recommandé)

#### 1. Installer Nginx sur le serveur

```bash
sudo apt update
sudo apt install nginx -y
```

#### 2. Créer la configuration Nginx

```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Coller cette configuration :

```nginx
server {
    listen 80;
    server_name boudigital.portfolio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

#### 3. Activer la configuration

```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 4. Configurer le DNS

Dans votre panneau de contrôle OVH :

1. Allez dans **Zone DNS**
2. Ajoutez un enregistrement **A** :
   - Sous-domaine : `boudigital.portfolio`
   - Type : `A`
   - Cible : `IP_DE_VOTRE_SERVEUR`
   - TTL : `3600`

#### 5. Installer SSL (HTTPS) avec Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d boudigital.portfolio.com
```

### Option 2 : Exposer directement le port Docker

Modifier `docker-compose.yml` pour utiliser le port 80 :

```yaml
ports:
  - "80:80"
```

Puis redémarrer :

```bash
docker-compose down
docker-compose up -d
```

## 🔍 Vérification

Après le déploiement :

1. **Tester localement sur le serveur** :
   ```bash
   curl http://localhost:3000
   ```

2. **Tester depuis Internet** :
   ```bash
   curl http://boudigital.portfolio.com
   ```

3. **Voir les logs** :
   ```bash
   docker-compose logs -f
   ```

## 🛠️ Commandes utiles

```bash
# Voir l'état des conteneurs
docker-compose ps

# Redémarrer
docker-compose restart

# Arrêter
docker-compose down

# Mettre à jour
docker-compose pull && docker-compose up -d

# Voir les logs en temps réel
docker-compose logs -f

# Nettoyer les anciennes images
docker system prune -a
```

## 📊 Résumé des ports

- **Port 3000** : Application Docker (localhost uniquement)
- **Port 80** : Nginx (HTTP public)
- **Port 443** : Nginx (HTTPS public après SSL)

## ✅ Checklist de déploiement

- [ ] Docker et Docker Compose installés sur le serveur
- [ ] Fichiers transférés sur le serveur
- [ ] Image Docker chargée ou projet buildé
- [ ] Conteneur démarré avec `docker-compose up -d`
- [ ] Nginx configuré comme reverse proxy
- [ ] DNS configuré (enregistrement A)
- [ ] SSL configuré avec Let's Encrypt
- [ ] Test depuis Internet réussi

## 🆘 Dépannage

**Le conteneur ne démarre pas** :
```bash
docker-compose logs
```

**Port déjà utilisé** :
```bash
sudo lsof -i :3000
# ou
sudo netstat -tulpn | grep 3000
```

**Nginx ne fonctionne pas** :
```bash
sudo nginx -t
sudo systemctl status nginx
sudo journalctl -u nginx -n 50
```
