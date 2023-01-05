# Speech To Text Chrome-Extension
#### Speech To Text(STT) is an extension that allows you to write spoken text to any text field with just a right-click. Simply select the 'Write' option from the right-click context menu and start speaking, and our extension will do the rest. This is a great tool for those who may have difficulty typing. Give it a try and see how it can help you get things done faster!

## Installation
### To install, follow these steps:

- Open Chrome and go to the extensions management page (chrome://extensions/).
- Enable developer mode by clicking the toggle switch in the top right corner of the page.
- Click the "Load unpacked" button and select the directory where you downloaded the extension.
- Click the "Add extension" button to install the extension.

## Usage
To use this, simply right-click on any text field and select the 'Write' option from the context menu.<br>The extension will start listening for spoken text, and any text you speak will be written to the text field.
#### **(optional) language change**:
In *write-spoken-text.js* change `recognition.lang = "en-US";` to any other language format.

## Compatibility
This extension is compatible with any browser that supports the WebkitSpeechRecognition API, which includes most modern browsers.<br>You can check the compatibility of theWebkitSpeechRecognition API by visiting this page:

https://caniuse.com/#search=webkit%20speech%20recognition

***This code uses MV2. This version will soon be deprecated by 2024.**

## Disclaimer
Please note that STT is provided "as is" and without warranty of any kind.<br>Use of the extension is at your own risk, and the developers are not responsible for any damages or loss of data that may occur.

## Credits
Based on the **WebkitSpeechRecognition Api**.

*This code is released under the MIT License. Feel free to use it on/for anything.*
