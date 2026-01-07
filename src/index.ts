import { App, GenericMessageEvent } from "@slack/bolt";
import { getRandomTagline } from "./taglines";

// Initialize Bolt app with Socket Mode
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

// Feature 1: Elbowdrop
// Triggered when any message contains "elbowdrop"
app.message(/elbowdrop/i, async ({ message, say }) => {
  const msg = message as GenericMessageEvent;
  if (!msg.text) return;

  const elbowdropIndex = msg.text.toLowerCase().indexOf("elbowdrop");
  const victim = msg.text.substring(elbowdropIndex + 9).trim();

  if (victim) {
    await say(`:muscle: _elbowdrops ${victim}_`);
  } else {
    await say(
      "Macho Man can't elbowdrop that which is not there, ooooh yeeeeaaah!"
    );
  }
});

// Feature 2: Thank you response
// Triggered when mentioned with "thank" in the message
app.message(/machobot.*thank|thank.*machobot/i, async ({ message, say }) => {
  const msg = message as GenericMessageEvent;
  if (!msg.user) return;

  await say(`You're welcome, <@${msg.user}>!`);
});

// Feature 3: Random catchphrase on app mention
// Triggered when the bot is @mentioned
app.event("app_mention", async ({ event, say }) => {
  const text = event.text?.toLowerCase() || "";

  // Check if it's a thank you message
  if (text.includes("thank")) {
    await say(`You're welcome, <@${event.user}>!`);
  } else {
    await say(getRandomTagline());
  }
});

// Start the app
(async () => {
  await app.start();
  console.log("⚡️ MachoBot is running! Ohhhhh yeahhhh!");
})();
