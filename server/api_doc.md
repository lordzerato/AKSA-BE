# Books Manager App
This App is an application where you can manage Books and their Author. This app has pros : 
* User Friendly
* Easy to Use
* JSON formatted response

&nbsp;

## List of available endpoints
- `GET /api/v1/books/:Show/:Page/:SortBy/:OrderBy`
- `POST /api/v1/books/search?keyword=`
- `GET /api/v1/authors/:authorId/books`
- `GET /api/v1/authors/search?keyword=`

## RESTful endpoints
### GET /api/v1/books/:Show/:Page/:SortBy/:OrderBy

> Get response for all books with the params

_Request Header_
```
{
not needed
}
```

_Request Params_
```json
{
  "Show": "<total books that will show in the page>",
  "Page": "<total page are available>",
  "SortBy": "<sorting books by their field>",
  "OrderBy": "<ordering book by ASC or DESC>"
}
```

_Response (200)_
```json
{
  "Books" : 
    [
      {
        "Id" : "<id book>",
        "Title" : "<title book>",
        "Authors" : "<Author>",
        "ReleaseYear" : "<release year of book>",
        "Description" : "<description of book>"
      },
      {
        "Id" : "<id book>",
        "Title" : "<title book>",
        "Authors" : "<Author>",
        "ReleaseYear" : "<release year of book>",
        "Description" : "<description of book>"
      }
    ],
  "Total" : "<total of current book inside a library>",
  "Message ": "Success"
}
```

_Response (400 - Bad Request)_
```json
{
  "Message": "Bad request"
}
```

_Response (404 - Not Found)_
```json
{
  "Message": "Not found"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "Message": "Internal server error"
}
```
---
### GET /api/v1/books/search?keyword=

> Get book which the keyword inputed

_Request Header_
```
{
not needed
}
```

_Request Query_
```json
{
  "keyword" : "<keyword for search>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
   "Books": {
      "Id": "<id book>",
      "Title": "<title book>",
      "Authors": "<Author>",
      "ReleaseYear": "<release year of book>",
      "Description": "<description of book>"
    },
   "Total" : "<total of current book inside a library>"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal server error"
}
```
---
### GET  /api/v1/authors/:authorId/books

> Get all products

_Request Header_
```
{
not needed
}
```

_Request Params_
```json
{
  "authorId" : "<the ID of our favorite author>",
  "Show" : "<total books that will show in the page>",
  "Page" : "<total page are available>",
  "SortBy" : "<sorting books by their field>",
  "OrderBy" : "<ordering book by ASC or DESC>",
  "SearchBy" : "<searching keyword>"
}
```

_Response (200)_
```json
{
   "Authors": {
      "Id": "<id author>",
      "Name": "<name author>",
      "Age": "<age of author>",
      "Books": "<Books>",
      "Description": "<description of author>"
    },
   "Total" : "<total of current author inside a library>"
}
```

_Response (400 - Bad Request)_
```json
{
  "Message": "Bad request"
}
```

_Response (404 - Not Found)_
```json
{
  "Message": "Not found"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal server error"
}
```
---
### GET  /api/v1/authors/search?keyword=

> Get book which the keyword inputed

_Request Header_
```
{
not needed
}
```

_Request Query_
```json
{
  "keyword" : "<keyword for search>"
}
```

_Request Body_
```
not needed
```

_Response (200)_
```json
{
   "Authors": {
      "Id": "<id author>",
      "Name": "<name author>",
      "Age": "<age of author>",
      "Books": "<Books>",
      "Description": "<description of author>"
    },
   "Total" : "<total of current author inside a library>"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal server error"
}
```
---