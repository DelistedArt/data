# CONTRIBUTING

### Adding a project

You may add a project to this repository by opening a pull request. In your pull request, you should add a new JSON file to `src/` directory.

The schema for the file contents can be found in `tests/schema.json`.

* `contractAddresss` - the 0x address of the contract
* `chainId` - the chain id the contract is deployed on (see https://chainlist.org/)
* `platforms[].name` - the name of the marketplace it is (de)listed on (`opensea`, `rarible`)
* `platforms[].status` - the status of the listing, is it `listed` or `delisted`
* `platforms[].dateAdded` - the date (`YYYY-MM-DD`) it was added to the marketplace
* `platforms[].dateRemoved` - the date (`YYYY-MM-DD`) it was delisted to the marketplace
* `platforms[].delistedReason` - the reason the marketplace delisted the project
* `links.twitter` - a link to the projects twitter account
* `links.discord` - a link to the projects discord server
* `links.website` - a link to the projects website

Example:

```json
{
    "contractAddress": "0xcb88735a1eae17ff2a2abaec1ba03d877f4bc055",
    "chainId": 1,
    "platforms": [{
        "name": "opensea",
        "status": "delisted",
        "dateAdded": "2021-12-28",
        "dateRemoved": "2021-12-29",
        "delistedReason": "Some reason"
    }],
    "links": {
        "twitter": "phaycbot",
        "discord": "v9mWdS3H",
        "website": "https://phaycs.com/"
    }
}
```