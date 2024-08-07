generate-sdk:
	rm -rf sdk
	openapi-generator generate -i https://raw.githubusercontent.com/etcaterva/eas-backend/master/swagger.yaml -g typescript -o sdk -c codegen_options.json
	cp .npmrc sdk
	cd sdk && npm install && npm run test
generate-sdk-local:
	rm -rf sdk
	openapi-generator generate -i swagger.yaml -g javascript -o sdk -c codegen_options.json
	cp .npmrc sdk
	cd sdk && npm install && npm run test
