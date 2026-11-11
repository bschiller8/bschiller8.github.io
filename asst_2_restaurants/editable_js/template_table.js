
/**
 * TABLE VIEW - STUDENTS IMPLEMENT
 * Display data in sortable rows - good for scanning specific information
 */

function orNotListed(value) {
  return value === '------' || value === 'N/A' || value === undefined ? 'Not listed' : value;
}

function showTable(data) {
  // TODO: Students implement this function
  // Requirements:
  // - Use a real HTML <table>, with <th> header cells and a <caption> saying what the table shows
  // - Include the 4-6 most useful fields
  // - Show "Not listed" instead of undefined when a value is missing
  // - Optional: add sorting
  /*html*/ 
    const tableHTML = data
    .map(
       /*html*/ 
      (inspection) => `

                <tr>
                    <td>
                        ${orNotListed(inspection.name)}
                    </td>
                    <td>
                        ${orNotListed(inspection.city)}
                    </td>
                    <td>
                        ${orNotListed(inspection.state)}
                    </td>
                    <td>
                        ${orNotListed(inspection.address_line_1)}
                    </td>
                </tr>


            `
    )

    .join("");


  return `
                <h2 class="view-title">📊 Table View</h2>

                <table class= "restaurant-table">
                    <caption>Restaurant Location Information</caption>
                    <thead>
                        <tr>
                            <th>Restaurant Name</th> 
                            <th>City</th>
                            <th>State</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableHTML}
                    </tbody>
                </table>
            `;
}

export default showTable;