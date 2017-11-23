chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log("received request: %s", request);
    switch (request.type){
        case "openModal":
            alert(request.type);
            // chrome.tabs.create({
            //     url: chrome.extension.getURL('modal.html'),
            //     active: false
            // }, function(tab) {
            //     // After the tab has been created, open a window to inject the tab
            //     chrome.windows.create({
            //         tabId: tab.id,
            //         type: 'popup',
            //         focused: true
            //             // incognito, top, left, ...
            //     });
            // });
            // $('#myModal').modal({
            //     backdrop: 'static',
            //     keyboard: false
            // });
            break;  
    }
    });
