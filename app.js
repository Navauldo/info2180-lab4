document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', function() {
        console.log('Button clicked - making AJAX request...');
        
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'superheroes.php', true);
        
        xhr.onload = function() {
            console.log('Request completed. Status:', xhr.status);
            console.log('Full response:', xhr.responseText);
            console.log('Response length:', xhr.responseText.length);
            
            if (xhr.status === 200) {
                if (xhr.responseText.length === 0) {
                    alert('The response is empty!');
                } else {
                    alert('Response: ' + xhr.responseText);
                }
            } else {
                alert('Error: Status ' + xhr.status);
            }
        };
        
        xhr.onerror = function() {
            console.log('Request failed');
            alert('Request failed - check console for details');
        };
        
        xhr.send();
        console.log('Request sent...');
    });
});