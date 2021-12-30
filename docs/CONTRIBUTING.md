# CONTRIBUTING

### Adding a project

You may add a project to this repository by opening a pull request. In your pull request, you should add a new JSON file to `src/` directory.

The schema for the file contents can be found in `tests/schema.json`.

* `contractAddresss` - the 0x address of the contract
* `description` - a description of why it was delisted
* `chain` - the chain id the contract is deployed on (see https://chainlist.org/)
* `delistedDate` - the date the project got delisted
* `delistedFrom` - the marketplace the project was delisted on
* `projectUrl` - the URL of the project that got delisted