#!/bin/bash
# Script de déploiement du portfolio sur serveur OVH

echo "🚀 Déploiement du Portfolio"
echo "============================"

# 1. Arrêter l'ancien conteneur s'il existe
echo "📦 Arrêt de l'ancien conteneur..."
docker-compose down 2>/dev/null || true

# 2. Charger la nouvelle image Docker
if [ -f "portfolio-docker-image.tar.gz" ]; then
    echo "📥 Chargement de l'image Docker..."
    gunzip -c portfolio-docker-image.tar.gz | docker load
else
    echo "⚠️  Fichier image non trouvé, construction depuis les sources..."
    docker-compose build --no-cache
fi

# 3. Démarrer le conteneur
echo "🔄 Démarrage du conteneur..."
docker-compose up -d

# 4. Vérifier le statut
echo ""
echo "✅ Vérification du déploiement..."
sleep 3
docker-compose ps
docker-compose logs --tail=20

echo ""
echo "🎉 Déploiement terminé !"
echo "📍 Votre portfolio est accessible sur le port 3000"
echo ""
echo "Commandes utiles:"
echo "  - Voir les logs: docker-compose logs -f"
echo "  - Redémarrer: docker-compose restart"
echo "  - Arrêter: docker-compose down"
