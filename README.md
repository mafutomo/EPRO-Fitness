# E/PRO

### This fitness application is primarily designed for the scheduling of workout and nutritional regimen in harmony to user-specific hormonal cycle.

![Example](readme_files/log-in.png)

Motivation
The motivation behind this project came from a need within the fitness community to optimize workout and nutritional routines in accordance to estrogen and progesterone levels.  By automizing hormonal, exercise, and dietary tracking, this app not only helps women achieve peak physical performance but also saves time to pursue other professional or recreational endeavors.  Additionally, the app is both mobile and desktop friendly so that users may access their schedule while stationary or in-transit.  Finally, metadata representing the user base may aid pharmaceutical, marketing, and distributive operations for female centered fitness organizations.

### Getting Started

Prerequisites: NodeJS

First, navigate to the preferred local directory that to host the demo site.

Next, access the demo site by cloning the Github repository:

```bash
$ git clone https://github.com/mafutomo/Q3_Project_Galvanize.git
```

Navigate inside the directory 'Q3_Project_Galvanize' and run the following commands:
```bash
$ yarn install
$ yarn start
```

A local browser should automatically open the site:

http://localhost:3000/

Change the site on the address bar to:

http://localhost:3000/log-in

![Example](readme_files/lead-in.png)

### Navigating the site

The lead-in page summarizes the app functionality and brings users to a log-in and registration module.  New clients will be brought to a registration page that collects their name, email, password, first day of last period, cycle length, age, and birth control method.  Upon clicking submit, new users will be brought to a personal page that details a suggested workout and nutritional regimen based on estrogen and progesterone levels.  The estrogen and progesterone levels are calculated from medical surveys on the contraceptive's specific effects on hormonal levels.  Registered users will always have access to the workout/nutritional regimen page contingent upon logging in with the correct email and password.  The top navigation bar houses both the E/Pro title and a triple bar that triggers a left-side drawer.  This left-side drawer leads both to the user's personal page and a userbase page.  The userbase page provides metadata on the entire userbase which details the number of users by age, contraceptive methods by number of users, and contraceptive methods by age and number of users.

### App Development

### Contributions
