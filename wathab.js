const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    toggleButton.innerHTML = body.classList.contains('light-mode') ? 
        '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('mouseover', function() {
        const platform = this.classList[1];
        let platformName;

        switch(platform) {
            case 'facebook':
                platformName = 'Facebook: Connect with friends and the world.';
                break;
            case 'twitter':
                platformName = 'Twitter: Join the conversation.';
                break;
            case 'instagram':
                platformName = 'Instagram: Share your moments.';
                break;
            case 'linkedin':
                platformName = 'LinkedIn: Connect professionally.';
                break;
            case 'pinterest':
                platformName = 'Pinterest: Discover and save creative ideas.';
                break;
            case 'snapchat':
                platformName = 'Snapchat: Share your snaps with friends.';
                break;
            case 'tiktok':
                platformName = 'TikTok: Create and share short videos.';
                break;
            case 'reddit':
                platformName = 'Reddit: Dive into anything.';
                break;
            case 'youtube':
                HTMLOptGroupElement = 'https://www.youtube.com/results?search_query=%D8%B7%D8%B1%D9%8A%D9%82%D9%87+%D8%A7%D8%B6%D8%A7%D9%81%D9%87+%D8%B1%D9%88%D8%A7%D8%A8%D8%B7+%D8%A7%D9%84%D9%89+vscode.';
                break;
            case 'whatsapp':
                platformName = 'WhatsApp: Chat with friends and family.';
                break;
            case 'discord':
                platformName = 'Discord: Chat and meet with communities.';
                break;
        }

        document.getElementById('info-card').innerHTML = `<h3>${platform.charAt(0).toUpperCase() + platform.slice(1)}</h3><p>${platformName}</p>`;
    });
});
