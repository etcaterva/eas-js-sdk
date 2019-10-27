This npm package is published here: [echaloasuerte-js-sdk](https://www.npmjs.com/package/echaloasuerte-js-sdk)

## To publish a new version
We need to release a new version of the SDK everytime something changes in the backend API (i.e when something is changed in [the the swagger file](https://github.com/etcaterva/eas-backend/blob/5728459471f19f6285ab310c741df5371e2fc7dd/swagger.yaml#L4)). 

To publish a new version of the SDK, follow the steps above:
1. Generate the SDK using the latest version of the swagger file
```
// Clone the repo
git clone git@github.com:etcaterva/eas-js-sdk.git

// Generate the sdk
cd eas-js-sdk
make generate-sdk
```

2. Push the sdk upstream
```
git add -A
git commit -m "Update SDK"
git push origin master
```
3. Release the new version

    1) Go to the [releases section of this repo](https://github.com/etcaterva/eas-js-sdk/releases)
    2) Click on Draft a new release
    3) Fill the tag with the appropriate version
    4) Publish the release! (and wait for the pipeline to finish)

## To install the new version in the client
From the client do:
```
npm i echaloasuerte-js-sdk@latest --save-dev
```
