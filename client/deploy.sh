echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."

scp -r build/* root@harita.hacettepe.edu.tr:/var/www/harita.hacettepe.edu.tr/

echo "Done!"