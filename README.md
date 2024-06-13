
# Usage 

docker-compose up 

- UI will be on http://localhost:8089
- API will be on http://localhost:3003/charge-stations
- Mongo is reachable using : mongodb://root:hello@localhost:27020/
( will be provisionned with data example using mongo init script )


# Todo list

- OK Reactive UI for CRUD actions (bug: double submit & bad shortcut on Angular side regarding mat-table)
- OK Validation of inputs UI & backend
- OK Toggle charge on
- OK Create station
- PENDING Business rule : at most 2 charges going on
- OK Plug backend on frontend & abstraction for endpoints and config
- OK Docker Angular
- OK Docker Backend
- OK Docker Mongo with constraint on model/name/brand.
- KO Visual feedback for frontend actions (create, delete, start/stop)
- KO Unit tests on backend
- KO Make isomockup or at least, pretty (bare material design)
- KO Doc
- KO Lint 
- KO Variables for SASS.
- KO Frontend: 
  Translations. 
  Page refresh for the charging state
- KO Nginx to serve API.
 (cors hack in place)

{
    "name" : "Chargepoint 1, xx Mount Double Port",
    "brand" : "xx",
    "model" : "CT4021",
    "inUse" : false,
    "power" : NumberInt(5)
}