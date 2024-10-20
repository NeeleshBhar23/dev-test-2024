// to Select the FAB button
const fabButton = document.querySelector('.fixed.bottom-8.right-8');

fabButton.addEventListener('click', async () => {
    try {
        // to Fetch the users from the API
        const response = await fetch('https://dummyjson.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // to Filter users who are older than 30
        const usersOver30 = data.users.filter(user => user.age > 30);
        
        // Log the filtered users to the console
        console.log(usersOver30);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
});
