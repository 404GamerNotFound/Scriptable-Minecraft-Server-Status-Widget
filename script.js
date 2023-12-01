// Server address for the Minecraft server
const serverAddress = "ENTER_SERVER_IP";

// API URL for checking Minecraft server status
const apiURL = `https://api.mcsrvstat.us/2/${serverAddress}`;

// Creating the widget
const widget = await createWidget();
if (!config.runsInWidget) {
    await widget.presentSmall();
}
Script.setWidget(widget);
Script.complete();

// Function to create the widget layout
async function createWidget() {
    const data = await fetchServerData();
    const w = new ListWidget();

    w.backgroundColor = new Color("#333333");
    w.addSpacer();

    // Server Name
    if (data.motd && data.motd.clean.length > 0) {
        const serverName = data.motd.clean.join(", ");
        const nameText = w.addText(serverName);
        nameText.textColor = Color.blue();
        nameText.font = Font.boldSystemFont(16);
    }

    w.addSpacer(3);

    // Server Description (MOTD)
    if (data.motd && data.motd.clean.length > 0) {
        const serverDescription = data.motd.clean.join(", ");
        const descriptionText = w.addText(serverDescription);
        descriptionText.textColor = Color.gray();
        descriptionText.font = Font.systemFont(10);
    }

    w.addSpacer(5);

    // Server Status
    const statusText = w.addText(data.online ? "Server Online" : "Server Offline");
    statusText.textColor = data.online ? Color.green() : Color.red();
    statusText.font = Font.mediumSystemFont(14);

    // Additional information for online servers
    if (data.online) {
        w.addSpacer(5);

        // Ping
        const pingText = w.addText(`Ping: ${data.ping}ms`);
        pingText.textColor = Color.white();
        pingText.font = Font.mediumSystemFont(12);

        // Slots
        const slotsText = w.addText(`Slots: ${data.players.online}/${data.players.max}`);
        slotsText.textColor = Color.yellow();
        slotsText.font = Font.mediumSystemFont(12);

        // Additional Server Info
        if (data.version) {
            const versionText = w.addText(`Version: ${data.version}`);
            versionText.textColor = Color.gray();
            versionText.font = Font.mediumSystemFont(12);
        }
    }

    w.addSpacer();
    return w;
}

// Function to fetch server data
async function fetchServerData() {
    const start = new Date().getTime();
    const response = await new Request(apiURL).loadJSON();
    const end = new Date().getTime();
    // Calculating the approximate ping time (response time)
    const ping = end - start;
    return {
        online: response.online,
        ping: ping,
        motd: response.motd || {},
        players: response.players || { online: 0, max: 0 },
        version: response.version || "N/A"
    };
}

