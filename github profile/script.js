const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const profileDiv = document.getElementById('profile');

searchBtn.addEventListener('click', () => {
    const username = searchInput.value.trim();
    if (username !== '') {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('User not found');
                }
            })
            .then(data => {
                displayProfile(data);
            })
            .catch(error => {
                profileDiv.innerHTML = `<p>${error.message}</p>`;
            });
    } else {
        profileDiv.innerHTML = `<p>Please enter a username</p>`;
    }
});

function displayProfile(user) {
    const profileContent = `
        <img src="${user.avatar_url}" alt="${user.name}" style="width: 150px; height: 150px; border-radius: 50%;">
        <h2>${user.name}</h2>
        <p>${user.bio || 'No bio available'}</p>
        <p>Followers: ${user.followers}</p>
        <p>Following: ${user.following}</p>
        <p>Public Repos: ${user.public_repos}</p>
        <a href="${user.html_url}" target="_blank">View Profile</a>
    `;
    profileDiv.innerHTML = profileContent;
    profileDiv.classList.remove('hidden');
}
