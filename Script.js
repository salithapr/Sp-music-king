// script.js

// Function to download the song
function downloadSong(songFile) {
    const link = document.createElement('a'); // Create a new link element
    link.href = songFile; // Set the download file path
    link.download = songFile; // Specify the file name for download
    link.click(); // Trigger the download
}