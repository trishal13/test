export default function json2html(data) {
    // Start the HTML table string with the table and headers
    let html = `<table data-user="adityav7541@gmail.com">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>`;
    
    // Loop through the data array and add each row to the table
    data.forEach(person => {
        html += `<tr>
                     <td>${person.Name || ''}</td>
                     <td>${person.Age || ''}</td>
                     <td>${person.Gender || ''}</td>
                 </tr>`;
    });
    
    // Close the table tags
    html += </tbody></table>;
    
    return html;
}
