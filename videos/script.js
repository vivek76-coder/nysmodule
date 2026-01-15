  // 🔥 VIDEO DATA - RGPV + Demo videos
  const videos = [
    { id: 'bGjtai-9uYg', title: 'How to Create Form in HTML | HTML Form Tags & Input Fields Explained (Beginner Friendly)', duration: '12min' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },{ id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    { id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },{ id: 'qz8RPcx_M_8', title: 'HTML Basic Layout Explained | website kaise banaye | How to Create Basic Layout in HTML', duration: '20min ' },
    
    { id: 'xaWdYbh4tH4', title: 'Motion Graphics (20min)', duration: '20min ' }
];

// Load sidebar videos
function loadVideos() {
    const videoList = document.getElementById('videoList');
    videos.forEach((video, index) => {
        const listItem = document.createElement('a');
        listItem.className = 'list-group-item list-group-item-action';
        listItem.innerHTML = `
            <div class="d-flex align-items-center">
                <i class="fas fa-play-circle me-3 text-primary fs-4"></i>
                <div>
                    <div>${video.title}</div>
                    <small class="text-muted">${video.duration}</small>
                </div>
            </div>
        `;
        listItem.addEventListener('click', () => playVideo(video.id, video.title, video.duration));
        videoList.appendChild(listItem);
    });
}

// 🔥 MAIN FUNCTION - Play video on sidebar click
function playVideo(videoId, title, duration) {
    // Update active state
    document.querySelectorAll('#videoList .list-group-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');

    // Update video player
    const player = document.getElementById('videoPlayer');
    player.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
                title="${title}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe>
    `;

    // Update video info
    document.getElementById('videoTitle').textContent = title;
    document.getElementById('videoDuration').textContent = duration;
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadVideos();
    // Set first video as active
    document.querySelector('#videoList .list-group-item').click();
});