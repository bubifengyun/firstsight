chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log("received request: %s", request);
    switch (request.type){
        case "openModal":
            $.get(chrome.extension.getURL('modal.html'), function(data) {
                $(data).appendTo('body');
                // Or if you're using jQuery 1.8+:
                // $($.parseHTML(data)).appendTo('body');

				// // Get the modal
				var modal = document.getElementById('myModal');

				// // Get the <span> element that closes the modal
				var span = document.getElementsByClassName("close")[0];

				modal.style.display = "block";

				// // When the user clicks on <span> (x), close the modal
				span.onclick = function() {
					modal.style.display = "none";
				}

				// When the user clicks anywhere outside of the modal, close it
				// window.onclick = function(event) {
				// 	if (event.target == modal) {
				// 		modal.style.display = "none";
				// 	}
				// }

            });
            break;  
	}
    });
