const placeholder = "https://pintech.com/core/wp-content/uploads/2015/11/placeholder-300x300.jpg";
const previewImg = document.getElementById("previewImg");

window.onload = function(){	
	previewImg.src = placeholder;
}

allowDrop = (event) => {
	event.preventDefault();
}

drop = (event) => {
	event.preventDefault();
	if (event.dataTransfer.items) {
	    for (let current of event.dataTransfer.files) {
			if (current.type.indexOf('image') > -1 ) {

				let reader = new FileReader();

			    reader.onload = function(e) {
					previewImg.src = e.target.result;
			    }

			    reader.readAsDataURL(current);
			}
			else{
				displayError("Invalid file!");
			}
	    }
	    event.dataTransfer.items.clear();
	} 
}

testImage = () => {
	let url = document.getElementById("linkText").value;

    return new Promise((resolve, reject) => {
    	let timer, 
      		img = new Image();
      	img.src = url;
      	img.onerror = () => {
        	document.getElementById("linkText").value = '';
      		displayError("Invalid link!");
      	};
      	img.onload = () => {
         	resolve("success");
         	previewImg.src = url;
      	};
    });
}

displayError = (error) => {
	let errorContainer = document.getElementById("errorContainer");
	let errorContent = document.createElement("P");
	errorContent.className = "error";
	let errorText = document.createTextNode(error);
	errorContent.appendChild(errorText);
	errorContainer.appendChild(errorContent);
	setTimeout(() => { 
	    errorContainer.removeChild(errorContainer.childNodes[1]);
	}, 5000);
}