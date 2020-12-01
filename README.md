# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> On loading this app, the db will remove all its entries and re-seed the db.  The view counts for each shoe will reset to 0 after a new load.
>On a new load the app will select a shoe at random from the db to be picked as the display shoe.  The product carousels will load products based on the random shoe selected
>This app is not insync with the details section (Tim's section), so you will not see the randomly picked shoe in that section.
>Also the random shoe selected on load will not increment it's view count, so all views are 0 on load
>On clicking a shoe they will all perform the same function (as defined in the app comonent), which is turning that shoe as the main display shoe, this will increment that shoe's view count and update the carousels appropriately.
>The related shoe carousel will select the shoes with the same design as the current display shoe, but its different colorways, then order those shoes by views
>If there is only one colorway of the display shoe then there will be no shoes in the related items carousel
>The seeding data comes from Tim's data scrapping algorithm, with some modifications to add item views and scrape an additional image

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

