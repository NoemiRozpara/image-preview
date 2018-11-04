# image-preview

Script to preview image from URL or local file (drag&drop).  
  
## Run  
Download package and open index.html in browser.
  
## Info  
  
### Upload local file
Get dataTransfer from drop event and if file type is correct, use FileReader to convert file to DataURL and set as preview image source.  
  
### Get file from URL  
Return Promise object and create empty Image object. Try to set source from URL, on error display error information. If URL is correct, resolve and set as preview image source.
  
## Screenshots  
![Screenshot1 1](https://raw.githubusercontent.com/NoemiRozpara/image-preview/master/screenshots/1.png)  
![Screenshot1 2](https://raw.githubusercontent.com/NoemiRozpara/image-preview/master/screenshots/2.png)  
![Screenshot1 3](https://raw.githubusercontent.com/NoemiRozpara/image-preview/master/screenshots/3.png)
  
