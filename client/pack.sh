echo '------------start packaging------------'

npm run build

echo '------------build end------------'

rm ./client/deploy.tar.gz

echo '------------clear end------------'

tar -cvzf ./client/deploy.tar.gz ./dist

echo '------------end packaging------------'