![alt text](https://res.cloudinary.com/duo4xxmj8/image/upload/v1591990304/Site360%20Static%20Images/navbarLogo_rspfdq.png)

## Mylisting360

MyListing360 is a virtual tour generator created for Real Estate Agents needing a creative way to represent homes in an immersive way in order to provide a virutal walk through remotely to prospective buyers. After this applicaiton is fully installed a Real Estate agent is able to create a user account where they can then build virtual tours of their listings with 360 degree images taken via a Ricoh Thata V or any other 360 camera. After a tour is fully built with Images and appropriate room descriptions a complete tour can then be shared via a URL, or on Socail platforms like Facebook and Linkedin.

**Getting Started**

1. In your computer terminal create, name, and then open a new folder for your project. Then use the follwing command to clone the Repo to your newly created folder. `git clone git@github.com:tstrotherIV/Site360.git`

2. After everything has been installed, open the root of the new project Repo folder `site360`

3. Before you can begin workign with the Repo you will need to create a Database folder, a JSON file, and then add some starting content to a JSON file. The starter data is stored on a Google Doc for getting started quickly. Below are the steps to complete step 3.
   • In the site360 Root Directory `mkdir api` then `cd api`

   • Create the JSON database file via the following terminal command `touch site360.json`

   • After you have created the folder and the JSON file open the site360.json file in your code editor and copy the data from the google drive doc into the file: https://docs.google.com/document/d/1LBcrpU9r_wHGfENLMlDCNz2CPATvSSmZWoCiuljkBOg/edit?usp=sharing

4. Now everything you need should be installed and your ready to get things going! In the site360 ROOT directory, start the App by running `npm start` in your terminal.

5. Start the JSON database server with the following command in your terminal: `json-server -p 5002 -w site360.json`

## Thats it! You should now be up and runnning! Happy creating and exploring in Virtual Reality!

### What can you do with this Application?

• Create a new User Account

• Log into an existing Account (contains your specific user Virtual Tours)

• Create a New Virtual Tour in the User Dashboard

• View/ Edit/ Delete each Virtual Tour via the User Dashboard

• When tours are Deleted from the User Dashboard they move to the User Trash can to await full Deletion.

• Tours in the user Trash Can can either be restored back to the User Dashboard or Permanently Deleted from the Database.

• Virtual Tours can also be "shared" to Facebook and LinkedIn directly from the Users Dashboard.

• Vitual Tours can be Navigated by changing rooms via the clickable buttons with the Room Names printed in them. When a button is clicked the image in the viewer changes to the appropriate room.

• A user can Logout (Have a great day!)

## Technologies Implmented in MyListing360

1. React framework via `Create React App.`

2. A-FRAME for the Virtual Reality display element.

3. Cloudinary for Image hosting

4. Google Analytics for tracking User Interactions
