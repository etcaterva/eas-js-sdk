## To publish a new version
```
make generate-sdk

cd sdk
npm login
npm version patch
npm publish

git commit -m "Update SDK"
git push origin master
```
It generates the SDK based on [master's swagger file](https://raw.githubusercontent.com/etcaterva/eas-backend/master/swagger.yaml)

Then from the client do:
```
npm i echaloasuerte-js-sdk@latest --save-dev
```