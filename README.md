# CanU - Job Board

CanU aims to provide a platform that allows users to post jobs they would like done for them. This provides other users the ability to bid on jobs that they are interested in.

![Dashboard-Picture](./assets/dashboard.png)

## Table of Contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Live Demo](#live-demo)
* [API-Server](#api-server)

## General Info

From the splash screen you will be presented a form to login, alternatively, if you have no account, you can click the create a user button which will show a registration form.

When you have logged in, you will then land on the user dashboard. On the left you can create a job by added information to Job, Description and Price fields followed by clicking on the add job button.

When you have a job created, it will appear in the pane to the right of the screen. This contains all jobs attached to your user. From here you can control your jobs by deleting them or closing them to future bids.

From the Nav under the CanU banner, you can click main. This will bring you to a screen with a list of every open job within the database. From here, you can click the details button and a modal dialog will open. It will show you the details of the job with an added field describing the details of the job. Within this modal, you have the option of entering a price you're willing to get paid for the job, as long as it is lower than the current bid price. 

## Technologies
Project is created with:

* React version: 16.13
* Redux version: 4.0.5
* JsonWebToken version: 8.5.1
* React-cookies version: 0.1.1

## Setup
To run this project, install it locally with npm:

```
$ cd Can-U
$ npm install
$ npm start
``` 

## Live Demo
Here is the live demo: https://trevorthomp.github.io/Can-U/

## API Server
API Server: https://github.com/Apprenti-401-ProjectOne/ProjectOne