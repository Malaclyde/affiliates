# Goal of this task
The ultimate goal of this task is to create a website that displays affiliate links and also tracks user clicks using Google Analytics. The website routing should be dynamically created based on the `json` objects defined in the @pages directory. The urls will have the `utm` tracking codes attached to their ends. The website should have a straightforward and responsive style (it should be nicely formatted on all types of devices). The following sections describe the mechanisms behind this website in more details.

# Routing
The website has the following types of pages:
- the main page
- the account page
- the product page

## The main page
This page displays the information about the person behind the website using information from @pages/about-me.json and also all the affiliate links from @pages/products.json. The url slug is just `/`. The page should first display: 'Meet `name`' (from @pages/about-me.json) as a heading, then the short description from @pages/about-me.json `description`. This should be followed by a subheading: 'Contact me' and a list of contact options that are defined in the @pages/about-me.json (for now there is only email, but prepare for more possibilities - the website should display only the ones that are defined in the @pages/about-me.json). This should be followed by another subheading: 'Products' and a list of all products from the @pages/product.json. Each product is displayed in a product-tile element. A product-tile element is a tile that displays the product name and a thumbnail if provided. The tile is clickable and opens the appropriate product page. The tiles are displayed in a column. 

## The product page
This page displays the information about the specific product from @pages/products.json. The url slug is `/product/<id>`, where the `id` is taken from @pages/products.json. You can assume that the ids are unique. The page should display the name of the product as a headline follwed by a description. This should be followed by a subheadline 'Click below to get it:' which is followed by the url from @pages/products.json - this is the affiliate url of the product. 

## The account page
This page displays the product tiles associated with a given account in @pages/accounts.json. The url slug is `/account/<id>` where the `id` is taken from @pages/accounts.json. You can assume that the ids are unique. The page should just display the tiles of all the products associated with a given account - from the `advertisedProducts` field. No other information about the account should be displayed. The tiles should be formatted exactly as the tiles displayed on the main page. Each product is displayed in a product-tile element. A product-tile element is a tile that displays the product name and a thumbnail if provided. The tile is clickable and opens the appropriate product page. The tiles are displayed in a column. 

## UTM tracking codes
The website is going to be accessed from multiple origins. I am going to post the website on mutliple social media platforms using different utm tracking codes. To each link, I will attach `utm_source` and `utm_medium` (although, we might use more tags - so just prepare to append all query parameters to the next route). If the website is accessed with any query parameters, the query parameters have to be passed in the routing mechanisms whenever a user clicks a clickable element on the page. The only exception: the affiliate urls of products, that is when a user clicks a url of a certain product, DO NOT append the utm tracking codes. 

### Example:
1. The user goes to `<page-url>/<account-id>?utm_source=ig&utm_medium=social&utm_capmaign=malaclydeig`
2. The user clicks on one of the product tiles displayed on the page
3. The page reroutes the user to `<page-url>/<product-id>?utm_source=ig&utm_medium=social&utm_capmaign=malaclydeig` - the utm tags are appended to the url
4. The user clicks on the affiliate url of the product
5. The website directs the user to the url of the product without appending the utm tags

## Dynamically generated routing
The routes should be generated based on the content described in the json files from @pages. @pages/accounts.json and @pages/products.json contain lists of json objects - each json object will have their own 'page' - products under `/product/<id>` and accounts under `/account/<id>`. 

# Styling
1. Use the font: font-family: 'JetBrains Mono', 'SF Mono', 'Monaco', 'Inconsolata', monospace;
2. make sure that the headings are bolded

# Additionally
1. include a readme, where you explain how to run the application (build the website / run in dev mode)
2. create a github actions pipeline that builds the website and publishes it to github-pages of this repo on every commit to the 'main' branch