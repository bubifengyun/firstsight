// Copyright (c) 2017 Yanan Zhao. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

function rightClickMenuOnClick(info, tab) {
    // this log will be printed in the extension's console, not the global
    // (outer) one of chrome
    text = info.selectionText
    console.log("selected text: " + JSON.stringify(text));
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs);
        chrome.tabs.sendMessage(tabs[0].id, {type: "openModal", text: text});
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // TODO: Every time the extension get clicked, the menu will be created
    // one more time. So I remove all of them before create.
    // Try to fix this elegantly.
    chrome.contextMenus.removeAll(() => {
        console.log("remove all context menus of FirstSight");
    });

    var menu = chrome.contextMenus.create({
        "title": "FirstSight right-click menu",
        "contexts": ["selection"],  // text selection
        "onclick": rightClickMenuOnClick}
        );
});
