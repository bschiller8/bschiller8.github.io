/**
 * CATEGORY VIEW - STUDENTS IMPLEMENT
 * Group data by categories
 */

function orNotListed(value) {
  return value === '------' || value === 'N/A' || value === undefined ? 'Not listed' : value;
}

function showCategories(data) {
  // Requirements:
  // - Group data by one meaningful field (category, city, inspection result, etc.)
  // - Show how many records are in each group, plus one other number per group
  //   (an average, a highest, a lowest)
  // - Show items within each group
  // - Make the groups easy to compare, and visually distinct from their items
  /*html*/

  const groups = {};
    data.forEach((inspection) => {
      const restaurant_category = orNotListed(inspection.category);

      if (!groups[restaurant_category]){ //a category's bucket should only be created the first time it is encountered. This checks whether it was encountered or not
          groups[restaurant_category] = [];
      }
      
      groups[restaurant_category].push(inspection);

    })

    console.log(groups)

    const categoryNames = Object.keys(groups);

    
    const categoriesHTML = categoryNames
    .map( //outer map for creating a section for each category
      (restaurant_type) => `
      <section class= "category-section">
        <h3 class= "category-header">${restaurant_type} : ${groups[restaurant_type].length} inspections</h3>
        <div class= "category-items">
        <p>Compliant Inspections: ${groups[restaurant_type].filter(
          (inspection) => inspection.inspection_results === "Compliant - No Health Risk"
        ).length}
        </p>
        <ul>
          ${groups[restaurant_type]
            .map( //nested map so that it creates a list item for each inspection in that category
              (inspection) => `
                <li class= "category-item">${orNotListed(inspection.name)}</li>

              `
            )
            .join("")}
        </ul>
        </div>
        </section>
      `
    )

    .join("");

  return `
    <h2 class="view-title">📂 Category View</h2>

    ${categoriesHTML}

    `;
}

export default showCategories;