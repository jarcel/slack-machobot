# slack-machobot
A Node.js Macho Man themed Bot for [Slack](https://slack.com/)
![MachoBot example](https://cloud.githubusercontent.com/assets/3356278/6802902/61469eba-d20a-11e4-9f85-f0d0217730d7.jpg)


## Introduction
I figured it would be fun to have a basic Slack bot skeleton with a little bit of personality,
so I took a joke too far and made MachoBot. MachoBot doesn't do a whole lot. He spits out a random
quote from an array when you mention his name, he says "You're Welcome" when you thank him, and he elbowdrops
pretty much anything you tell him to elbowdrop.

![Elbowdropping](https://cloud.githubusercontent.com/assets/3356278/6802587/341f5794-d208-11e4-8f80-fff0e6acad5d.jpg)


## Requirements
- [Node.js](https://nodejs.org/) v18 or higher
- A Slack workspace where you can install apps

## Set Up

### Step 1: Create a Slack App

1. Go to [api.slack.com/apps](https://api.slack.com/apps) and click **Create New App**
2. Choose **From scratch**, give it a name (e.g., "MachoBot"), and select your workspace

### Step 2: Configure the App

**Enable Socket Mode:**
1. Go to **Socket Mode** in the sidebar
2. Toggle **Enable Socket Mode** to On
3. Create an App-Level Token with the `connections:write` scope
4. Copy this token (starts with `xapp-`) - you'll need it later

**Add Bot Token Scopes:**
1. Go to **OAuth & Permissions** in the sidebar
2. Under **Scopes > Bot Token Scopes**, add:
   - `chat:write`
   - `app_mentions:read`

**Enable Events:**
1. Go to **Event Subscriptions** in the sidebar
2. Toggle **Enable Events** to On
3. Under **Subscribe to bot events**, add:
   - `app_mention`
   - `message.channels`
   - `message.groups`
   - `message.im`

**Install the App:**
1. Go to **Install App** in the sidebar
2. Click **Install to Workspace** and authorize
3. Copy the **Bot User OAuth Token** (starts with `xoxb-`)

### Step 3: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your tokens:
   ```
   SLACK_BOT_TOKEN=xoxb-your-bot-token
   SLACK_APP_TOKEN=xapp-your-app-token
   ```

### Step 4: Install Dependencies and Run

```bash
npm install
npm run build
npm start
```

For development with auto-reload:
```bash
npm run dev
```

You should see:
```
MachoBot is running! Ohhhhh yeahhhh!
```

### Step 5: Invite MachoBot to a Channel

In Slack, invite the bot to a channel:
```
/invite @MachoBot
```

## Usage

- **@MachoBot** - Get a random Macho Man catchphrase
- **@MachoBot thanks!** - MachoBot says "You're welcome!"
- **elbowdrop @someone** - MachoBot elbowdrops them!

Enjoy the Macho Madness.
