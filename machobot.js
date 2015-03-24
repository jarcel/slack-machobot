var _ = require('lodash');
var Slack = require('slack-client');

//Your Slack Bot Token -- Replace this
var token = 'TOKEN-GOES-HERE';

var slack = new Slack(token, true, true);

//Random Macho Man CatchPhrases
var taglines = [
    "Best there is… past, present and future! Ohhhhh yeahhhh!",
    "Dig it!",
    "History beckons the Macho Man!",
    "Hulkamania is like a single grain of sand in the Sahara desert that is Macho Madness.",
    "I’m too hot to handle and too cold to hold!",
    "Oooooh yeeeah!",
    "Oooooh yeeeah! I want everybody to freak out! Freak out! The Macho Man is right here, and I’m gonna take it to the limit! Yeah!",
    "Snap into a Slim Jim!",
    "Ten thousand years as Intercontinental Champion, Oooooh yeeeah!",
    "The madness is runnin’ wild!",
    "The tower of power, too sweet to be sour, ohhhh yeahh!",
    "We’re in space and space is the place!",
    "Who’s in the danger zone?!",
    "You will eat my rear rockets and like it! Ohhhh yeahhh!",
    "Let me tell you now a man of my position can afford to look ridiculous at any time.",
    "I hate yer guts!",
    "You say you love me like a brother but I hate you, I hate your guts.",
    "I heard what you said about me a few days ago.",
    "You wouldn’t give her that flower would ya?",
    "Put that thing down, don’t degrade the champ at any time."
];

var makeMention = function(userId) {
    return '<@' + userId + '>';
};

var isDirect = function(userId, messageText) {
    var userTag = makeMention(userId);
    return messageText &&
           messageText.length >= userTag.length &&
           messageText.substr(0, userTag.length) === userTag;
};

var getOnlineHumansForChannel = function(channel) {
    if (!channel) return [];

    return (channel.members || [])
        .map(function(id) { return slack.users[id]; })
        .filter(function(u) { return !!u && !u.is_bot && u.presence === 'active'; });
};

slack.on('open', function () {
    var channels = Object.keys(slack.channels)
        .map(function (k) { return slack.channels[k]; })
        .filter(function (c) { return c.is_member; })
        .map(function (c) { return c.name; });

    var groups = Object.keys(slack.groups)
        .map(function (k) { return slack.groups[k]; })
        .filter(function (g) { return g.is_open && !g.is_archived; })
        .map(function (g) { return g.name; });

    console.log('Welcome to Slack. You are ' + slack.self.name + ' of ' + slack.team.name);

    if (channels.length > 0) {
        console.log('You are in: ' + channels.join(', '));
    }
    else {
        console.log('You are not in any channels.');
    }

    if (groups.length > 0) {
       console.log('As well as: ' + groups.join(', '));
    }
});

slack.on('message', function(message) {
    var channel = slack.getChannelGroupOrDMByID(message.channel);
    var user = slack.getUserByID(message.user);
    if (message.type === 'message' && _.includes(message.text, 'elbowdrop')) {
        var victim = message.text.substring(message.text.indexOf("elbowdrop") + 9);
        if (victim != ''){
            channel.send(':muscle: _elbowdrops' + victim +'_');
        } else {
            channel.send("Macho Man can't elbowdrop that which is not there, ooooh yeeeeaaah!");
        }
    };
    if (message.type === 'message' && (isDirect(slack.self.id, message.text) || _.includes(message.text, 'machobot')) && _.includes(message.text, 'thank')) {
        channel.send("You're welcome, <@" + user.name + ">!");
    } else if (message.type === 'message' && (isDirect(slack.self.id, message.text) || _.includes(message.text, 'machobot'))) {
        var machomsg = taglines[Math.floor(Math.random() * taglines.length)];
        channel.send(machomsg);
    };

});

slack.login();