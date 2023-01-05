chrome.contextMenus.create({
  id: "write",
  title: "Write",
  contexts: ["editable"]
});

chrome.contextMenus.onClicked.addListener(function(info) {
  if (info.menuItemId == "write" && !info.pageUrl.startsWith("chrome://")) {
    // Inject a script into the current tab to listen for spoken text and write it to the selected text field
    chrome.tabs.executeScript({
      file: "write-spoken-text.js"
    });
  }else{
    console.log("scope issue");
  }
});
