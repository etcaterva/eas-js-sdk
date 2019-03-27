This npm package is published here: [echaloasuerte-js-sdk](https://www.npmjs.com/package/echaloasuerte-js-sdk)

## To publish a new version
Ideally, everytime there are changes in the API [the version in the swagger file](https://github.com/etcaterva/eas-backend/blob/5728459471f19f6285ab310c741df5371e2fc7dd/swagger.yaml#L4) should be bumped up. 

Since we don't have that mechanism now, we need to follow the next steps:

1. Clone the repo
2. Copy the [swagger.yml from master](https://github.com/etcaterva/eas-backend/blob/master/swagger.yaml) to the root of the repo
3. Run the following commands
```
make generate-sdk-local

cd sdk
npm login
npm publish

git add --all
git commit -m "Update SDK"
git push origin master
```

## To install the new version in the client
From the client do:
```
npm i echaloasuerte-js-sdk@latest --save-dev
```