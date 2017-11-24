chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    console.log("received request: %s: %s", request.type, request.text);
    switch (request.type){
        case "openModal":
        // TODO: no need to use modal.html
        // directly inject with jquery?
            $.get(chrome.extension.getURL('modal.html'), function(data) {
                $($.parseHTML(data)).appendTo('body');

				// Get the modal
				$('#myModal')[0].style.display = "block";

				// When the user clicks on <span> (x), close the modal
				$("#myModal .modal-content .close")[0].onclick = function() {
                    $('#myModal')[0].style.display = "none";
					// modal.style.display = "none";
				}

                $('#myModal .modal-content p').innerHTML = request.text;

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
