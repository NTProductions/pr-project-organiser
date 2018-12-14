// ExtendScript QuickTip - Premiere Project Organiser

organiseProject();

function organiseProject() {
    var project = app.project;
    var projectItem = project.rootItem;
    
    var imageFolder = projectItem.createBin("Images");
    var images = [];
    var videoFolder = projectItem.createBin("Video");
    var videos = [];
    var audioFolder = projectItem.createBin("Audio");
    var audio = [];
    
    var thisName;
    for(var i = 0; i < projectItem.children.numItems; i++) {
        thisName = projectItem.children[i].name;
        
        // images
        if(thisName.substring(thisName.length - 3, thisName.length).toLowerCase() == "jpg" || thisName.substring(thisName.length - 3, thisName.length).toLowerCase() == "jpeg" || thisName.substring(thisName.length - 3, thisName.length).toLowerCase() == "png") {
        images.push(projectItem.children[i]);
        }
        
        // video
        if(thisName.substring(thisName.length - 3, thisName.length).toLowerCase() == "mp4" || thisName.substring(thisName.length - 3, thisName.length).toLowerCase() == "mov" || thisName.substring(thisName.length - 3, thisName.length).toLowerCase() == "avi") {
        videos.push(projectItem.children[i]);
        }
    
        // audio
        if(thisName.substring(thisName.length - 3, thisName.length).toLowerCase() == "mp3" || thisName.substring(thisName.length - 3, thisName.length).toLowerCase() == "wav") {
        audio.push(projectItem.children[i]);
        }
    
        }
    
    moveToFolder(images, imageFolder);
    moveToFolder(videos, videoFolder);
    moveToFolder(audio, audioFolder);
    }

function moveToFolder(items, folder) {
    for(var i = 0; i < items.length; i++) {
        items[i].moveBin(folder);
        }
    }