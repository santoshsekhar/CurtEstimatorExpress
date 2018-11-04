# Cost Estimator Project Plan

## Project Information
This will be a cost estimating app that will be used by the client to go and meet clients and use previous projects as a point of reference to help predict the cost of other projects that they will be working on.  They will be able to make an estimate, view all of the estimates, and use a map to look at the jobs that are nearby on the map.

## Client Contact
Curt Carpenter
curt.carpenter0@gmail.com
C&G Coatings 
cgcoatings@kcnet.com


## Dev Team
Matt
Santosh
Girish
Yashwanth

## Project Links
Repo Link: <https://github.com/mwoolery/CostEstimator>

## User Stories

### MVP Phase 1 :

| ID | User Story | Client Accepted | Comments |
|--|--|--|--|
| 1 | As a user, I want to see a public page with contact information for the company and link to their Facebook page and/or website. | | |
| 2 | As an administrator, I want to log in (so only authorized users can create estimates). | | |


### MVP Phase 2 :


| ID | User Story | Client Accepted | Comments |
|--|--|--|--|
| 1| As an administrator, when creating a new estimate, I want to enter:  <ul><li>unique job name string</li><li>location string</li><li>int number of square feet (default = , min = 0, mas = )</li><li>list of materials (product string, int unit cost, int coverage per sq ft)</li><li>int number of days (default = )</li><li>int hours worked per day (per worker)</li><li>int labor dollars per hour</li><li>int number of hotel rooms</li><li>int number of hotel nights</li><li>int hotel dollars per night</li><li>int food dollars per day (per worker)</li><li>int number of vehicles</li><li>int number of miles per vehicle</li><li>float dollars per mile</li><li>list of miscellaneous costs (string desc, int dollars)</li><li>float multiplier</li></ul> | | |
| 2 |As an administrator, from the opening page, I want an easy way to create a new estimate, either by starting with the default values or by copying from an existing estimate. (We could put a + at the top to create with default values and a + button on each estimate card to copy from that estimate.) | | |
| 3 |As an administrator, I want to see an opening page showing cards with recent estimates (name, location, year, month), with the most recent estimate at the top. | | |

### MVP Phase 3 : 


| ID | User Story | Client Accepted | Comments |
|--|--|--|--|
| 1| As an administrator, when copying from an existing estimate, I want to be redirected to the create estimate page with all fields transferred over exactly, except the unique job name, which should be the same, except with a (1) after it to make it unique. | | |
| 2 |Optional: As an administrator, I want my work saved after every modification (please don't make me click save - I might forget and my estimate would be lost).| | |
| 3 | As an administrator, while creating a new estimate, I want to see the job cost in dollars and $/sqft while I change the entries. (Could we put this in a footer bar so as numbers change, the costs change as the user changes numbers - e.g. watch price change as sqft increases)| | |



