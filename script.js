function playSong(songPath, songTitle) {
    // Display the music player
    const musicPlayer = document.getElementById('musicPlayer');
    musicPlayer.style.display = 'block';

    // Update the song title
    const nowPlaying = document.getElementById('nowPlaying');
    nowPlaying.textContent = `Now Playing: ${songTitle}`;

    // Set the audio source and play
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');

    audioSource.src = songPath; // Set the song path
    audioPlayer.load();         // Load the audio
    audioPlayer.play();         // Play the audio
}
//1st song
function downloadSongNARAMA() {
    // සින්දු ගොනුවේ සබැඳිය
    const songUrl = 'Songs/NARAMA 2022 Sinhala New Song House Style Remix - Mix By Djz Amila Clash_19-01-25_7.mp3';  // ඔබේ සින්දු ගොනුවේ සබැඳිය මෙහි දමන්න
    
    // temporary <a> link එකක් සාදන්න

const link = document.createElement('a');
    link.href = songUrl;
    link.download = 'NARAMA 2022 Sinhala New Song House Style Remix - Mix By Djz Amila Clash_19-01-25_7.mp3';  // ගොනුවේ නම
    
    // Link එක ක්ලික් කිරීමෙන් බාගත කිරීම සිදු කරයි
    link.click();
}
//1st song
function downloadSongPemPuranaya() {
    // සින්දු ගොනුවේ සබැඳිය
    const songUrl = 'songs/Pem Puranaya(පෙම් පුරාණය) - Mihiran Madusanka - Mix By Amila clash Jay(MP3_160K).mp3';  // ඔබේ සින්දු ගොනුවේ සබැඳිය මෙහි දමන්න
    
    // temporary <a> link එකක් සාදන්න

const link = document.createElement('a');
    link.href = songUrl;
    link.download = 'Pem Puranaya(පෙම් පුරාණය) - Mihiran Madusanka - Mix By Amila clash Jay(MP3_160K).mp3';  // ගොනුවේ නම
    
    // Link එක ක්ලික් කිරීමෙන් බාගත කිරීම සිදු කරයි
    link.click();
}
//2nd song
function downloadSongPerabhawee() {
    // සින්දු ගොනුවේ සබැඳිය
    const songUrl = 'songs/Perabhawee(පෙරභවේ) - Radeesh Vandebona(MP3_160K).mp3';  // ඔබේ සින්දු ගොනුවේ සබැඳිය මෙහි දමන්න
    
    // temporary <a> link එකක් සාදන්න

const link = document.createElement('a');
    link.href = songUrl;
    link.download = 'Perabhawee(පෙරභවේ) - Radeesh Vandebona(MP3_160K).mp3';  // ගොනුවේ නම
    
    // Link එක ක්ලික් කිරීමෙන් බාගත කිරීම සිදු කරයි
    link.click();
}
//3rd song
function downloadSongNumbataLiyanne() {
    // සින්දු ගොනුවේ සබැඳිය
    const songUrl = 'songs/Numbata Liyanne(නුබට ලියන්නේ) - Pasindu Jayasekara X Mahazona(MP3_160K).mp3';  // ඔබේ සින්දු ගොනුවේ සබැඳිය මෙහි දමන්න
    
    // temporary <a> link එකක් සාදන්න

const link = document.createElement('a');
    link.href = songUrl;
    link.download = 'Numbata Liyanne(නුබට ලියන්නේ) - Pasindu Jayasekara X Mahazona(MP3_160K).mp3';  // ගොනුවේ නම
    
    // Link එක ක්ලික් කිරීමෙන් බාගත කිරීම සිදු කරයි
    link.click();
}
//4th song
function downloadSongMalwaram() {
    // සින්දු ගොනුවේ සබැඳිය
    const songUrl = 'songs/Malwaram _ Raini Charuka - R_B Cover by Thirathi Amoda(MP3_160K).mp3';  // ඔබේ සින්දු ගොනුවේ සබැඳිය මෙහි දමන්න
    
    // temporary <a> link එකක් සාදන්න

const link = document.createElement('a');
    link.href = songUrl;
    link.download = 'Malwaram _ Raini Charuka - R_B Cover by Thirathi Amoda(MP3_160K).mp3';  // ගොනුවේ නම
    
    // Link එක ක්ලික් කිරීමෙන් බාගත කිරීම සිදු කරයි
    link.click();
}
//5th song
function downloadSongHerbaladare() {
    // සින්දු ගොනුවේ සබැඳිය
    const songUrl = 'songs/Herbal Adare (හර්බල් ආදරේ) - Prabath Gunasekara(MP3_160K).mp3';  // ඔබේ සින්දු ගොනුවේ සබැඳිය මෙහි දමන්න
    
    // temporary <a> link එකක් සාදන්න

const link = document.createElement('a');
    link.href = songUrl;
    link.download = 'Herbal Adare (හර්බල් ආදරේ) - Prabath Gunasekara(MP3_160K).mp3';  // ගොනුවේ නම
    
    // Link එක ක්ලික් කිරීමෙන් බාගත කිරීම සිදු කරයි
    link.click();
}
//6th song
function downloadSongHithaAssata() {
    // සින්දු ගොනුවේ සබැඳිය
    const songUrl = 'songs/Hitha Assata (හිත අස්සට) - Sashrika Semini Ft. Kelwiz.mp3';  // ඔබේ සින්දු ගොනුවේ සබැඳිය මෙහි දමන්න
    
    // temporary <a> link එකක් සාදන්න

const link = document.createElement('a');
    link.href = songUrl;
    link.download = 'Hitha Assata (හිත අස්සට) - Sashrika Semini Ft. Kelwiz.mp3';  // ගොනුවේ නම
    
    // Link එක ක්ලික් කිරීමෙන් බාගත කිරීම සිදු කරයි
    link.click();
}
//7th song
function downloadSongKuweni() {
    // සින්දු ගොනුවේ සබැඳිය
    const songUrl = 'songs/Kuweni (කුවේණි) - Ridma Weerawardena Ft. Dinupa Kodagoda.mp3';  // ඔබේ සින්දු ගොනුවේ සබැඳිය මෙහි දමන්න
    
    // temporary <a> link එකක් සාදන්න

const link = document.createElement('a');
    link.href = songUrl;
    link.download = 'Kuweni (කුවේණි) - Ridma Weerawardena Ft. Dinupa Kodagoda.mp3';  // ගොනුවේ නම
    
    // Link එක ක්ලික් කිරීමෙන් බාගත කිරීම සිදු කරයි
    link.click();
}
//8th song
function downloadSongAthinAlla() {
    // සින්දු ගොනුවේ සබැඳිය
    const songUrl = 'songs/Athin Alla Ganna Beri - Ridma Weerawardena Ft. Dinupa Kodagoda(MP3_160K).mp3';  // ඔබේ සින්දු ගොනුවේ සබැඳිය මෙහි දමන්න
    
    // temporary <a> link එකක් සාදන්න

const link = document.createElement('a');
    link.href = songUrl;
    link.download = 'Athin Alla Ganna Beri - Ridma Weerawardena Ft. Dinupa Kodagoda(MP3_160K).mp3';  // ගොනුවේ නම
    
    // Link එක ක්ලික් කිරීමෙන් බාගත කිරීම සිදු කරයි
    link.click();
}
//9th song
function downloadSongAthakinDarana() {
    // සින්දු ගොනුවේ සබැඳිය
    const songUrl = 'songs/Athakin Darana (අතකින් දරනා) - Saroja Hewawitharana(MP3_160K).mp3';  // ඔබේ සින්දු ගොනුවේ සබැඳිය මෙහි දමන්න
    
    // temporary <a> link එකක් සාදන්න

const link = document.createElement('a');
    link.href = songUrl;
    link.download = 'Athakin Darana (අතකින් දරනා) - Saroja Hewawitharana(MP3_160K).mp3';  // ගොනුවේ නම
    
    // Link එක ක්ලික් කිරීමෙන් බාගත කිරීම සිදු කරයි
    link.click();
}
//10th song
function downloadSongPihatuwak() {
    // සින්දු ගොනුවේ සබැඳිය
    const songUrl = 'songs/Pihatuwak Se (පිහාටුවක් සේ) - Feat. Themiya Thejan.mp3';  // ඔබේ සින්දු ගොනුවේ සබැඳිය මෙහි දමන්න
    
    // temporary <a> link එකක් සාදන්න

const link = document.createElement('a');
    link.href = songUrl;
    link.download = 'Pihatuwak Se (පිහාටුවක් සේ) - Feat. Themiya Thejan.mp3';  // ගොනුවේ නම
    
    // Link එක ක්ලික් කිරීමෙන් බාගත කිරීම සිදු කරයි
    link.click();
}