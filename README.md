![site logo](https://res.cloudinary.com/duo4xxmj8/image/upload/v1591990304/Site360%20Static%20Images/navbarLogo_rspfdq.png)

## Mylisting360

MyListing360 is a virtual tour generator created for Real Estate Agents needing a creative way to represent homes in an immersive way in order to provide a virutal walk through remotely to prospective buyers. After this applicaiton is fully installed a Real Estate agent is able to create a user account where they can then build virtual tours of their listings with 360 degree images taken via a Ricoh Thata V or any other 360 camera. After a tour is fully built with Images and appropriate room descriptions a complete tour can then be shared via a URL, or on Socail platforms like Facebook and Linkedin.

**Getting Started**

1. In your computer terminal you will create and name a new folder for your project. After it is created you will need to open that folder and then use the follwing command to clone the Repo to your newly created folder. `git clone git@github.com:tstrotherIV/Site360.git`

2. After the Repo has been cloned down you should see a new project folder named `site360`.

3. Before you can begin working with the Repo you will need to create a Database folder named `API` with a JSON file named `site360.json` inside that API folder. Make sure you do this in the root of the `site360` project. As a helper you can use the following code in your terminal to do these steps.

•In the root of the Project use your terminal to execute: `mkdir api` then `cd api`.

•Then copy/paste `touch site360.json` to create the file where the data will be stored.

•The project requires some starter data for the JSON file which is stored on a Google Doc. To add this information open the site360.json file in your code editor and copy and paste the data from the google drive doc into the `site360.json` file: https://docs.google.com/document/d/1LBcrpU9r_wHGfENLMlDCNz2CPATvSSmZWoCiuljkBOg/edit?usp=sharing

Now everything you need should be installed and your ready to get things going!

4. In the site360 ROOT directory, start the React App by running `npm start` in your terminal.

5. A JSON server is required for operating MyListing360 locally. To do this start the JSON database server with the following command in your terminal: `json-server -p 5002 -w site360.json`

## Thats it! You should now be up and runnning with the fully functioning App in your browser! Happy creating and exploring in Virtual Reality!

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

## ERD Diagram of the Data Relationships

![Project ERD](https://res.cloudinary.com/duo4xxmj8/image/upload/v1594049992/Site360%20Static%20Images/Screen_Shot_2020-07-06_at_10.38.13_AM_qlsikk.png)
