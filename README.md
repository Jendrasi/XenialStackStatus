# I DID NOT HAVE THE CHANCE TO GET THE CODE FOR THE WORKING VERSION SINCE GETTING LAID OFF FROM THIS POSITION
# I'D LIKE TO REWRITE IT BUT UNTIL THEN THESE ARE THE ONLY REMNANTS

# XenialStackStatus
Web utility for checking the current version and health status' of Xenial dev, qa, and production environments. This is unlicensed independently written software. Code is only public for employer reference and private usage. Not to be duplicated, repackaged, or sold.

### Usage
This utility is not hosted online. If you'd like to use it, you must download it, run the backend on your local machine, and open localhost:3000 in a browser.

### Setup
1. TBA
2. TBA
3. TBA

### Configuration
You can modify the behavior of the utility by changing the values within ./config.json and restarting the backend server.

*heartbeat*: Number to represent the interval by which the utility checks for component updates, in minutes. <br/>
*retry*: Amount of times a failed request will be retried. <br/>
*port*: Port which the server runs on. <br/>
*stacks*: The string names of all environments/stacks you wish to track, as recognized by the **env** arg at Xenial's [Simple Service Registry](https://ssr.xenial.com/?env=qa) <br/>
*componentTree*: Lists all components you wish to track in a json list, sorted by "super components". If there are components which you know exist in an environment, which you are not seeing versions for, you can add or reorganize them here. It is critical that **key** match the component's **key** value in SSR.

### How it Works
TBA
