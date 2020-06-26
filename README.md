## Mylisting360

MyListing360 is an easy to use Virtual Tour builder and hosting site for Real Estate Agents and Photographers. Visitors to the site are able to create a user account where they can build and host the tours via their user Dashboard. While in the Dashboard users can create a new tour or view their existing tours previously built. After a tour is fully built with Images and Descriptions a tour can then be shared on Facebook or Linkedin.

## `What Can you do? Virtual Skies the limit!`

• Create a new User Account

• Log into an existing Account (contains your specific user Virtual Tours)

• Create a New Virtual Tour in the User Dashboard

• View/ Edit/ Delete each Virtual Tour via the User Dashboard

• When tours are Deleted from the User Dashboard they move to the User Trash can to await full Deletion.

• Tours in the user Trash Can can either be restored back to the User Dashboard or Permanently Deleted from the Database.

• Virtual Tours can also be "shared" to Facebook and LinkedIn directly from the Users Dashboard.

• Vitual Tours can be Navigated by changing rooms via the clickable buttons with the Room Names printed in them. When a button is clicked the image in the viewer changes to the appropriate room.

• A user can Logout (Have a great day!)

**Cloning the Repo to have fun adding features**

1. `git clone git@github.com:tstrotherIV/Site360.git`

2. `cd` into the `site360` directory

3. You will need to Create the Database folder and add the content stored on the Google Doc.
   • In the site360 Root Directory `mkdir api` then `cd api`

   • Create the file via `touch site360.json`

   • Open the site360.json file and copy the data from the google drive doc: https://docs.google.com/document/d/1LBcrpU9r_wHGfENLMlDCNz2CPATvSSmZWoCiuljkBOg/edit?usp=sharing

4. Start the App by running `npm start` in the site360 ROOT directory.

5. Start the server with `json-server -p 5002 -w site360.json`

## Happy exploring in Virtual Reality!

## Technologies Implmented in MyListing360

1. React framework via `Create React App.`

2. A-FRAME for the Virtual Reality display element.

3. Cloudinary for Image hosting

4. Google Analytics for tracking User Interactions
