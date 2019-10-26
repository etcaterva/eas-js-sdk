This npm package is published here: [echaloasuerte-js-sdk](https://www.npmjs.com/package/echaloasuerte-js-sdk)

## To publish a new version
We need to release a new version of the SDK everytime something changes in the backend API (i.e when something is changed in [the the swagger file](https://github.com/etcaterva/eas-backend/blob/5728459471f19f6285ab310c741df5371e2fc7dd/swagger.yaml#L4)). 

To publish a new version of the SDK, follow the steps above:
1. Clone the repo
2. Run the following commands
```
// Generate the SDK using the latest version of the swagger file
make generate-sdk

cd sdk
git add -A
git commit -m "Update SDK"
git push origin master
```
3. [Publish a release](https://github.com/etcaterva/eas-js-sdk/releases) through the Github UI.

## To install the new version in the client
From the client do:
```
npm i echaloasuerte-js-sdk@latest --save-dev
```
