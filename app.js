function displayResults(data, query) {
    console.log('Displaying results - Data:', data);
    console.log('Displaying results - Query:', query);
    console.log('Is array?', Array.isArray(data));
    if (Array.isArray(data)) {
        console.log('Array length:', data.length);
    }
    
    let html = '';
    
    if (Array.isArray(data)) {
        if (data.length === 0) {
            // Empty array means no superhero found
            html = '<div class="error-message">SUPERHERO NOT FOUND</div>';
        } else if (query === '') {
            // Only show the list when search is empty
            html = '<div class="superhero-list">';
            data.forEach(alias => {
                html += '<div>- ' + escapeHTML(alias) + '</div>';
            });
            html += '</div>';
        } else {
            // If we get an array but there was a query, it means no match found
            html = '<div class="error-message">SUPERHERO NOT FOUND</div>';
        }
    } else {
        // Single superhero found
        html = `
            <div class="superhero-card">
                <h3 class="superhero-alias">${escapeHTML(data.alias)}</h3>
                <h4 class="superhero-name">A.K.A ${escapeHTML(data.name)}</h4>
                <p class="superhero-bio">${escapeHTML(data.biography)}</p>
            </div>
        `;
    }
    
    resultDiv.innerHTML = html;
}

