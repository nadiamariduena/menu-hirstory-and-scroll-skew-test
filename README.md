#### TESTING THE MENU 2 AND THE SKEW SCROLL

#### PROBLEM HERE

- I ADDED 3 SECTIONS TO THE HOME . it works perfectly BUT
  <br>

- From the moment you click on the opportunities page (where you only have 1 section) you will see that here is a huge space , this space is related to the 3 sections i added to the HOME

- THIS HAPPENS because the scroll is wrapping the ROUTES(all the routes)

##### SOLUTION

- You either add 3 sections to each page
- or You remove the scroll from the App and it individually to each page, so you can add less or more sections depending of what you need

<br>
<br>

#### NAVIGATION ISSUES

<br>

- SINCE I am adding the navigation on top of the routes, I have to keep in mind that I will not have the possibility to tailor the navigation like I did for the old dropdown menu.

<br>

- I already need to figure it out how to create a 100vh navigation as this one has the header in 100px, the issue here are the z-index , one is at 9 and the other at 10
