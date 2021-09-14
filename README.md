# Companies House API (chapi)

An Node.js library for the [Companies House BETA API](https://developer-specs.company-information.service.gov.uk/companies-house-public-data-api/reference)

A work-in-progress ...

## Purpose

I use this library to investigate relationships between Companies and Officers as part of the due diligence process.
The aim is - starting with a Company or Office - to search recursively and build a network, using FOAF or a similar graph.

## API Key

You will need to create an account on companies house and get an API Key

## How to use this repo

```
git clone https://github.com/dcolley/chapi
cd chapi
# edit test/config.json to meet your needs
```

Run some tests:
```
node test/test02-company.get.js
```

# TODO

- work out how to represent the company::officer relationship in a pivot style

# Other libraries

- https://github.com/justin-nodeboy/companies-house-api
