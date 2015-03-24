# slack-machobot
A Node.js Macho Man themed Bot for [Slack](https://slack.com/)
![MachoBot example](https://cloud.githubusercontent.com/assets/3356278/6802902/61469eba-d20a-11e4-9f85-f0d0217730d7.jpg)


## Introduction
I figured it would be fun to have a basic Slack bot skeleton with a little bit of personality, 
so I took a joke too far and made MachoBot (with a lot of help from [this article](http://blog.somewhatabstract.com/2015/03/02/writing-a-simple-slack-bot-with-node-slack-client/) by Jeff Yates). MachoBot doesn't do a whole lot. He spits out a random
quote from an array when you mention his name, he says "You're Welcome" when you thank him, and he elbowdrops
pretty much anything you tell him to elbowdrop.

![Elbowdropping](https://cloud.githubusercontent.com/assets/3356278/6802587/341f5794-d208-11e4-8f80-fff0e6acad5d.jpg)


## Set Up
MachoBot uses the [node.js slack-client](https://github.com/slackhq/node-slack-client) and [lodash](https://lodash.com/)

The only real requirements to use MachoBot are that you have [node.js](https://nodejs.org/) set up on your system, and you've got an API key token for
your bot on Slack - [learn about Bot users here](https://api.slack.com/bot-users)

### Step One:
after you've got those things squared away, download machobot, open up your terminal and enter the following:
```
cd /your/project/directory/slack-machobot
npm install
```

### Step Two:
Open _machobot.js_ and replace the "TOKEN-GOES-HERE" placeholder with your API key token:
```
//Your Slack Bot Token -- Replace this
var token = 'TOKEN-GOES-HERE';
```
### Step Three:
Back in the terminal, run Node.js
```
node machobot.js
```
Machobot should then join whichever channel you've allowed him to join when you set up the bot on Slack, you will
see a message like this:
```
Welcome to Slack. You are machobot of YourTeamName
You are in: general
```

Enjoy the Macho Madness.



