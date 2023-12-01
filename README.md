# Minecraft Server Status Widget for Scriptable

This script creates a widget for the Scriptable app on iOS, which allows you to monitor the status of a Minecraft server. It displays key information such as whether the server is online, the approximate ping, server name, message of the day (MOTD), player slots, and the server version.

## Features

- **Server Online/Offline Status**: Quickly see if your server is accessible.
- **Approximate Ping**: Displays the response time as an approximate ping value.
- **Server Name and MOTD**: Shows the server's name and message of the day.
- **Player Slots**: Indicates how many players are online and the maximum capacity of the server.
- **Server Version**: Displays the version of the Minecraft server.

## Requirements

- An iOS device with the Scriptable app installed.
- The IP address and port of your Minecraft server.

## Installation

1. **Download Scriptable**: Install the Scriptable app from the iOS App Store.
2. **Add the Script**: Open Scriptable and tap on the '+' to create a new script.
3. **Copy and Paste**: Copy the content of the provided script and paste it into the new script in Scriptable.
4. **Configure the Server Address**: Replace the `serverAddress` variable value with your server's IP address and port.
5. **Run the Widget**: Add a new Scriptable widget to your home screen and select this script.

## Usage

After setting up the widget, it will automatically fetch and display the current status of your Minecraft server. The widget updates periodically to reflect the latest server status.

## Customization

You can customize the script to change the appearance of the widget or to display additional information based on your preferences.

## Contributing

If you have suggestions for how this script can be improved, or want to report a bug, please open an issue or submit a pull request.

## License

This script is released under the MIT License. See the `LICENSE` file for more information.

## Acknowledgements

Thanks to the creators of the Scriptable app and the `mcapi.us` for providing the API used in this script.
